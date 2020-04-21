class Users::IndexPage
    include Lucky::HTMLPage

    def render
        html_doctype
    
        html lang: "en" do
          head do
            title "Future Imperfect by HTML5 UP"
            css_link  href: "assets/css/main.css"
            utf8_charset
          end

          body do
            content
          end
        end
      end

    needs posts : Array(Post)
  
    def content
        
        div id: "wrapper" do
          
          header id: "header" do
            h1 do
              a "Future Imperfect", href: "index.html"
            end
            nav class: "links" do
              ul do
                li do
                  a "Lorem", href: "#"
                end
                li do
                  a "Ipsum", href: "#"
                end
                li do
                  a "Feugiat", href: "#"
                end
                li do
                  a "Tempus", href: "#"
                end
                li do
                  a "Adipiscing", href: "#"
                end
              end
            end
            nav class: "main" do
              ul do
                li class: "search" do
                  a "Search", class: "fa-search", href: "#search"
                  form action: "#", id: "search", method: "get" do
                    input name: "query", placeholder: "Search", type: "text"
                  end
                end
                li class: "menu" do
                  a "Menu", class: "fa-bars", href: "#menu"
                end
              end
            end
          end
          
          section id: "menu" do
            
            section do
              form action: "#", class: "search", method: "get" do
                input name: "query", placeholder: "Search", type: "text"
              end
            end
            
            section do
              ul class: "links" do
                li do
                  a href: "#" do
                    h3 "Lorem ipsum"
                    para "Feugiat tempus veroeros dolor"
                  end
                end
                li do
                  a href: "#" do
                    h3 "Dolor sit amet"
                    para "Sed vitae justo condimentum"
                  end
                end
                li do
                  a href: "#" do
                    h3 "Feugiat veroeros"
                    para "Phasellus sed ultricies mi congue"
                  end
                end
                li do
                  a href: "#" do
                    h3 "Etiam sed consequat"
                    para "Porta lectus amet ultricies"
                  end
                end
              end
            end
            
            section do
              ul class: "actions stacked" do
                li do
                  a "Log In", class: "button large fit", href: "#"
                end
              end
            end
          end
          
          div id: "main" do
            posts.each do |art|
              article class: "post" do
                header do
                  div class: "title" do
                    h2 do
                      a art.title, href: "single.html"
                    end
                    para art.description
                  end
                  div class: "meta" do
                    time art.created_at.to_s, class: "published", datetime: art.created_at.to_s
                    a class: "author", href: "#" do
                      span art.author, class: "name"
                      img alt: "", src: "images/avatar.jpg"
                    end
                  end
                end
                a class: "image featured", href: "single.html" do
                  img alt: "", src: "images/pic01.jpg"
                end
                para art.body
                footer do
                  ul class: "actions" do
                    li do
                      a "Continue Reading", class: "button large", href: "single.html"
                    end
                  end
                  ul class: "stats" do
                    li do
                      a "General", href: "#"
                    end
                    li do
                      a art.no_likes, class: "icon solid fa-heart", href: "#"
                    end
                    li do
                      a art.no_comments, class: "icon solid fa-comment", href: "#"
                    end
                  end
                end
              end  
            
            ul class: "actions pagination" do
              li do
                a "Previous Page", class: "disabled button large previous", href: ""
              end
              li do
                a "Next Page", class: "button large next", href: "#"
              end
            end
          end
          
          section id: "sidebar" do
            
            section id: "intro" do
              a class: "logo", href: "#" do
                img alt: "", src: "images/logo.jpg"
              end
              header do
                h2 "Future Imperfect"
                para do
                  text "Another fine responsive site template by "
                  a "HTML5 UP", href: "http://html5up.net"
                end
              end
            end
            
            section do
              div class: "mini-posts" do
                
                article class: "mini-post" do
                  header do
                    h3 do
                      a "Vitae sed condimentum", href: "single.html"
                    end
                    time "October 20, 2015", class: "published", datetime: "2015-10-20"
                    a class: "author", href: "#" do
                      img alt: "", src: "images/avatar.jpg"
                    end
                  end
                  a class: "image", href: "single.html" do
                    img alt: "", src: "images/pic04.jpg"
                  end
                end
                
                article class: "mini-post" do
                  header do
                    h3 do
                      a "Rutrum neque accumsan", href: "single.html"
                    end
                    time "October 19, 2015", class: "published", datetime: "2015-10-19"
                    a class: "author", href: "#" do
                      img alt: "", src: "images/avatar.jpg"
                    end
                  end
                  a class: "image", href: "single.html" do
                    img alt: "", src: "images/pic05.jpg"
                  end
                end
                
                article class: "mini-post" do
                  header do
                    h3 do
                      a "Odio congue mattis", href: "single.html"
                    end
                    time "October 18, 2015", class: "published", datetime: "2015-10-18"
                    a class: "author", href: "#" do
                      img alt: "", src: "images/avatar.jpg"
                    end
                  end
                  a class: "image", href: "single.html" do
                    img alt: "", src: "images/pic06.jpg"
                  end
                end
                
                article class: "mini-post" do
                  header do
                    h3 do
                      a "Enim nisl veroeros", href: "single.html"
                    end
                    time "October 17, 2015", class: "published", datetime: "2015-10-17"
                    a class: "author", href: "#" do
                      img alt: "", src: "images/avatar.jpg"
                    end
                  end
                  a class: "image", href: "single.html" do
                    img alt: "", src: "images/pic07.jpg"
                  end
                end
              end
            end
            
            section do
              ul class: "posts" do
                li do
                  article do
                    header do
                      h3 do
                        a "Lorem ipsum fermentum ut nisl vitae", href: "single.html"
                      end
                      time "October 20, 2015", class: "published", datetime: "2015-10-20"
                    end
                    a class: "image", href: "single.html" do
                      img alt: "", src: "images/pic08.jpg"
                    end
                  end
                end
                li do
                  article do
                    header do
                      h3 do
                        a "Convallis maximus nisl mattis nunc id lorem", href: "single.html"
                      end
                      time "October 15, 2015", class: "published", datetime: "2015-10-15"
                    end
                    a class: "image", href: "single.html" do
                      img alt: "", src: "images/pic09.jpg"
                    end
                  end
                end
                li do
                  article do
                    header do
                      h3 do
                        a "Euismod amet placerat vivamus porttitor", href: "single.html"
                      end
                      time "October 10, 2015", class: "published", datetime: "2015-10-10"
                    end
                    a class: "image", href: "single.html" do
                      img alt: "", src: "images/pic10.jpg"
                    end
                  end
                end
                li do
                  article do
                    header do
                      h3 do
                        a "Magna enim accumsan tortor cursus ultricies", href: "single.html"
                      end
                      time "October 8, 2015", class: "published", datetime: "2015-10-08"
                    end
                    a class: "image", href: "single.html" do
                      img alt: "", src: "images/pic11.jpg"
                    end
                  end
                end
                li do
                  article do
                    header do
                      h3 do
                        a "Congue ullam corper lorem ipsum dolor", href: "single.html"
                      end
                      time "October 7, 2015", class: "published", datetime: "2015-10-06"
                    end
                    a class: "image", href: "single.html" do
                      img alt: "", src: "images/pic12.jpg"
                    end
                  end
                end
              end
            end
            
            section class: "blurb" do
              h2 "About"
              para "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies."
              ul class: "actions" do
                li do
                  a "Learn More", class: "button", href: "#"
                end
              end
            end
            
            section id: "footer" do
              ul class: "icons" do
                li do
                  a class: "icon brands fa-twitter", href: "#" do
                    span "Twitter", class: "label"
                  end
                end
                li do
                  a class: "icon brands fa-facebook-f", href: "#" do
                    span "Facebook", class: "label"
                  end
                end
                li do
                  a class: "icon brands fa-instagram", href: "#" do
                    span "Instagram", class: "label"
                  end
                end
                li do
                  a class: "icon solid fa-rss", href: "#" do
                    span "RSS", class: "label"
                  end
                end
                li do
                  a class: "icon solid fa-envelope", href: "#" do
                    span "Email", class: "label"
                  end
                end
              end
              para class: "copyright" do
                text "© Untitled. Design: "
                a "HTML5 UP", href: "http://html5up.net"
                text ". Images: "
                a "Unsplash", href: "http://unsplash.com"
                text "."
              end
            end
          end
        end
        
        script src: "assets/js/jquery.min.js"
        script src: "assets/js/browser.min.js"
        script src: "assets/js/breakpoints.min.js"
        script src: "assets/js/util.js"
        script src: "assets/js/main.js"
  end
end
end