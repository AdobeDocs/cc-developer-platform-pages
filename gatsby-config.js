/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: "Adobe Creative Cloud",
        path: "/",
      },
      {
        title: "Adobe Express",
        path: "https://developer.adobe.com/express/",
      },
      {
        title: "Developer Events",
        path: "https://developer.adobe.com/developers-live",
      },
      {
        title: "Developer Forums",
        path: "https://developer.adobe.com/developer-champion/forums",
      },
      {
        title: "Developer Champions",
        path: "https://developer.adobe.com/developer-champion/",
      },
      {
        title: "Fund for Design",
        path: "https://developer.adobe.com/fund-for-design/",
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || "/creative-cloud/",
};
