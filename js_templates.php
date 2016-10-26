<script id="jumbotron_slide_template" type="text/template" >

        <li class="jumbotron_li" data-id="{*= id *}" data-slide_index="{*= slideIndex *}" >

            <div class="jumbotron_carousel_wrapper" style="background-image: url('{*= imageUrl *}')">

                <div class="jumbotron_scrim_centerer" style="width:{*= centerColumnWidth *}px;"> <!-- keep the scrim area in the center-right regardless of resize -->

                      <div class="jumbotron_scrim_area" style="background: none repeat scroll 0 0 rgba({*= rbgScrimColor.r *}, {*= rbgScrimColor.g *}, {*= rbgScrimColor.b *}, {*= scrimOpacity *});">

                          <div class="jumbotron_scrim_image_holder">

                            <img src="{*= scrimImage *}" class="jumbotron_scrim_image" />

                          </div>

                          <div class="jumbotron_scrim_body">

                              {*= scrimBodyText *}

                          </div>

                          <div class="jumbotron_scrim_button_holder">

                            <a href="{*= clickAction *}" class="btn btn-block btn-lg btn-primary jumbotron_button_scrim">

                                 {*= scrimButtonText *}

                            </a>

                          </div>

                          <div class="jumbotron_scrim_bottom_shadow">

                          </div>

                       </div>

                 </div>

            </div>

        </li>

    </script>



    <script id="jumbotron_thumbnail_template" type="text/template" >

      <li class="jumbotron_thumb_li" data-id="{*= id *}" data-index="{*= index *}">

            &bull;

      </li>

    </script>



    <script id="jumbotron_visible_list_temp" type="text/template" >

        <ul id="{*= carouselName *}_list" class="jumbotron_list">



        </ul>

    </script>



    <script id="jumbotron_hidden_list_temp" type="text/template" >

        <ul id="{*= carouselName *}_list_slide_storage" style="display:none">



        </ul>

    </script>



    <script id="jumbotron_thumbnail_wrapper_template" type="text/template" >

        <div id="{*= carouselName *}_thumbs" class="jumbotron_carousel_thumbs" style="width: {*= centerColumnWidth *}">

          <div class="jumbotron_carousel_thumbs_positioner">

            <div class="jumbotron_carousel_thumbs_centerer" id="{*= carouselName *}_thumbnail_centerer">

                  <ul id="{*= carouselName *}_thumbs_list" class="jumbotron_thumbs_list">



                  </ul>

            </div>

          </div>

        </div>

    </script>



    <script id="jumbotron_buttons_template" type="text/template" >
        <a class="jumbotron_back_button jumbotron_button" id="{*= carouselName *}_back_button">
            <
        </a>

        <a class="jumbotron_forward_button jumbotron_button" id="{*= carouselName *}_forward_button">
            >
        </a>
    </script>

    <script id="jumbotron_list_holder_template" type="text/template" >
        <div id="{*= carouselName *}_list_holder" class="jumbotron_list_holder" style="{*= styleInfo *}">
        </div>
    </script>

    <script id="test_json_template" type="text/template" >
        <li>
            <img src="{*= image *}" />
            {*= name *}     
        </li>
    </script>

    <script id="test_json_template_parent" type="text/template" >
        LIST SAMPLE
        <ul>
          {*= listContents *}
        </ul>
    </script>










    