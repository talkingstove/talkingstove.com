<!doctype html>

<html lang="en" prefix="og: http://ogp.me/ns#">

<head>

    <!-- Basic Page Needs -->

    <meta charset="utf-8">

    <title>Ryan Moore : Javascript architect | software engineer</title>

    

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link rel="icon" href="theme/img/favicon.png" type="image/png">



    <!-- CSS -->

    <link rel="stylesheet" href="theme/css/normalize.css">

    <link rel="stylesheet" href="theme/css/grid.1140px.css">

    <link rel="stylesheet" href="theme/css/font-awesome.min.css">

    <link rel="stylesheet" href="theme/css/jquery.vegas.min.css">

    <link rel="stylesheet" href="theme/css/isotope.css">

    <link rel="stylesheet" href="theme/css/layout.css">

    <link rel="stylesheet" href="theme/css/media.css">

    <link href="css/rm.css" rel="stylesheet">

    <link href="css/jumbotron/jumbotron.css" rel="stylesheet">



    <!-- jQuery -->

    <script src="theme/js/jquery-2.1.0.min.js"></script>

</head>

<body>

    <!-- Page Loader -->

    <div id="pageLoader">

        <div class="loader">

            <img src="theme/img/loader.gif" alt="Loading...">

        </div>

    </div>



    <!-- Welcome -->

    <section class="welcome" id="welcome">

        <!-- Images for Slideshow -->

        <div class="images" data-overlay="theme/img/vegas/01.png">

            <img src="theme/img/sl_hills.jpg" alt="N">

            <!--<img src="theme/img/demo/slider/2.png" alt="VOICE">

            <img src="theme/img/demo/slider/3.png" alt="HOME">

            <img src="theme/img/demo/slider/4.png" alt="PLACE">-->

        </div>

        <!-- Navigation Arrows -->

        <div class="slider arrows">

            <a href="#" class="prev"></a>

            <a href="#" class="next"></a>

        </div>

        <!-- Slider Content -->

        <div class="slider content">

            <!--<h2>Create <span>your</span> own</h2>-->

            <h1>-</h1>

            <p>Nagisa javascript framework</p>

            <a href="#about" class="button slider scroll">ABOUT NAGISA</a>

            <!-- Navigation circles -->

            <div class="slides clearfix"></div>

        </div>

    </section>

   

    <!-- Header -->

    <header class="main">

        <!-- Logo -->

        <div class="logo">

            <a href="#welcome" class="scroll">

                <div style="padding-top:20px;">

                    TOP

                </div>

            </a>

        </div>

        <!-- Navigation -->

        <nav class="clearfix">

            <ul>

                <li><a href="/">HOME</a></li>

                <li><a href="#examples" class="scroll">EXAMPLES</a></li>

                <li><a href="#explore" class="scroll">EXPLORE</a></li>

            </ul>

        </nav>

        <!-- Menu icon for Phones -->

        <span class="menu" id="phonesMenu"></span>

    </header>



    <!-- About Us -->

    <section class="about offsetTop offsetBottom" id="about">

        <!-- Container -->

        <div class="container12">

            <!-- Header -->

            <header class="centered">

                <h1>About <span>Nagisa</span></h1>

                <span class="description">Javascript framework (work-in-progress)</span>

            </header>

            <!-- Section content -->

            <div class="column16 nagisa-body" >

                <!-- Text -->

                

                <!--<p class="centered">

                    I've been a professional web developer since 1999. I've worked in almost every language there is that gets used on the client side, and quite a few of the major ones on the backend. My current speciality is Javascript architecture and custom Javascript framework design. I'm more into simplicity than complexity for its own sake, and more into using the right tools for the job than jumping on buzzwords or finding "solutions" in search of a problem. I'm not going to sell a bunch of snake oil I got from googling "hot new frontend frameworks."

                </p>

                <p class="centered">

                    Architecting code is an artistic act, or should be, and it requires a creative vision like any other type of art. This is not (completely) an affectation, but rather a statement about an often-overlooked aspect of what makes architectures work or not. It's the difference between really building something from the ground up and knowing it will work (and being able to explain why), and taping together the latest trendy libraries and hoping it works. It's the difference  between bug fixes a few months down the road that take five minutes and bug fixes that take three days -- between code that people want to work with and extend, and code that people want to set on fire. We're all hopefully well past the point where "getting it work" is something to be proud of. I strive to create systems that work, are scalable, pleasent to work with, easy for almost anyone to learn, and of the exact minimum amount of complexity needed to do what they need to do. 

                </p>

                <p class="centered">

                    Email: talkingstove[at]gmail

                </p>

                <p class="centered">

                    <a class="button" href="https://dl.dropboxusercontent.com/u/4072165/resume_ryan_moore.doc">Resume [doc]</a>

                </p>

            -->

                <!--BEGIN NAGISA INFO -->

                

                <p style="padding-bottom:40px; text-align: center">

                    <a href="https://github.com/talkingstove/nagisa" class="button normal">Download source</a> 

                    <br/>

                    [work-in-progress, for sample purposes only]

                </p>



             

                <div id="nagisa_blog">

                    <p class="centered">

                     Nagisa is a Javascript framework built on top of jQuery and Underscore. 

                   

                        It's named after a character from the anime "Clannad."

                   

                        You could say it's a response to the suddenly ubiquitous frameworks like Backbone, Ember, and Angular, but it actually developed organically as a way to do things I needed to do as I was in process of re-architecting some fairly large applications.

                </p>

                <p class="centered">

                         It's not: <br/>

                         - Complete. You can't really use it on your own quite yet, but have patience.<br/>

                        - Perfect. I’m sure there are flaws I haven't thought of and anyway, everything is subjective and there are a hundred "right" ways to do anything. This is a way that I think makes sense, and I have seen through direct experience how easy, enjoyable, fast and scalable it can make development.<br/>

                        - Just for me, or hardcore JS developers. The idea is that anyone with basic programming skills, including developers who mostly work on backend, can use this without a huge learning curve. Nagisa was specifically created to let everyone on the team be able to use JS in a consisent, productive and fun manner.

                </p>

                    

                    <!--<h4>

                        But:

                    </h4>

                    <p>

                        What was bothering me about all the new frameworks (besides the fact that they being forced on me by people that weren't frontend programmers because they had "buzz" or came up high on google) is that I couldn't figure out what problem they were solving. They seem very much to be solutions in search of problems. They create an incredible amount of overhead and programmer struggle for... what?

                    </p>

                    <p>

                        At the root is the idea of MVC. We all know it, we all agree it's a good thing. I worked in Flex for over three years, and wrote my own MVC framework. In Flex everything is Actionscript 3, including the view. It's a group of classes that compiles much like a Java project.

                    </p>

                    <p>

                        Javascript is not like that. By any traditional definition the “view” is just that- what you view on the screen. In a Javascript app, that is *not* Javascript- it's HTML. So why are we creating "View classes" with all kinds of logic in them? That's a Controller.

                    </p>

                    <p>

                        There's also the issue of the appropriate force necessary to solve the problem. Take a very simple JS app- say you have a list of names, and when you click on one it links to a new page based on the ID. All you need is a template:

                        <div class="code-sample">

                            [li data-id={*= id *} class="”"profile_link"]Ryan[/li]

                        </div>

                        <p>

                            That's going to appear on your screen. That makes it a View. It contains some data, the ID. That also makes it a model. Now we need a Controller.

                        </p>

                        <div class="code-sample">

                             $(".profile_link").on(‘click’, function() { //do stuff based on id });

                        </div>

                        <p>

                            That's your Controller. The end. Unless you really want to create a bunch of classes and dozens to hundreds of lines of code in the service of forcing a square peg into a round-shaped MVC concept.

                        </p>

                    </p>

                    <p>

                          Of course when things get more complicated, we don't want to put data on the DOM like that. But the point is that different problems have different solutions. The point of Nagisa is to give people the tools they need to do things, and to let them do things more easily, more generally and with more choice. To my eye, the other frameworks make you do things in more difficult and verbose ways, more specifically (they marry code to "views" or regions of the screen), and they provide only one "right" way to do it.

                    </p>

                    <p>

                           Javascript, with the addition of jQuery and the templating language of your choice, is an incredibly powerful tool already. I don't think we need to re-invent event handling, or HTML tags, or "for" loops. You can re-architect every year with the latest buzzword framework, but ultimately I believe it will cost you. My idea is, rather than trashing the old toys every year and spending a ton of time learning to play with the newest, shiniest ones<super>*</super>, we should play with the ones we have.

                           <p class='footnote'>

                                <em>

                                    *I’m aware that claiming to not be interested in what's "new" or "hot" can be a death sentence in certain tech cliques. That’s fine with me. I've never had much interest in complexity for its own sake, or in things that don't solve any problem (except maybe "how can I, the developer, get on the front page of Google.") My (somewhat immodest) assertion would be that my "problem first, solution second" approach is actually itself quite new, and that its time will come.

                                </em>

                            <p>

                    </p>



                    <h4>

                        Public vs. Private

                    </h4>



                    <p>

                        A client-side application is, by nature, completely public. You deliver an instance the code to the end user's computer, it becomes his to do with as he chooses. There never be any concept of "security" on the client.

                    </p>

                    <p>

                        Some frameworks have incredibly verbose and complex patterns about what "knows about" what, and the end result is 2000-line files, because one small area of the screen maps to a "View" which requires a lot of logic. Because all the logic is coupled to physical area of the screen and not broken out in a way that makes sense conceptually, files grow immensely large and difficult to work with.  (the other dirty little secret is that they haven't re-invented how Javascript and the DOM work. Everything is still compiled into a webpage, JS/jQuery can still traverse the entire DOM at will. It's all just semantics within the framework.)

                    </p>

                <h4>

                     In Nagisa there is only one diagram, and it’s not complicated:

                 </h4>

                <h3>

                    DOM LIBRARY REFERENCE CLASSES

                </h3>

                <p>

                    When necessary, the DOM maps to Reference classes by IDs in HTML. All classes in the Library can be looked up by ID. These classes have prototyped methods which (conceptually) are private to them. Literally, everything is public, since at its best privacy in JS depends on the whims of the interpreter.

                </p>

                <p>

                     Library objects are completely decoupled from the View. They can serve as both Model and Controller. When the View needs to do something complicated it asks at the Library for the class it needs. The class does what it has been asked and updates the DOM as needed. No tight coupling, no, memory leaks from objects held in memory when they're not meant to be, no piled-on frameworks dedicated just to clean-up, no physical regions of the screen trying to tell code how it should structure itself, no tortuous tripping over your feet in the service of a dubious interpretation of what MVC means. Just Javascript, jQuery, and Underscore. It can be as clean and well-structured and easy to work with as you make it. 

                 </p>

                <h3>

                    First Example

                </h3>-->

               <!-- <p>

                    <a href="#jt_demo">Below</a> you'll find a Jumbtotron creator. The Jumbotron is an example of a Nagisa component which uses a Library reference.

                </p>

                <p>

                    Once you create a Jumbotron, feel free to poke around in the workings of the framework. You can use the Console to grab a reference to the object you just created (if you gave it a name of your own):

                </p>

                <p class="code-sample">

                    N.Library.lookUpReferenceById('the_name_you_gave_it')

                </p>

                <p style="padding-top: 0">

                    or you can see everything currently in the library like so:

                </p>

                <p class="code-sample">

                    N.Library.referenceLibrary

                </p>



                <p>

                    That's all for now. There is much much more to the framework, and more examples and code will be added soon. But hopefully poking around with even this simple demo will give you the impression that this can and does work, and has the potential to scale to any level of complexity. All source code currently live on the site can be viewed by "View source," and a zip file for demo purposes only can be downloaded <a href="/downloads/nagisa_and_jumbotron_source.zip">here</a>.

                </p>-->





                <!--END NAGISA INFO -->

                <!-- BEGIN NAGISAS DEMOS -->

           



            </div>

            

            



        </div>

    </section>



     <section class="about offsetTop offsetBottom" id="examples">

                <header class="centered" >

                    <h1>Nagisa <span>Examples</span></h1>

                    

                </header>

                <a name="jt_demo"></a>

                <div style="text-align: center; padding-top: 40px">

                    <h6>JSONToHTML demo</h6>

                    <p style="padding: 0 100px">

                        Most rich media sites have hundreds or thousands of lines of code dedicated to transforming JSON returned from the server into content on the screen. The demo below does it all in 11 lines of non-framework code. Just tell Nagisa what route to call, what data to expect to get back, what template to use, and where to add the result to the page. You can even have multiple handlers on one call if you're returning different types of data!

                        <br/>

                        <small>Coming soon: Tie-in with lazyload/pagination.</small>

                    </p>

                    <p>

                       <a class='button normal' style="margin-left:16px; cursor: pointer" id="make_html_demo">Make some content!</a> 

                    </p>

                    <div id="test_json_target" style="padding: 30px">

                        (JSON Added Here)

                    </div>



                    <!-- BEGIN JUMBOTRON COMPONENT DEMO -->

                    <h6>Jumbotron demo</h6>

                    <p>Make as many Jumbotrons as you like.</p>

                    Number of slides:

                    <select id="number_of_slides">

                        <option value="2">2</option>

                        <option value="3">3</option>

                        <option value="4">4</option>

                        <option value="5">5</option>

                    </select>

                    <p>Give the Nagisa reference class a name of your own (optional)</p>

                    <input type="text" id="jt_name" />



                    <a class='button normal' style="margin-left:16px;" id="make_jumbotron_button">Make Jumbotron!</a>

                    

                   

                    <div id="jumbotrons_holder">

                    

                    </div>



                    <!-- END N DEMOS -->

                </div>

   

    </section>







    <section class="about offsetTop offsetBottom" id="explore">

        <header class="centered" >

            <h1>Explore <span>Nagisa</span></h1>

            

        </header>

        <p class="centered">

            Just run "N" in your console.

        </p>

    </section>





    <!-- Footer -->

    <footer class="offsetTop">

        <!-- Container -->

        <div class="container12">

            <div class="column12">

                <!-- Social Networks -->

                <!--<div class="social">

                    <a href="https://www.facebook.com/a.axminenko" title="Facebook"><i class="fa fa-facebook"></i></a>

                    <a href="https://twitter.com/axminenko" title="Twitter"><i class="fa fa-twitter"></i></a>

                    <a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>

                </div>-->

                <!-- Copyrights -->

                <small>2014-2016 &copy; Ryan Moore. All rights reserved.</small>

            </div>

        </div>

    </footer>



    <!-- Scripts -->
    <script src="theme/js/retina-1.1.0.min.js"></script>

    <script src="theme/js/smooth-scroll.js"></script>

    <script src="theme/js/smoothscroll-0.9.9.js"></script>

    <script src="theme/js/jquery.vegas.min.js"></script>

    <script src="theme/js/jquery.sticky.js"></script>

    <script src="theme/js/jquery.nav.js"></script>

    <script src="theme/js/jquery.knob.js"></script>

    <script src="theme/js/jquery.isotope.min.js"></script>

    <script src="theme/js/jquery.parallax.js"></script>

    <script src="theme/js/jquery.mb.ytplayer.js"></script>

    <script src="theme/js/justmotion.js"></script>

    <script src="/js/underscore.js"></script>
  
    <script src="/js/nagisa.min.js"></script>
    <script src="/js/rm_portfolio.js"></script>

    <script src="/jumbotron/jumbotron.js"></script>

    <script src="/jumbotron/jumbotron_events.js"></script>

    <script src="/jumbotron/jumbotron_controller.js"></script>



    <!-- ******************************* JS templates *********************** -->
    <?php include 'js_templates.php';?>

</body>
</html>











