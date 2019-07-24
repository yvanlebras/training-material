---
layout: tutorial_hands_on

title: Estimating the temporal evolution of population studied in the french STOC (Suivi temporel des oiseaux communs, or temporal tracking of common birds)

zenodo_link: https://doi.org/10.5281/zenodo.3339190
questions:
- This tutorial allow to estimate the temporal evolution of population not only of the french STOC but also of any species with a protocol producing the same kind of data.
- None except modifying the name of your data file and the name of the column of your data file.
objectives:
- Estimate the temporal evolution of population and obtain a graphical visualization.
- Estimate the quality of the calculation by the model.

time_estimation: 1H (depending of the size of the dataset, the 4th step could much more long)
key_points:
- As always, the calculation by the model depends on the quality of the input data. The model will be more accurate with more data.
- Keep in mind that the conclusion of the analysis will also depends on the number of year you have in your data set. Some species have cyclical population evolution, and your data may not cover the entire cycle. For instance, you may observe a decrease while it is only temporary. Be sure to have sufficient information on species ecology before concludes.  
- Also, keep in mind that you need relatively large amount of data with that kind of models (generalized linear model and specification)

contributors:
- Byguel
- sbenateau

---


# Introduction
{:.no_toc}

<!-- This is a comment. -->

This workflow allow to estimate the temporal evolution of population not only of the french STOC but also of any species with a protocol producing the same kind of data.
The protocol of the Stoc consist in estimating bird abundance from bird songs 2 sampling periods per year (between april the 9th may and between the 9th may and mid june) in a plot, a square of 2 square meter, divided in 10 clew or sampling points of 5 minutes.
More information can be found for french speaking person at this adress: https://www.vigie-plume.fr/
In order to analyze these data, the maximum of the abundance per species between the two samplings periods for each sampling point is taken and summed by species, by plot and by year.
We obtain and will use a table with four variables, i.e. the year, the plot ID, the species name or ID, and the abundance. You can hence a priori analyze temporal trend of any data with the same structure.
This table will be the starting point.

> ### Agenda
>
> In this tutorial, we will cover:
>
> 1. TOC
> {:toc}
>
{: .agenda}

# Get data

<!-- In the tools list at the left side, you will find get or load data. You can also click on the green icon on the top of this tools list.
You can upload the data file with different option, from an URL or directly from your computer. USE THE CLASSIC IMPORT TODO : SB-->
The file of the STOC data can be extracted from the database by demand :romain.lorrilliere@mnhn.fr

**IMPORTANT**: the two next step may be skipped if you already have a file with zero counts and without absent and low abundance species. In that case go directly to "Analysis of temporal evolution of each species population".

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
>    https://zenodo.org/api/files/c76589fb-c54b-4b3b-9642-489d15063c45/data_FrenchBBS_squarre_dataSTOCallSp_France_trend_2001_2017_ALAARV-PARCAE_2001_2018.txt
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

# Data pre-processing


## Adding zero's

Once the data are uploaded, this step consists in reshaping the data for the next steps of the STOC analyzes by adding zero count to sites that are in the dataset, for species having no count data for those sites.
This tool also modify the shape of the table with one column for each species abundance instead of having one column for the species name and one column for the abundance, hence reducing the number of line, the plots being no more repeated for each species.

> | Site | Year | ALAARV | PARCAE  | Sps name 3  |
> |----------------------------------------------|
> | 26776| 2001 | 2      | 0       | 0           |
> | 26778| 2001 | 3      | 0       | 2           |
> | 26778| 2002 | 0      | 1       | 0           |
{: .matrix}

> ### {% icon hands_on %} Hands-on: Task description
>
> 1. **Preprocess population data** {% icon tool %} with the following parameters:
> Select the uploaded data
>    {: .comment}
>
{: .hands_on}

## Filtering absent and low abundance species

The second step of the preprocessing consists in filtering absent species or with low abundance, i.e. species being sampled not enough number of year in order to perform the statistical analyses.
This step also consists in reshaping the data for the next and final step of the STOC analyzes recreating one column for the species name or ID and one column with the abundance instead of one column for each species abundance.

> ### {% icon hands_on %} Hands-on: Task description
>
> 1. **Filter species** {% icon tool %} with the following parameters:
> Select the preprocessed data and click to launch the tool.
>
{: .hands_on}

You obtain one data file with one column for the year, one for the plot ID, one column for the species name or ID and one for the abundance.

> | Site | Year | Species | Abund  |
> |--------------------------------|
> | 26776| 2001 | ALAARV  | 2      |
> | 26778| 2001 | ALAARV  | 3      |
> | 26778| 2002 | PARCAE  | 1      |
> | 26778| 2001 | PARCAE  | 0      |
{: .matrix}


# Analysis of temporal evolution of each species

This last step consists in analysis the temporal of each species by fitting two glm of that form: abundance = year + plot, with plot as factor, one model with year as a factor for graphical output, and one model with year as continuous numeric variable.
As an option, you can choose to calculate or not the confidence interval (IC).

> ### {% icon hands_on %} Hands-on: Task description
>
> 1. **Estimate temporal population evolution** {% icon tool %} with the following parameters:
>
{: .hands_on}

You obtain one png file per species with 3 figures, from top to bottom, one of the variation of the predicted abundance, one of occurence which is the number of the site where the species is observed in light green and the total number of site in dark green, and one with the variation of the raw abundance.
The highest figure give an idea of the direction of the variation and should roughly match the raw data, the lowest figure. If the two figures do not roughly match, this indicates a bad fit of the model. The number indicated on the top of the figure corresponds to the slope with the IC of the slope if they are calculated.  

If the IC are equivalent or bigger than the slope this indicate a low statistical power. If the slope is close to zero or with the addition of the IC, the interval contains zero, this indicates no population variation or not enough statistical power to say it. If calculated, the IC on the figure give an idea of the strength of the analysis i.e. the more the IC are great on the figure and the less the strength of the analysis is important.
<!--
![Alternative text](../../images/image_name "Graphical output of the temporal analysis of population evolution")
-->

You also obtain two files with the statistical output of the model with annual variation analysis and the model with the analysis on the whole period. The estimate (or trends in the table) corresponds to the regression coefficients of the relationship, a positive value indicates an increase while a negative value indicates a decrease.
These two files contains information on model fit allowing to evaluate the strength of the analysis (with the standard error for instance) and the goodness of fit of the model (via the R� for instance).

<!--
![Alternative text](../../images/image_name "Numerical output of the tamporal analysis of population evolution")
-->

# Conclusion
{:.no_toc}

You know now how to compute temporal population evolution
