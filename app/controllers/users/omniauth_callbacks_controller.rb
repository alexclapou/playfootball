# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  # You should configure your model like this:
  # devise :omniauthable, omniauth_providers: [:twitter]

  def facebook
    @user = User.from_omniauth(auth)

    if @user.persisted?
      sign_in_and_redirect @user, event: :authentication # This will throw if @user is not activated
    else
      redirect_to new_user_session_path
    end
  end

  def failure
    redirect_to root_path
  end

  private
  def auth
    request.env["omniauth.auth"]
  end
end
