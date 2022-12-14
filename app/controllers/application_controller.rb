class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_locale, :always_set_locale
  
  def default_url_options
    if controller_name != 'omniauth_callbacks'
      { locale: I18n.locale }
    end
    {}
  end

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :date_of_birth])
  end

  def always_set_locale
    if controller_name != 'omniauth_callbacks'
      redirect_to "/#{I18n.locale}#{request.path_info}" if params[:locale].blank?
    end
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
