defmodule App.Users.Secrets do
  @moduledoc """
  This module contains the signing secret for the user tokens.
  """
  use AshAuthentication.Secret

  def secret_for([:authentication, :tokens, :signing_secret], App.Users.User, _) do
    case Application.fetch_env(:app, AppWeb.Endpoint) do
      {:ok, endpoint_config} ->
        Keyword.fetch(endpoint_config, :secret_key_base)

      :error ->
        :error
    end
  end
end
