# hide_n_search

This is a Drupal 8 module that hides the default search bar and replaces it with a toggle button. It is very lightweight because it reuses all the icons that come with the Bootstrap 3 parent theme for Drupal 8. 

To install simply download or clone this into your modules folder and then activate the module in Drupal. Once activated
a new block will be available in the Place Block list of your site. You have to put this block below the default 'search' block (NOT the 'search form' block).
Search block inside the Navigation region. You can then install your Main Navigation block in the Navigation (collapsible) region.

The CSS style of this block was specifically created for placing it inside the Navigation region of a Bootstrap 3 template.
You can create new style rules in your theme's stylesheet to override this module's stylesheet, you probably need to use the
'!important' rule to force the override.
