$(function() {
    describe('RSS Feeds', function() {
        /*  What happens when you change allFeeds in app.js to be an empty array and refresh the page?
         : Error message appeared. (allFeeds.length is 0)
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //I changed codes what reviews said about. It works and very simple. Amazing.
        it('have an url', function() {
          for (let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          }
        });

         //Changed same like url.
         it('have an name', function () {
           for (let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         });
    });


    describe('The menu', function() {
         //Changed to hasClass('menu-hidden'). It works well.
         let menuClass = $('body').hasClass('menu-hidden');
         it('element is menu-hidden', function () {
           expect(menuClass).toBeDefined();
           expect(menuClass).toBe(true);
         });
         //This code is review's code. There is no toBeDefined(). I don't know why this code doesn't use it.
         it('changes visibily when clicked', function() {
          /* Simulate the first click and check state of menu (btw see the hasClass I told you about earlier?*/
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(false);
          /* Simulate second click and check state of menu */
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
         });

/* It's my code. It is longer than above code...
          const menuClick = function () { $('.menu-icon-link').trigger('click') };
          it('is showing when clicked', function () {
            expect(menuClass).toBeDefined();
            menuClick();
            //I don't use menuClass in expect. Because menuClass has changed when menuClick() had excuted.
            expect($('body')).not.toBe('menu-hidden');
          });
          it('is not showing when clicked again', function () {
            // expect(menuClass).toBeDefined();
            //I understand what reivew says. This menuClick is second click, first is excuted above.
            menuClick();

            expect(menuClass).toBe(true);
          });
*/
    });
    //This variable is used to count <div class="feed">'s child elements.
    const feeds = document.querySelector('.feed').children;

    describe('Initial Entries', function() {
      beforeEach(function (done) {
        loadFeed(0, function () {
          done();
        });
      });
      it('loadFeed function works perfectly', function () {
       beforeEach();
       for (let feed of feeds) {
        expect(feed).toBeDefined();
        expect(feed).not.toBe('');
       }
      });
    });
    
//Actually I still don't understand perfectly about this TODO. Is this solution right?
    describe('New Feed Selection', function() {
         beforeEach(function () {
           loadFeed(0, function (done) {
             done();
           });
           loadFeed(1, function (done) {
             done();
           })
         });
         it('loadFeed function is loaded when', function () {
           beforeEach();
           for (let feed of feeds) {
            expect(feed).toBeDefined();
            expect(feed).not.toBe('');
           }
         });
    });
}());
