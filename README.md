# mapathon-2026-urban-cooling-equity-pmr
Interactive GIS and remote sensing framework for mapping urban heat, vegetation, built-up intensity and cooling resources across Pune Metropolitan Region — Mapathon 2026.
# Urban Cooling Equity Index — Pune Metropolitan Region

### IIT Bombay FOSSEE Geospatial Mapathon 2026

An interactive GIS and Remote Sensing framework for examining the spatial relationship between urban heat, vegetation, built-up intensity and cooling resources across the Pune Metropolitan Region (PMR).

---

## Project Overview

Urban areas do not experience heat uniformly.

Differences in built-up surfaces, vegetation, water availability and land-surface temperature create spatial variations in urban thermal conditions.

This project develops an Urban Cooling Equity Index (UCEI) framework to identify and visualize areas experiencing greater combined environmental and thermal stress.

The project integrates satellite remote sensing, GIS-based spatial analysis and Google Earth Engine to transform multiple environmental indicators into an interactive WebGIS application.

---

## Study Area

**Pune Metropolitan Region (PMR), Maharashtra, India**

The study area is analyzed using a satellite-based spatial framework covering urban and surrounding areas within the defined study-region boundary.

---

## Objectives

The major objectives of the project are to:

1. Map Land Surface Temperature across the study area.
2. Assess vegetation distribution using NDVI.
3. Examine built-up intensity using NDBI.
4. Identify water-related cooling features using NDWI.
5. Analyze land-cover patterns using Dynamic World.
6. Develop a cooling-resource indicator.
7. Normalize environmental indicators.
8. Generate a preliminary Urban Cooling Equity Index.
9. Identify areas with different intervention-priority levels.
10. Develop an interactive Google Earth Engine visualization.

---

## Data Used

### Sentinel-2 Surface Reflectance

Sentinel-2 Surface Reflectance imagery was used for April–May 2026 analysis.

Derived indicators include:

- NDVI
- NDBI
- NDWI
- True-colour composite

### Landsat 8 & Landsat 9

Landsat Collection 2 Level-2 data were used to derive Land Surface Temperature for April–May 2026.

### Dynamic World

Google Dynamic World was used to obtain land-cover information for the study period.

### Study Area Boundary

A study-area boundary asset was used to clip the analysis to the Pune Metropolitan Region.

---

## Methodology

The workflow consists of the following major steps:

```text
Study Area Definition
        ↓
Satellite Data Collection
        ↓
Cloud / Quality Masking
        ↓
Image Composite
        ↓
NDVI
        ↓
NDBI
        ↓
NDWI
        ↓
Dynamic World Land Cover
        ↓
Land Surface Temperature
        ↓
Cooling Resource Indicator
        ↓
Heat Risk
        ↓
Built-up Risk
        ↓
Vegetation Deficit
        ↓
Urban Cooling Equity Index
        ↓
Priority Zone Classification
        ↓
Interactive WebGIS
