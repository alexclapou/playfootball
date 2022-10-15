module PathsHelper
  def is_profile_path?
    is_settings_path?() || is_profile_tab_path?() || is_language_and_theme_path?()
  end

  def is_home_path?
    current_page?(home_path)
  end

  def is_dashboard_path?
    current_page?(dashboard_path)
  end

  def is_search_path?
    current_page?(serach_path)
  end

  def is_settings_path?
    current_page?(settings_public_index_path) || current_page?(settings_activity_index_path) || current_page?(settings_password_and_authentication_index_path) || current_page?(settings_billing_and_payments_path)
  end

  def is_profile_tab_path?
    current_page?(profile_path)
  end

  def is_language_and_theme_path?
    current_page?(language_and_theme_path)
  end
end