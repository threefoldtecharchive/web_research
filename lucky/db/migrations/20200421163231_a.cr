class A::V20200421163231 < Avram::Migrator::Migration::V1
  def migrate
    create table_for(Post) do
      primary_key id : Int64
      add_timestamps
    
      add title : String
      add description : String
      add body : String
      add no_likes  : Int32
      add no_comments : Int32
      add author : String
    end

    # Run custom SQL with execute
    #
    # execute "CREATE UNIQUE INDEX things_title_index ON things (title);"
  end

  def rollback
    # drop table_for(Thing)
  end
end
