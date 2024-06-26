terraform {
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }

    github = {
      source = "integrations/github"
    }
  }

  backend "s3" {
    endpoints = {
      s3       = "https://storage.yandexcloud.net"
      dynamodb = "https://docapi.serverless.yandexcloud.net/ru-central1/b1g0dp5ilnp8qi98d85v/etn1sm46buml7gnuvjea"
    }
    bucket         = "profile-tf-remote-state"
    region         = "ru-central1"
    key            = "bootstrap/terraform.tfstate"
    dynamodb_table = "state-lock-table"

    skip_s3_checksum            = true
    skip_region_validation      = true
    skip_credentials_validation = true
    skip_requesting_account_id  = true
  }

  required_version = ">= 1.7.1"
}

provider "yandex" {
  zone = "ru-central1-a"
}

provider "github" {}

provider "aws" {
  skip_region_validation      = true
  skip_credentials_validation = true
  skip_requesting_account_id  = true
}
