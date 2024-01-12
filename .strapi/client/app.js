/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor5 from "@_sh/strapi-plugin-ckeditor/strapi-admin";
import calendar from "@offset-dev/strapi-calendar/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import seo from "@strapi/plugin-seo/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.js";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    ckeditor5: ckeditor5,
    calendar: calendar,
    graphql: graphql,
    i18n: i18N,
    seo: seo,
    "users-permissions": usersPermissions,
  },
});
