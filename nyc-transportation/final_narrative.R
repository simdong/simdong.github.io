library(tidyverse)
library(lubridate)

# MTA Brand Colors — Subway, SIR & ADA (mta.info/document/168976)
mta <- list(
  mta_blue    = "#0062CF",
  isa_blue    = "#0078C6",
  navy        = "#08179C",
  teal        = "#008EB7",
  light_green = "#009952",
  dark_green  = "#799534",
  orange      = "#EB6800",
  yellow      = "#F6BC26",
  red         = "#D82233",
  brown       = "#8E5C33",
  purple      = "#9A38A1",
  grey        = "#7C858C"
)

monthly <- read_csv("MTA_Monthly_Ridership___Traffic_Data__Beginning_January_2008_20260405.csv") %>%
  mutate(
    date      = ymd(Month),
    ridership = as.numeric(str_remove_all(Ridership, ","))
  )

# Chart 1
modes <- monthly %>%
  filter(Agency %in% c("Subway", "NYCT Bus", "LIRR", "MNR"),
         year(date) >= 2018)

recovery <- ggplot(modes, aes(x = date, y = ridership, color = Agency)) +
  geom_line(linewidth = 0.6) +
  geom_vline(xintercept = as.Date("2020-03-01"),
             linetype = "dashed", color = mta$red, linewidth = 0.35) +
  scale_color_manual(
    values = c(
      "Subway"    = mta$mta_blue,
      "NYCT Bus"  = mta$orange,
      "LIRR"      = mta$light_green,
      "MNR"       = mta$brown
    )
  ) +
  scale_y_continuous(labels = scales::comma) +
  labs(
    title = "NYC transit ridership by mode, before and after COVID-19",
    subtitle = "Monthly ridership by MTA mode",
    x = NULL, y = "Monthly riders", color = NULL,
    caption = "Source: MTA Open Data. Colors: MTA Brand Colors (mta.info/document/168976)."
  ) +
  theme_minimal()
recovery

# Chart 2 — Yellow #F6BC26; FHV = navy #08179C (sheet). For black FHV use "#000000".
tlc <- read_csv("data_reports_monthly.csv") %>%
  mutate(
    date = ym(`Month/Year`),
    trips = as.numeric(str_remove_all(`Trips Per Day`, ","))
  ) %>%
  filter(`License Class` %in% c("Yellow", "FHV - High Volume"),
         year(date) >= 2018)

taxi <- ggplot(tlc, aes(x = date, y = trips, color = `License Class`)) +
  geom_line(linewidth = 0.6) +
  geom_vline(xintercept = as.Date("2020-03-01"),
             linetype = "dashed", color = mta$red, linewidth = 0.35) +
  scale_color_manual(
    values = c(
      "Yellow"            = mta$yellow,
      "FHV - High Volume" = mta$mta_blue
    )
  ) +
  scale_y_continuous(labels = scales::comma) +
  labs(
    title = "NYC taxi and rideshare trips before and after COVID-19",
    subtitle = "Average daily trips by license class, 2018–2025",
    x = NULL, y = "Average daily trips", color = NULL,
    caption = "Source: NYC Taxi and Limousine Commission"
  ) +
  theme_minimal()
taxi

# Chart 3
wfh <- read_csv("acs_b08006_nyc_2019_2024.csv") %>%
  mutate(
    year = as.integer(year),
    series_type = "Observed (ACS 1-year)"
  )

wfh_2020_proxy <- tibble(
  year = 2020L,
  geography_name = "New York City (5-county sum)",
  geography_id = "NYC_5_COUNTIES",
  workers_total_est = NA_real_,
  worked_from_home_est = NA_real_,
  worked_not_from_home_est = NA_real_,
  wfh_share = 0.075729,
  workers_total_moe_sum = NA_real_,
  worked_from_home_moe_sum = NA_real_,
  source_table = "ACSDT5Y2020.B08006 (proxy)",
  series_type = "2020 proxy (ACS 5-year)"
)

wfh_plot <- bind_rows(wfh, wfh_2020_proxy) %>%
  mutate(
    wfh_pct = 100 * wfh_share,
    year = factor(year, levels = sort(unique(year)))
  ) %>%
  arrange(as.integer(as.character(year)))

remote <- ggplot(wfh_plot, aes(x = year, y = wfh_pct, fill = series_type)) +
  geom_col(width = 0.65) +
  geom_text(aes(label = paste0(round(wfh_pct, 1), "%")),
            vjust = -0.4, size = 3.5) +
  scale_fill_manual(values = c(
    "Observed (ACS 1-year)"   = mta$mta_blue,
    "2020 proxy (ACS 5-year)" = mta$grey
  )) +
  scale_y_continuous(
    labels = scales::label_percent(scale = 1),
    expand = expansion(mult = c(0, 0.08))
  ) +
  labs(
    title = "Working from home rose after COVID-19 and remained above pre-pandemic levels",
    subtitle = "NYC workers working from home (ACS B08006)",
    x = NULL, y = "Share of workers working from home", fill = NULL,
    caption = "Source: U.S. Census ACS B08006. 2019, 2021–2023 are ACS 1-year; 2020 is a 5-year proxy (2016–2020 pooled)."
  ) +
  theme_minimal()
remote

# Chart 4 — same stepped ramp; top stop = MTA Blue #0062CF (not logo #0039A6)
dow <- c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")

h1 <- read_csv("crz-jan-june.csv") %>%
  mutate(
    hour = as.integer(hour_of_day),
    day_of_week = factor(day_of_week, levels = dow),
    entries = as.numeric(total_entries)
  )

h2 <- read_csv("crz-july-dec.csv") %>%
  mutate(
    hour = as.integer(hour_of_day),
    day_of_week = factor(day_of_week, levels = dow),
    entries = as.numeric(total_entries)
  )

full_2025 <- bind_rows(h1, h2) %>%
  group_by(hour, day_of_week) %>%
  summarise(entries = sum(entries), .groups = "drop")

crz_heatmap <- ggplot(full_2025, aes(x = hour, y = day_of_week, fill = entries)) +
  geom_tile(color = "white", linewidth = 0.2) +
  scale_x_continuous(breaks = seq(0, 23, 3), expand = c(0, 0)) +
  scale_fill_stepsn(
    n.breaks = 5,
    colours = c("#E8F2FC", "#C5DDF5", "#8FB8E8", "#4A90D9", mta$mta_blue),
    labels = scales::comma
  ) +
  labs(
    title = "Congestion relief zone entries follow a workweek rhythm",
    subtitle = "Total entries by hour and weekday, 2025 (Jan–Jun + Jul–Dec combined)",
    x = "Hour of day (0 = midnight)",
    y = NULL,
    fill = "Entries",
    caption = "Source: NYS Open Data, MTA CRZ vehicle entries (t6yz-b64h). Each cell sums both half-year extracts."
  ) +
  theme_minimal()

crz_heatmap