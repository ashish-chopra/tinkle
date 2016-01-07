(function() {
    angular
      .module('Tinkle')
      .service('BoardModel', function() {
        var services = this,
            types = [
              {name: 'Feature'},
              {name: 'Enhancement'},
              {name: 'Bug'},
              {name: 'Spike'}
            ],

            statuses = [
              {name: 'Back Log'},
              {name: 'To Do'},
              {name: 'In Progress'},
              {name: 'Code Review'},
              {name: 'QA Review'},
              {name: 'Verified'},
              {name: 'Done'}
            ],

            stories = [
              {
                  title: 'First story',
                  description: 'Our first story.',
                  criteria: 'Criteria pending.',
                  status: 'To Do',
                  type: 'Feature',
                  assignee: 'Amit Srivastava'
              },
              {
                  title: 'Second story',
                  description: 'Do something.',
                  criteria: 'Criteria pending.',
                  status: 'Back Log',
                  type: 'Feature',
                  assignee: 'Ashish Chopra'
              },
              {
                  title: 'Another story',
                  description: 'Just one more.',
                  criteria: 'Criteria pending.',
                  status: 'Code Review',
                  type: 'Enhancement',
                  assignee: 'Vinit Goyal'
              }
            ];

            services.getStatuses = function() {
              return statuses;
            }

            services.getTypes = function() {
              return types;
            }

            services.getStories = function() {
              return stories;
            }
      })
}());
