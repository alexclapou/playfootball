class Settings::SettingsController < ApplicationController
  before_action :load_user, only: %i[index]
  before_action :authenticate_user!

  private

  def load_user
    @user = current_user
  end
end
