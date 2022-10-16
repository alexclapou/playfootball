class Settings::PublicController < Settings::SettingsController
  include DateConcern
  def update
    @user = current_user
    if @user.update(general_params)
      redirect_to settings_public_index_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def general_params
    params[:user][:date_of_birth] ||= compute_date_params()
    params.require(:user).permit(:first_name, :last_name, :date_of_birth)
  end

  def compute_date_params
    day = params[:user].delete("date_of_birth(3i)")
    month = params[:user].delete("date_of_birth(2i)")
    year = params[:user].delete("date_of_birth(1i)")

    return nil unless year.present? && month.present? && day.present?

    "#{year}-#{month}-#{day}".to_date
  end
end
