<?php
namespace Drupal\hide_n_search\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a hidden search input area.
 * 
 * @Block(
 *  id = "hide_n_search_block",
 *  admin_label = @Translation("Hide N Search"),
 *  category = @Translation("Custom"),
 * )
 */

class HideNSearchBlock extends BlockBase {
    /**
     * {@inheritdoc}
     */
    public function build() {
        return array(
            '#type' => 'inline_template',
            '#template' => '<button id="hide-n-search-button" class="btn btn-primary"><span class="sr-only">Search</span><span class="icon glyphicon glyphicon-search" aria-hidden="true"></span></button><button id="hide-n-search-button-x" class="btn btn-default">X</button>',
            '#theme' => 'hide_n_search',
            '#attached' => array(
                'library' => array(
                    'hide_n_search/hide_n_search',
                ),
            ),
        );
    }
}

