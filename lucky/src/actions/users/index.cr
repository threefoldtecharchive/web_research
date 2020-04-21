# in src/actions/users/index.cr
class Users::Index < BrowserAction
    route do
        SavePost.create!(
          title: "MAGNA SED ADIPISCING",
           description: "Hello there from lucky",
            body: %(Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.),
             no_comments: 10,
             no_likes: 20,
             author: "hamdy"
        )


      q = PostQuery.new

      res = Array(Post).new
      q.each do |item|
        res.push item
      end
      html IndexPage, posts: res
    end
  end