---
layout: tutorial_hands_on

title: Estimating the temporal evolution of community indicators measured with the french STOC (Suivi temporel des oiseaux communs, or temporal tracking of common birds)
zenodo_link: https://doi.org/10.5281/zenodo.3351375
questions:
- This tutorial allow to compute the indicator csi, cti and ctri per year and site, wich also correspond to community weighted means (CWM), and analyse their temporal evolution trend and create graphical vizualisation.
- Which bioinformatics techniques are important to know for this type of data?
objectives:
- Estimate the temporal evolution of indicators or CWM and obtain a graphical visualization.
- Estimate the quality of the calculation by the model.
time_estimation: 1H
key_points:
- As always, the calculation by the model depends on the quality of the input data. The model will be more accurate with more data.
- Keep in mind that the conclusion of the analysis will also depends on the number of year you have in your data set. Be sure to have sufficient information on species responses to environmental changes before concludes.  
contributors:
- Byguel
- sbenateau

---


# Introduction
{:.no_toc}

<!-- This is a comment. -->

This tool compute the indicator csi, cti and ctri per year and site, wich also correspond to community weighted means (CWM), and analyse their temporal evolution trend and create graphical vizualisation.
Csi, cti and ctri are respectively the "community specialization index", the "community thermic index", and the "community trophic index", that measured the mean habitat specialization of communities, mean thermic preference of communities, and the mean trophic level of communities.
As indicator you can thus use also any traits, compute their CWM and analyze their temporal variation.

This tool allows to estimate the temporal evolution of community indicators not only of the french STOC but also of any species with a protocol producing the same kind of data.
The protocol of the Stoc consists in estimating bird abundance from bird songs 2 sampling periods per year (between april the 9th may and between the 9th may and mid june) in a plot, a square of 2 square meter, divided in 10 clew or sampling points of 5 minutes.
More information can be found for french speaking person at this adress: https://www.vigie-plume.fr/
In order to analyze these data, the maximum of the abundance per species between the two samplings periods for each sampling point is taken  and summed by species, by plot and by year.
We obtain a table with four variables, i.e. the year, the plot ID, the species name or ID, and the abundance. You can hence a priori analyze temporal trend of any data with the same structure.

> ### Agenda
>
> In this tutorial, we will cover:
>
> 1. TOC
> {:toc}
>
{: .agenda}

# Title for your first section

Give some background about what the trainees will be doing in the section.

Below are a series of hand-on boxes, one for each tool in your workflow file.
Often you may wish to combine several boxes into one or make other adjustments such
as breaking the tutorial into sections, we encourage you to make such changes as you
see fit, this is just a starting point :)

Anywhere you find the word "***TODO***", there is something that needs to be changed
depending on the specifics of your tutorial.

have fun!

## Get data

The file of the STOC data can be extracted from the database by demand: romain.lorrilliere@mnhn.fr
The file with the species name or ID and traits for the STOC (version 2019 and before) is already available in Galaxy. However you can upload your own trait database.

**IMPORTANT**: You should not have any zero in your database because this will biaised the calculation of the mean.

> | Site | Year | Species | Abund  |
> |--------------------------------|
> | 26776| 2001 | ALAARV  | 2      |
> | 26778| 2001 | ALAARV  | 3      |
> | 26778| 2002 | PARCAE  | 1      |
{: .matrix}


> ### {% icon hands_on %} Hands-on: Data upload
>
> 1. Create a new history for this tutorial
> 2. Import the files from [Zenodo]() or from the shared data library
>
>    ```
>    https://zenodo.org/api/files/e4944d3d-78a2-49fc-94be-bf3fa62bb88a/STOCindicatorsExample.tabular
>    ```
>
>    {% include snippets/import_via_link.md %}
>    {% include snippets/import_from_data_library.md %}
>
> 3. Rename the datasets
> 4. Check that the datatype
>
>    {% include snippets/change_datatype.md datatype="datatypes" %}
>
> 5. Add to each database a tag corresponding to ...
>
>    {% include snippets/add_tag.md %}
>
{: .hands_on}

# Analysis of temporal evolution of communities indicators

This last step consists in analysis the temporal of indicators by fitting two kind of model of that form (depending on your choice):
- A general additive model (GAM) with year as continuous numeric or factor variable, smooth effect on coordinate, random effect on the plot, and an autocorrelation structure on the time:
indic = year+s(longitude_grid_wgs84,latitude_grid_wgs84) + random= 1|id_plot + autocorrelation=year
- a generalized linear mixture model (GLMM) with year as continuous numeric or factor variable, and a random effect on the plot
indic = year + random=1|id_plot
The GAM is more precise but more time consuming as the calculation algorythm is slower than one used for the GLMM and as more parameters should be estimated by the model.

The smooth plot if choosen, came from predicted value from this simplier model: indic = s(year),random= 1|id_plot,autocorrelation=year

As another option, you can choose to calculate or not the confidence interval (CI).

> ### {% icon hands_on %} Hands-on: Task description
>
> 1. **Temporal trend indicator** {% icon tool %} with the following parameters:
>    - {% icon param-file %} *"Stoc filtered input"*: Uploaded dataset file {% icon tool %}
>    - *"Specify advanced parameters"*: `Yes, see full parameter list.`
>    - *"Smooth visualisation."*: Yes
>    - *"Chose the model method"*: GlmmTMB
>
{: .hands_on}

## Output files
With the GAM or GLMM option, you obtain 1 png file which is a figure of the variation of the predicted indicator from the model with year as factor variable and 2 tables with the statistical output of the model with annual variation analysis and the model with the analysis on the whole period.
With the smooth and the GAM option, you obtain one more file for the smoothed plot, and one more file with the simulated data to make the figure.
The figures give an idea of the direction of the variation.

<!-- ![Alternative text](../../images/image_name "Graphical output of the temporal analysis of indicator evolution") -->

The tables contain the slope with CI of the slope if they are calculated. If the CI are equivalent or bigger than the slope this indicate a low statistical power. If the slope is close to zero or with the addition of the CI, the interval contains zero, this indicates no variation or not enough statistical power to say it. If calculated, the CI on the figure give an idea of the strength of the analysis i.e. the more the CI are great on the figure and the less the strength of the analysis is important.
The estimate (or coef) corresponds to the regression coefficients of the relationship, a positive value indicates an increase while a negative value indicates a decrease.  
The two tables contains information on model fit allowing to evaluate the strength of the analysis (with the standard error for instance) and the goodness of fit of the model (via the R� for instance).

<!-- ![Alternative text](../../images/image_name "Numerical output of the tamporal analysis of indicator evolution") -->


# Conclusion
{:.no_toc}

You know now how to compute temporal indicator evolution
