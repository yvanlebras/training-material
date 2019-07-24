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
The file with the species name or ID and traits for the STOC (version 2019 and before) is already available in Galaxy. However you can upload your own trait database.

**IMPORTANT**: You should not have any zero in your database because this will biaised the calculation of the mean.


<!-- do you have the figure linked ? TODO : BY
![Example of the dataset]("This is the general format of the data you should upload (site in the STOC is thus called carre):")
> | Site | Year | Species | Abund  |
> |--------------------------------|
> | 26776| 2001 | ALAARV  | 2      |
> | 26778| 2001 | ALAARV  | 3      |
> | 26778| 2002 | PARCAE  | 1      |
{: .matrix} -->  

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

# Title of the section usually corresponding to a big step in the analysis

It comes first a description of the step: some background and some theory.
Some image can be added there to support the theory explanation:

![Alternative text](../../images/image_name "Legend of the image")

The idea is to keep the theory description before quite simple to focus more on the practical part.

***TODO***: *Consider adding a detail box to expand the theory*

> ### {% icon details %} More details about the theory
>
> But to describe more details, it is possible to use the detail boxes which are expandable
>
{: .details}

A big step can have several subsections or sub steps:


## Sub-step with **Preprocess population data**

> ### {% icon hands_on %} Hands-on: Task description
>
> 1. **Preprocess population data** {% icon tool %} with the following parameters:
>
>    ***TODO***: *Check parameter descriptions*
>
>    ***TODO***: *Consider adding a comment or tip box*
>
>    > ### {% icon comment %} Comment
>    >
>    > A comment about the tool or something else. This box can also be in the main text
>    {: .comment}
>
{: .hands_on}

***TODO***: *Consider adding a question to test the learners understanding of the previous exercise*

> ### {% icon question %} Questions
>
> 1. Question1?
> 2. Question2?
>
> > ### {% icon solution %} Solution
> >
> > 1. Answer for question1
> > 2. Answer for question2
> >
> {: .solution}
>
{: .question}

## Sub-step with **Filter species**

> ### {% icon hands_on %} Hands-on: Task description
>
> 1. **Filter species** {% icon tool %} with the following parameters:
>
>    ***TODO***: *Check parameter descriptions*
>
>    ***TODO***: *Consider adding a comment or tip box*
>
>    > ### {% icon comment %} Comment
>    >
>    > A comment about the tool or something else. This box can also be in the main text
>    {: .comment}
>
{: .hands_on}

***TODO***: *Consider adding a question to test the learners understanding of the previous exercise*

> ### {% icon question %} Questions
>
> 1. Question1?
> 2. Question2?
>
> > ### {% icon solution %} Solution
> >
> > 1. Answer for question1
> > 2. Answer for question2
> >
> {: .solution}
>
{: .question}

## Sub-step with **Estimate temporal population evolution**

> ### {% icon hands_on %} Hands-on: Task description
>
> 1. **Estimate temporal population evolution** {% icon tool %} with the following parameters:
>
>    ***TODO***: *Check parameter descriptions*
>
>    ***TODO***: *Consider adding a comment or tip box*
>
>    > ### {% icon comment %} Comment
>    >
>    > A comment about the tool or something else. This box can also be in the main text
>    {: .comment}
>
{: .hands_on}

***TODO***: *Consider adding a question to test the learners understanding of the previous exercise*

> ### {% icon question %} Questions
>
> 1. Question1?
> 2. Question2?
>
> > ### {% icon solution %} Solution
> >
> > 1. Answer for question1
> > 2. Answer for question2
> >
> {: .solution}
>
{: .question}


## Re-arrange

To create the template, each step of the workflow had its own subsection.

***TODO***: *Re-arrange the generated subsections into sections or other subsections.
Consider merging some hands-on boxes to have a meaningful flow of the analyses*

# Conclusion
{:.no_toc}

Sum up the tutorial and the key takeaways here. We encourage adding an overview image of the
pipeline used.
