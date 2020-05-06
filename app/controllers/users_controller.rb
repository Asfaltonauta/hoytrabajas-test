class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    sanitized_params = params.require(:user).permit(:name, :surname, :phone)
    user = User.new(sanitized_params)

    if user.save
      "El usuario se guardo bien"
    else
      "El usuario no se guardo"
    end
  end
end
