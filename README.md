# hide_n_search
A Drupal 8 module that hides search bar and replaces it with a magnifying glass icon. This was created so that the
default Drupal 8 search bar can be toggled to appear and disappear by clicking on the magnifying glass icon.

To install simply download or clone this into your modules folder and then activate the module in Drupal. Once activated
a new block will be available in the Place Block list of your site. You have to put it below the default
Search block inside the Navigation region.

The CSS style of this block was specifically created for placing it inside the Navigation region of a Bootstrap 3 template.
You can create new style rules in your theme's stylesheet to override this module's stylesheet, you probably need to use the
'!important' rule to force the override.
