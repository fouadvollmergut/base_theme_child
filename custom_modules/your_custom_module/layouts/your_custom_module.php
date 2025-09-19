<?php
  $seoPosition = optionGet('seo-position');
  $animation = optionGet('animation');
?>

<div class="subgrid">
  <div class="content--text col-w6p1" <?php if ($animation) echo 'data-aos="fade-down"'; ?>>
    <div class="textbox">
      <?php if (contentCheck('subline')): ?>
        <?php contentCreate('subline', 'span/text', 'auto', 'subline'); ?>
      <?php endif; ?>

      <?php if (contentCheck('headline')): ?>
        <?php contentCreate('headline', $seoPosition . '/text', 'auto', 'h1'); ?>
      <?php endif; ?>
    </div>
    
    <div class="buttonbox">
      <?php if (contentCheck('button')): ?>
        <?php contentCreate('button', 'buttongroup'); ?>
      <?php endif; ?>
    </div>
  </div>
</div>