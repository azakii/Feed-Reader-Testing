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
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* create for loop to check the URL feeds */

        it('each feed has URL', function() {
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            }
        });



      /* create for loop to check the name of feeds */
        it('each feed has name', function() {
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            }
        });
    });



 /* The menu test */
    describe('The menu', function() {
    
    /* menu already hidden */
        it('hidden by default', function() {
            let eleIsHidden = document.body.classList.contains('menu-hidden');
            expect(eleIsHidden).toBe(true);
        });


    /* show and hide */
         it('the menu changes on clicks', function() {            
            let menuChanges = document.querySelector('.menu-icon-link');
            menuChanges.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            menuChanges.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    
    });

        
    /* Initial Entries */    
    describe('Initial Entries', function() {
        beforeEach(function(done){
            loadFeed(0,done);
        })
        it('completes its work', function() {
            let feedChildren = document.querySelectorAll('.entry-link');
            expect(feedChildren.length).toBeGreaterThan(3);            
        });

    });

    /* New Feed Selection */
    describe('New Feed Selection', function() {
            var firstEntites,
                secondEntites;

        beforeEach(function(done){
            document.querySelector('.feed').innerHTML = "";
            
            loadFeed(0,function(){
                firstEntites = document.querySelector('.feed').innerHTML;
                loadFeed(1,function(){
                    secondEntites = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        /* The result not like each others */ 

        it('a new feed is loaded', function() {
            expect(firstEntites).not.toBe(secondEntites);
            
        });
    });
}());
