class ApplicationController < ActionController::Base
  before_action :set_locale
  
  def display
    cookies[:theme] = {
      value: params[:theme].to_sym
    }
    redirect_to language_and_theme_path
  end

  def default_url_options
    { locale: I18n.locale }
  end

  private
  
  def set_locale
    I18n.locale = extract_locale || I18n.default_locale
  end
  
  def extract_locale
    parsed_locale = params[:locale]
    I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
  end
end
