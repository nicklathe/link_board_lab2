class MainController < ApplicationController
    def index
        if @current_user
            return render 'main/loggedin_index'
        end
    end

    def about
        @post = Post.last

        respond_to do |format|
          format.json
          format.xml
          format.html
        end
    end
end