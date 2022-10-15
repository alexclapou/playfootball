class LanguageAndThemesController < ApplicationController
  def show
  end

  def display
    cookies[:theme] = {
      value: params[:theme].to_sym
    }
    redirect_to language_and_theme_path
  end
end