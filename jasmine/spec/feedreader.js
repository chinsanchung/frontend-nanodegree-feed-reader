$(function() {
    describe('RSS Feeds', function() {
        /*  What happens when you change allFeeds in app.js to be an empty array and refresh the page?
         : Error message appeared. (allFeeds.length is 0)
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //I changed codes what reviews said about.
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
         /* Changed to hasClass('menu-hidden').
         It will make no fail if I add more classes to the body element. */
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
    });

    describe('Initial Entries', function() {
      /* Fix code simple by review.
      It passes done() directly as the callback for loadFeed. */
      beforeEach(function (done) {
        loadFeed(0, done);
      });
      /* $('.feed .entry') : descendant selector to get the children of parent element.
        It will return all .entry elements inside of .feed parent */
      it('loadFeed function works perfectly', function () {
        expect($('.feed .entry')).toBeDefined();
        expect($('.feed .entry')).not.toBe('');
      });
    });

    let firstFeed, secondFeed;
    describe('New Feed Selection', function() {
      //Second loadFeed will only be executed when first loadFeed is completed by using callback.
      beforeEach(function (done) {
        //first call start( loadFeed function needs callback function as parameter. )
        loadFeed(0, function () {
          firstFeed = $('.feed').html(); //set firstFeed value
          //first call complete, and second call start(Call callback function)
          loadFeed(1, function () {
            secondFeed = $('.feed').html(); //set secondFeed value
            done();
          });
        });
      });
      it('first Feed and Second Feed is different', function (done) {
       expect(firstFeed).not.toBe(secondFeed);
        done();
      });
    });
}());
