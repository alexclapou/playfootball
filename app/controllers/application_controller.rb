class ApplicationController < ActionController::Base
  before_action :set_locale, :always_set_locale
  
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

  def always_set_locale
    redirect_to "/#{I18n.locale}#{request.path_info}" if params[:locale].blank?
  end
  
  def set_locale
    I18n.locale = extract_locale || I18n.default_locale
  end
  
  def extract_locale
    parsed_locale = params[:locale]
    I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
  end

  def after_sign_out_path_for(resource)
    root_path
  end
  
  def after_sign_in_path_for(resource)
    profile_path
  end
end
