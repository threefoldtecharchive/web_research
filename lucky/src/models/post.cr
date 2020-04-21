class Post < BaseModel
  table do
    column title : String
    column  description : String
    column body : String
    column no_likes  : Int32
    column no_comments : Int32
    column author : String
  end
end
