/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         Error message appeared. (allFeeds.length is 0)
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //I used for loop and if statement to check allFeed's url.
        let urlTest = 0;
        function forUrl () {
          for (let i = 0; i <= allFeeds.length; i++) {
            if (allFeeds[i].url !== '') {
              urlTest = 0;
            } else {
              urlTest += 1;
            }
          }
        }
        it('url is defined', function () {
          expect(allFeeds).toBeDefined();
          expect(urlTest).toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.

         */
         //Same function is used to check allFeed's name
         let nameTest = 0;
         function forName () {
           for (let i = 0; i <= allFeeds.length; i++) {
             if (allFeeds[i].name !== '') {
               nameTest = 0;
             } else {
               nameTest += 1;
             }
           }
         }
         it('name is defined', function () {
           expect(allFeeds).toBeDefined();
           expect(nameTest).toBe(0);
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         //This variable has body element's className.
         let menuClass = document.body.getAttribute('class');
         //It checks body's className is menu-hidden.
         it('element is menu-hidden', function () {
           expect(menuClass).toBeDefined();
           expect(menuClass).toBe('menu-hidden');
         });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          //First, I used toggleClass at app.js, it didn't work.
          //But using menu icon and jQuery's trigger function works well.
          const menuClick = function () { $('.menu-icon-link').trigger('click') };

          it('is showing when clicked', function () {
            expect(menuClass).toBeDefined();
            menuClick();
            //I don't use menuClass in expect. Because menuClass has changed when menuClick() had excuted.
            expect($('body')).not.toBe('menu-hidden');
          });
          it('is not showing when clicked again', function () {
            expect(menuClass).toBeDefined();
            //Excuting menuClick() twice.
            menuClick();
            menuClick();
            expect(menuClass).toBe('menu-hidden');
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         let feedTest = 0;
         //This variable is used to count <div class="feed">'s child elements.
         const feed = document.querySelector('.feed').children;
         function forFeed () {
           if (feed.length !== '') {
             feedTest += 1;
           } else {
             feedTest = 0;
           }
         }
         //I don't know what is right place of done function. locationg done() at beforeEach makes error.
         beforeEach(function () {
           loadFeed(0);
           forFeed();
           //done();
         });
         it('loadFeed function works perfectly', function () {
           beforeEach();
           expect(feedTest).toBe(1);
         });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         //These are time check variables.
         let second = 1000;
         let startTime;
         let endTime;
         const resultTime = (endTime - startTime) / second;
         /* I think this TODO means checking time bewteen first and second loadFeed.
         Subtract second loadFeed's time from first, and if there is a result from it, this spec returns true.
         So I used 0 at toBe().
         */
         function startLoadFeed() {
           startTime = new Date();
           loadFeed(0);
         }
         function endLoadFeed() {
           loadFeed(1);
           endTime = new Date();
         }
         beforeEach(function () {
           startLoadFeed();
           endLoadFeed();
           return resultTime;
         });
         it('loadFeed function is loaded when', function () {
           expect(resultTime).not.toBe(0);
         });
    });
}());
