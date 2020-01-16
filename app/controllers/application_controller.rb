class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    # before_action :deep_underscore_params!

    # def deep_underscore_params!(app_params = params)
    #     app_params.transform_keys!(&:underscore)
    #     app_params.each do |key, value|
    #         deep_underscore_params!(value) if value.instance_of?(ActionController::Parameters)
    #     end
    #     app_params.reject! { |k, v| v.blank? }
    # end
    helper_method :current_user
    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token
    end

    def logout
        current_user.reset_session_token
        session[:session_token] = nil
        @current_user = nil
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    # def normalized_params
    #     params.deep_transform_keys(&:underscore)
    # end
end
