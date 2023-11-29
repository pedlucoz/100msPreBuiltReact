"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// <define:process.env>
var define_process_env_default;
var init_define_process_env = __esm({
  "<define:process.env>"() {
    define_process_env_default = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1b6a35b6-f972-4379-bc74-c930b798717e", npm_package_devDependencies_ts_node: "^10.4.0", npm_package_devDependencies__types_node: "^16.11.17", npm_package_devDependencies_rollup: "^2.70.1", npm_package_exports___require: "./dist/index.cjs.js", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", npm_package_dependencies_screenfull: "^5.1.0", npm_package_dependencies_react_draggable: "^4.4.5", npm_package_dependencies__radix_ui_react_switch: "1.0.0", USER: "runner", npm_package_devDependencies_webpack_cli: "^4.9.2", npm_package_devDependencies_webpack_bundle_analyzer: "^4.5.0", npm_package_devDependencies_jest: "26.6.0", npm_config_version_commit_hooks: "true", npm_config_user_agent: "yarn/1.22.19 npm/? node/v18.18.2 linux x64", npm_config_always_auth: "", NX_WORKSPACE_ROOT: "/home/runner/work/web-sdks/web-sdks", npm_package_devDependencies__rollup_plugin_node_resolve: "^13.1.3", npm_package_scripts_babel: "npx storybook@latest babelrc", CI: "true", npm_package_devDependencies__size_limit_file: "^5.0.3", npm_config_bin_links: "true", npm_config_wrap_output: "", npm_package_dependencies__radix_ui_react_tabs: "1.0.0", npm_package_dependencies__100mslive_react_sdk: "0.8.19", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1b6a35b6-f972-4379-bc74-c930b798717e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/18.18.2/x64/bin/node", npm_config_init_version: "1.0.0", npm_package_dependencies__emoji_mart_react: "^1.0.1", npm_package_dependencies__emoji_mart_data: "^1.0.6", npm_package_dependencies__100mslive_hms_virtual_background: "1.11.19", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", NODE_AUTH_TOKEN: "XXXXX-XXXXX-XXXXX-XXXXX", SHLVL: "1", npm_package_dependencies__radix_ui_react_tooltip: "1.0.6", npm_package_dependencies__radix_ui_react_popover: "1.0.6", npm_package_dependencies__100mslive_types_prebuilt: "0.12.0", npm_package_peerDependencies_react: ">=17.0.2 <19.0.0", npm_package_devDependencies__storybook_addon_links: "^7.0.27", npm_package_files_0: "dist", HOME: "/home/runner", npm_package_devDependencies__typescript_eslint_parser: "^5.4.0", npm_package_dependencies__radix_ui_react_dialog: "1.0.4", npm_package_devDependencies__types_react_window: "^1.8.5", npm_package_files_1: "src", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_scripts_controller: "cd packages/hls-controller && yarn start", npm_package_dependencies__stitches_react: "^1.2.8", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "100mslive", npm_package_engines_node: ">=16", npm_package_devDependencies_webpack_manifest_plugin: "^4.1.1", npm_package_devDependencies_typedoc_plugin_markdown: "^3.14.0", npm_config_init_license: "MIT", GRADLE_HOME: "/usr/share/gradle-8.4", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.1.10909125", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", YARN_WRAP_OUTPUT: "false", npm_config_version_tag_prefix: "v", GITHUB_REPOSITORY_OWNER_ID: "73883131", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_package_scripts_lint_fix: "yarn lint --fix", npm_config_userconfig: "/home/runner/work/_temp/.npmrc", npm_package_devDependencies__storybook_addon_a11y: "^7.0.27", SYSTEMD_EXEC_PID: "572", npm_package_scripts_postinstall: "husky install && lerna bootstrap", npm_package_devDependencies_husky: "^6.0.0", npm_package_dependencies_recordrtc: "^5.6.2", npm_package_dependencies_eventemitter2: "^6.4.7", npm_package_dependencies__radix_ui_react_label: "1.0.0", npm_package_dependencies__radix_ui_react_dropdown_menu: "2.0.5", npm_package_keywords_0: "100mslive", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", npm_package_description: "100ms Room Kit provides simple & easy to use UI components to build Live Streaming & Video Conferencing experiences in your apps.", npm_package_devDependencies_typescript: "~4.7.4", npm_package_devDependencies_typedoc: "^0.24.8", npm_package_devDependencies_babel_loader: "^8.2.5", npm_package_devDependencies__rollup_plugin_image: "^3.0.2", npm_package_keywords_1: "react", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.10/x64", NVM_DIR: "/home/runner/.nvm", npm_package_readmeFilename: "README.md", npm_package_devDependencies_react: "^18.1.0", npm_package_devDependencies__babel_preset_env: "^7.22.5", npm_package_keywords_2: "prebuilt", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.3/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231030.2.0", npm_package_devDependencies_prettier: "^2.4.1", npm_package_devDependencies_babel_jest: "^26.6.0", npm_package_scripts_dev: "node ../../scripts/dev", npm_package_keywords_3: "roomkit", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", FORCE_COLOR: "true", npm_package_dependencies__radix_ui_react_toast: "1.0.0", npm_package_dependencies__radix_ui_react_radio_group: "1.0.0", npm_package_devDependencies__babel_preset_typescript: "^7.22.5", npm_package_exports___default: "./dist/index.js", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16857", GITHUB_WORKFLOW: "Publish Packages", _: "/usr/local/bin/yarn", npm_package_scripts_app: "cd apps/100ms-web && yarn start", npm_package_devDependencies_ts_jest: "26.5.6", npm_package_devDependencies_lerna: "^5.6.2", npm_package_devDependencies__types_jest: "^27.0.3", npm_package_devDependencies__commitlint_config_conventional: "^15.0.0", npm_package_private: "true", npm_package_dependencies__radix_ui_react_accordion: "1.0.0", npm_package_devDependencies__rollup_plugin_commonjs: "^21.0.3", npm_package_devDependencies__babel_preset_react: "^7.22.5", npm_package_module: "dist/index.js", npm_package_scripts_sdk: "cd packages/hms-video-web && yarn start", npm_package_scripts_lint: "eslint -c .eslintrc --no-error-on-unmatched-pattern src --ext .js --ext .jsx --ext .ts --ext .tsx", npm_package_devDependencies__typescript_eslint_eslint_plugin: "^5.4.0", npm_config_registry: "https://registry.yarnpkg.com", npm_package_dependencies_react_window: "^1.8.7", npm_package_dependencies__100mslive_hls_player: "0.1.19", npm_package_devDependencies__types_lodash_merge: "^4.6.6", npm_package_devDependencies__storybook_cli: "^7.0.27", npm_package_devDependencies__rollup_plugin_json: "^6.0.0", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "6771501668", npm_package_workspaces_0: "packages/*", npm_package_scripts_store: "cd packages/hms-video-store && yarn start", npm_package_devDependencies__babel_core: "^7.18.2", npm_package_devDependencies__storybook_addon_interactions: "^7.0.27", npm_package_devDependencies__storybook_addon_actions: "^7.0.27", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "0764f906bf58ec5d5c4738942ad6411ffa07eddc", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", npm_package_workspaces_1: "apps/*", npm_package_scripts_start: 'concurrently "yarn dev" "yarn types"', npm_config_ignore_scripts: "", NX_TASK_HASH: "858805a95f7f60fde9b93b910e935bb84d0a1bf9bd321e412a1e6b1201dfdfff", npm_package_exports___import: "./dist/index.js", STATS_BLT: "true", GITHUB_WORKFLOW_REF: "100mslive/web-sdks/.github/workflows/publish.yml@refs/heads/main", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_package_workspaces_2: "playwright/*", npm_package_devDependencies_postcss_loader: "^6.2.1", PATH: "/tmp/yarn--1699277814797-0.4268753627803705:/home/runner/work/web-sdks/web-sdks/packages/roomkit-react/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/web-sdks/web-sdks/node_modules/.bin:/opt/hostedtoolcache/node/18.18.2/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/bin/node_modules/npm/bin/node-gyp-bin:/tmp/yarn--1699277814502-0.4006307476323434:/home/runner/work/web-sdks/web-sdks/packages/roomkit-react/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/web-sdks/web-sdks/node_modules/.bin:/opt/hostedtoolcache/node/18.18.2/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/bin/node_modules/npm/bin/node-gyp-bin:/tmp/yarn--1699277764977-0.36546335848326517:/home/runner/work/web-sdks/web-sdks/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/web-sdks/web-sdks/node_modules/.bin:/opt/hostedtoolcache/node/18.18.2/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/bin/node_modules/npm/bin/node-gyp-bin:/tmp/yarn--1699277764709-0.8950892210425456:/home/runner/work/web-sdks/web-sdks/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/web-sdks/web-sdks/node_modules/.bin:/opt/hostedtoolcache/node/18.18.2/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/bin/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.18.2/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", NODE: "/opt/hostedtoolcache/node/18.18.2/x64/bin/node", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_6d55c98d-a4b9-4ac3-86e8-628996f34ec9", INVOCATION_ID: "824f98ade202435585be02e91aa6d0f3", NPM_CONFIG_USERCONFIG: "/home/runner/work/_temp/.npmrc", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_scripts_size: "size-limit", npm_package_devDependencies_size_limit: "^5.0.3", npm_package_name: "@100mslive/roomkit-react", npm_package_devDependencies__storybook_react_webpack5: "^7.0.27", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "379", GITHUB_TRIGGERING_ACTOR: "raviteja83", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_package_lint_staged____js_ts_jsx_tsx_: "eslint", npm_package_devDependencies_babel_plugin_istanbul: "^6.1.1", LERNA_PACKAGE_NAME: "@100mslive/roomkit-react", npm_package_dependencies_pusher_js: "^7.0.3", npm_package_dependencies__radix_ui_react_select: "1.0.0", npm_package_size_limit_0_limit: "80 KB", npm_package_devDependencies__commitlint_cli: "^15.0.0", npm_package_devDependencies__rollup_plugin_typescript: "^8.3.1", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", npm_package_size_limit_1_limit: "80 KB", npm_package_devDependencies_webpack: "^5.76.0", npm_package_devDependencies_eslint_plugin_simple_import_sort: "^8.0.0", npm_package_devDependencies_eslint: "^8.9.0", npm_package_dependencies_react_intersection_observer: "^9.4.3", npm_package_devDependencies_rollup_plugin_terser: "^7.0.2", npm_package_devDependencies__types_mdx: "2.0.2", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 7", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "100mslive/web-sdks", npm_lifecycle_script: "rm -rf dist && node ../../scripts/build-webapp", npm_package_size_limit_2_limit: "20 KB", npm_package_resolutions_loader_utils: "^2.0.4", npm_package_devDependencies_dotenv: "^14.2.0", npm_package_dependencies__radix_ui_react_slider: "1.0.0", npm_package_devDependencies_rollup_plugin_import_css: "^3.3.1", npm_package_scripts_types_build: "tsc -p tsconfig.json", npm_package_main: "dist/index.cjs.js", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", npm_package_size_limit_3_limit: "20 KB", npm_package_size_limit_0_path: "packages/hms-video-web/dist/index.cjs.js", npm_package_scripts_cypress_open: "cypress open", npm_package_scripts_lerna_publish: "lerna publish from-package --dist-tag $PUBLISH_FLAG --yes --no-verify-access", npm_package_scripts_test: "yarn build --no-private && lerna run test", npm_package_devDependencies_webpack_dev_server: "^4.7.4", npm_package_devDependencies_concurrently: "^6.4.0", npm_config_version_git_message: "v%s", npm_package_dependencies__radix_ui_react_checkbox: "1.0.0", npm_package_dependencies__100mslive_react_icons: "0.8.19", npm_package_scripts_types: "tsc -w", GITHUB_REPOSITORY_ID: "429826515", GITHUB_ACTIONS: "true", npm_lifecycle_event: "build:only", npm_package_version: "0.1.10", npm_package_size_limit_4_limit: "400 KB", npm_package_size_limit_1_path: "packages/hms-video-web/dist/index.js", npm_package_scripts_build_only: "rm -rf dist && node ../../scripts/build-webapp", npm_package_devDependencies__types_react: "^18.1.0", npm_package_sideEffects: "false", npm_package_source: "src/index.ts", GITHUB_REF_PROTECTED: "true", npm_config_argv: '{"remain":[],"cooked":["run","test"],"original":["test"]}', npm_package_size_limit_5_limit: "20 KB", npm_package_size_limit_2_path: "packages/hms-video-store/dist/index.cjs.js", npm_package_scripts_build: "yarn build:only && yarn types:build", npm_package_devDependencies_tslib: "^2.2.0", npm_package_devDependencies_nx: "^14.5.1", npm_package_devDependencies_lint_staged: "^12.0.3", NX_CLI_SET: "true", npm_package_dependencies_uuid: "^8.3.2", npm_package_dependencies_react_virtualized_auto_sizer: "^1.0.7", npm_package_dependencies_lodash_merge: "^4.6.2", npm_package_dependencies_emoji_mart: "^5.2.2", GITHUB_WORKSPACE: "/home/runner/work/web-sdks/web-sdks", ACCEPT_EULA: "Y", GITHUB_JOB: "publish_packages", RUNNER_PERFLOG: "/home/runner/perflog", npm_package_size_limit_6_limit: "20 KB", npm_package_size_limit_3_path: "packages/hms-video-store/dist/index.js", npm_package_devDependencies_cypress: "^9.5.2", npm_package_devDependencies_rollup_plugin_esbuild: "^5.0.0", GITHUB_SHA: "0764f906bf58ec5d5c4738942ad6411ffa07eddc", GITHUB_RUN_ATTEMPT: "1", npm_package_size_limit_7_limit: "20 KB", npm_package_size_limit_4_path: "packages/roomkit-react/dist/index.cjs.js", npm_config_version_git_tag: "true", npm_config_version_git_sign: "", npm_package_dependencies_qrcode_react: "^3.1.0", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "raviteja83", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", npm_package_size_limit_8_limit: "100 KB", npm_package_size_limit_5_path: "packages/roomkit-react/dist/index.js", npm_config_strict_ssl: "true", npm_package_license: "MIT", LEIN_HOME: "/usr/local/lib/lein", npm_package_size_limit_9_limit: "100 KB", npm_package_size_limit_6_path: "packages/hms-virtual-background/dist/index.cjs.js", npm_package_scripts_format: "prettier -w src/**", npm_package_devDependencies_eslint_plugin_prettier: "^4.0.0", npm_package_devDependencies_eslint_config_react_app: "^7.0.0", NX_TASK_TARGET_PROJECT: "@100mslive/roomkit-react", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1b6a35b6-f972-4379-bc74-c930b798717e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/web-sdks/web-sdks/packages/roomkit-react", GITHUB_ACTOR_ID: "6763261", RUNNER_WORKSPACE: "/home/runner/work/web-sdks", npm_execpath: "/usr/local/lib/node_modules/yarn/bin/yarn.js", npm_package_size_limit_7_path: "packages/hms-virtual-background/dist/index.js", npm_package_scripts_ybys: "yarn && yarn build && yarn storybook", npm_package_dependencies__radix_ui_react_progress: "1.0.0", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "workflow_dispatch", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1b6a35b6-f972-4379-bc74-c930b798717e", npm_package_size_limit_8_path: "packages/react-icons/dist/index.cjs.js", npm_package_scripts_prestart: "rm -rf dist && yarn types:build", npm_package_author_name: "100ms", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_package_size_limit_9_path: "packages/react-icons/dist/index.js", npm_package_scripts_build_storybook: "sb build", npm_package_devDependencies_postcss: "^8.4.5", npm_package_devDependencies_esbuild: "^0.18.13", npm_config_save_prefix: "^", npm_config_ignore_optional: "", npm_package_dependencies_worker_timers: "^7.0.40", npm_package_typings: "dist/index.d.ts", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", npm_package_scripts_storybook: "sb dev -p 6006", npm_package_devDependencies_esbuild_plugin_postcss2: "0.1.1", npm_package_devDependencies_babel_plugin_react_require: "3.1.3", npm_package_devDependencies__storybook_testing_library: "^0.2.0", npm_package_devDependencies__storybook_addon_essentials: "^7.0.27", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", npm_package_scripts_reactsdk: "cd packages/react-sdk && yarn start", npm_package_scripts_app_custom: "cd apps/100ms-custom-app && yarn start", npm_package_dependencies_react_use: "^17.4.0", npm_package_dependencies__radix_ui_react_collapsible: "1.0.0", npm_package_devDependencies_storybook_dark_mode: "^3.0.0", npm_package_devDependencies__storybook_react: "^7.0.27", INIT_CWD: "/home/runner/work/web-sdks/web-sdks", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1b6a35b6-f972-4379-bc74-c930b798717e" };
  }
});

// src/Theme/base.config.ts
var import_react, baseConfig, defaultUtils, defaultMedia, defaultThemeMap;
var init_base_config = __esm({
  "src/Theme/base.config.ts"() {
    "use strict";
    init_define_process_env();
    import_react = require("@stitches/react");
    baseConfig = {
      theme: {
        colors: {
          primary_default: "#2572ED",
          primary_bright: "#538DFF",
          primary_dim: "#002D6D",
          primary_disabled: "#004299",
          on_primary_high: "rgba(245, 249, 255, 0.95)",
          on_primary_medium: "rgba(224, 236, 255, 0.8)",
          on_primary_low: "rgba(194, 208, 229, 0.5)",
          secondary_default: "#444954",
          secondary_bright: "#70778B",
          secondary_dim: "#293042",
          secondary_disabled: "#404759",
          on_secondary_high: "#FFFFFF",
          on_secondary_medium: "#D3D9F0",
          on_secondary_low: "#A4ABC0",
          background_default: "#0B0E15",
          background_dim: "#000000",
          surface_default: "#191B23",
          surface_bright: "#272A31",
          surface_brighter: "#2E3038",
          surface_dim: "#11131A",
          on_surface_high: "#EFF0FA",
          on_surface_medium: "#C5C6D0",
          on_surface_low: "#8F9099",
          border_default: "#1D1F27",
          border_bright: "#272A31",
          alert_success: "#36B37E",
          alert_warning: "#FFAB00",
          alert_error_default: "#C74E5B",
          alert_error_bright: "#FFB2B6",
          alert_error_brighter: "#FFEDEC",
          alert_error_dim: "#270005"
        },
        shadows: {
          sm: "0 0 4px 0 #0000004D",
          md: "0 0 8px 0 #0000004D"
        },
        fonts: {
          sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
        },
        fontSizes: {
          h1: "6rem",
          h2: "3.75rem",
          h3: "3rem",
          h4: "2.125rem",
          h5: "1.5rem",
          h6: "1.25rem",
          tiny: "0.625rem",
          xs: "0.75rem",
          sm: "0.875rem",
          md: "1rem",
          lg: "1.125rem"
        },
        fontWeights: {
          semiBold: 600,
          medium: 500,
          regular: 400
        },
        lineHeights: {
          h1: "5.75rem",
          h2: "3.5rem",
          h3: "3.25rem",
          h4: "2.5rem",
          h5: "2rem",
          h6: "1.5rem",
          tiny: "1rem",
          xs: "1rem",
          sm: "1.25rem",
          md: "1.5rem"
        },
        radii: {
          "0": "0.25rem",
          "1": "0.5rem",
          "2": "0.75rem",
          "3": "1rem",
          "4": "1.5rem",
          round: "100rem"
        },
        space: {
          0: "0rem",
          xs: "0.5rem",
          sm: "0.75rem",
          md: "1rem",
          lg: "1.25rem",
          xl: "2.25rem",
          px: "1px",
          1: "0.125rem",
          2: "0.25rem",
          3: "0.375rem",
          4: "0.5rem",
          5: "0.625rem",
          6: "0.75rem",
          7: "0.875rem",
          8: "1rem",
          9: "1.25rem",
          10: "1.5rem",
          11: "1.75rem",
          12: "2rem",
          13: "2.25rem",
          14: "2.5rem",
          15: "2.75rem",
          16: "3rem",
          17: "3.5rem",
          18: "4rem",
          19: "4.25rem",
          20: "5rem",
          24: "6rem",
          28: "7rem",
          32: "8rem",
          36: "9rem",
          40: "10rem",
          44: "11rem",
          48: "12rem",
          52: "13rem",
          56: "14rem",
          60: "15rem",
          64: "16rem",
          72: "18rem",
          80: "20rem",
          96: "24rem",
          100: "25rem"
        },
        borderWidths: {
          light: "1px",
          normal: "2px",
          bold: "3px",
          extrabold: "4px",
          black: "5px"
        }
      }
    };
    defaultUtils = {
      bg: (value) => ({
        backgroundColor: value
      }),
      c: (value) => ({
        color: value
      }),
      r: (value) => ({
        borderRadius: value
      }),
      fs: (value) => ({
        fontSize: value
      }),
      size: (value) => ({
        height: value,
        width: value
      }),
      w: (value) => ({
        width: value
      }),
      h: (value) => ({
        height: value
      }),
      p: (value) => ({
        padding: value
      }),
      pt: (value) => ({
        paddingTop: value
      }),
      pr: (value) => ({
        paddingRight: value
      }),
      pb: (value) => ({
        paddingBottom: value
      }),
      pl: (value) => ({
        paddingLeft: value
      }),
      px: (value) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      py: (value) => ({
        paddingTop: value,
        paddingBottom: value
      }),
      m: (value) => ({
        margin: value
      }),
      mt: (value) => ({
        marginTop: value
      }),
      mr: (value) => ({
        marginRight: value
      }),
      mb: (value) => ({
        marginBottom: value
      }),
      ml: (value) => ({
        marginLeft: value
      }),
      mx: (value) => ({
        marginLeft: value,
        marginRight: value
      }),
      my: (value) => ({
        marginTop: value,
        marginBottom: value
      })
    };
    defaultMedia = {
      allowMotion: "(prefers-reduced-motion: no-preference)",
      sm: "(max-width: 640px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 1024px)",
      xl: "(max-width: 1280px)",
      "2xl": "(max-width: 1536px)",
      ls: "(max-width: 1024px) and (orientation: landscape)"
    };
    defaultThemeMap = __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
      width: "space",
      height: "space",
      minWidth: "space",
      maxWidth: "space",
      minHeight: "space",
      maxHeight: "space",
      flexBasis: "space",
      gridTemplateColumns: "space",
      gridTemplateRows: "space",
      blockSize: "space",
      minBlockSize: "space",
      maxBlockSize: "space",
      inlineSize: "space",
      minInlineSize: "space",
      maxInlineSize: "space"
    });
  }
});

// src/Theme/stitches.config.ts
var import_react2, import_lodash, HmsStitches, theme, createThemeBase, styled, globalCss, keyframes, css, getCssText, config, globalStyles, createTheme;
var init_stitches_config = __esm({
  "src/Theme/stitches.config.ts"() {
    "use strict";
    init_define_process_env();
    import_react2 = require("@stitches/react");
    import_lodash = __toESM(require("lodash.merge"));
    init_base_config();
    HmsStitches = (0, import_react2.createStitches)({
      prefix: "hms-ui",
      theme: __spreadProps(__spreadValues({}, baseConfig.theme), {
        colors: __spreadValues({}, baseConfig.theme.colors)
      }),
      media: defaultMedia,
      utils: defaultUtils,
      themeMap: defaultThemeMap
    });
    ({
      theme,
      createTheme: createThemeBase,
      styled,
      globalCss,
      keyframes,
      css,
      getCssText,
      config
    } = HmsStitches);
    globalStyles = globalCss({
      "*": {
        fontFamily: "$sans",
        boxSizing: "border-box",
        borderWidth: 0,
        borderStyle: "solid"
      },
      body: {
        margin: 0
      },
      "#root": {
        height: "100%",
        overscrollBehaviorY: "none"
      },
      "::-webkit-scrollbar-track": {
        WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
        backgroundColor: "transparent"
      },
      "::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        backgroundColor: "transparent"
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#657080",
        borderRadius: "5px"
      },
      /**
       * needed for safari. Safari
       * adds background color on its own
       * on hls-viewer on fullscreen
       */
      "#hls-viewer-dark:fullscreen": {
        backgroundColor: "black !important"
      },
      "#hls-viewer-light:fullscreen": {
        backgroundColor: "white !important"
      }
    });
    createTheme = ({
      themeType,
      theme: theme2,
      className
    }) => {
      if (!themeType) {
        throw new Error("Theme type is required");
      }
      const mergedTheme = (0, import_lodash.default)(baseConfig.theme, theme2 || {});
      return createThemeBase(className || `${themeType}-theme`, mergedTheme);
    };
  }
});

// src/Theme/useSSR.tsx
var import_react3, isBrowser, useSSR, useSSR_default;
var init_useSSR = __esm({
  "src/Theme/useSSR.tsx"() {
    "use strict";
    init_define_process_env();
    import_react3 = require("react");
    isBrowser = () => {
      return Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
    };
    useSSR = () => {
      const [browser, setBrowser] = (0, import_react3.useState)(false);
      (0, import_react3.useEffect)(() => {
        setBrowser(isBrowser());
      }, []);
      return {
        isBrowser: browser,
        isServer: !browser
      };
    };
    useSSR_default = useSSR;
  }
});

// src/Theme/ThemeProvider.tsx
var import_react4, defaultAspectRatio, ThemeTypes, defaultContext, ThemeContext, HMSThemeProvider, useTheme;
var init_ThemeProvider = __esm({
  "src/Theme/ThemeProvider.tsx"() {
    "use strict";
    init_define_process_env();
    import_react4 = __toESM(require("react"));
    init_stitches_config();
    init_useSSR();
    defaultAspectRatio = {
      width: 1,
      height: 1
    };
    ThemeTypes = /* @__PURE__ */ ((ThemeTypes2) => {
      ThemeTypes2["default"] = "default";
      return ThemeTypes2;
    })(ThemeTypes || {});
    defaultContext = {
      themeType: "default" /* default */,
      theme,
      aspectRatio: { width: 1, height: 1 },
      toggleTheme: (_themeToUpdateTo) => {
        return;
      }
    };
    ThemeContext = import_react4.default.createContext(defaultContext);
    HMSThemeProvider = ({
      themeType,
      theme: userTheme,
      aspectRatio = defaultAspectRatio,
      children
    }) => {
      const systemTheme = "default" /* default */;
      const [currentTheme, setCurrentTheme] = (0, import_react4.useState)(themeType || systemTheme);
      const previousClassName = (0, import_react4.useRef)("");
      const { isBrowser: isBrowser2 } = useSSR_default();
      const updatedTheme = (0, import_react4.useMemo)(() => {
        const updatedTheme2 = createTheme({ themeType: currentTheme, theme: userTheme || {} });
        if (!isBrowser2) {
          return updatedTheme2;
        }
        if (previousClassName.current) {
          document.documentElement.classList.remove(previousClassName.current);
        }
        previousClassName.current = updatedTheme2.className;
        document.documentElement.classList.add(updatedTheme2);
        return updatedTheme2;
      }, [userTheme, currentTheme, isBrowser2]);
      const toggleTheme = (0, import_react4.useCallback)((themeToUpdateTo) => {
        if (themeToUpdateTo) {
          setCurrentTheme(themeToUpdateTo);
          return;
        }
        setCurrentTheme("default" /* default */);
      }, []);
      (0, import_react4.useEffect)(() => {
        if (themeType) {
          setCurrentTheme(themeType);
        }
      }, [themeType]);
      return /* @__PURE__ */ import_react4.default.createElement(
        ThemeContext.Provider,
        {
          value: { themeType: currentTheme, theme: updatedTheme, aspectRatio, toggleTheme }
        },
        children
      );
    };
    useTheme = () => import_react4.default.useContext(ThemeContext);
  }
});

// src/Theme/index.tsx
var init_Theme = __esm({
  "src/Theme/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_stitches_config();
    init_ThemeProvider();
  }
});

// src/Layout/Flex.tsx
var gapStyles, Flex;
var init_Flex = __esm({
  "src/Layout/Flex.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    gapStyles = (value) => {
      return {
        "& > * + *": {
          marginRight: "0",
          marginLeft: `${0.25 * value}rem`
        }
      };
    };
    Flex = styled("div", {
      display: "flex",
      variants: {
        justify: {
          start: {
            justifyContent: "flex-start"
          },
          end: {
            justifyContent: "flex-end"
          },
          center: {
            justifyContent: "center"
          },
          between: {
            justifyContent: "space-between"
          },
          around: {
            justifyContent: "space-around"
          },
          evenly: {
            justifyContent: "space-evenly"
          }
        },
        align: {
          start: {
            alignItems: "flex-start"
          },
          end: {
            alignItems: "flex-end"
          },
          center: {
            alignItems: "center"
          },
          baseline: {
            alignItems: "baseline"
          },
          strech: {
            alignItems: "stretch"
          }
        },
        direction: {
          row: {
            flexDirection: "row"
          },
          column: {
            flexDirection: "column"
          },
          rowReverse: {
            flexDirection: "row-reverse"
          },
          columnReverse: {
            flexDirection: "column-reverse"
          }
        },
        gap: {
          1: gapStyles(1),
          2: gapStyles(2),
          3: gapStyles(3),
          4: gapStyles(4)
        }
      }
    });
  }
});

// src/Layout/Box.tsx
var Box;
var init_Box = __esm({
  "src/Layout/Box.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    Box = styled("div", {});
  }
});

// src/Layout/index.tsx
var init_Layout = __esm({
  "src/Layout/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Flex();
    init_Box();
  }
});

// src/Loading/Loading.tsx
var import_react5, Loading;
var init_Loading = __esm({
  "src/Loading/Loading.tsx"() {
    "use strict";
    init_define_process_env();
    import_react5 = __toESM(require("react"));
    Loading = (_a7) => {
      var _b7 = _a7, { size = 24, color = "white" } = _b7, props = __objRest(_b7, ["size", "color"]);
      return /* @__PURE__ */ import_react5.default.createElement("svg", __spreadValues({ width: size, height: size, viewBox: "0 0 50 50", fill: color, xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "25", cy: "25", r: "20", stroke: color, strokeWidth: "4", strokeDasharray: "70 30", fill: "none" }, /* @__PURE__ */ import_react5.default.createElement(
        "animateTransform",
        {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          from: "0 25 25",
          to: "360 25 25",
          dur: "1s",
          repeatCount: "indefinite"
        }
      )));
    };
  }
});

// src/Loading/index.ts
var init_Loading2 = __esm({
  "src/Loading/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Loading();
  }
});

// src/utils/styles.ts
var flexCenter, textEllipsis;
var init_styles = __esm({
  "src/utils/styles.ts"() {
    "use strict";
    init_define_process_env();
    flexCenter = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    textEllipsis = (width) => ({
      maxWidth: width,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      minWidth: 0
    });
  }
});

// src/Button/Button.tsx
var import_react6, getOutlinedVariants, getButtonVariants, StyledButton, Button;
var init_Button = __esm({
  "src/Button/Button.tsx"() {
    "use strict";
    init_define_process_env();
    import_react6 = __toESM(require("react"));
    init_Layout();
    init_Loading2();
    init_Theme();
    init_styles();
    getOutlinedVariants = (base, hover, active, disabled, text, textDisabled) => {
      return {
        bg: "$transparent",
        border: `solid $space$px $colors${base}`,
        c: text,
        "&[disabled]": {
          c: textDisabled,
          bg: "$transparent",
          border: `solid $space$px $colors${disabled}`,
          cursor: "not-allowed"
        },
        "&:not([disabled]):hover": {
          border: `solid $space$px $colors${hover}`,
          bg: "$transparent"
        },
        "&:not([disabled]):active": {
          border: `solid $space$px $colors${active}`,
          bg: "$transparent"
        },
        "&:not([disabled]):focus-visible": {
          boxShadow: `0 0 0 3px $colors${base}`
        }
      };
    };
    getButtonVariants = (base, hover, active, disabled, text, textDisabled) => {
      return {
        bg: base,
        border: `1px solid ${base}`,
        c: text,
        "&[disabled]": {
          c: textDisabled,
          cursor: "not-allowed",
          bg: disabled,
          border: `1px solid ${disabled}`
        },
        "&:not([disabled]):hover": {
          bg: hover,
          border: `1px solid ${hover}`
        },
        "&:not([disabled]):active": {
          bg: active,
          border: `1px solid ${active}`
        },
        "&:not([disabled]):focus-visible": {
          boxShadow: `0 0 0 3px ${base}`
        }
      };
    };
    StyledButton = styled("button", __spreadProps(__spreadValues({}, flexCenter), {
      cursor: "pointer",
      fontFamily: "$sans",
      lineHeight: "inherit",
      textTransform: "none",
      position: "relative",
      outline: "none",
      border: "none",
      fs: "$md",
      r: "$1",
      backgroundColor: "$primary_default",
      fontWeight: "500",
      whiteSpace: "nowrap",
      p: "$4 $8",
      "-webkit-appearance": "button",
      "&:focus": {
        outline: "none"
      },
      "&:not([disabled]):focus-visible": {
        boxShadow: "0 0 0 3px $colors$primary_default"
      },
      transition: "all 0.2s  ease",
      compoundVariants: [
        {
          variant: "standard",
          outlined: true,
          css: getOutlinedVariants(
            "$secondary_default",
            "$secondary_bright",
            "$secondary_dim",
            "$secondary_disabled",
            "$on_surface_high",
            "$on_surface_low"
          )
        },
        {
          variant: "danger",
          outlined: true,
          css: getOutlinedVariants(
            "$alert_error_default",
            "$alert_error_bright",
            "$alert_error_dim",
            "$alert_error_brighter",
            "$on_surface_high",
            "$on_surface_low"
          )
        },
        {
          variant: "primary",
          outlined: true,
          css: getOutlinedVariants(
            "$primary_default",
            "$primary_bright",
            "$primary_dim",
            "$primary_disabled",
            "$on_surface_high",
            "$on_surface_low"
          )
        }
      ],
      variants: {
        variant: {
          standard: getButtonVariants(
            "$surface_brighter",
            "$surface_bright",
            "$surface_default",
            "$surface_dim",
            "$on_surface_high",
            "$on_surface_low"
          ),
          danger: getButtonVariants(
            "$alert_error_default",
            "$alert_error_bright",
            "$alert_error_dim",
            "$alert_error_dim",
            "$alert_error_brighter",
            "$on_primary_low"
          ),
          primary: getButtonVariants(
            "$primary_default",
            "$primary_bright",
            "$primary_dim",
            "$primary_disabled",
            "$on_primary_high",
            "$on_primary_low"
          )
        },
        outlined: {
          true: {}
        },
        icon: {
          true: {}
        }
      },
      defaultVariants: {
        variant: "primary"
      }
    }));
    Button = import_react6.default.forwardRef((_a7, ref) => {
      var _b7 = _a7, { children, loading = false, icon } = _b7, buttonProps = __objRest(_b7, ["children", "loading", "icon"]);
      return /* @__PURE__ */ import_react6.default.createElement(StyledButton, __spreadProps(__spreadValues({}, buttonProps), { ref }), /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, loading && /* @__PURE__ */ import_react6.default.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: { w: "100%", position: "absolute", left: "0", color: "$on_primary_low" }
        },
        /* @__PURE__ */ import_react6.default.createElement(Loading, { color: "currentColor" })
      ), /* @__PURE__ */ import_react6.default.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: { visibility: loading ? "hidden" : "visible", gap: icon ? "$4" : "0" }
        },
        children
      )));
    });
  }
});

// src/Button/index.tsx
var init_Button2 = __esm({
  "src/Button/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Button();
  }
});

// src/Text/Text.tsx
var textVariants, Text;
var init_Text = __esm({
  "src/Text/Text.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    textVariants = {
      h1: {
        fontWeight: "$semiBold",
        letterSpacing: "-1.5px",
        fontSize: "$h1",
        lineHeight: "$h1",
        "@md": {
          fontSize: "4.5rem",
          lineHeight: "4.75rem"
        }
      },
      h2: {
        fontSize: "$h2",
        lineHeight: "$h2",
        fontWeight: "$semiBold",
        letterSpacing: "-0.5px",
        "@md": {
          fontSize: "3rem",
          lineHeight: "3.25rem"
        }
      },
      h3: {
        fontSize: "$h3",
        lineHeight: "$h3",
        fontWeight: "$semiBold",
        "@md": {
          fontSize: "2.5rem",
          lineHeight: "2.75rem"
        }
      },
      h4: {
        fontSize: "$h4",
        lineHeight: "$h4",
        fontWeight: "$semiBold",
        letterSpacing: "0.25px",
        "@md": {
          fontSize: "1.75rem",
          lineHeight: "2rem"
        }
      },
      h5: {
        fontSize: "$h5",
        lineHeight: "$h5",
        fontWeight: "$semiBold",
        "@md": {
          fontSize: "1.5rem",
          lineHeight: "1.75rem"
        }
      },
      h6: {
        fontSize: "$h6",
        lineHeight: "$h6",
        fontWeight: "$semiBold",
        letterSpacing: "0.15px",
        "@md": {
          fontSize: "1.25rem",
          lineHeight: "1.5rem"
        }
      },
      sub1: {
        fontSize: "$md",
        lineHeight: "$h5",
        fontWeight: "$medium",
        letterSpacing: "0.15px"
      },
      sub2: {
        fontSize: "$sm",
        lineHeight: "$sm",
        fontWeight: "$medium",
        letterSpacing: "0.1px"
      },
      body1: {
        fontSize: "$md",
        lineHeight: "$h6",
        fontWeight: "$medium",
        letterSpacing: "0.1px"
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "$medium",
        letterSpacing: "0.25px"
      },
      button: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: "$semiBold",
        letterSpacing: "0.5px"
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: "1rem",
        letterSpacing: "0.4px",
        fontWeight: "$regular"
      },
      overline: {
        fontSize: "0.625rem",
        lineHeight: "1rem",
        letterSpacing: "1.5px",
        fontWeight: "$medium"
      },
      tiny: {
        fontSize: "$tiny",
        lineHeight: "$tiny"
      },
      xs: {
        fontSize: "$xs",
        lineHeight: "$xs"
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "$sm"
      },
      md: {
        fontSize: "$md",
        lineHeight: "$md"
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "$md",
        fontWeight: "$semiBold",
        letterSpacing: "0.15px"
      }
    };
    Text = styled("p", {
      fontFamily: "$sans",
      fontWeight: "$regular",
      margin: 0,
      color: "$on_surface_high",
      variants: {
        variant: textVariants,
        color: {
          white: {
            color: "$on_surface_high"
          }
        },
        inline: {
          true: {
            display: "inline"
          }
        }
      },
      defaultVariants: {
        variant: "md"
      }
    });
  }
});

// src/Text/index.tsx
var init_Text2 = __esm({
  "src/Text/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Text();
  }
});

// src/IconButton/IconButton.tsx
var IconButton;
var init_IconButton = __esm({
  "src/IconButton/IconButton.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    init_styles();
    IconButton = styled("button", __spreadProps(__spreadValues({}, flexCenter), {
      alignItems: "center",
      outline: "none",
      border: "none",
      padding: "$2",
      r: "$0",
      cursor: "pointer",
      backgroundColor: "transparent",
      color: "$on_surface_high",
      "&:not([disabled]):focus-visible": {
        boxShadow: "0 0 0 3px $colors$primary_default"
      },
      "&:not([disabled]):focus": {
        outline: "none"
      },
      "@media (hover: hover)": {
        "&:not([disabled]):hover": {
          backgroundColor: "$on_surface_low"
        }
      },
      "&[disabled]": {
        opacity: 0.5,
        cursor: "not-allowed"
      },
      "&:focus": {
        outline: "none"
      },
      variants: {
        active: {
          false: {
            backgroundColor: "$secondary_dim",
            color: "$on_primary_high",
            "&:not([disabled]):hover": {
              backgroundColor: "$secondary_default"
            }
          },
          true: {
            "&:not([disabled]):hover": {
              backgroundColor: "$on_surface_low"
            }
          }
        }
      }
    }));
  }
});

// src/IconButton/index.tsx
var init_IconButton2 = __esm({
  "src/IconButton/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_IconButton();
  }
});

// src/Avatar/getAvatarBg.ts
var getInitials, getAvatarBg, colorsList;
var init_getAvatarBg = __esm({
  "src/Avatar/getAvatarBg.ts"() {
    "use strict";
    init_define_process_env();
    getInitials = (name) => {
      var _a7, _b7, _c;
      if (!name) {
        return void 0;
      } else {
        return (_c = (_b7 = (_a7 = name.trim().match(/(^\S\S?|\b\S)?/g)) == null ? void 0 : _a7.join("")) == null ? void 0 : _b7.match(/(^\S|\S$)?/g)) == null ? void 0 : _c.join("").toUpperCase();
      }
    };
    getAvatarBg = (name) => {
      const initials = getInitials(name);
      const indexFactor = 20;
      const colorIndex = ((initials == null ? void 0 : initials.codePointAt(0)) || 0) % indexFactor + 1;
      return { initials: initials || "", color: colorsList[colorIndex - 1] };
    };
    colorsList = [
      "#616161",
      "#F44336",
      "#3F51B5",
      "#4CAF50",
      "#FFA000",
      "#795548",
      "#E91E63",
      "#2F80FF",
      "#8BC34A",
      "#F57C00",
      "#4E342E",
      "#9C27B0",
      "#00BCD4",
      "#C0CA33",
      "#F4511E",
      "#673AB7",
      "#009688",
      "#FBC02D",
      "#BF360C",
      "#455A64"
    ];
  }
});

// src/Avatar/Avatar.tsx
var import_react7, import_react_icons, getAvatarShape, StyledAvatar, Avatar;
var init_Avatar = __esm({
  "src/Avatar/Avatar.tsx"() {
    "use strict";
    init_define_process_env();
    import_react7 = __toESM(require("react"));
    import_react_icons = require("@100mslive/react-icons");
    init_Theme();
    init_getAvatarBg();
    init_styles();
    getAvatarShape = (radii) => ({
      borderRadius: radii
    });
    StyledAvatar = styled("div", __spreadProps(__spreadValues({}, flexCenter), {
      color: "$colors$on_primary_high",
      fontFamily: "$sans",
      aspectRatio: 1,
      fontWeight: 600,
      fontSize: "$space$9",
      variants: {
        shape: {
          circle: getAvatarShape("$round"),
          square: getAvatarShape("$1")
        },
        size: {
          small: {
            height: "$16 !important",
            fontSize: "$space$6"
          },
          medium: {
            height: "$18 !important",
            fontSize: "$space$10"
          },
          large: {
            height: "$20 !important",
            fontSize: "$space$12"
          }
        }
      },
      defaultVariants: {
        shape: "circle"
      }
    }));
    Avatar = (_a7) => {
      var _b7 = _a7, { name, css: css2 } = _b7, props = __objRest(_b7, ["name", "css"]);
      const { initials } = getAvatarBg(name);
      let { color } = getAvatarBg(name);
      if (!name) {
        color = "#7E47EB";
      }
      return /* @__PURE__ */ import_react7.default.createElement(StyledAvatar, __spreadValues({ css: __spreadValues({ bg: color }, css2) }, props), initials || /* @__PURE__ */ import_react7.default.createElement(import_react_icons.PersonIcon, { height: 40, width: 40 }));
    };
  }
});

// src/Avatar/index.ts
var init_Avatar2 = __esm({
  "src/Avatar/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Avatar();
  }
});

// src/Divider/Divider.tsx
var getVerticalSpace, getHorizontalSpace, VerticalDivider, HorizontalDivider;
var init_Divider = __esm({
  "src/Divider/Divider.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    getVerticalSpace = (space) => ({
      marginLeft: space,
      marginRight: space
    });
    getHorizontalSpace = (space) => ({
      marginTop: space,
      marginBottom: space
    });
    VerticalDivider = styled("span", {
      height: "25px",
      width: "1px",
      backgroundColor: "$border_bright",
      variants: {
        space: {
          1: getVerticalSpace("$1"),
          2: getVerticalSpace("$2"),
          3: getVerticalSpace("$3"),
          4: getVerticalSpace("$4")
        }
      },
      defaultVariants: {
        space: 1
      }
    });
    HorizontalDivider = styled("span", {
      height: "1px",
      width: "100%",
      display: "block",
      backgroundColor: "$border_bright",
      variants: {
        space: {
          1: getHorizontalSpace("$1"),
          2: getHorizontalSpace("$2"),
          3: getHorizontalSpace("$3"),
          4: getHorizontalSpace("$4")
        }
      },
      defaultVariants: {
        space: 1
      }
    });
  }
});

// src/Divider/index.ts
var init_Divider2 = __esm({
  "src/Divider/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Divider();
  }
});

// src/Switch/Switch.tsx
var import_react8, BaseSwitch, SwitchRoot, SwitchThumb, Switch;
var init_Switch = __esm({
  "src/Switch/Switch.tsx"() {
    "use strict";
    init_define_process_env();
    import_react8 = __toESM(require("react"));
    BaseSwitch = __toESM(require("@radix-ui/react-switch"));
    init_Theme();
    SwitchRoot = styled(BaseSwitch.Root, {
      all: "unset",
      width: "30px",
      height: "14px",
      border: "solid $space$px $secondary_default",
      borderRadius: "$3",
      p: "$2",
      position: "relative",
      cursor: "pointer",
      '&[data-state="checked"]': {
        backgroundColor: "$primary_default",
        border: "solid $space$px $primary_default"
      },
      "&:focus": {
        outline: "none"
      },
      "&[disabled]": {
        opacity: 0.5,
        cursor: "not-allowed"
      }
    });
    SwitchThumb = styled(BaseSwitch.Thumb, {
      display: "block",
      top: "3px",
      position: "absolute",
      width: "$md",
      height: "$md",
      backgroundColor: "$secondary_default",
      borderRadius: "$round",
      transition: "right 500ms ease-in",
      left: "$2",
      '&[data-state="checked"]': {
        left: "unset",
        right: "$2",
        backgroundColor: "$on_primary_high"
      }
    });
    Switch = (props) => /* @__PURE__ */ import_react8.default.createElement(SwitchRoot, __spreadValues({}, props), /* @__PURE__ */ import_react8.default.createElement(SwitchThumb, null));
    Switch.displayName = "Switch";
  }
});

// src/Switch/index.ts
var init_Switch2 = __esm({
  "src/Switch/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Switch();
  }
});

// src/utils/animations.ts
var slideDown, slideUp, translateAcross, dialogOpen, dialogClose, slideUpAndFade, slideRightAndFade, sheetSlideIn, sheetSlideOut, sheetFadeIn, sheetFadeOut, slideDownAndFade, slideLeftAndFade, slideLeftAndFadeOut, popoverAnimation, toastAnimation;
var init_animations = __esm({
  "src/utils/animations.ts"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    slideDown = (controller) => keyframes({
      from: { height: 0 },
      to: { height: `var(${controller})` }
    });
    slideUp = (controller) => keyframes({
      from: { height: `var(${controller})` },
      to: { height: 0 }
    });
    translateAcross = ({ xFrom = "0", yFrom = "0", zFrom = "0", xTo = "0", yTo = "0", zTo = "0" }) => keyframes({
      from: { transform: `translate3d(${xFrom}, ${yFrom}, ${zFrom})` },
      to: { transform: `translate3d(${xTo}, ${yTo}, ${zTo}` }
    });
    dialogOpen = keyframes({
      "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.90)" },
      "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
    });
    dialogClose = keyframes({
      "0%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
      "100%": { opacity: 0, transform: "translate(-50%, -48%) scale(.90)" }
    });
    slideUpAndFade = (start = "2px") => keyframes({
      "0%": { opacity: 0, transform: `translateY(${start})` },
      "100%": { opacity: 1, transform: "translateY(0)" }
    });
    slideRightAndFade = (start = "-2px") => keyframes({
      "0%": { opacity: 0, transform: `translateX(${start})` },
      "100%": { opacity: 1, transform: "translateX(0)" }
    });
    sheetSlideIn = keyframes({
      from: { transform: "$$transformValue" },
      to: { transform: "translate3d(0,0,0)" }
    });
    sheetSlideOut = keyframes({
      from: { transform: "translate3d(0,0,0)" },
      to: { transform: "$$transformValue" }
    });
    sheetFadeIn = keyframes({
      from: { opacity: "0" },
      to: { opacity: "1" }
    });
    sheetFadeOut = keyframes({
      from: { opacity: "1" },
      to: { opacity: "0" }
    });
    slideDownAndFade = (start = "-2px") => keyframes({
      "0%": { opacity: 0, transform: `translateY(${start})` },
      "100%": { opacity: 1, transform: "translateY(0)" }
    });
    slideLeftAndFade = (start = "2px") => keyframes({
      "0%": { opacity: 0, transform: `translateX(${start})` },
      "100%": { opacity: 1, transform: "translateX(0)" }
    });
    slideLeftAndFadeOut = (end = "-100%") => keyframes({
      "0%": { opacity: 1, transform: `translateX(0)` },
      "100%": { opacity: 0, transform: `translateX(${end})` }
    });
    popoverAnimation = {
      "@media (prefers-reduced-motion: no-preference)": {
        animationDuration: "400ms",
        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
        '&[data-state="open"]': {
          '&[data-side="top"]': { animationName: slideDownAndFade() },
          '&[data-side="right"]': { animationName: slideLeftAndFade() },
          '&[data-side="bottom"]': { animationName: slideUpAndFade() },
          '&[data-side="left"]': { animationName: slideRightAndFade() }
        }
      }
    };
    toastAnimation = {
      "@media (prefers-reduced-motion: no-preference)": {
        animationDuration: "500ms",
        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
        animationName: slideLeftAndFadeOut(),
        '&[data-state="open"]': {
          animationName: slideRightAndFade("-100%")
        },
        '&[data-swipe="move"]': {
          transform: "translateX(var(--radix-toast-swipe-move-x))"
        },
        '&[data-swipe="cancel"]': {
          transform: "translateX(0)",
          transition: "transform 200ms ease-out"
        },
        '&[data-swipe="end"]': {
          animation: `${slideLeftAndFadeOut()} 100ms ease-out forwards`
        }
      }
    };
  }
});

// src/utils/index.ts
var init_utils = __esm({
  "src/utils/index.ts"() {
    "use strict";
    init_define_process_env();
    init_animations();
    init_styles();
  }
});

// src/Tooltip/Tooltip.tsx
var import_react9, BaseTooltip, TooltipBox, TooltipTrigger, TooltipRoot, Tooltip;
var init_Tooltip = __esm({
  "src/Tooltip/Tooltip.tsx"() {
    "use strict";
    init_define_process_env();
    import_react9 = __toESM(require("react"));
    BaseTooltip = __toESM(require("@radix-ui/react-tooltip"));
    init_Theme();
    init_utils();
    TooltipBox = styled(BaseTooltip.Content, {
      fontFamily: "$sans",
      borderRadius: "$2",
      padding: "$2 $4",
      fontSize: "$xs",
      zIndex: 11,
      color: "$on_surface_high",
      backgroundColor: "$surface_bright",
      "@media (prefers-reduced-motion: no-preference)": {
        animationDuration: "400ms",
        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
        '&[data-state="delayed-open"]': {
          '&[data-side="top"]': { animationName: slideDownAndFade() },
          '&[data-side="right"]': { animationName: slideLeftAndFade() },
          '&[data-side="bottom"]': { animationName: slideUpAndFade() },
          '&[data-side="left"]': { animationName: slideRightAndFade() }
        }
      },
      variants: {
        outlined: {
          true: {
            backgroundColor: "$background_dim",
            border: "solid $space$px $border_bright"
          }
        }
      }
    });
    TooltipTrigger = styled(BaseTooltip.Trigger, {
      fontFamily: "$sans"
    });
    TooltipRoot = BaseTooltip.Root;
    Tooltip = ({
      children,
      title,
      triggerCss,
      boxCss,
      outlined = true,
      side = "bottom",
      align = "center",
      disabled = false,
      delayDuration = 200
    }) => {
      const [open, setOpen] = (0, import_react9.useState)(false);
      return /* @__PURE__ */ import_react9.default.createElement(BaseTooltip.Provider, null, /* @__PURE__ */ import_react9.default.createElement(TooltipRoot, { delayDuration, open: open && !disabled, onOpenChange: setOpen }, /* @__PURE__ */ import_react9.default.createElement(TooltipTrigger, { css: __spreadValues({}, triggerCss), asChild: true }, children), /* @__PURE__ */ import_react9.default.createElement(TooltipBox, { sideOffset: 10, side, align, outlined, css: __spreadValues({}, boxCss) }, title)));
    };
  }
});

// src/Tooltip/index.ts
var init_Tooltip2 = __esm({
  "src/Tooltip/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Tooltip();
  }
});

// src/Select/Select.tsx
var import_react10, import_react_icons2, Root3, SelectRoot, Arrow, DefaultDownIcon, Select;
var init_Select = __esm({
  "src/Select/Select.tsx"() {
    "use strict";
    init_define_process_env();
    import_react10 = __toESM(require("react"));
    import_react_icons2 = require("@100mslive/react-icons");
    init_Theme();
    Root3 = styled("div", {
      color: "$on_primary_high",
      display: "inline-flex",
      position: "relative",
      outline: "none",
      overflow: "hidden",
      borderRadius: "$1",
      backgroundColor: "$surface_default",
      maxWidth: "100%"
    });
    SelectRoot = styled("select", {
      h: "$16",
      fontSize: "$md",
      fontWeight: "500",
      lineHeight: "inherit",
      textTransform: "none",
      appearance: "none",
      color: "$on_secondary_high",
      padding: "5px",
      paddingLeft: "12px",
      paddingRight: "30px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "$secondary_default",
      "&:not([disabled]):focus-visible": {
        boxShadow: "0 0 0 3px $colors$primary_default"
      },
      "&[disabled]": {
        opacity: 0.5,
        cursor: "not-allowed"
      }
    });
    Arrow = styled("span", {
      color: "$on_secondary_high",
      width: "30px",
      height: "100%",
      position: "absolute",
      right: 0,
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      transition: "border .2s ease 0s"
    });
    DefaultDownIcon = (_a7) => {
      var props = __objRest(_a7, []);
      return /* @__PURE__ */ import_react10.default.createElement(Arrow, __spreadValues({}, props), /* @__PURE__ */ import_react10.default.createElement(import_react_icons2.ChevronDownIcon, null));
    };
    Select = {
      Root: Root3,
      DownIcon: Arrow,
      DefaultDownIcon,
      Select: SelectRoot
    };
  }
});

// src/Select/index.ts
var init_Select2 = __esm({
  "src/Select/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Select();
  }
});

// src/Slider/Slider.tsx
var import_react11, BaseSlider, Root5, Track2, Range2, Thumb3, Slider;
var init_Slider = __esm({
  "src/Slider/Slider.tsx"() {
    "use strict";
    init_define_process_env();
    import_react11 = __toESM(require("react"));
    BaseSlider = __toESM(require("@radix-ui/react-slider"));
    init_Theme();
    init_Tooltip2();
    Root5 = styled(BaseSlider.Root, {
      position: "relative",
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      touchAction: "none",
      width: "100%",
      '&[data-orientation="horizontal"]': {
        height: 20
      }
    });
    Track2 = styled(BaseSlider.Track, {
      backgroundColor: "$surface_bright",
      position: "relative",
      flexGrow: 1,
      borderRadius: "$round",
      cursor: "pointer",
      '&[data-orientation="horizontal"]': { height: 3 }
    });
    Range2 = styled(BaseSlider.Range, {
      position: "absolute",
      backgroundColor: "$primary_default",
      borderRadius: "$round",
      height: "100%"
    });
    Thumb3 = styled(BaseSlider.Thumb, {
      all: "unset",
      display: "block",
      width: "$8",
      height: "$8",
      backgroundColor: "$primary_default",
      cursor: "pointer",
      boxShadow: `0 2px 10px $colors$surface_default`,
      borderRadius: 10,
      "&:hover": { backgroundColor: "$primary_default" },
      "&:focus": { boxShadow: "none" }
    });
    Slider = (_a7) => {
      var _b7 = _a7, {
        showTooltip = true,
        thumbStyles
      } = _b7, props = __objRest(_b7, [
        "showTooltip",
        "thumbStyles"
      ]);
      var _a8;
      return /* @__PURE__ */ import_react11.default.createElement(Root5, __spreadValues({}, props), /* @__PURE__ */ import_react11.default.createElement(Track2, null, /* @__PURE__ */ import_react11.default.createElement(Range2, null)), showTooltip ? /* @__PURE__ */ import_react11.default.createElement(Tooltip, { title: String((_a8 = props.value) == null ? void 0 : _a8[0]) }, /* @__PURE__ */ import_react11.default.createElement(Thumb3, { css: thumbStyles })) : /* @__PURE__ */ import_react11.default.createElement(Thumb3, { css: thumbStyles }));
    };
  }
});

// src/Slider/index.ts
var init_Slider2 = __esm({
  "src/Slider/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Slider();
  }
});

// src/Modal/DialogContent.tsx
var import_react12, DialogPrimitive, import_react_icons3, DialogClose, StyledDialogTrigger, CustomDialogOverlay, StyledDialogPortal, CustomDialogContent, DialogTitle, DialogDescription, DialogDefaultCloseIcon;
var init_DialogContent = __esm({
  "src/Modal/DialogContent.tsx"() {
    "use strict";
    init_define_process_env();
    import_react12 = __toESM(require("react"));
    DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
    import_react_icons3 = require("@100mslive/react-icons");
    init_IconButton2();
    init_Theme();
    init_animations();
    DialogClose = styled(DialogPrimitive.Close, {
      backgroundColor: "transparent",
      padding: "0",
      margin: "0",
      border: "none",
      backgroundImage: "none"
    });
    StyledDialogTrigger = styled(DialogPrimitive.Trigger, {
      appearance: "none !important"
      // Needed for safari it shows white overlay
    });
    CustomDialogOverlay = styled(DialogPrimitive.Overlay, {
      backgroundColor: "rgba(0, 0, 0, 0.5);",
      position: "absolute",
      inset: 0
    });
    StyledDialogPortal = styled(DialogPrimitive.Portal, {});
    CustomDialogContent = styled(DialogPrimitive.Content, {
      color: "$on_surface_medium",
      backgroundColor: "$surface_default",
      borderRadius: "8px",
      position: "absolute",
      top: "50%",
      left: "50%",
      border: "$space$px solid $border_bright",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      transform: "translate(-50%, -50%)",
      zIndex: 999,
      padding: "$12",
      "@allowMotion": {
        '&[data-state="open"]': {
          animation: `${dialogOpen} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
        },
        '&[data-state="closed"]': {
          animation: `${dialogClose} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
        }
      },
      "&:focus": { outline: "none" }
    });
    DialogTitle = styled(DialogPrimitive.Title, {
      margin: 0
    });
    DialogDescription = styled(DialogPrimitive.Description, {});
    DialogDefaultCloseIcon = (props) => /* @__PURE__ */ import_react12.default.createElement(DialogClose, { asChild: true }, /* @__PURE__ */ import_react12.default.createElement(IconButton, __spreadValues({}, props), /* @__PURE__ */ import_react12.default.createElement(import_react_icons3.CrossIcon, null)));
  }
});

// src/context/DialogContext.tsx
function DialogContainerProvider({
  children,
  dialogContainerSelector
}) {
  return /* @__PURE__ */ import_react13.default.createElement(DialogContainerContext.Provider, { value: dialogContainerSelector }, children);
}
var import_react13, DialogContainerContext;
var init_DialogContext = __esm({
  "src/context/DialogContext.tsx"() {
    "use strict";
    init_define_process_env();
    import_react13 = __toESM(require("react"));
    DialogContainerContext = (0, import_react13.createContext)("");
  }
});

// src/hooks/useDialogContainerSelector.tsx
function useDialogContainerSelector() {
  const dialogContainerSelector = (0, import_react14.useContext)(DialogContainerContext);
  return dialogContainerSelector;
}
var import_react14;
var init_useDialogContainerSelector = __esm({
  "src/hooks/useDialogContainerSelector.tsx"() {
    "use strict";
    init_define_process_env();
    import_react14 = require("react");
    init_DialogContext();
  }
});

// src/Modal/Dialog.tsx
var import_react15, import_react_dialog, import_react16, StyledDialog, CustomDialogPortal, Dialog;
var init_Dialog = __esm({
  "src/Modal/Dialog.tsx"() {
    "use strict";
    init_define_process_env();
    import_react15 = __toESM(require("react"));
    import_react_dialog = require("@radix-ui/react-dialog");
    import_react16 = require("@stitches/react");
    init_DialogContent();
    init_useDialogContainerSelector();
    StyledDialog = (0, import_react16.styled)(import_react_dialog.Root, {});
    CustomDialogPortal = ({ children, container }) => {
      const dialogContainerSelector = useDialogContainerSelector();
      const containerRef = (0, import_react15.useRef)(null);
      if (container) {
        containerRef.current = container;
      } else if (dialogContainerSelector && !containerRef.current) {
        containerRef.current = document.querySelector(dialogContainerSelector);
      } else if (!containerRef.current) {
        containerRef.current = document.body;
      }
      return /* @__PURE__ */ import_react15.default.createElement(StyledDialogPortal, { container: containerRef.current }, /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, children));
    };
    Dialog = {
      Root: StyledDialog,
      Trigger: StyledDialogTrigger,
      Overlay: CustomDialogOverlay,
      Content: CustomDialogContent,
      Title: DialogTitle,
      Description: DialogDescription,
      Close: DialogClose,
      DefaultClose: DialogDefaultCloseIcon,
      Portal: CustomDialogPortal
    };
  }
});

// src/Modal/index.ts
var init_Modal = __esm({
  "src/Modal/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Dialog();
  }
});

// src/Input/Input.tsx
var import_react17, import_react_icons4, Input, PasswordRoot, PasswordShowIcon, PasswordCopyIcon, PasswordIcons, ReactInput, PasswordInput;
var init_Input = __esm({
  "src/Input/Input.tsx"() {
    "use strict";
    init_define_process_env();
    import_react17 = __toESM(require("react"));
    import_react_icons4 = require("@100mslive/react-icons");
    init_Layout();
    init_Theme();
    Input = styled("input", {
      fontFamily: "$sans",
      lineHeight: "inherit",
      backgroundColor: "$surface_default",
      borderRadius: "8px",
      outline: "none",
      border: "1px solid $border_default",
      padding: "0.5rem 0.75rem",
      minHeight: "30px",
      color: "$on_surface_high",
      fontSize: "$md",
      "&:focus": {
        boxShadow: "0 0 0 1px $colors$primary_default",
        border: "1px solid transparent"
      },
      "&::placeholder": {
        color: "$on_surface_medium"
      },
      variants: {
        alert_error_default: {
          true: {
            "&:focus": {
              boxShadow: "0 0 0 3px $colors$alert_error_default"
            }
          }
        }
      }
    });
    PasswordRoot = styled("div", {
      w: "100%",
      position: "relative",
      display: "flex"
    });
    PasswordShowIcon = (_a7) => {
      var _b7 = _a7, {
        showPassword,
        css: css2
      } = _b7, props = __objRest(_b7, [
        "showPassword",
        "css"
      ]);
      return /* @__PURE__ */ import_react17.default.createElement(Flex, __spreadValues({ css: __spreadValues({}, css2) }, props), showPassword ? /* @__PURE__ */ import_react17.default.createElement(import_react_icons4.EyeOpenIcon, null) : /* @__PURE__ */ import_react17.default.createElement(import_react_icons4.EyeCloseIcon, null));
    };
    PasswordCopyIcon = (_a7) => {
      var _b7 = _a7, { css: css2 } = _b7, props = __objRest(_b7, ["css"]);
      return /* @__PURE__ */ import_react17.default.createElement(Flex, __spreadValues({ css: __spreadValues({}, css2) }, props), /* @__PURE__ */ import_react17.default.createElement(import_react_icons4.CopyIcon, null));
    };
    PasswordIcons = import_react17.default.forwardRef(
      (_a7, ref) => {
        var _b7 = _a7, { css: css2 } = _b7, props = __objRest(_b7, ["css"]);
        return /* @__PURE__ */ import_react17.default.createElement(
          Flex,
          __spreadValues({
            css: __spreadValues({
              position: "absolute",
              top: 0,
              height: "100%",
              zIndex: 10,
              right: "$4",
              bg: "$surface_bright",
              alignItems: "center"
            }, css2),
            ref
          }, props),
          props.children
        );
      }
    );
    ReactInput = import_react17.default.forwardRef((_a7, ref) => {
      var _b7 = _a7, { showPassword = false, css: css2 } = _b7, props = __objRest(_b7, ["showPassword", "css"]);
      return /* @__PURE__ */ import_react17.default.createElement(
        Input,
        __spreadProps(__spreadValues({
          css: __spreadValues({ flexGrow: 1, width: "100%" }, css2),
          type: showPassword ? "text" : "password"
        }, props), {
          ref
        })
      );
    });
    PasswordInput = {
      Root: PasswordRoot,
      Icons: PasswordIcons,
      Input: ReactInput,
      ShowIcon: PasswordShowIcon,
      CopyIcon: PasswordCopyIcon
    };
  }
});

// src/Input/index.tsx
var init_Input2 = __esm({
  "src/Input/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Input();
  }
});

// src/VideoTile/StyledVideoTile.tsx
var Root7, Container, Overlay2, Info, AttributeBox, AudioIndicator, FullScreenButton, AvatarContainer, StyledVideoTile;
var init_StyledVideoTile = __esm({
  "src/VideoTile/StyledVideoTile.tsx"() {
    "use strict";
    init_define_process_env();
    init_Layout();
    init_Theme();
    init_utils();
    Root7 = styled("div", {
      padding: "0.75rem"
      // show videotile context menu on hover
      // [`&:hover .tile-menu`]: {
      //   display: 'inline-block',
      // },
    });
    Container = styled("div", {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      borderRadius: "$2",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "$background_default",
      variants: {
        transparentBg: {
          true: {
            background: "transparent"
          }
        },
        noRadius: {
          true: {
            borderRadius: 0
          }
        }
      }
    });
    Overlay2 = styled("div", {
      position: "absolute",
      width: "100%",
      height: "100%"
    });
    Info = styled("div", {
      color: "$on_primary_high",
      position: "absolute",
      bottom: "5px",
      left: "50%",
      fontSize: "$sm",
      transform: "translateX(-50%)",
      textAlign: "center",
      width: "80%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontFamily: "$sans"
    });
    AttributeBox = styled("div", __spreadProps(__spreadValues({
      position: "absolute",
      top: "$4",
      color: "$on_secondary_high",
      bg: "$secondary_dim",
      borderRadius: "$round",
      width: "$14",
      height: "$14",
      mb: "5px"
    }, flexCenter), {
      variants: {
        size: {
          small: {
            width: "$10",
            height: "$10",
            "& > svg": {
              width: "$8",
              height: "$8"
            }
          },
          medium: {
            width: "$13",
            height: "$13"
          }
        },
        position: {
          left: { left: "$4" },
          right: { right: "$4" }
        }
      },
      defaultVariants: {
        size: "medium",
        position: "left"
      }
    }));
    AudioIndicator = styled(AttributeBox, { defaultVariants: { position: "right" } });
    FullScreenButton = styled("button", {
      width: "2.25rem",
      height: "2.25rem",
      color: "$on_surface_high",
      borderRadius: "$round",
      backgroundColor: "$surface_default",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "$2",
      right: "$2",
      zIndex: 5,
      "&:not([disabled]):focus": {
        outline: "none",
        boxShadow: "0 0 0 3px $colors$primary_bright"
      }
    });
    AvatarContainer = styled(Box, __spreadProps(__spreadValues({}, flexCenter), {
      flexDirection: "column",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      width: "40%",
      height: "40%",
      "& > div": {
        maxHeight: "$20",
        height: "100%"
      }
    }));
    StyledVideoTile = {
      Root: Root7,
      Container,
      Overlay: Overlay2,
      Info,
      AvatarContainer,
      AttributeBox,
      AudioIndicator,
      FullScreenButton
    };
  }
});

// src/VideoTile/index.tsx
var init_VideoTile = __esm({
  "src/VideoTile/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_StyledVideoTile();
  }
});

// src/VideoList/videoListUtils.tsx
var getLeft;
var init_videoListUtils = __esm({
  "src/VideoList/videoListUtils.tsx"() {
    "use strict";
    init_define_process_env();
    getLeft = (index, currentPageIndex) => {
      if (index === currentPageIndex) {
        return 0;
      }
      if (index + 1 === currentPageIndex) {
        return "-100%";
      }
      if (index - 1 === currentPageIndex) {
        return "100%";
      }
      if (index < currentPageIndex) {
        return "-200%";
      }
      return "200%";
    };
  }
});

// src/VideoList/StyledVideoList.tsx
var Root8, Container2, View, StyledVideoList;
var init_StyledVideoList = __esm({
  "src/VideoList/StyledVideoList.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    Root8 = styled("div", {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column"
    });
    Container2 = styled("div", {
      height: "100%",
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    });
    View = styled("div", {
      height: "100%",
      width: "100%",
      position: "absolute",
      display: "flex",
      placeContent: "center",
      flexWrap: "wrap",
      alignItems: "center"
    });
    StyledVideoList = {
      Root: Root8,
      Container: Container2,
      View
    };
  }
});

// src/VideoList/index.tsx
var init_VideoList = __esm({
  "src/VideoList/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_videoListUtils();
    init_StyledVideoList();
  }
});

// src/Pagination/StyledPagination.tsx
var Root9, Chevron, Dots, Dot, StyledPagination;
var init_StyledPagination = __esm({
  "src/Pagination/StyledPagination.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    Root9 = styled("div", {
      height: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      "& > * + *": {
        marginRight: "0",
        marginLeft: "0.5rem"
      }
    });
    Chevron = styled("button", {
      color: "$on_surface_high",
      "&:focus": {
        outline: "none"
      },
      "&[disabled]": {
        color: "$on_surface_low",
        cursor: "not-allowed"
      },
      backgroundColor: "transparent",
      display: "flex"
    });
    Dots = styled("div", {
      display: "flex",
      alignItems: "center",
      "& > * + *": {
        marginRight: "0",
        marginLeft: "0.5rem"
      }
    });
    Dot = styled("button", {
      "&:focus": {
        outline: "none"
      },
      borderRadius: "9999px",
      width: "0.5rem",
      height: "0.5rem",
      backgroundColor: "$on_surface_low",
      padding: "0px",
      border: "none",
      cursor: "pointer",
      variants: {
        active: {
          true: {
            backgroundColor: "$on_surface_high"
          }
        }
      }
    });
    StyledPagination = {
      Root: Root9,
      Chevron,
      Dots,
      Dot
    };
  }
});

// src/Pagination/index.tsx
var init_Pagination = __esm({
  "src/Pagination/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_StyledPagination();
  }
});

// src/Dropdown/Dropdown.tsx
var import_react_dropdown_menu, DropdownRoot, DropdownTrigger, DropdownTriggerItem, DropdownItem, DropdownItemSeparator, DropdownContent, DropdownLabel, DropdownGroup, DropdownSubMenu, DropdownSubMenuContent, DropdownCheckboxItem, DropdownItemIndicator, Dropdown;
var init_Dropdown = __esm({
  "src/Dropdown/Dropdown.tsx"() {
    "use strict";
    init_define_process_env();
    import_react_dropdown_menu = require("@radix-ui/react-dropdown-menu");
    init_Theme();
    DropdownRoot = styled(import_react_dropdown_menu.Root, {});
    DropdownTrigger = styled(import_react_dropdown_menu.Trigger, {
      cursor: "pointer",
      appearance: "none !important",
      '&[data-state="open"]': {
        backgroundColor: "$surface_bright"
      },
      "&:focus": {
        outline: "none"
      },
      "&:focus-visible": {
        boxShadow: "0 0 0 3px $colors$primary_default"
      }
    });
    DropdownTriggerItem = styled(import_react_dropdown_menu.SubTrigger, {
      w: "100%",
      color: "$on_surface_high",
      p: "$8",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
        bg: "$surface_brighter"
      },
      "&:focus-visible": {
        bg: "$surface_brighter",
        outline: "none"
      }
    });
    DropdownItem = styled(import_react_dropdown_menu.Item, {
      color: "$on_surface_high",
      p: "$8",
      display: "flex",
      alignItems: "center",
      outline: "none",
      backgroundColor: "$surface_dim",
      "&:hover": {
        cursor: "pointer",
        bg: "$surface_bright"
      },
      "&:focus-visible": {
        bg: "$surface_bright"
      }
    });
    DropdownItemSeparator = styled(import_react_dropdown_menu.Separator, {
      h: 1,
      backgroundColor: "$border_bright",
      m: "$4 $8"
    });
    DropdownContent = styled(import_react_dropdown_menu.Content, {
      w: "$80",
      maxHeight: "$64",
      r: "$1",
      py: "$4",
      backgroundColor: "$surface_dim",
      overflowY: "auto",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      zIndex: 20,
      fontFamily: "$sans"
    });
    DropdownLabel = styled(import_react_dropdown_menu.Label, {
      display: "flex",
      alignItems: "center",
      h: "$12",
      w: "100%",
      p: "$8 $4"
    });
    DropdownGroup = styled(import_react_dropdown_menu.Group, {});
    DropdownSubMenu = styled(import_react_dropdown_menu.Sub, {});
    DropdownSubMenuContent = styled(import_react_dropdown_menu.SubContent, {
      w: "$80",
      maxHeight: "$64",
      r: "$1",
      py: "$4",
      backgroundColor: "$surface_bright",
      overflowY: "auto",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      zIndex: 20
    });
    DropdownCheckboxItem = styled(import_react_dropdown_menu.CheckboxItem, {
      color: "$on_surface_high",
      p: "$8",
      display: "flex",
      alignItems: "center",
      outline: "none",
      "&:hover": {
        cursor: "pointer",
        bg: "$surface_brighter"
      },
      "&:focus-visible": {
        bg: "$surface_brighter"
      },
      gap: "$2"
    });
    DropdownItemIndicator = styled(import_react_dropdown_menu.ItemIndicator, {
      w: "$10",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    });
    Dropdown = {
      Root: DropdownRoot,
      Trigger: DropdownTrigger,
      TriggerItem: DropdownTriggerItem,
      Content: DropdownContent,
      Portal: import_react_dropdown_menu.Portal,
      SubMenu: DropdownSubMenu,
      SubMenuContent: DropdownSubMenuContent,
      Item: DropdownItem,
      Label: DropdownLabel,
      Group: DropdownGroup,
      ItemSeparator: DropdownItemSeparator,
      CheckboxItem: DropdownCheckboxItem,
      ItemIndicator: DropdownItemIndicator
    };
  }
});

// src/Dropdown/index.tsx
var init_Dropdown2 = __esm({
  "src/Dropdown/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Dropdown();
  }
});

// src/Video/Video.tsx
var import_react18, import_react_sdk, StyledVideo, Video;
var init_Video = __esm({
  "src/Video/Video.tsx"() {
    "use strict";
    init_define_process_env();
    import_react18 = __toESM(require("react"));
    import_react_sdk = require("@100mslive/react-sdk");
    init_Theme();
    StyledVideo = styled("video", {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "$2",
      objectFit: "cover",
      background: "$background_default",
      variants: {
        mirror: {
          true: {
            transform: "scaleX(-1)"
          }
        },
        screenShare: {
          true: {
            objectFit: "contain"
          }
        },
        degraded: {
          // send the video behind when it's degraded so avatar can show on top of it. Video will be stuck frame in this case.
          // not hiding by using display none, because it will lead it to be detached as it will no longer be in view.
          true: {
            zIndex: -100
          }
        },
        noRadius: {
          true: {
            borderRadius: 0
          }
        }
      },
      defaultVariants: {
        mirror: false
      }
    });
    Video = (_a7) => {
      var _b7 = _a7, { trackId, attach } = _b7, props = __objRest(_b7, ["trackId", "attach"]);
      const { videoRef } = (0, import_react_sdk.useVideo)({ trackId, attach });
      return /* @__PURE__ */ import_react18.default.createElement(StyledVideo, __spreadValues({ autoPlay: true, muted: true, playsInline: true, controls: false, ref: videoRef }, props));
    };
  }
});

// src/Video/index.tsx
var init_Video2 = __esm({
  "src/Video/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Video();
  }
});

// src/TileMenu/StyledMenuTile.tsx
var Popover, Root12, StyledTrigger, StyledContent, styledItem, StyledItemButton, StyledVolumeItem, Flex2, RemoveMenuItem, StyledMenuTile;
var init_StyledMenuTile = __esm({
  "src/TileMenu/StyledMenuTile.tsx"() {
    "use strict";
    init_define_process_env();
    Popover = __toESM(require("@radix-ui/react-popover"));
    init_Theme();
    init_animations();
    init_styles();
    Root12 = Popover.Root;
    StyledTrigger = styled(Popover.Trigger, __spreadProps(__spreadValues({
      position: "absolute",
      bottom: "$2",
      right: "$2",
      zIndex: 10,
      width: "$13",
      height: "$13",
      color: "$on_surface_high",
      borderRadius: "$2",
      backgroundColor: "$surface_bright",
      cursor: "pointer",
      border: "none"
    }, flexCenter), {
      "&:not([disabled]):focus": {
        outline: "none",
        boxShadow: "0 0 0 3px $colors$primary_bright"
      }
    }));
    StyledContent = styled(Popover.Content, __spreadValues({
      fontFamily: "$sans",
      backgroundColor: "$surface_dim",
      padding: "$5 0",
      display: "flex",
      flexDirection: "column",
      borderRadius: "$space$6",
      zIndex: 11,
      width: "$60"
    }, popoverAnimation));
    styledItem = {
      fontSize: "$sm",
      color: "$on_surface_high",
      display: "flex",
      alignItems: "center",
      padding: "$4 $6",
      width: "100%",
      backgroundColor: "$menuBg"
    };
    StyledItemButton = styled("button", __spreadProps(__spreadValues({}, styledItem), {
      height: "$14",
      "&:hover": {
        backgroundColor: "$surface_brighter"
      },
      cursor: "pointer",
      // TODO: default focus applied cause issues with this style
      "&:focus": {
        outline: "none"
        // backgroundColor: '$grey3',
      },
      "& > * + *": {
        marginRight: "0",
        marginLeft: "$4"
      }
    }));
    StyledVolumeItem = styled("div", __spreadProps(__spreadValues({}, styledItem), {
      alignItems: "start",
      flexDirection: "column",
      marginBottom: "0"
    }));
    Flex2 = styled("div", {
      display: "flex",
      "& > * + *": {
        marginRight: "0",
        marginLeft: "$4"
      }
    });
    RemoveMenuItem = styled(StyledItemButton, {
      color: "$alert_error_default",
      borderTop: "1px solid $border_bright"
    });
    StyledMenuTile = {
      Root: Root12,
      Trigger: StyledTrigger,
      Content: StyledContent,
      ItemButton: StyledItemButton,
      VolumeItem: StyledVolumeItem,
      RemoveItem: RemoveMenuItem
    };
  }
});

// src/TileMenu/index.tsx
var init_TileMenu = __esm({
  "src/TileMenu/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_StyledMenuTile();
  }
});

// src/AudioLevel/useBorderAudioLevel.tsx
function useBorderAudioLevel(audioTrackId) {
  const { theme: theme2 } = useTheme();
  const color = theme2.colors.primary_default.value;
  const getStyle = (0, import_react19.useCallback)(
    (level) => {
      const style = {
        transition: "outline 0.4s ease-in-out"
      };
      style["outline"] = level ? `${sigmoid(level) * 4}px solid ${color}` : "0px solid transparent";
      return style;
    },
    [color]
  );
  const ref = (0, import_react19.useRef)(null);
  (0, import_react_sdk2.useAudioLevelStyles)({
    trackId: audioTrackId,
    getStyle,
    ref
  });
  return ref;
}
var import_react19, import_react_sdk2, sigmoid;
var init_useBorderAudioLevel = __esm({
  "src/AudioLevel/useBorderAudioLevel.tsx"() {
    "use strict";
    init_define_process_env();
    import_react19 = require("react");
    import_react_sdk2 = require("@100mslive/react-sdk");
    init_Theme();
    sigmoid = (z) => {
      return 1 / (1 + Math.exp(-z));
    };
  }
});

// src/AudioLevel/audio-level.png
var audio_level_default;
var init_audio_level = __esm({
  "src/AudioLevel/audio-level.png"() {
    audio_level_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAtUExURQAAAP///////////////////////////////////////////////////////6FIq5sAAAAOdFJOUwA/QJqbnJ2euLnc3d7+2IFKrQAAAa9JREFUaN7dmcFRxDAMRXNgW4AbV24ZSkgrlAAFUAqlpITtgT0QnB22BnY3iWXHSlYz5H/NoJNO8bP8JTlyVW1k923/MveYdnc623PuUe3jsux37tEDcN24eFR7HJb9TD2qvQ/LfqUexR7a41Xx7bDsMfWo2j+NlnpU7TsBiOKdAOqoeCcAUTwFYFK8pn0GgFLttWVxAEq1pwJo1Z4KoFV7KoBW7YEAT0uK729pfxuAZcX/3Fr2TwAx05cVDwWIu11RPBQg7lZ0XlR7JIDsdkXxCIDp5GXf2v0GBxBP3pTfAIB48qb83h7AWtlhANbKDgOwVnYYgLWywwCsn/u/AO5HMIqwcwOovdNwLESNG8BQioNfKa52YwBsakC04/MF9C1Rw4HdjhU1SCyKqOCvZCGLhXgMgKgGiUWRI9hr+aSG+bU8sP4LyliIxwW4xOI1j8pKZlB/Tjt794ANpKzdAzOgaOzdAzKiCVpmkACWM4MEIFVCyQzfQWXnPao9eA+rG+dxfXB8L1jNB4pN+bCfd4re59Gqoz9alflQ+zzb7ZROwTWlUziEIO8UZCs7hc1+AbiVW6XSE8knAAAAAElFTkSuQmCC";
  }
});

// src/AudioLevel/AudioLevel.tsx
var import_react20, import_react_sdk3, positionValues, barAnimation, AudioBar, AudioLevel;
var init_AudioLevel = __esm({
  "src/AudioLevel/AudioLevel.tsx"() {
    "use strict";
    init_define_process_env();
    import_react20 = __toESM(require("react"));
    import_react_sdk3 = require("@100mslive/react-sdk");
    init_Layout();
    init_Theme();
    init_audio_level();
    positionValues = new Array(101).fill(0).reduce((acc, _, index) => {
      acc[index] = Math.round(index / 100 * 4) / 4;
      return acc;
    }, {});
    barAnimation = keyframes({
      from: {
        maskSize: "4em .8em",
        "-webkit-mask-position-y": ".1em",
        maskPosition: "initial .1em"
      },
      "50%": {
        maskSize: "4em 1em",
        "-webkit-mask-position-y": 0,
        maskPosition: "initial 0"
      },
      to: {
        maskSize: "4em .8em",
        "-webkit-mask-position-y": ".1em",
        maskPosition: "initial 0.1em"
      }
    });
    AudioBar = () => {
      return /* @__PURE__ */ import_react20.default.createElement(
        Box,
        {
          css: {
            width: ".25em",
            height: "1em",
            maskImage: `url(${audio_level_default})`,
            "-webkit-mask-repeat": "no-repeat",
            backgroundColor: "$on_primary_high",
            maskSize: "4em 1em"
          }
        }
      );
    };
    AudioLevel = ({ trackId, size }) => {
      const ref = (0, import_react20.useRef)(null);
      const vanillaStore = (0, import_react_sdk3.useHMSVanillaStore)();
      (0, import_react20.useEffect)(() => {
        const unsubscribe = vanillaStore.subscribe((audioLevel) => {
          if (ref.current) {
            let index = 0;
            for (const child of ref.current.children) {
              const positionX = `-${positionValues[audioLevel] * (index === 1 ? 2.5 : 1.25)}em`;
              child.style["-webkit-mask-position-x"] = positionX;
              child.style["mask-position"] = `${positionX} 0`;
              child.style["animation"] = positionValues[audioLevel] > 0 ? `${barAnimation} 0.6s steps(3,jump-none) 0s infinite` : "none";
              index++;
            }
          }
        }, (0, import_react_sdk3.selectTrackAudioByID)(trackId));
        return unsubscribe;
      }, [vanillaStore, trackId]);
      return /* @__PURE__ */ import_react20.default.createElement(
        Flex,
        {
          ref,
          css: {
            fontSize: size === "small" ? "0.75rem" : "1rem",
            gap: size === "small" ? "$1" : "$2"
          }
        },
        /* @__PURE__ */ import_react20.default.createElement(AudioBar, null),
        /* @__PURE__ */ import_react20.default.createElement(AudioBar, null),
        /* @__PURE__ */ import_react20.default.createElement(AudioBar, null)
      );
    };
  }
});

// src/AudioLevel/index.ts
var init_AudioLevel2 = __esm({
  "src/AudioLevel/index.ts"() {
    "use strict";
    init_define_process_env();
    init_useBorderAudioLevel();
    init_AudioLevel();
  }
});

// src/Popover/index.tsx
var import_react_popover, StyledContent2, StyledArrow, StyledTrigger2, Popover2;
var init_Popover = __esm({
  "src/Popover/index.tsx"() {
    "use strict";
    init_define_process_env();
    import_react_popover = require("@radix-ui/react-popover");
    init_Theme();
    init_animations();
    StyledContent2 = styled(import_react_popover.Content, __spreadValues({
      padding: "$6",
      borderRadius: "$2",
      backgroundColor: "$background_default",
      boxShadow: "$sm",
      zIndex: 12
    }, popoverAnimation));
    StyledArrow = styled(import_react_popover.Arrow, __spreadValues({}, popoverAnimation));
    StyledTrigger2 = styled(import_react_popover.Trigger, {});
    Popover2 = {
      Root: import_react_popover.Popover,
      Content: StyledContent2,
      Trigger: StyledTrigger2,
      Portal: import_react_popover.Portal,
      Arrow: StyledArrow,
      Close: import_react_popover.Close
    };
  }
});

// src/Stats/formatBytes.ts
var formatBytes;
var init_formatBytes = __esm({
  "src/Stats/formatBytes.ts"() {
    "use strict";
    init_define_process_env();
    formatBytes = (bytes, unit = "B", decimals = 2) => {
      if (bytes === 0) {
        return `0 ${unit}`;
      }
      if (!bytes) {
        return "-";
      }
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"].map((size) => size + unit);
      let i = Math.floor(Math.log(bytes) / Math.log(k));
      i === 0 && i++;
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    };
  }
});

// src/Stats/StyledStats.tsx
var Root14, Table, Row, Label2, Value, Gap, Stats;
var init_StyledStats = __esm({
  "src/Stats/StyledStats.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    Root14 = styled("div", {
      backgroundColor: "rgba(0,0,0,0.75)",
      position: "absolute",
      top: "$3",
      left: "$3",
      zIndex: 7,
      borderRadius: "$2",
      padding: "$2",
      fontSize: "$xs",
      overflowY: "auto",
      maxHeight: "75%",
      maxWidth: "85%"
    });
    Table = styled("table", {});
    Row = styled("tr", {
      width: "100%",
      "& > * + *": {
        px: "$4"
      },
      whiteSpace: "nowrap",
      textAlign: "left"
    });
    Label2 = styled("td", {
      color: "$on_primary_high",
      fontWeight: "$regular"
    });
    Value = styled("td", {
      color: "$on_primary_high"
    });
    Gap = styled("tr", {
      height: "$4"
    });
    Stats = {
      Root: Root14,
      Row,
      Label: Label2,
      Value,
      Table,
      Gap
    };
  }
});

// src/Stats/Stats.tsx
function VideoTileStats({ videoTrackID, audioTrackID, peerID, isLocal = false }) {
  var _a7, _b7, _c;
  const audioSelector = isLocal ? import_react_sdk4.selectHMSStats.localAudioTrackStatsByID : import_react_sdk4.selectHMSStats.trackStatsByID;
  const audioTrackStats = (0, import_react_sdk4.useHMSStatsStore)(audioSelector(audioTrackID));
  const localVideoTrackStats = (0, import_react_sdk4.useHMSStatsStore)(import_react_sdk4.selectHMSStats.localVideoTrackStatsByID(videoTrackID));
  const remoteVideoTrackStats = (0, import_react_sdk4.useHMSStatsStore)(import_react_sdk4.selectHMSStats.trackStatsByID(videoTrackID));
  const videoTrackStats = isLocal ? localVideoTrackStats == null ? void 0 : localVideoTrackStats[0] : remoteVideoTrackStats;
  const downlinkScore = (_a7 = (0, import_react_sdk4.useHMSStore)((0, import_react_sdk4.selectConnectionQualityByPeerID)(peerID))) == null ? void 0 : _a7.downlinkQuality;
  const availableOutgoingBitrate = (0, import_react_sdk4.useHMSStatsStore)(import_react_sdk4.selectHMSStats.availablePublishBitrate);
  if (!(audioTrackStats || videoTrackStats)) {
    return null;
  }
  return /* @__PURE__ */ import_react21.default.createElement(Stats.Root, null, /* @__PURE__ */ import_react21.default.createElement("table", null, /* @__PURE__ */ import_react21.default.createElement("tbody", null, isLocal ? /* @__PURE__ */ import_react21.default.createElement(import_react21.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(availableOutgoingBitrate),
      label: "AOBR",
      tooltip: "Available Outgoing Bitrate",
      value: formatBytes(availableOutgoingBitrate, "b/s")
    }
  ), localVideoTrackStats == null ? void 0 : localVideoTrackStats.map((stat) => {
    var _a8, _b8;
    if (!stat) {
      return null;
    }
    const layer = stat.rid ? import_react_sdk4.simulcastMapping[stat.rid] : "";
    return /* @__PURE__ */ import_react21.default.createElement(import_react21.Fragment, null, layer && /* @__PURE__ */ import_react21.default.createElement(StatsRow, { label: layer.toUpperCase(), value: "" }), /* @__PURE__ */ import_react21.default.createElement(
      StatsRow,
      {
        show: isNotNullishAndNot0(stat.frameWidth),
        label: "Width",
        value: (_a8 = stat.frameWidth) == null ? void 0 : _a8.toString()
      }
    ), /* @__PURE__ */ import_react21.default.createElement(
      StatsRow,
      {
        show: isNotNullishAndNot0(stat.frameHeight),
        label: "Height",
        value: (_b8 = stat.frameHeight) == null ? void 0 : _b8.toString()
      }
    ), /* @__PURE__ */ import_react21.default.createElement(
      StatsRow,
      {
        show: isNotNullishAndNot0(stat.framesPerSecond),
        label: "FPS",
        value: `${stat.framesPerSecond} ${isNotNullishAndNot0(stat.framesDropped) ? `(${stat.framesDropped} dropped)` : ""}`
      }
    ), /* @__PURE__ */ import_react21.default.createElement(
      StatsRow,
      {
        show: isNotNullish(stat.bitrate),
        label: "Bitrate(V)",
        value: formatBytes(stat.bitrate, "b/s")
      }
    ), /* @__PURE__ */ import_react21.default.createElement(Stats.Gap, null));
  })) : /* @__PURE__ */ import_react21.default.createElement(import_react21.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(videoTrackStats == null ? void 0 : videoTrackStats.frameWidth),
      label: "Width",
      value: (_b7 = videoTrackStats == null ? void 0 : videoTrackStats.frameWidth) == null ? void 0 : _b7.toString()
    }
  ), /* @__PURE__ */ import_react21.default.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(videoTrackStats == null ? void 0 : videoTrackStats.frameHeight),
      label: "Height",
      value: (_c = videoTrackStats == null ? void 0 : videoTrackStats.frameHeight) == null ? void 0 : _c.toString()
    }
  ), /* @__PURE__ */ import_react21.default.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(videoTrackStats == null ? void 0 : videoTrackStats.framesPerSecond),
      label: "FPS",
      value: `${videoTrackStats == null ? void 0 : videoTrackStats.framesPerSecond} ${isNotNullishAndNot0(videoTrackStats == null ? void 0 : videoTrackStats.framesDropped) ? `(${videoTrackStats == null ? void 0 : videoTrackStats.framesDropped} dropped)` : ""}`
    }
  ), /* @__PURE__ */ import_react21.default.createElement(
    StatsRow,
    {
      show: isNotNullish(videoTrackStats == null ? void 0 : videoTrackStats.bitrate),
      label: "Bitrate(V)",
      value: formatBytes(videoTrackStats == null ? void 0 : videoTrackStats.bitrate, "b/s")
    }
  )), /* @__PURE__ */ import_react21.default.createElement(
    StatsRow,
    {
      show: isNotNullish(audioTrackStats == null ? void 0 : audioTrackStats.bitrate),
      label: "Bitrate(A)",
      value: formatBytes(audioTrackStats == null ? void 0 : audioTrackStats.bitrate, "b/s")
    }
  ), /* @__PURE__ */ import_react21.default.createElement(StatsRow, { show: isNotNullish(downlinkScore), label: "Downlink", value: downlinkScore }), /* @__PURE__ */ import_react21.default.createElement(StatsRow, { show: isNotNullish(videoTrackStats == null ? void 0 : videoTrackStats.codec), label: "Codec(V)", value: videoTrackStats == null ? void 0 : videoTrackStats.codec }), /* @__PURE__ */ import_react21.default.createElement(StatsRow, { show: isNotNullish(audioTrackStats == null ? void 0 : audioTrackStats.codec), label: "Codec(A)", value: audioTrackStats == null ? void 0 : audioTrackStats.codec }), /* @__PURE__ */ import_react21.default.createElement(PacketLostAndJitter, { audioTrackStats, videoTrackStats }))));
}
function isNotNullishAndNot0(value) {
  return isNotNullish(value) && value !== 0;
}
function isNotNullish(value) {
  return value !== void 0 && value !== null;
}
var import_react21, import_react_sdk4, PacketLostAndJitter, TrackPacketsLostRow, RawStatsRow, StatsRow;
var init_Stats = __esm({
  "src/Stats/Stats.tsx"() {
    "use strict";
    init_define_process_env();
    import_react21 = __toESM(require("react"));
    import_react_sdk4 = require("@100mslive/react-sdk");
    init_Tooltip2();
    init_formatBytes();
    init_StyledStats();
    PacketLostAndJitter = ({
      audioTrackStats,
      videoTrackStats
    }) => {
      var _a7, _b7;
      const isLocalPeer = (audioTrackStats == null ? void 0 : audioTrackStats.type.includes("outbound")) || (videoTrackStats == null ? void 0 : videoTrackStats.type.includes("outbound"));
      const audioStats = isLocalPeer ? audioTrackStats == null ? void 0 : audioTrackStats.remote : audioTrackStats;
      const videoStats = isLocalPeer ? videoTrackStats == null ? void 0 : videoTrackStats.remote : videoTrackStats;
      return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(TrackPacketsLostRow, { label: "Packet Loss(V)", stats: videoStats }), /* @__PURE__ */ import_react21.default.createElement(TrackPacketsLostRow, { label: "Packet Loss(A)", stats: audioStats }), /* @__PURE__ */ import_react21.default.createElement(StatsRow, { show: isNotNullish(videoStats == null ? void 0 : videoStats.jitter), label: "Jitter(V)", value: (_a7 = videoStats == null ? void 0 : videoStats.jitter) == null ? void 0 : _a7.toFixed(4) }), /* @__PURE__ */ import_react21.default.createElement(StatsRow, { show: isNotNullish(audioStats == null ? void 0 : audioStats.jitter), label: "Jitter(A)", value: (_b7 = audioStats == null ? void 0 : audioStats.jitter) == null ? void 0 : _b7.toFixed(4) }));
    };
    TrackPacketsLostRow = ({
      stats,
      label
    }) => {
      const packetsLostRate = `${(stats == null ? void 0 : stats.packetsLostRate) ? stats.packetsLostRate.toFixed(2) : 0}/s`;
      return /* @__PURE__ */ import_react21.default.createElement(
        StatsRow,
        {
          show: isNotNullishAndNot0(stats == null ? void 0 : stats.packetsLost),
          label,
          value: `${stats == null ? void 0 : stats.packetsLost}(${packetsLostRate})`
        }
      );
    };
    RawStatsRow = ({
      label = "",
      value = "",
      tooltip = "",
      show = true
    }) => {
      const statsLabel = /* @__PURE__ */ import_react21.default.createElement(Stats.Label, { css: { fontWeight: !value ? "$semiBold" : "$regular" } }, label);
      return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, show ? /* @__PURE__ */ import_react21.default.createElement(Stats.Row, null, tooltip ? /* @__PURE__ */ import_react21.default.createElement(Tooltip, { side: "top", title: tooltip }, statsLabel) : statsLabel, value === "" ? /* @__PURE__ */ import_react21.default.createElement(Stats.Value, null) : /* @__PURE__ */ import_react21.default.createElement(Stats.Value, null, value)) : null);
    };
    StatsRow = import_react21.default.memo(RawStatsRow);
  }
});

// src/Stats/index.tsx
var init_Stats2 = __esm({
  "src/Stats/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Stats();
  }
});

// src/Checkbox/Checkbox.tsx
var CheckboxPrimitive, CheckboxRoot, CheckboxIndicator, Checkbox;
var init_Checkbox = __esm({
  "src/Checkbox/Checkbox.tsx"() {
    "use strict";
    init_define_process_env();
    CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
    init_Theme();
    CheckboxRoot = styled(CheckboxPrimitive.Root, {
      all: "unset",
      border: "1px solid $primary_default",
      backgroundColor: "$on_primary_high",
      width: "$8",
      height: "$8",
      borderRadius: "$0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none",
      outline: "none",
      cursor: "pointer",
      "&:focus": {
        boxShadow: "none",
        outline: "none"
      },
      '&[data-state="checked"]': {
        backgroundColor: "$primary_default"
      }
    });
    CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
      color: "$on_primary_high"
    });
    Checkbox = {
      Root: CheckboxRoot,
      Indicator: CheckboxIndicator
    };
  }
});

// src/Checkbox/index.tsx
var init_Checkbox2 = __esm({
  "src/Checkbox/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Checkbox();
  }
});

// src/Label/Label.tsx
var LabelPrimitive, Label3;
var init_Label = __esm({
  "src/Label/Label.tsx"() {
    "use strict";
    init_define_process_env();
    LabelPrimitive = __toESM(require("@radix-ui/react-label"));
    init_Theme();
    Label3 = styled(LabelPrimitive.Root, {
      fontFamily: "$sans",
      fontSize: "$md",
      color: "$on_primary_high"
    });
  }
});

// src/Label/index.ts
var init_Label2 = __esm({
  "src/Label/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Label();
  }
});

// src/RadioGroup/RadioGroup.tsx
var RadioGroupPrimitive, RadioGroupRoot, RadioGroupItem, RadioGroupIndicator, RadioGroup;
var init_RadioGroup = __esm({
  "src/RadioGroup/RadioGroup.tsx"() {
    "use strict";
    init_define_process_env();
    RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));
    init_Theme();
    RadioGroupRoot = styled(RadioGroupPrimitive.Root, {
      display: "flex",
      alignItems: "center"
    });
    RadioGroupItem = styled(RadioGroupPrimitive.Item, {
      bg: "$on_primary_high",
      width: "$8",
      height: "$8",
      border: "1px solid $primary_default",
      cursor: "pointer",
      borderRadius: "$round",
      "&:focus": {
        boxShadow: "none",
        outline: "none"
      },
      '&[data-state="checked"]': {
        borderWidth: "$space$2",
        p: "$1"
      }
    });
    RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
      bg: "$primary_default"
    });
    RadioGroup = {
      Root: RadioGroupRoot,
      Item: RadioGroupItem,
      Indicator: RadioGroupIndicator
    };
  }
});

// src/RadioGroup/index.tsx
var init_RadioGroup2 = __esm({
  "src/RadioGroup/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_RadioGroup();
  }
});

// src/Toast/Toast.tsx
var import_react22, ToastPrimitives, import_react_icons5, getToastVariant, ToastRoot, ToastTitle, ToastDescription, ToastClose, ToastAction, ToastViewport, DefaultClose, HMSToast, Toast;
var init_Toast = __esm({
  "src/Toast/Toast.tsx"() {
    "use strict";
    init_define_process_env();
    import_react22 = __toESM(require("react"));
    ToastPrimitives = __toESM(require("@radix-ui/react-toast"));
    import_react_icons5 = require("@100mslive/react-icons");
    init_IconButton2();
    init_Layout();
    init_Text2();
    init_Theme();
    init_utils();
    getToastVariant = (base) => {
      return {
        borderLeftColor: base,
        borderLeft: 0,
        "&:before": {
          position: "absolute",
          top: "-1px",
          left: "-$4",
          width: "$8",
          borderLeft: `solid $space$px ${base}`,
          borderTop: `solid $space$px ${base}`,
          borderBottom: `solid $space$px ${base}`,
          borderTopLeftRadius: "$3",
          borderBottomLeftRadius: "$3",
          bg: base,
          content: " ",
          height: "100%",
          zIndex: 10
        },
        "@sm": {
          "&:before": {
            content: "none"
          },
          border: `solid $space$px ${base}`
        }
      };
    };
    ToastRoot = styled(ToastPrimitives.Root, __spreadProps(__spreadValues({
      r: "$3",
      bg: "$surface_default",
      p: "$10",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      fontFamily: "$sans",
      border: "solid $space$px $border_bright",
      overflow: "hidden"
    }, toastAnimation), {
      "@sm": {
        p: "$8 $11"
      },
      variants: {
        variant: {
          standard: getToastVariant("$secondary_default"),
          warning: getToastVariant("$alert_warning"),
          error: getToastVariant("$alert_error_default"),
          success: getToastVariant("$alert_success")
        }
      },
      defaultVariants: {
        variant: "standard"
      }
    }));
    ToastTitle = styled(ToastPrimitives.Title, {
      fontSize: "$md",
      color: "$on_surface_high",
      fontWeight: "$semiBold",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    });
    ToastDescription = styled(ToastPrimitives.Description, {
      color: "$on_surface_medium"
    });
    ToastClose = styled(ToastPrimitives.Close, {});
    ToastAction = styled(ToastPrimitives.Action, {
      cursor: "pointer",
      background: "none"
    });
    ToastViewport = styled(ToastPrimitives.Viewport, {
      position: "fixed",
      bottom: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      padding: "$8",
      gap: 10,
      width: 390,
      "@sm": {
        width: "100%",
        padding: "$6"
      },
      maxWidth: "100vw",
      margin: 0,
      listStyle: "none",
      zIndex: 1e3
    });
    DefaultClose = ({ css: css2 }) => {
      return /* @__PURE__ */ import_react22.default.createElement(ToastClose, { css: css2, asChild: true }, /* @__PURE__ */ import_react22.default.createElement(IconButton, null, /* @__PURE__ */ import_react22.default.createElement(import_react_icons5.CrossIcon, null)));
    };
    HMSToast = (_a7) => {
      var _b7 = _a7, {
        title,
        description,
        isClosable = true,
        icon,
        action,
        inlineAction = false
      } = _b7, props = __objRest(_b7, [
        "title",
        "description",
        "isClosable",
        "icon",
        "action",
        "inlineAction"
      ]);
      return /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null, /* @__PURE__ */ import_react22.default.createElement(ToastRoot, __spreadValues({}, props), /* @__PURE__ */ import_react22.default.createElement(ToastTitle, null, /* @__PURE__ */ import_react22.default.createElement(Flex, { align: "center", css: { gap: "$4", flex: "1 1 0", minWidth: 0 } }, icon ? /* @__PURE__ */ import_react22.default.createElement(Box, { css: { w: "$10", h: "$10", alignSelf: "start", mt: "$2" } }, icon) : null, /* @__PURE__ */ import_react22.default.createElement(Text, { variant: "sub1", css: { c: "inherit", wordBreak: "break-word" } }, title)), isClosable ? /* @__PURE__ */ import_react22.default.createElement(DefaultClose, null) : null, !isClosable && inlineAction && action ? /* @__PURE__ */ import_react22.default.createElement(ToastAction, { altText: `${title}Action` }, action) : null), description ? /* @__PURE__ */ import_react22.default.createElement(ToastDescription, null, /* @__PURE__ */ import_react22.default.createElement(Text, { variant: "body1", css: { fontWeight: "$regular", c: "$on_surface_medium" } }, description)) : null, !inlineAction && action ? /* @__PURE__ */ import_react22.default.createElement(ToastAction, { altText: `${title}Action`, css: { mt: "$10" } }, action) : null));
    };
    Toast = {
      Provider: ToastPrimitives.Provider,
      Root: ToastRoot,
      Title: ToastTitle,
      Description: ToastDescription,
      Close: DefaultClose,
      Action: ToastAction,
      Viewport: ToastViewport,
      HMSToast
    };
  }
});

// src/Toast/index.tsx
var init_Toast2 = __esm({
  "src/Toast/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Toast();
  }
});

// src/Accordion/Accordion.tsx
var import_react23, BaseAccordion, import_react_icons6, StyledAccordion, StyledItem, StyledHeader, StyledTrigger3, StyledContent3, StyledChevron, AccordionRoot, AccordionItem, AccordionHeader, AccordionContent;
var init_Accordion = __esm({
  "src/Accordion/Accordion.tsx"() {
    "use strict";
    init_define_process_env();
    import_react23 = __toESM(require("react"));
    BaseAccordion = __toESM(require("@radix-ui/react-accordion"));
    import_react_icons6 = require("@100mslive/react-icons");
    init_Layout();
    init_Theme();
    init_utils();
    StyledAccordion = styled(BaseAccordion.Root, {});
    StyledItem = styled(BaseAccordion.Item, {
      marginTop: "$px",
      display: "block",
      "&:first-child": {
        marginTop: 0,
        borderTopLeftRadius: "$0",
        borderTopRightRadius: "$0"
      },
      "&:last-child": {
        borderBottomLeftRadius: "$4",
        borderBottomRightRadius: "$4"
      }
    });
    StyledHeader = styled(BaseAccordion.Header, {
      all: "unset",
      display: "flex",
      fontFamily: "$sans"
    });
    StyledTrigger3 = styled(BaseAccordion.Trigger, {
      all: "unset",
      fontFamily: "$sans",
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "$md",
      lineHeight: "$md",
      color: "$on_surface_high"
    });
    StyledContent3 = styled(BaseAccordion.Content, {
      display: "contents",
      fontSize: "$md",
      fontFamily: "$sans",
      color: "$on_surface_medium",
      '&[data-state="open"]': {
        animation: `${slideDown("--radix-accordion-content-height")} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
      },
      '&[data-state="closed"]': {
        animation: `${slideUp("--radix-accordion-content-height")} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
      }
    });
    StyledChevron = styled(import_react_icons6.ChevronUpIcon, {
      color: "$on_primary_high",
      transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      "[data-state=closed] &": { transform: "rotate(180deg)" }
    });
    AccordionRoot = StyledAccordion;
    AccordionItem = StyledItem;
    AccordionHeader = import_react23.default.forwardRef((_a7, forwardedRef) => {
      var _b7 = _a7, { children, iconStyles, css: css2 } = _b7, props = __objRest(_b7, ["children", "iconStyles", "css"]);
      return /* @__PURE__ */ import_react23.default.createElement(StyledHeader, { css: css2 }, /* @__PURE__ */ import_react23.default.createElement(StyledTrigger3, __spreadProps(__spreadValues({}, props), { ref: forwardedRef }), children, /* @__PURE__ */ import_react23.default.createElement(StyledChevron, { "aria-hidden": true, css: iconStyles })));
    });
    AccordionContent = import_react23.default.forwardRef(
      (_a7, forwardedRef) => {
        var _b7 = _a7, { children, contentStyles } = _b7, props = __objRest(_b7, ["children", "contentStyles"]);
        return /* @__PURE__ */ import_react23.default.createElement(StyledContent3, __spreadProps(__spreadValues({}, props), { ref: forwardedRef }), /* @__PURE__ */ import_react23.default.createElement(Box, { css: contentStyles }, children));
      }
    );
  }
});

// src/Accordion/index.ts
var Accordion;
var init_Accordion2 = __esm({
  "src/Accordion/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Accordion();
    Accordion = {
      Root: AccordionRoot,
      Item: AccordionItem,
      Content: AccordionContent,
      Header: AccordionHeader
    };
  }
});

// src/Fieldset/Fieldset.tsx
var StyledFieldset, Fieldset;
var init_Fieldset = __esm({
  "src/Fieldset/Fieldset.tsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    StyledFieldset = styled("fieldset", {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "none",
      backgroundColor: "$transparent"
    });
    Fieldset = StyledFieldset;
  }
});

// src/Fieldset/index.tsx
var init_Fieldset2 = __esm({
  "src/Fieldset/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Fieldset();
  }
});

// src/Footer/Footer.tsx
var Root20, Left, Center, Right, Footer;
var init_Footer = __esm({
  "src/Footer/Footer.tsx"() {
    "use strict";
    init_define_process_env();
    init_Layout();
    init_Theme();
    Root20 = styled(Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      py: "$4",
      position: "relative",
      height: "100%",
      "@md": { flexWrap: "wrap", gap: "$4" }
    });
    Left = styled(Flex, {
      alignItems: "center",
      position: "absolute",
      left: "$10",
      gap: "$8",
      "@md": {
        position: "unset",
        justifyContent: "center",
        w: "100%"
      }
    });
    Center = styled(Flex, {
      w: "100%",
      justifyContent: "center",
      alignItems: "center",
      gap: "$8"
    });
    Right = styled(Flex, {
      alignItems: "center",
      position: "absolute",
      right: "$10",
      gap: "$8",
      "@md": {
        display: "none"
      }
    });
    Footer = {
      Root: Root20,
      Left,
      Center,
      Right
    };
  }
});

// src/Footer/index.tsx
var init_Footer2 = __esm({
  "src/Footer/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Footer();
  }
});

// src/ReactSelect/ReactSelect.tsx
var SelectPrimitive, StyledRoot, StyledTrigger4, StyledContent4, StyledViewport, StyledItem2, StyledLabel, StyledSeparator, StyledItemIndicator, scrollButtonStyles, StyledScrollUpButton, StyledScrollDownButton, Select2;
var init_ReactSelect = __esm({
  "src/ReactSelect/ReactSelect.tsx"() {
    "use strict";
    init_define_process_env();
    SelectPrimitive = __toESM(require("@radix-ui/react-select"));
    init_Theme();
    StyledRoot = styled(SelectPrimitive.Root, {});
    StyledTrigger4 = styled(SelectPrimitive.SelectTrigger, {
      all: "unset",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "$2",
      padding: "$8",
      lineHeight: "$px",
      gap: "$8",
      backgroundColor: "$secondary_default",
      color: "$on_primary_high",
      fontSize: "$8",
      cursor: "pointer",
      r: "$1"
    });
    StyledContent4 = styled(SelectPrimitive.Content, {
      overflow: "hidden",
      backgroundColor: "$surface_bright",
      r: "$1",
      h: "$80"
    });
    StyledViewport = styled(SelectPrimitive.Viewport, {
      padding: "$3"
    });
    StyledItem2 = styled(SelectPrimitive.Item, {
      all: "unset",
      fontSize: "$7",
      r: "$1",
      display: "flex",
      p: "$4 $8",
      w: "$52",
      position: "relative",
      userSelect: "none",
      cursor: "pointer"
    });
    StyledLabel = styled(SelectPrimitive.Label, {
      p: "$4 $8",
      lineHeight: "$10",
      color: "$on_primary_high"
    });
    StyledSeparator = styled(SelectPrimitive.Separator, {
      height: "$px",
      backgroundColor: "$on_primary_high",
      margin: "$4",
      opacity: 0.4
    });
    StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
      position: "absolute",
      right: "$8",
      width: "$8",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "$on_primary_high"
    });
    scrollButtonStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: "$4",
      backgroundColor: "$surface_bright",
      color: "$on_primary_high",
      cursor: "default"
    };
    StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);
    StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);
    Select2 = {
      Root: StyledRoot,
      Trigger: StyledTrigger4,
      Content: StyledContent4,
      Viewport: StyledViewport,
      Item: StyledItem2,
      Label: StyledLabel,
      Separator: StyledSeparator,
      ItemIndicator: StyledItemIndicator,
      ScrollUpButton: StyledScrollUpButton,
      ScrollDownButton: StyledScrollDownButton,
      Value: SelectPrimitive.Value,
      Icon: SelectPrimitive.Icon,
      ItemText: SelectPrimitive.ItemText,
      Group: SelectPrimitive.Group
    };
  }
});

// src/ReactSelect/index.ts
var ReactSelect_exports = {};
__export(ReactSelect_exports, {
  Select: () => Select2
});
var init_ReactSelect2 = __esm({
  "src/ReactSelect/index.ts"() {
    "use strict";
    init_define_process_env();
    init_ReactSelect();
  }
});

// src/Tabs/Tabs.tsx
var TabsPrimitive, StyledTabsRoot, StyledList, StyledTrigger5, StyledContent5, Tabs;
var init_Tabs = __esm({
  "src/Tabs/Tabs.tsx"() {
    "use strict";
    init_define_process_env();
    TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
    init_Theme();
    StyledTabsRoot = styled(TabsPrimitive.Root, {
      display: "flex"
    });
    StyledList = styled(TabsPrimitive.List, {
      flexShrink: 0,
      display: "flex"
    });
    StyledTrigger5 = styled(TabsPrimitive.Trigger, {
      all: "unset",
      fontFamily: "$sans",
      p: "$8",
      display: "flex",
      alignItems: "center",
      fontSize: "$sm",
      lineHeight: "$sm",
      color: "$on_surface_high",
      userSelect: "none",
      cursor: "pointer",
      '&[data-state="active"]': {
        bg: "$surface_brighter",
        r: "$1"
      }
    });
    StyledContent5 = styled(TabsPrimitive.Content, {
      flex: "1 1 0",
      padding: "$10",
      outline: "none"
    });
    Tabs = {
      Root: StyledTabsRoot,
      List: StyledList,
      Content: StyledContent5,
      Trigger: StyledTrigger5
    };
  }
});

// src/Tabs/index.tsx
var init_Tabs2 = __esm({
  "src/Tabs/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Tabs();
  }
});

// src/QRCode/QRCode.tsx
var import_react24, import_qrcode, QRCode;
var init_QRCode = __esm({
  "src/QRCode/QRCode.tsx"() {
    "use strict";
    init_define_process_env();
    import_react24 = __toESM(require("react"));
    import_qrcode = require("qrcode.react");
    QRCode = (props) => {
      return /* @__PURE__ */ import_react24.default.createElement(import_qrcode.QRCodeSVG, __spreadValues({ style: { width: "100%", height: "100%" } }, props));
    };
  }
});

// src/QRCode/index.tsx
var init_QRCode2 = __esm({
  "src/QRCode/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_QRCode();
  }
});

// src/Link/Link.tsx
var import_react25, icons, LinkComponent, Link;
var init_Link = __esm({
  "src/Link/Link.tsx"() {
    "use strict";
    init_define_process_env();
    import_react25 = __toESM(require("react"));
    icons = __toESM(require("@100mslive/react-icons"));
    init_Layout();
    init_Text2();
    init_Theme();
    LinkComponent = styled("a", {
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "$5",
      variants: {
        color: {
          highEmp: {
            color: "$on_surface_high",
            "&:hover": {
              color: "$on_surface_medium"
            }
          },
          primary: {
            color: "$primary_default",
            "&:hover": {
              color: "$primary_bright"
            }
          }
        }
      }
    });
    Link = (_a7) => {
      var _b7 = _a7, { iconSide = "left", icon, color = "primary", children } = _b7, rest = __objRest(_b7, ["iconSide", "icon", "color", "children"]);
      const Icon3 = icon ? icons[icon] : import_react25.default.Fragment;
      const renderedIcon = icon ? /* @__PURE__ */ import_react25.default.createElement(Flex, { as: "span" }, /* @__PURE__ */ import_react25.default.createElement(Icon3, { height: 13.33, width: 13.33 }), " ") : null;
      return /* @__PURE__ */ import_react25.default.createElement(LinkComponent, __spreadProps(__spreadValues({}, rest), { color }), iconSide === "left" && renderedIcon, /* @__PURE__ */ import_react25.default.createElement(Text, { as: "span", variant: "body2", css: { color: "inherit" } }, children), iconSide === "right" && renderedIcon);
    };
  }
});

// src/Link/index.tsx
var init_Link2 = __esm({
  "src/Link/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Link();
  }
});

// src/Collapsible/Collapsible.tsx
var import_react_collapsible, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, Collapsible;
var init_Collapsible = __esm({
  "src/Collapsible/Collapsible.tsx"() {
    "use strict";
    init_define_process_env();
    import_react_collapsible = require("@radix-ui/react-collapsible");
    init_Theme();
    init_utils();
    CollapsibleRoot = styled(import_react_collapsible.Root, {});
    CollapsibleTrigger = styled(import_react_collapsible.Trigger, {
      cursor: "pointer",
      appearance: "none !important",
      "&:focus": {
        outline: "none"
      },
      "&:focus-visible": {
        boxShadow: "0 0 0 3px $colors$primary_default"
      }
    });
    CollapsibleContent = styled(import_react_collapsible.Content, {
      w: "$80",
      r: "$1",
      overflowY: "auto",
      '&[data-state="open"]': {
        animation: `${slideDown("--radix-collapsible-content-height")} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
      },
      '&[data-state="closed"]': {
        animation: `${slideUp("--radix-collapsible-content-height")} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
      }
    });
    Collapsible = {
      Root: CollapsibleRoot,
      Trigger: CollapsibleTrigger,
      Content: CollapsibleContent
    };
  }
});

// src/Collapsible/index.tsx
var init_Collapsible2 = __esm({
  "src/Collapsible/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Collapsible();
  }
});

// src/Prebuilt/components/init/initUtils.js
function canPublishAV(role) {
  const params = role == null ? void 0 : role.publishParams;
  if (params == null ? void 0 : params.allowed) {
    return params.allowed.includes("video") || params.allowed.includes("audio");
  }
  return false;
}
var normalizeAppPolicyConfig;
var init_initUtils = __esm({
  "src/Prebuilt/components/init/initUtils.js"() {
    "use strict";
    init_define_process_env();
    normalizeAppPolicyConfig = (roleNames, rolesMap, appPolicyConfig = {}) => {
      const newConfig = Object.assign({}, appPolicyConfig);
      roleNames.forEach((roleName) => {
        var _a7;
        if (!newConfig[roleName]) {
          newConfig[roleName] = {};
        }
        const subscribedRoles = ((_a7 = rolesMap[roleName].subscribeParams) == null ? void 0 : _a7.subscribeToRoles) || [];
        const isNotSubscribingOrSubscribingToSelf = subscribedRoles.length === 0 || subscribedRoles.length === 1 && subscribedRoles[0] === roleName;
        if (!newConfig[roleName].center) {
          const publishingRoleNames = roleNames.filter(
            (roleName2) => canPublishAV(rolesMap[roleName2]) && subscribedRoles.includes(roleName2)
          );
          if (isNotSubscribingOrSubscribingToSelf) {
            newConfig[roleName].center = [roleName];
          } else {
            newConfig[roleName].center = publishingRoleNames.filter((rName) => rName !== roleName);
          }
        }
        if (!newConfig[roleName].sidepane) {
          if (isNotSubscribingOrSubscribingToSelf) {
            newConfig[roleName].sidepane = [];
          } else {
            newConfig[roleName].sidepane = canPublishAV(rolesMap[roleName]) ? [roleName] : [];
          }
        }
        if (!newConfig[roleName].selfRoleChangeTo) {
          newConfig[roleName].selfRoleChangeTo = roleNames;
        }
        if (!newConfig[roleName].remoteRoleChangeFor) {
          newConfig[roleName].remoteRoleChangeFor = roleNames;
        }
      });
      return newConfig;
    };
  }
});

// src/Prebuilt/components/hooks/useUserPreferences.jsx
var import_react26, import_react_use, UserPreferencesKeys, defaultPreviewPreference, useUserPreferences;
var init_useUserPreferences = __esm({
  "src/Prebuilt/components/hooks/useUserPreferences.jsx"() {
    "use strict";
    init_define_process_env();
    import_react26 = require("react");
    import_react_use = require("react-use");
    UserPreferencesKeys = {
      PREVIEW: "preview",
      NOTIFICATIONS: "notifications",
      UI_SETTINGS: "uiSettings",
      RTMP_URLS: "rtmpUrls"
    };
    defaultPreviewPreference = {
      name: "",
      isAudioMuted: false,
      isVideoMuted: false
    };
    useUserPreferences = (key, defaultPreference) => {
      const [localStorageValue, setStorageValue] = (0, import_react_use.useLocalStorage)(key, defaultPreference);
      const [preference, setPreference] = (0, import_react26.useState)(localStorageValue || defaultPreference);
      const changePreference = (value) => {
        setPreference(value);
        setStorageValue(value);
      };
      return [preference, changePreference];
    };
  }
});

// src/Prebuilt/common/constants.js
var import_react_sdk5, DEFAULT_WAITING_VIEWER_ROLE, QUERY_PARAM_PREVIEW_AS_ROLE, UI_MODE_GRID, MAX_TOASTS, RTMP_RECORD_RESOLUTION_MIN, RTMP_RECORD_RESOLUTION_MAX, RTMP_RECORD_DEFAULT_RESOLUTION, EMOJI_REACTION_TYPE, CHAT_SELECTOR, APP_DATA, UI_SETTINGS, SIDE_PANE_OPTIONS, POLL_STATE, POLL_VIEWS, SUBSCRIBED_NOTIFICATIONS, REMOTE_STOP_SCREENSHARE_TYPE, _a, _b, isChrome, _a2, _b2, isFirefox, _a3, _b3, isSafari, _a4, _b4, isIOS, _a5, _b5, isMacOS, _a6, _b6, isAndroid, isIPadOS, SESSION_STORE_KEY, INTERACTION_TYPE, QUESTION_TYPE_TITLE, QUESTION_TYPE, ROLE_CHANGE_DECLINED, DEFAULT_PORTAL_CONTAINER;
var init_constants = __esm({
  "src/Prebuilt/common/constants.js"() {
    "use strict";
    init_define_process_env();
    import_react_sdk5 = require("@100mslive/react-sdk");
    DEFAULT_WAITING_VIEWER_ROLE = "waiting-room";
    QUERY_PARAM_PREVIEW_AS_ROLE = "preview_as_role";
    UI_MODE_GRID = "grid";
    MAX_TOASTS = 5;
    RTMP_RECORD_RESOLUTION_MIN = 480;
    RTMP_RECORD_RESOLUTION_MAX = 1280;
    RTMP_RECORD_DEFAULT_RESOLUTION = {
      width: 1280,
      height: 720
    };
    EMOJI_REACTION_TYPE = "EMOJI_REACTION";
    CHAT_SELECTOR = {
      PEER_ID: "peer_id",
      ROLE: "role"
    };
    APP_DATA = {
      uiSettings: "uiSettings",
      chatOpen: "chatOpen",
      chatSelector: "chatSelector",
      chatDraft: "chatDraft",
      appConfig: "appConfig",
      sidePane: "sidePane",
      hlsStats: "hlsStats",
      waitingViewerRole: "waitingViewerRole",
      subscribedNotifications: "subscribedNotifications",
      logo: "logo",
      tokenEndpoint: "tokenEndpoint",
      appLayout: "appLayout",
      hlsStarted: "hlsStarted",
      rtmpStarted: "rtmpStarted",
      recordingStarted: "recordingStarted",
      embedConfig: "embedConfig",
      pinnedTrackId: "pinnedTrackId",
      dropdownList: "dropdownList",
      authToken: "authToken",
      pdfConfig: "pdfConfig",
      minimiseInset: "minimiseInset",
      activeScreensharePeerId: "activeScreensharePeerId",
      disableNotifications: "disableNotifications",
      pollState: "pollState",
      background: "background",
      backgroundType: "backgroundType"
    };
    UI_SETTINGS = {
      isAudioOnly: "isAudioOnly",
      maxTileCount: "maxTileCount",
      uiViewMode: "uiViewMode",
      showStatsOnTiles: "showStatsOnTiles",
      enableAmbientMusic: "enableAmbientMusic",
      mirrorLocalVideo: "mirrorLocalVideo"
    };
    SIDE_PANE_OPTIONS = {
      PARTICIPANTS: "Participants",
      CHAT: "Chat",
      STREAMING: "STREAMING",
      POLLS: "POLLS",
      VB: "VB"
    };
    POLL_STATE = {
      pollInView: "pollInView",
      view: "view"
    };
    POLL_VIEWS = {
      CREATE_POLL_QUIZ: "CREATE_POLL_QUIZ",
      CREATE_QUESTIONS: "CREATE_QUESTIONS",
      VOTE: "VOTE",
      RESULTS: "RESULTS"
    };
    SUBSCRIBED_NOTIFICATIONS = {
      PEER_JOINED: "PEER_JOINED",
      PEER_LEFT: "PEER_LEFT",
      METADATA_UPDATED: "METADATA_UPDATED",
      NEW_MESSAGE: "NEW_MESSAGE",
      ERROR: "ERROR"
    };
    REMOTE_STOP_SCREENSHARE_TYPE = "REMOTE_STOP_SCREENSHARE";
    isChrome = ((_b = (_a = import_react_sdk5.parsedUserAgent.getBrowser()) == null ? void 0 : _a.name) == null ? void 0 : _b.toLowerCase()) === "chrome";
    isFirefox = ((_b2 = (_a2 = import_react_sdk5.parsedUserAgent.getBrowser()) == null ? void 0 : _a2.name) == null ? void 0 : _b2.toLowerCase()) === "firefox";
    isSafari = ((_b3 = (_a3 = import_react_sdk5.parsedUserAgent.getBrowser()) == null ? void 0 : _a3.name) == null ? void 0 : _b3.toLowerCase()) === "safari";
    isIOS = ((_b4 = (_a4 = import_react_sdk5.parsedUserAgent.getOS()) == null ? void 0 : _a4.name) == null ? void 0 : _b4.toLowerCase()) === "ios";
    isMacOS = ((_b5 = (_a5 = import_react_sdk5.parsedUserAgent.getOS()) == null ? void 0 : _a5.name) == null ? void 0 : _b5.toLowerCase()) === "mac os";
    isAndroid = ((_b6 = (_a6 = import_react_sdk5.parsedUserAgent.getOS()) == null ? void 0 : _a6.name) == null ? void 0 : _b6.toLowerCase()) === "android";
    isIPadOS = false;
    SESSION_STORE_KEY = {
      TRANSCRIPTION_STATE: "transcriptionState",
      PINNED_MESSAGE: "pinnedMessage",
      SPOTLIGHT: "spotlight"
    };
    INTERACTION_TYPE = {
      POLL: "Poll",
      QUIZ: "Quiz"
    };
    QUESTION_TYPE_TITLE = {
      "single-choice": "Single Choice",
      "multiple-choice": "Multiple Choice"
      // "short-answer": "Short Answer",
      // "long-answer": "Long Answer",
    };
    QUESTION_TYPE = {
      SINGLE_CHOICE: "single-choice",
      MULTIPLE_CHOICE: "multiple-choice"
      // SHORT_ANSWER: "short-answer",
      // LONG_ANSWER: "long-answer",
    };
    ROLE_CHANGE_DECLINED = "role_change_declined";
    DEFAULT_PORTAL_CONTAINER = "#prebuilt-container";
  }
});

// src/Prebuilt/components/AppData/useUISettings.js
var import_react27, import_react_sdk6, useUISettings, useSetUiSettings, useWaitingViewerRole, useTokenEndpoint, useAuthToken, useUrlToEmbed, usePDFConfig, useResetPDFConfig, useResetEmbedConfig, usePinnedTrack, useSubscribedNotifications, useIsNotificationDisabled, useSetSubscribedNotifications, useSubscribeChatSelector, useSetSubscribedChatSelector, useSetAppDataByKey, useSetAppData, useShowPolls, usePollViewState;
var init_useUISettings = __esm({
  "src/Prebuilt/components/AppData/useUISettings.js"() {
    "use strict";
    init_define_process_env();
    import_react27 = require("react");
    import_react_sdk6 = require("@100mslive/react-sdk");
    init_useUserPreferences();
    init_constants();
    useUISettings = (uiSettingKey) => {
      const uiSettings = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppDataByPath)(APP_DATA.uiSettings, uiSettingKey));
      return uiSettings;
    };
    useSetUiSettings = (uiSettingKey) => {
      const value = useUISettings(uiSettingKey);
      const setValue = useSetAppData({
        key1: APP_DATA.uiSettings,
        key2: uiSettingKey
      });
      return [value, setValue];
    };
    useWaitingViewerRole = () => {
      return (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppData)(APP_DATA.waitingViewerRole));
    };
    useTokenEndpoint = () => {
      return (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppData)(APP_DATA.tokenEndpoint));
    };
    useAuthToken = () => {
      return (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppData)(APP_DATA.authToken));
    };
    useUrlToEmbed = () => {
      var _a7;
      return (_a7 = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppData)(APP_DATA.embedConfig))) == null ? void 0 : _a7.url;
    };
    usePDFConfig = () => {
      return (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppData)(APP_DATA.pdfConfig));
    };
    useResetPDFConfig = () => {
      const [, setPDFConfig] = useSetAppDataByKey(APP_DATA.pdfConfig);
      return (0, import_react27.useCallback)(() => setPDFConfig(), [setPDFConfig]);
    };
    useResetEmbedConfig = () => {
      const [, setEmbedConfig] = useSetAppDataByKey(APP_DATA.embedConfig);
      return () => setEmbedConfig();
    };
    usePinnedTrack = () => {
      var _a7, _b7;
      const pinnedTrackId = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppData)(APP_DATA.pinnedTrackId));
      const spotlightPeerId = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectSessionStore)(SESSION_STORE_KEY.SPOTLIGHT));
      const spotlightVideoTrackId = (_a7 = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectVideoTrackByPeerID)(spotlightPeerId))) == null ? void 0 : _a7.id;
      const spotlightAudioTrackId = (_b7 = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAudioTrackByPeerID)(spotlightPeerId))) == null ? void 0 : _b7.id;
      return (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectTrackByID)(pinnedTrackId || spotlightVideoTrackId || spotlightAudioTrackId));
    };
    useSubscribedNotifications = (notificationKey) => {
      const notificationPreference = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppDataByPath)(APP_DATA.subscribedNotifications, notificationKey));
      return notificationPreference;
    };
    useIsNotificationDisabled = () => {
      const notificationPreference = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppDataByPath)(APP_DATA.disableNotifications));
      return notificationPreference;
    };
    useSetSubscribedNotifications = (notificationKey) => {
      const value = useSubscribedNotifications(notificationKey);
      const setValue = useSetAppData({
        key1: APP_DATA.subscribedNotifications,
        key2: notificationKey
      });
      return [value, setValue];
    };
    useSubscribeChatSelector = (chatSelectorKey) => {
      const chatSelectorPreference = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppDataByPath)(APP_DATA.chatSelector, chatSelectorKey));
      return chatSelectorPreference;
    };
    useSetSubscribedChatSelector = (chatSelectorKey) => {
      const value = useSubscribeChatSelector(chatSelectorKey);
      const setValue = useSetAppData({
        key1: APP_DATA.chatSelector,
        key2: chatSelectorKey
      });
      return [value, setValue];
    };
    useSetAppDataByKey = (appDataKey) => {
      const value = (0, import_react_sdk6.useHMSStore)((0, import_react_sdk6.selectAppData)(appDataKey));
      const actions = (0, import_react_sdk6.useHMSActions)();
      const setValue = (0, import_react27.useCallback)(
        (value2) => {
          actions.setAppData(appDataKey, value2);
        },
        [actions, appDataKey]
      );
      return [value, setValue];
    };
    useSetAppData = ({ key1, key2 }) => {
      const actions = (0, import_react_sdk6.useHMSActions)();
      const store = (0, import_react_sdk6.useHMSVanillaStore)();
      const [, setPreferences] = useUserPreferences(UserPreferencesKeys.UI_SETTINGS);
      const setValue = (0, import_react27.useCallback)(
        (value) => {
          if (!key1) {
            return;
          }
          actions.setAppData(
            key1,
            key2 ? {
              [key2]: value
            } : value,
            true
          );
          const appData = store.getState((0, import_react_sdk6.selectAppData)());
          setPreferences(__spreadProps(__spreadValues({}, appData.uiSettings), {
            subscribedNotifications: appData.subscribedNotifications
          }));
        },
        [actions, key1, key2, store, setPreferences]
      );
      return setValue;
    };
    useShowPolls = () => {
      var _a7;
      const permissions = (0, import_react_sdk6.useHMSStore)(import_react_sdk6.selectPermissions);
      const polls = (_a7 = (0, import_react_sdk6.useHMSStore)(import_react_sdk6.selectPolls)) == null ? void 0 : _a7.filter((poll) => poll.state === "started" || poll.state === "stopped");
      const showPolls = (0, import_react27.useMemo)(() => {
        return (permissions == null ? void 0 : permissions.pollWrite) || (permissions == null ? void 0 : permissions.pollRead) && (polls == null ? void 0 : polls.length) > 0;
      }, [permissions == null ? void 0 : permissions.pollRead, permissions == null ? void 0 : permissions.pollWrite, polls == null ? void 0 : polls.length]);
      return { showPolls };
    };
    usePollViewState = () => {
      const [pollState, setPollState] = useSetAppDataByKey(APP_DATA.pollState);
      const setPollView = (0, import_react27.useCallback)(
        (view) => {
          setPollState({
            [POLL_STATE.pollInView]: pollState == null ? void 0 : pollState.pollInView,
            [POLL_STATE.view]: view
          });
        },
        [pollState == null ? void 0 : pollState.pollInView, setPollState]
      );
      return {
        setPollState,
        setPollView,
        pollInView: pollState == null ? void 0 : pollState.pollInView,
        view: pollState == null ? void 0 : pollState.view
      };
    };
  }
});

// src/Prebuilt/components/AppData/useSidepane.js
var import_react28, import_react_sdk7, useIsSidepaneTypeOpen, useSidepaneState, useSidepaneToggle, usePollViewToggle, useSidepaneReset;
var init_useSidepane = __esm({
  "src/Prebuilt/components/AppData/useSidepane.js"() {
    "use strict";
    init_define_process_env();
    import_react28 = require("react");
    import_react_sdk7 = require("@100mslive/react-sdk");
    init_useUISettings();
    init_constants();
    useIsSidepaneTypeOpen = (sidepaneType) => {
      if (!sidepaneType) {
        throw Error("Pass one of the side pane options");
      }
      return (0, import_react_sdk7.useHMSStore)((0, import_react_sdk7.selectAppData)(APP_DATA.sidePane)) === sidepaneType;
    };
    useSidepaneState = () => {
      const sidePane = (0, import_react_sdk7.useHMSStore)((0, import_react_sdk7.selectAppData)(APP_DATA.sidePane));
      return sidePane;
    };
    useSidepaneToggle = (sidepaneType) => {
      const hmsActions = (0, import_react_sdk7.useHMSActions)();
      const vanillaStore = (0, import_react_sdk7.useHMSVanillaStore)();
      const toggleSidepane = (0, import_react28.useCallback)(() => {
        const isOpen = vanillaStore.getState((0, import_react_sdk7.selectAppData)(APP_DATA.sidePane)) === sidepaneType;
        hmsActions.setAppData(APP_DATA.sidePane, !isOpen ? sidepaneType : "");
      }, [vanillaStore, hmsActions, sidepaneType]);
      return toggleSidepane;
    };
    usePollViewToggle = () => {
      const hmsActions = (0, import_react_sdk7.useHMSActions)();
      const { view, setPollState } = usePollViewState();
      const isOpen = useSidepaneState() === SIDE_PANE_OPTIONS.POLLS;
      const togglePollView = (0, import_react28.useCallback)(
        (id) => {
          id = typeof id === "string" ? id : void 0;
          const newView = id ? POLL_VIEWS.VOTE : isOpen && view ? null : POLL_VIEWS.CREATE_POLL_QUIZ;
          setPollState({
            [POLL_STATE.pollInView]: id,
            [POLL_STATE.view]: newView
          });
          hmsActions.setAppData(APP_DATA.sidePane, newView ? SIDE_PANE_OPTIONS.POLLS : "");
        },
        [hmsActions, view, setPollState, isOpen]
      );
      return togglePollView;
    };
    useSidepaneReset = () => {
      const hmsActions = (0, import_react_sdk7.useHMSActions)();
      const resetSidepane = (0, import_react28.useCallback)(() => {
        hmsActions.setAppData(APP_DATA.sidePane, "");
        hmsActions.setAppData(APP_DATA.pollInView, "");
      }, [hmsActions]);
      return resetSidepane;
    };
  }
});

// src/Prebuilt/components/VirtualBackground/constants.ts
var import_hms_virtual_background, VB_EFFECT, defaultMedia2, vbPlugin;
var init_constants2 = __esm({
  "src/Prebuilt/components/VirtualBackground/constants.ts"() {
    "use strict";
    init_define_process_env();
    import_hms_virtual_background = require("@100mslive/hms-virtual-background");
    VB_EFFECT = {
      BLUR: "blur",
      BEAUTIFY: "BEAUTIFY",
      NONE: "none",
      MEDIA: "image"
    };
    defaultMedia2 = [
      "https://assets.100ms.live/webapp/vb-mini/vb-1.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-2.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-3.png",
      "https://assets.100ms.live/webapp/vb-mini/vb-4.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-5.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-6.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-7.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-8.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-9.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-10.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-11.jpg",
      "https://assets.100ms.live/webapp/vb-mini/vb-12.jpg"
    ];
    vbPlugin = new import_hms_virtual_background.HMSVBPlugin(import_hms_virtual_background.HMSVirtualBackgroundTypes.NONE, import_hms_virtual_background.HMSVirtualBackgroundTypes.NONE);
  }
});

// src/Prebuilt/components/AppData/AppData.jsx
var import_react29, import_react_sdk8, getAppDetails, initialAppData, AppData, ResetStreamingStart;
var init_AppData = __esm({
  "src/Prebuilt/components/AppData/AppData.jsx"() {
    "use strict";
    init_define_process_env();
    import_react29 = __toESM(require("react"));
    import_react_sdk8 = require("@100mslive/react-sdk");
    init_initUtils();
    init_useUserPreferences();
    init_useSidepane();
    init_useUISettings();
    init_constants();
    init_constants2();
    getAppDetails = (appDetails) => {
      try {
        return !appDetails ? {} : JSON.parse(appDetails);
      } catch (error) {
        return {};
      }
    };
    initialAppData = {
      [APP_DATA.uiSettings]: {
        [UI_SETTINGS.isAudioOnly]: false,
        [UI_SETTINGS.maxTileCount]: 9,
        [UI_SETTINGS.showStatsOnTiles]: false,
        [UI_SETTINGS.enableAmbientMusic]: false,
        [UI_SETTINGS.uiViewMode]: UI_MODE_GRID,
        [UI_SETTINGS.mirrorLocalVideo]: true
      },
      [APP_DATA.subscribedNotifications]: {
        PEER_JOINED: false,
        PEER_LEFT: false,
        NEW_MESSAGE: true,
        ERROR: true,
        METADATA_UPDATED: true
      },
      [APP_DATA.chatOpen]: false,
      [APP_DATA.chatSelector]: {
        [CHAT_SELECTOR.ROLE]: "",
        [CHAT_SELECTOR.PEER_ID]: ""
      },
      [APP_DATA.chatDraft]: "",
      [APP_DATA.sidePane]: "",
      [APP_DATA.hlsStarted]: false,
      [APP_DATA.rtmpStarted]: false,
      [APP_DATA.recordingStarted]: false,
      [APP_DATA.waitingViewerRole]: DEFAULT_WAITING_VIEWER_ROLE,
      [APP_DATA.dropdownList]: [],
      [APP_DATA.authToken]: "",
      [APP_DATA.minimiseInset]: false,
      [APP_DATA.activeScreensharePeerId]: "",
      [APP_DATA.disableNotifications]: false,
      [APP_DATA.background]: VB_EFFECT.NONE,
      [APP_DATA.backgroundType]: VB_EFFECT.NONE,
      [APP_DATA.pollState]: {
        [POLL_STATE.pollInView]: "",
        [POLL_STATE.view]: ""
      }
    };
    AppData = import_react29.default.memo(({ appDetails, tokenEndpoint }) => {
      const hmsActions = (0, import_react_sdk8.useHMSActions)();
      const [preferences = {}] = useUserPreferences(UserPreferencesKeys.UI_SETTINGS);
      const roleNames = (0, import_react_sdk8.useHMSStore)(import_react_sdk8.selectAvailableRoleNames);
      const rolesMap = (0, import_react_sdk8.useHMSStore)(import_react_sdk8.selectRolesMap);
      const localPeerRole = (0, import_react_sdk8.useHMSStore)(import_react_sdk8.selectLocalPeerRoleName);
      const appData = (0, import_react_sdk8.useHMSStore)(import_react_sdk8.selectFullAppData);
      (0, import_react29.useEffect)(() => {
        hmsActions.initAppData(__spreadValues(__spreadValues({}, initialAppData), appData));
        hmsActions.setFrameworkInfo({
          type: "react-web",
          isPrebuilt: true,
          version: import_react29.default.version
        });
      }, [hmsActions]);
      (0, import_react29.useEffect)(() => {
        const uiSettings = preferences || {};
        const updatedSettings = __spreadProps(__spreadValues({}, uiSettings), {
          [UI_SETTINGS.uiViewMode]: uiSettings.uiViewMode || UI_MODE_GRID
        });
        hmsActions.setAppData(APP_DATA.uiSettings, updatedSettings, true);
      }, [preferences, hmsActions]);
      (0, import_react29.useEffect)(() => {
        const appData2 = {
          [APP_DATA.tokenEndpoint]: tokenEndpoint,
          [APP_DATA.appConfig]: getAppDetails(appDetails)
        };
        for (const key in appData2) {
          hmsActions.setAppData([key], appData2[key]);
        }
      }, [appDetails, tokenEndpoint, hmsActions]);
      (0, import_react29.useEffect)(() => {
        if (!preferences.subscribedNotifications) {
          return;
        }
        hmsActions.setAppData(APP_DATA.subscribedNotifications, preferences.subscribedNotifications, true);
      }, [preferences.subscribedNotifications, hmsActions]);
      (0, import_react29.useEffect)(() => {
        if (localPeerRole) {
          const config2 = normalizeAppPolicyConfig(roleNames, rolesMap);
          hmsActions.setAppData(APP_DATA.appLayout, config2[localPeerRole]);
        }
      }, [roleNames, rolesMap, localPeerRole, hmsActions]);
      return /* @__PURE__ */ import_react29.default.createElement(ResetStreamingStart, null);
    });
    ResetStreamingStart = () => {
      const { isHLSRunning, isRTMPRunning, isBrowserRecordingOn } = (0, import_react_sdk8.useRecordingStreaming)();
      const hlsError = (0, import_react_sdk8.useHMSStore)(import_react_sdk8.selectHLSState).error;
      const rtmpError = (0, import_react_sdk8.useHMSStore)(import_react_sdk8.selectRTMPState).error;
      const roomState = (0, import_react_sdk8.useHMSStore)(import_react_sdk8.selectRoomState);
      const [hlsStarted, setHLSStarted] = useSetAppDataByKey(APP_DATA.hlsStarted);
      const [recordingStarted, setRecordingStarted] = useSetAppDataByKey(APP_DATA.recordingStarted);
      const [rtmpStarted, setRTMPStarted] = useSetAppDataByKey(APP_DATA.rtmpStarted);
      const toggleStreaming = useSidepaneToggle(SIDE_PANE_OPTIONS.STREAMING);
      const isStreamingOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.STREAMING);
      (0, import_react29.useEffect)(() => {
        if (isBrowserRecordingOn && recordingStarted) {
          setRecordingStarted(false);
        }
      }, [isBrowserRecordingOn, recordingStarted, setRecordingStarted]);
      (0, import_react29.useEffect)(() => {
        if (roomState === import_react_sdk8.HMSRoomState.Disconnected) {
          setHLSStarted(false);
          setRecordingStarted(false);
          setRTMPStarted(false);
        }
      }, [roomState, setHLSStarted, setRTMPStarted, setRecordingStarted]);
      (0, import_react29.useEffect)(() => {
        if (isHLSRunning || hlsError) {
          if (hlsStarted) {
            setHLSStarted(false);
            if (isStreamingOpen) {
              toggleStreaming();
            }
          }
        }
      }, [isHLSRunning, hlsStarted, setHLSStarted, hlsError, isStreamingOpen, toggleStreaming]);
      (0, import_react29.useEffect)(() => {
        if (isRTMPRunning || rtmpError || isBrowserRecordingOn) {
          if (rtmpStarted) {
            setRTMPStarted(false);
            if (isStreamingOpen) {
              toggleStreaming();
            }
          }
        }
      }, [isRTMPRunning, setRTMPStarted, rtmpStarted, rtmpError, isBrowserRecordingOn, isStreamingOpen, toggleStreaming]);
      return null;
    };
  }
});

// src/Prebuilt/AppContext.tsx
var import_react30, HMSPrebuiltContext, useHMSPrebuiltContext;
var init_AppContext = __esm({
  "src/Prebuilt/AppContext.tsx"() {
    "use strict";
    init_define_process_env();
    import_react30 = __toESM(require("react"));
    init_constants();
    HMSPrebuiltContext = import_react30.default.createContext({
      roomCode: "",
      userName: "",
      userId: "",
      containerSelector: DEFAULT_PORTAL_CONTAINER,
      endpoints: {},
      onLeave: void 0,
      onJoin: void 0
    });
    HMSPrebuiltContext.displayName = "HMSPrebuiltContext";
    useHMSPrebuiltContext = () => {
      const context = (0, import_react30.useContext)(HMSPrebuiltContext);
      if (!context) {
        throw Error("Make sure HMSPrebuiltContext.Provider is present at the top level of your application");
      }
      return context;
    };
  }
});

// src/Prebuilt/primitives/DialogContent.jsx
var import_react31, import_react_icons7, DialogContent, ErrorDialog, RequestDialog, DialogRow, DialogCol, DialogSelect, DialogInputFile;
var init_DialogContent2 = __esm({
  "src/Prebuilt/primitives/DialogContent.jsx"() {
    "use strict";
    init_define_process_env();
    import_react31 = __toESM(require("react"));
    import_react_icons7 = require("@100mslive/react-icons");
    init_Button2();
    init_Divider2();
    init_IconButton2();
    init_Input2();
    init_Label2();
    init_Layout();
    init_Modal();
    init_Select2();
    init_Text2();
    DialogContent = (_a7) => {
      var _b7 = _a7, { Icon: Icon3, title, closeable = true, children, css: css2, iconCSS = {} } = _b7, props = __objRest(_b7, ["Icon", "title", "closeable", "children", "css", "iconCSS"]);
      return /* @__PURE__ */ import_react31.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react31.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react31.default.createElement(Dialog.Content, __spreadValues({ css: __spreadValues({ width: "min(600px, 100%)" }, css2) }, props), /* @__PURE__ */ import_react31.default.createElement(Dialog.Title, null, /* @__PURE__ */ import_react31.default.createElement(Flex, { justify: "between" }, /* @__PURE__ */ import_react31.default.createElement(Flex, { align: "center", css: { mb: "$1" } }, Icon3 ? /* @__PURE__ */ import_react31.default.createElement(Box, { css: __spreadValues({ mr: "$2", color: "$on_primary_high" }, iconCSS) }, /* @__PURE__ */ import_react31.default.createElement(Icon3, null)) : null, /* @__PURE__ */ import_react31.default.createElement(Text, { variant: "h6", inline: true }, title)), closeable && /* @__PURE__ */ import_react31.default.createElement(Dialog.DefaultClose, { "data-testid": "dialoge_cross_icon" }))), /* @__PURE__ */ import_react31.default.createElement(HorizontalDivider, { css: { mt: "0.8rem" } }), /* @__PURE__ */ import_react31.default.createElement(Box, null, children)));
    };
    ErrorDialog = (_a7) => {
      var _b7 = _a7, { open = true, onOpenChange, title, children } = _b7, props = __objRest(_b7, ["open", "onOpenChange", "title", "children"]);
      return /* @__PURE__ */ import_react31.default.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ import_react31.default.createElement(
        DialogContent,
        __spreadValues({
          Icon: import_react_icons7.CrossIcon,
          title,
          onInteractOutside: (e) => e.preventDefault(),
          onEscapeKeyDown: (e) => e.preventDefault(),
          onPointerDownOutside: (e) => e.preventDefault(),
          closeable: false,
          iconCSS: { color: "$alert_error_default" }
        }, props),
        /* @__PURE__ */ import_react31.default.createElement(Box, { css: { mt: "$lg" } }, children)
      ));
    };
    RequestDialog = ({ open = true, onOpenChange, title, body, actionText = "Accept", onAction, Icon: Icon3 }) => /* @__PURE__ */ import_react31.default.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ import_react31.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react31.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react31.default.createElement(Dialog.Content, { css: { width: "min(400px,80%)", p: "$10" } }, /* @__PURE__ */ import_react31.default.createElement(Dialog.Title, { css: { p: 0, display: "flex", flexDirection: "row", gap: "$md" } }, Icon3 ? Icon3 : null, /* @__PURE__ */ import_react31.default.createElement(Text, { variant: "h6" }, title)), typeof body === "string" ? /* @__PURE__ */ import_react31.default.createElement(
      Text,
      {
        variant: "md",
        css: {
          fontWeight: 400,
          mt: "$4",
          mb: "$10",
          c: "$on_surface_medium"
        }
      },
      body
    ) : /* @__PURE__ */ import_react31.default.createElement(Box, { css: { mt: "$4", mb: "$10" } }, body), /* @__PURE__ */ import_react31.default.createElement(Flex, { justify: "center", align: "center", css: { width: "100%", gap: "$md" } }, /* @__PURE__ */ import_react31.default.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ import_react31.default.createElement(Dialog.Close, { css: { width: "100%" } }, /* @__PURE__ */ import_react31.default.createElement(Button, { variant: "standard", outlined: true, css: { width: "100%" } }, "Cancel"))), /* @__PURE__ */ import_react31.default.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ import_react31.default.createElement(Button, { variant: "primary", css: { width: "100%" }, onClick: onAction }, actionText))))));
    DialogRow = ({ children, breakSm = false, css: css2, justify = "between" }) => {
      let finalCSS = {
        margin: "$10 0",
        w: "100%"
      };
      if (breakSm) {
        finalCSS["@sm"] = {
          flexDirection: "column",
          alignItems: "flex-start"
        };
      }
      if (css2) {
        finalCSS = Object.assign(finalCSS, css2);
      }
      return /* @__PURE__ */ import_react31.default.createElement(Flex, { align: "center", justify, css: finalCSS }, children);
    };
    DialogCol = (_a7) => {
      var _b7 = _a7, { children, breakSm = false, css: css2, align = "center", justify = "between" } = _b7, props = __objRest(_b7, ["children", "breakSm", "css", "align", "justify"]);
      let finalCSS = {
        margin: "$10 0",
        w: "100%"
      };
      if (breakSm) {
        finalCSS["@sm"] = {
          alignItems: "flex-start"
        };
      }
      if (css2) {
        finalCSS = Object.assign(finalCSS, css2);
      }
      return /* @__PURE__ */ import_react31.default.createElement(Flex, __spreadValues({ direction: "column", align, justify, css: finalCSS }, props), children);
    };
    DialogSelect = (_a7) => {
      var _b7 = _a7, { title, options, keyField, labelField, selected, onChange } = _b7, props = __objRest(_b7, ["title", "options", "keyField", "labelField", "selected", "onChange"]);
      return /* @__PURE__ */ import_react31.default.createElement(DialogRow, { breakSm: true }, /* @__PURE__ */ import_react31.default.createElement(Label3, null, title), /* @__PURE__ */ import_react31.default.createElement(Select.Root, __spreadValues({ "data-testid": `dialog_select_${title}`, css: { width: "70%", "@sm": { width: "100%" } } }, props), /* @__PURE__ */ import_react31.default.createElement(Select.DefaultDownIcon, null), /* @__PURE__ */ import_react31.default.createElement(Select.Select, { onChange: (e) => onChange(e.target.value), value: selected, css: { width: "100%" } }, options.map((option) => {
        const id = keyField ? option[keyField] : option;
        const label = labelField ? option[labelField] : option;
        return /* @__PURE__ */ import_react31.default.createElement("option", { value: id, key: id }, label);
      }))));
    };
    DialogInputFile = (_a7) => {
      var _b7 = _a7, { value, onChange, placeholder, disabled, type } = _b7, props = __objRest(_b7, ["value", "onChange", "placeholder", "disabled", "type"]);
      const inputRef = (0, import_react31.useRef)();
      return /* @__PURE__ */ import_react31.default.createElement(
        DialogCol,
        {
          breakSm: true,
          onClick: () => {
            var _a8;
            return (_a8 = inputRef.current) == null ? void 0 : _a8.click();
          },
          css: {
            justifyContent: "center",
            position: "relative",
            cursor: "pointer",
            py: "$12",
            border: "1px dashed $border_bright",
            r: "$1",
            height: "max(140px, 30%)",
            alignItems: "center",
            m: "$6 0"
          },
          gap: "8"
        },
        /* @__PURE__ */ import_react31.default.createElement(
          IconButton,
          {
            variant: "standard",
            css: {
              border: "none",
              background: "none",
              "&:hover": {
                border: "none",
                background: "none",
                bg: "$transparent !important"
              }
            }
          },
          /* @__PURE__ */ import_react31.default.createElement(
            import_react_icons7.CloudUploadIcon,
            {
              style: {
                width: "3rem",
                height: "3rem"
              }
            }
          )
        ),
        /* @__PURE__ */ import_react31.default.createElement(Flex, { direction: "row" }, /* @__PURE__ */ import_react31.default.createElement(
          Input,
          __spreadValues({
            ref: inputRef,
            css: { width: "70%", "@sm": { width: "100%" } },
            value,
            onChange: (e) => onChange(e.target),
            placeholder,
            disabled,
            type,
            hidden: true
          }, props)
        ), /* @__PURE__ */ import_react31.default.createElement(
          IconButton,
          {
            variant: "standard",
            css: {
              background: "none",
              border: "none",
              textDecoration: "underline",
              "&:hover": {
                background: "none !important",
                border: "none !important"
              }
            }
          },
          /* @__PURE__ */ import_react31.default.createElement(Text, { variant: "md" }, placeholder)
        ))
      );
    };
  }
});

// src/Prebuilt/components/AuthToken.jsx
var import_react32, import_react_sdk9, AuthToken, convertError, Link2, ErrorWithSupportLink, AuthToken_default;
var init_AuthToken = __esm({
  "src/Prebuilt/components/AuthToken.jsx"() {
    "use strict";
    init_define_process_env();
    import_react32 = __toESM(require("react"));
    import_react_sdk9 = require("@100mslive/react-sdk");
    init_Theme();
    init_AppContext();
    init_DialogContent2();
    init_useUISettings();
    init_constants();
    AuthToken = import_react32.default.memo(({ authTokenByRoomCodeEndpoint, defaultAuthToken }) => {
      const hmsActions = (0, import_react_sdk9.useHMSActions)();
      const tokenEndpoint = useTokenEndpoint();
      const { roomCode, userId } = useHMSPrebuiltContext();
      const [error, setError] = (0, import_react32.useState)({ title: "", body: "" });
      let authToken = defaultAuthToken;
      const [, setAuthTokenInAppData] = useSetAppDataByKey(APP_DATA.authToken);
      (0, import_react32.useEffect)(() => {
        if (authToken) {
          setAuthTokenInAppData(authToken);
          return;
        }
        if (!tokenEndpoint && !roomCode) {
          return;
        }
        hmsActions.getAuthTokenByRoomCode({ roomCode, userId }, { endpoint: authTokenByRoomCodeEndpoint }).then((token) => setAuthTokenInAppData(token)).catch((error2) => setError(convertError(error2)));
      }, [hmsActions, tokenEndpoint, authToken, authTokenByRoomCodeEndpoint, setAuthTokenInAppData, roomCode, userId]);
      if (error.title) {
        return /* @__PURE__ */ import_react32.default.createElement(ErrorDialog, { title: error.title }, error.body);
      }
      return null;
    });
    convertError = (error) => {
      console.error("[error]", { error });
      if (error.action === "GET_TOKEN" && error.code === 403) {
        return {
          title: "Room code is disabled",
          body: ErrorWithSupportLink("Room code corresponding to this link is no more active.")
        };
      } else if (error.action === "GET_TOKEN" && error.code === 404) {
        return {
          title: "Room code does not exist",
          body: ErrorWithSupportLink("We could not find a room code corresponding to this link.")
        };
      } else if (error.action === "GET_TOKEN" && error.code === 2003) {
        return {
          title: "Endpoint is not reachable",
          body: ErrorWithSupportLink(`Endpoint is not reachable. ${error.description}.`)
        };
      } else if (error.response && error.response.status === 404) {
        return {
          title: "Room does not exist",
          body: ErrorWithSupportLink("We could not find a room corresponding to this link.")
        };
      } else if (error.response && error.response.status === 403) {
        return {
          title: "Accessing room using this link format is disabled",
          body: ErrorWithSupportLink("You can re-enable this from the developer section in Dashboard.")
        };
      } else {
        console.error("Token API Error", error);
        return {
          title: "Error fetching token",
          body: ErrorWithSupportLink(
            "An error occurred while fetching the app token. Please look into logs for more details."
          )
        };
      }
    };
    Link2 = styled("a", {
      color: "#2f80e1"
    });
    ErrorWithSupportLink = (errorMessage) => /* @__PURE__ */ import_react32.default.createElement("div", null, errorMessage, " If you think this is a mistake on our side, please create", " ", /* @__PURE__ */ import_react32.default.createElement(Link2, { target: "_blank", href: "https://github.com/100mslive/100ms-web/issues", rel: "noreferrer" }, "an issue"), " ", "or reach out over", " ", /* @__PURE__ */ import_react32.default.createElement(Link2, { target: "_blank", href: "https://discord.com/invite/kGdmszyzq2", rel: "noreferrer" }, "Discord"), ".");
    AuthToken_default = AuthToken;
  }
});

// src/Prebuilt/IconButton.jsx
var IconButton2, IconButton_default;
var init_IconButton3 = __esm({
  "src/Prebuilt/IconButton.jsx"() {
    "use strict";
    init_define_process_env();
    init_IconButton2();
    init_Theme();
    IconButton2 = styled(IconButton, {
      width: "$14",
      height: "$14",
      border: "1px solid $border_bright",
      bg: "$background_dim",
      r: "$1",
      variants: {
        active: {
          true: {
            color: "$on_surface_high",
            backgroundColor: "$transparent"
          },
          false: {
            border: "1px solid transparent",
            color: "$on_primary_high"
          }
        },
        disabled: {
          true: {
            backgroundColor: "$surface_brighter",
            color: "$on_surface_low"
          }
        }
      }
    });
    IconButton_default = IconButton2;
  }
});

// src/Prebuilt/components/IconButtonWithOptions/IconButtonWithOptions.jsx
var import_react33, import_react_icons8, IconSection, OptionsSection, IconButtonWithOptions;
var init_IconButtonWithOptions = __esm({
  "src/Prebuilt/components/IconButtonWithOptions/IconButtonWithOptions.jsx"() {
    "use strict";
    init_define_process_env();
    import_react33 = __toESM(require("react"));
    import_react_icons8 = require("@100mslive/react-icons");
    init_Dropdown2();
    init_Layout();
    init_Theme();
    init_Tooltip2();
    init_IconButton3();
    IconSection = styled(IconButton_default, {
      w: "unset",
      h: "$14",
      p: "$4",
      r: "$1",
      borderTopRightRadius: 0,
      borderColor: "$border_default",
      borderBottomRightRadius: 0,
      position: "relative",
      "&:not([disabled]):focus-visible": {
        zIndex: 1
      },
      "@md": {
        mx: 0,
        borderTopRightRadius: "$1",
        borderBottomRightRadius: "$1"
      }
    });
    OptionsSection = styled(IconButton_default, {
      w: "unset",
      h: "$14",
      p: "$4",
      r: "$1",
      borderTopLeftRadius: 0,
      borderColor: "$border_default",
      borderBottomLeftRadius: 0,
      borderLeftWidth: 0,
      position: "relative",
      "&:not([disabled]):focus-visible": {
        zIndex: 1
      },
      "@md": {
        display: "none"
      }
    });
    IconButtonWithOptions = ({
      disabled = false,
      onDisabledClick = () => {
        return;
      },
      tooltipMessage = "",
      icon,
      options = [],
      active,
      onClick = () => {
        return;
      }
    }) => {
      const bgCss = { backgroundColor: disabled ? "$surface_brighter" : active ? "$transparent" : "$secondary_dim" };
      const iconCss = { color: disabled ? "$on_surface_low" : active ? "$on_surface_high" : "$on_primary_high" };
      return /* @__PURE__ */ import_react33.default.createElement(Flex, null, /* @__PURE__ */ import_react33.default.createElement(IconSection, { css: bgCss, onClick }, /* @__PURE__ */ import_react33.default.createElement(Tooltip, { disabled: !tooltipMessage, title: tooltipMessage }, /* @__PURE__ */ import_react33.default.createElement(Flex, { align: "center", justify: "center", css: iconCss }, icon))), /* @__PURE__ */ import_react33.default.createElement(Dropdown.Root, null, /* @__PURE__ */ import_react33.default.createElement(
        Dropdown.Trigger,
        {
          asChild: true,
          onPointerDown: (e) => {
            if (disabled) {
              e.preventDefault();
              onDisabledClick();
            }
          }
        },
        /* @__PURE__ */ import_react33.default.createElement(OptionsSection, { css: bgCss }, /* @__PURE__ */ import_react33.default.createElement(Tooltip, { title: "View Options" }, /* @__PURE__ */ import_react33.default.createElement(Box, { css: iconCss }, /* @__PURE__ */ import_react33.default.createElement(import_react_icons8.VerticalMenuIcon, null))))
      ), /* @__PURE__ */ import_react33.default.createElement(
        Dropdown.Content,
        {
          sideOffset: 5,
          align: "center",
          css: {
            w: "$64",
            maxHeight: "$96",
            p: 0,
            border: "none"
          }
        },
        options.map((option, index) => /* @__PURE__ */ import_react33.default.createElement(
          Dropdown.Item,
          {
            key: option.title,
            css: {
              flexDirection: "column",
              alignItems: "flex-start",
              backgroundColor: option.active ? "$surface_bright" : "$surface_dim",
              borderTop: index === 0 ? "none" : "1px solid $border_default",
              "&:hover": {
                cursor: "pointer"
              },
              p: "0"
            }
          },
          option.content
        ))
      )));
    };
  }
});

// src/Prebuilt/components/Toast/ToastManager.js
var import_uuid, ToastManager;
var init_ToastManager = __esm({
  "src/Prebuilt/components/Toast/ToastManager.js"() {
    "use strict";
    init_define_process_env();
    import_uuid = require("uuid");
    ToastManager = {
      toasts: /* @__PURE__ */ new Map(),
      listeners: /* @__PURE__ */ new Map(),
      addToast(toast) {
        const id = toast.id ? toast.id : (0, import_uuid.v4)();
        this.toasts.set(id, __spreadProps(__spreadValues({}, toast), { id }));
        this.onChange();
        return id;
      },
      clearAllToast() {
        this.toasts.clear();
        this.onChange();
      },
      removeToast(id) {
        this.toasts.delete(id);
        this.onChange();
      },
      replaceToast(id, toast) {
        if (this.isActive(id)) {
          this.toasts.set(id, __spreadValues(__spreadValues({}, this.toasts.get(id)), toast));
          this.onChange();
          return id;
        } else {
          return this.addToast(toast);
        }
      },
      addListener(cb) {
        this.listeners.set(cb, cb);
      },
      removeListener(cb) {
        this.listeners.delete(cb);
      },
      isActive(id) {
        return this.toasts.has(id);
      },
      onChange() {
        const toasts = Array.from(this.toasts.values());
        this.listeners.forEach((listener) => listener(toasts));
      }
    };
  }
});

// src/Prebuilt/components/AudioVideoToggle.jsx
var import_react34, import_react_sdk10, import_react_icons9, optionsCSS, AudioVideoToggle;
var init_AudioVideoToggle = __esm({
  "src/Prebuilt/components/AudioVideoToggle.jsx"() {
    "use strict";
    init_define_process_env();
    import_react34 = __toESM(require("react"));
    import_react_sdk10 = require("@100mslive/react-sdk");
    import_react_icons9 = require("@100mslive/react-icons");
    init_IconButtonWithOptions();
    init_ToastManager();
    init_Text2();
    init_Tooltip2();
    init_IconButton3();
    init_constants();
    optionsCSS = { fontWeight: "$semiBold", color: "$on_surface_high", w: "100%", p: "$8" };
    AudioVideoToggle = ({ hideOptions = false }) => {
      const { allDevices, selectedDeviceIDs, updateDevice } = (0, import_react_sdk10.useDevices)();
      const { videoInput, audioInput } = allDevices;
      const formattedVideoInputList = videoInput == null ? void 0 : videoInput.map((videoInput2) => ({
        active: selectedDeviceIDs.videoInput === videoInput2.deviceId,
        content: /* @__PURE__ */ import_react34.default.createElement(
          Text,
          {
            variant: "sm",
            onClick: () => updateDevice({
              deviceType: import_react_sdk10.DeviceType.videoInput,
              deviceId: videoInput2.deviceId
            }),
            css: optionsCSS
          },
          videoInput2.label
        ),
        title: videoInput2.label
      }));
      const formattedAudioInputList = audioInput == null ? void 0 : audioInput.map((audioInput2) => ({
        active: selectedDeviceIDs.audioInput === audioInput2.deviceId,
        content: /* @__PURE__ */ import_react34.default.createElement(
          Text,
          {
            variant: "sm",
            onClick: () => updateDevice({
              deviceType: import_react_sdk10.DeviceType.audioInput,
              deviceId: audioInput2.deviceId
            }),
            css: optionsCSS
          },
          audioInput2.label
        ),
        title: audioInput2.label
      }));
      const { isLocalVideoEnabled, isLocalAudioEnabled, toggleAudio, toggleVideo } = (0, import_react_sdk10.useAVToggle)();
      const actions = (0, import_react_sdk10.useHMSActions)();
      const videoTrackId = (0, import_react_sdk10.useHMSStore)(import_react_sdk10.selectLocalVideoTrackID);
      const localVideoTrack = (0, import_react_sdk10.useHMSStore)((0, import_react_sdk10.selectVideoTrackByID)(videoTrackId));
      const roomState = (0, import_react_sdk10.useHMSStore)(import_react_sdk10.selectRoomState);
      const hasAudioDevices = (audioInput == null ? void 0 : audioInput.length) > 0;
      const hasVideoDevices = (videoInput == null ? void 0 : videoInput.length) > 0;
      return /* @__PURE__ */ import_react34.default.createElement(import_react34.Fragment, null, toggleAudio ? hideOptions || !hasAudioDevices ? /* @__PURE__ */ import_react34.default.createElement(Tooltip, { title: `Turn ${isLocalAudioEnabled ? "off" : "on"} audio (${isMacOS ? "\u2318" : "ctrl"} + d)` }, /* @__PURE__ */ import_react34.default.createElement(
        IconButton_default,
        {
          active: isLocalAudioEnabled,
          disabled: !toggleAudio,
          onClick: toggleAudio,
          key: "toggleAudio",
          "data-testid": "audio_btn",
          className: "__cancel-drag-event"
        },
        !isLocalAudioEnabled ? /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.MicOffIcon, { "data-testid": "audio_off_btn" }) : /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.MicOnIcon, { "data-testid": "audio_on_btn" })
      )) : /* @__PURE__ */ import_react34.default.createElement(
        IconButtonWithOptions,
        {
          options: formattedAudioInputList,
          disabled: !toggleAudio,
          onDisabledClick: toggleAudio,
          tooltipMessage: `Turn ${isLocalAudioEnabled ? "off" : "on"} audio (${isMacOS ? "\u2318" : "ctrl"} + d)`,
          icon: !isLocalAudioEnabled ? /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.MicOffIcon, { "data-testid": "audio_off_btn" }) : /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.MicOnIcon, { "data-testid": "audio_on_btn" }),
          active: isLocalAudioEnabled,
          onClick: toggleAudio,
          key: "toggleAudio"
        }
      ) : null, toggleVideo ? hideOptions || !hasVideoDevices ? /* @__PURE__ */ import_react34.default.createElement(Tooltip, { title: `Turn ${isLocalVideoEnabled ? "off" : "on"} video (${isMacOS ? "\u2318" : "ctrl"} + e)` }, /* @__PURE__ */ import_react34.default.createElement(
        IconButton_default,
        {
          key: "toggleVideo",
          active: isLocalVideoEnabled,
          disabled: !toggleVideo,
          onClick: toggleVideo,
          "data-testid": "video_btn",
          className: "__cancel-drag-event"
        },
        !isLocalVideoEnabled ? /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.VideoOffIcon, { "data-testid": "video_off_btn" }) : /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.VideoOnIcon, { "data-testid": "video_on_btn" })
      )) : /* @__PURE__ */ import_react34.default.createElement(
        IconButtonWithOptions,
        {
          disabled: !toggleVideo,
          onDisabledClick: toggleVideo,
          options: formattedVideoInputList,
          tooltipMessage: `Turn ${isLocalVideoEnabled ? "off" : "on"} video (${isMacOS ? "\u2318" : "ctrl"} + e)`,
          icon: !isLocalVideoEnabled ? /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.VideoOffIcon, { "data-testid": "video_off_btn" }) : /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.VideoOnIcon, { "data-testid": "video_on_btn" }),
          key: "toggleVideo",
          active: isLocalVideoEnabled,
          onClick: toggleVideo
        }
      ) : null, (localVideoTrack == null ? void 0 : localVideoTrack.facingMode) && roomState === import_react_sdk10.HMSRoomState.Preview ? /* @__PURE__ */ import_react34.default.createElement(Tooltip, { title: "Switch Camera", key: "switchCamera" }, /* @__PURE__ */ import_react34.default.createElement(
        IconButton_default,
        {
          onClick: () => __async(void 0, null, function* () {
            try {
              yield actions.switchCamera();
            } catch (e) {
              ToastManager.addToast({
                title: `Error while flipping camera ${e.message || ""}`,
                variant: "error"
              });
            }
          })
        },
        /* @__PURE__ */ import_react34.default.createElement(import_react_icons9.CameraFlipIcon, null)
      )) : null);
    };
  }
});

// src/Prebuilt/components/Footer/EmojiCard.jsx
var import_react35, emojiReactionList, EmojiCard, EmojiContainer;
var init_EmojiCard = __esm({
  "src/Prebuilt/components/Footer/EmojiCard.jsx"() {
    "use strict";
    init_define_process_env();
    import_react35 = __toESM(require("react"));
    init_Layout();
    init_Theme();
    emojiReactionList = [
      [{ emojiId: "+1" }, { emojiId: "-1" }, { emojiId: "wave" }, { emojiId: "clap" }, { emojiId: "fire" }],
      [{ emojiId: "tada" }, { emojiId: "heart_eyes" }, { emojiId: "joy" }, { emojiId: "open_mouth" }, { emojiId: "sob" }]
    ];
    EmojiCard = ({ sendReaction }) => {
      return emojiReactionList.map((emojiLine, index) => /* @__PURE__ */ import_react35.default.createElement(Flex, { key: index, justify: "between", css: { mb: "$8" } }, emojiLine.map((emoji) => /* @__PURE__ */ import_react35.default.createElement(EmojiContainer, { key: emoji.emojiId, onClick: () => sendReaction(emoji.emojiId) }, /* @__PURE__ */ import_react35.default.createElement("em-emoji", { id: emoji.emojiId, size: "100%", set: "apple" })))));
    };
    EmojiContainer = styled("span", {
      position: "relative",
      cursor: "pointer",
      width: "$16",
      height: "$16",
      p: "$4",
      "&:hover": {
        p: "7px",
        bg: "$surface_brighter",
        borderRadius: "$1"
      }
    });
  }
});

// src/Prebuilt/components/hooks/useDropdownList.jsx
var import_react36, useDropdownList;
var init_useDropdownList = __esm({
  "src/Prebuilt/components/hooks/useDropdownList.jsx"() {
    "use strict";
    init_define_process_env();
    import_react36 = require("react");
    init_useUISettings();
    init_constants();
    useDropdownList = ({ name, open }) => {
      const [dropdownList = [], setDropdownList] = useSetAppDataByKey(APP_DATA.dropdownList);
      (0, import_react36.useEffect)(() => {
        if (open) {
          if (!dropdownList.includes(name)) {
            setDropdownList([...dropdownList, name]);
          }
        } else {
          const index = dropdownList.indexOf(name);
          if (index >= 0) {
            const newDropdownList = [...dropdownList];
            newDropdownList.splice(index, 1);
            setDropdownList(newDropdownList);
          }
        }
      }, [open, name]);
    };
  }
});

// src/Prebuilt/components/EmojiReaction.jsx
var import_react37, import_react_use2, import_apple, import_emoji_mart, import_react_sdk11, import_react_icons10, EmojiReaction;
var init_EmojiReaction = __esm({
  "src/Prebuilt/components/EmojiReaction.jsx"() {
    "use strict";
    init_define_process_env();
    import_react37 = __toESM(require("react"));
    import_react_use2 = require("react-use");
    import_apple = __toESM(require("@emoji-mart/data/sets/14/apple.json"));
    import_emoji_mart = require("emoji-mart");
    import_react_sdk11 = require("@100mslive/react-sdk");
    import_react_icons10 = require("@100mslive/react-icons");
    init_EmojiCard();
    init_Dropdown2();
    init_Layout();
    init_Theme();
    init_Tooltip2();
    init_IconButton3();
    init_useDropdownList();
    init_constants();
    (0, import_emoji_mart.init)({ data: import_apple.default });
    EmojiReaction = () => {
      const [open, setOpen] = (0, import_react37.useState)(false);
      const isConnected = (0, import_react_sdk11.useHMSStore)(import_react_sdk11.selectIsConnectedToRoom);
      useDropdownList({ open, name: "EmojiReaction" });
      const roles = (0, import_react_sdk11.useHMSStore)(import_react_sdk11.selectAvailableRoleNames);
      const localPeerId = (0, import_react_sdk11.useHMSStore)(import_react_sdk11.selectLocalPeerID);
      const isMobile = (0, import_react_use2.useMedia)(config.media.md);
      const { sendEvent } = (0, import_react_sdk11.useCustomEvent)({
        type: EMOJI_REACTION_TYPE
      });
      const sendReaction = (emojiId) => __async(void 0, null, function* () {
        var _a7;
        const data3 = {
          type: EMOJI_REACTION_TYPE,
          emojiId,
          senderId: localPeerId
        };
        sendEvent(data3, { roleNames: roles });
        (_a7 = window.showFlyingEmoji) == null ? void 0 : _a7.call(window, { emojiId, senderId: localPeerId });
      });
      if (!isConnected) {
        return null;
      }
      return isMobile ? /* @__PURE__ */ import_react37.default.createElement(EmojiCard, { sendReaction }) : /* @__PURE__ */ import_react37.default.createElement(import_react37.Fragment, null, /* @__PURE__ */ import_react37.default.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react37.default.createElement(Dropdown.Trigger, { asChild: true, "data-testid": "emoji_reaction_btn" }, /* @__PURE__ */ import_react37.default.createElement(IconButton_default, null, /* @__PURE__ */ import_react37.default.createElement(Tooltip, { title: "Emoji reaction" }, /* @__PURE__ */ import_react37.default.createElement(Box, null, /* @__PURE__ */ import_react37.default.createElement(import_react_icons10.EmojiIcon, null))))), /* @__PURE__ */ import_react37.default.createElement(Dropdown.Content, { sideOffset: 5, align: "center", css: { p: "$8", bg: "$surface_default" } }, /* @__PURE__ */ import_react37.default.createElement(EmojiCard, { sendReaction }))));
    };
  }
});

// src/Prebuilt/components/Leave/EndSessionContent.tsx
var import_react38, import_react_icons11, EndSessionContent;
var init_EndSessionContent = __esm({
  "src/Prebuilt/components/Leave/EndSessionContent.tsx"() {
    "use strict";
    init_define_process_env();
    import_react38 = __toESM(require("react"));
    import_react_icons11 = require("@100mslive/react-icons");
    init_Button2();
    init_Layout();
    init_Text2();
    EndSessionContent = ({
      setShowEndStreamAlert,
      leaveRoom,
      isModal = false,
      isStreamingOn = false
    }) => {
      return /* @__PURE__ */ import_react38.default.createElement(Box, null, /* @__PURE__ */ import_react38.default.createElement(
        Flex,
        {
          css: {
            color: "$alert_error_default",
            display: "flex",
            alignItems: "center"
          }
        },
        /* @__PURE__ */ import_react38.default.createElement(import_react_icons11.AlertTriangleIcon, { style: { marginRight: "0.5rem" } }),
        /* @__PURE__ */ import_react38.default.createElement(Text, { variant: "lg", css: { color: "inherit", fontWeight: "$semiBold" } }, "End ", isStreamingOn ? "Stream" : "Session"),
        isModal ? null : /* @__PURE__ */ import_react38.default.createElement(Box, { css: { color: "$on_surface_high", ml: "auto" }, onClick: () => setShowEndStreamAlert(false) }, /* @__PURE__ */ import_react38.default.createElement(import_react_icons11.CrossIcon, null))
      ), /* @__PURE__ */ import_react38.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium", mb: "$8", mt: "$4" } }, "The ", isStreamingOn ? "stream" : "session", " will end for everyone. You can't undo this action."), /* @__PURE__ */ import_react38.default.createElement(Flex, { align: "center", justify: "between", css: { w: "100%", gap: "$8" } }, /* @__PURE__ */ import_react38.default.createElement(
        Button,
        {
          outlined: true,
          variant: "standard",
          css: { w: "100%", "@md": { display: "none" } },
          onClick: () => setShowEndStreamAlert(false)
        },
        "Cancel"
      ), /* @__PURE__ */ import_react38.default.createElement(
        Button,
        {
          variant: "danger",
          css: { w: "100%" },
          onClick: () => __async(void 0, null, function* () {
            yield leaveRoom({ endStream: true });
            setShowEndStreamAlert(false);
          }),
          id: "stopStream",
          "data-testid": "stop_stream_btn"
        },
        "End ",
        isStreamingOn ? "Stream" : "Session"
      )));
    };
  }
});

// src/Prebuilt/components/Leave/LeaveAtoms.tsx
var LeaveIconButton, MenuTriggerButton;
var init_LeaveAtoms = __esm({
  "src/Prebuilt/components/Leave/LeaveAtoms.tsx"() {
    "use strict";
    init_define_process_env();
    init_IconButton2();
    init_Theme();
    LeaveIconButton = styled(IconButton, {
      color: "$on_primary_high",
      h: "$14",
      px: "$4",
      r: "$1",
      bg: "$alert_error_default",
      "&:not([disabled]):hover": {
        bg: "$alert_error_bright"
      },
      "&:not([disabled]):active": {
        bg: "$alert_error_default"
      },
      "@md": {
        mx: 0
      }
    });
    MenuTriggerButton = styled(LeaveIconButton, {
      borderLeft: "1px solid $alert_error_dim",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      px: "$2"
    });
  }
});

// src/Prebuilt/components/Leave/LeaveCard.tsx
var import_react39, LeaveCard;
var init_LeaveCard = __esm({
  "src/Prebuilt/components/Leave/LeaveCard.tsx"() {
    "use strict";
    init_define_process_env();
    import_react39 = __toESM(require("react"));
    init_Layout();
    init_Text2();
    LeaveCard = ({
      icon,
      title,
      subtitle,
      onClick,
      bg,
      titleColor,
      css: css2 = {}
    }) => {
      return /* @__PURE__ */ import_react39.default.createElement(Flex, { css: __spreadValues({ p: "$10", flexGrow: 1, gap: "$8", bg }, css2), onClick }, /* @__PURE__ */ import_react39.default.createElement(Box, { css: { color: titleColor } }, icon), /* @__PURE__ */ import_react39.default.createElement(Box, { css: { gap: "$2" } }, /* @__PURE__ */ import_react39.default.createElement(Text, { variant: "lg", css: { color: titleColor } }, title), /* @__PURE__ */ import_react39.default.createElement(Text, { variant: "sm", css: { c: "inherit" } }, subtitle)));
    };
  }
});

// src/Prebuilt/components/Leave/LeaveSessionContent.tsx
var import_react40, import_react_icons12, LeaveSessionContent;
var init_LeaveSessionContent = __esm({
  "src/Prebuilt/components/Leave/LeaveSessionContent.tsx"() {
    "use strict";
    init_define_process_env();
    import_react40 = __toESM(require("react"));
    import_react_icons12 = require("@100mslive/react-icons");
    init_Button2();
    init_Layout();
    init_Text2();
    LeaveSessionContent = ({
      setShowLeaveRoomAlert,
      leaveRoom,
      isModal = false
    }) => {
      return /* @__PURE__ */ import_react40.default.createElement(Box, null, /* @__PURE__ */ import_react40.default.createElement(
        Flex,
        {
          css: {
            color: "$alert_error_default",
            display: "flex",
            alignItems: "center"
          }
        },
        /* @__PURE__ */ import_react40.default.createElement(import_react_icons12.AlertTriangleIcon, { style: { marginRight: "0.5rem" } }),
        /* @__PURE__ */ import_react40.default.createElement(Text, { variant: "lg", css: { color: "inherit", fontWeight: "$semiBold" } }, "Leave"),
        isModal ? null : /* @__PURE__ */ import_react40.default.createElement(Box, { css: { color: "$on_surface_high", ml: "auto" }, onClick: () => setShowLeaveRoomAlert(false) }, /* @__PURE__ */ import_react40.default.createElement(import_react_icons12.CrossIcon, null))
      ), /* @__PURE__ */ import_react40.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_low", mb: "$8", mt: "$4" } }, "Others will continue after you leave. You can join the session again."), /* @__PURE__ */ import_react40.default.createElement(Flex, { align: "center", justify: "between", css: { w: "100%", gap: "$8" } }, /* @__PURE__ */ import_react40.default.createElement(
        Button,
        {
          outlined: true,
          variant: "standard",
          css: { w: "100%", "@md": { display: "none" } },
          onClick: () => setShowLeaveRoomAlert(false)
        },
        "Cancel"
      ), /* @__PURE__ */ import_react40.default.createElement(
        Button,
        {
          variant: "danger",
          css: { w: "100%" },
          onClick: () => __async(void 0, null, function* () {
            return yield leaveRoom();
          }),
          id: "leaveRoom",
          "data-testid": "leave_room"
        },
        "Leave Session"
      )));
    };
  }
});

// src/Prebuilt/components/Leave/DesktopLeaveRoom.tsx
var import_react41, import_react_sdk12, import_react_icons13, DesktopLeaveRoom;
var init_DesktopLeaveRoom = __esm({
  "src/Prebuilt/components/Leave/DesktopLeaveRoom.tsx"() {
    "use strict";
    init_define_process_env();
    import_react41 = __toESM(require("react"));
    import_react_sdk12 = require("@100mslive/react-sdk");
    import_react_icons13 = require("@100mslive/react-icons");
    init_Dropdown2();
    init_Layout();
    init_Modal();
    init_Tooltip2();
    init_EndSessionContent();
    init_LeaveAtoms();
    init_LeaveCard();
    init_LeaveSessionContent();
    init_useDropdownList();
    DesktopLeaveRoom = ({
      leaveRoom,
      screenType,
      endRoom
    }) => {
      const [open, setOpen] = (0, import_react41.useState)(false);
      const [showLeaveRoomAlert, setShowLeaveRoomAlert] = (0, import_react41.useState)(false);
      const [showEndStreamAlert, setShowEndStreamAlert] = (0, import_react41.useState)(false);
      const isConnected = (0, import_react_sdk12.useHMSStore)(import_react_sdk12.selectIsConnectedToRoom);
      const permissions = (0, import_react_sdk12.useHMSStore)(import_react_sdk12.selectPermissions);
      const { isStreamingOn } = (0, import_react_sdk12.useRecordingStreaming)();
      const showStream = screenType !== "hls_live_streaming" && isStreamingOn;
      const showLeaveOptions = (permissions == null ? void 0 : permissions.hlsStreaming) && isStreamingOn || (permissions == null ? void 0 : permissions.endRoom);
      useDropdownList({ open: open || showEndStreamAlert || showLeaveRoomAlert, name: "LeaveRoom" });
      if (!permissions || !isConnected) {
        return null;
      }
      return /* @__PURE__ */ import_react41.default.createElement(import_react41.Fragment, null, showLeaveOptions ? /* @__PURE__ */ import_react41.default.createElement(Flex, null, /* @__PURE__ */ import_react41.default.createElement(
        LeaveIconButton,
        {
          key: "LeaveRoom",
          "data-testid": "leave_room_btn",
          css: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          onClick: () => setShowLeaveRoomAlert(true)
        },
        /* @__PURE__ */ import_react41.default.createElement(Tooltip, { title: "Leave Room" }, /* @__PURE__ */ import_react41.default.createElement(Box, null, /* @__PURE__ */ import_react41.default.createElement(import_react_icons13.ExitIcon, { style: { transform: "rotate(180deg)" } })))
      ), /* @__PURE__ */ import_react41.default.createElement(Dropdown.Root, { open, onOpenChange: setOpen, modal: false }, /* @__PURE__ */ import_react41.default.createElement(
        Dropdown.Trigger,
        {
          asChild: true,
          css: {
            '&[data-state="open"]': {
              bg: "$alert_error_dim"
            }
          }
        },
        /* @__PURE__ */ import_react41.default.createElement(MenuTriggerButton, { "data-testid": "leave_end_dropdown_trigger" }, /* @__PURE__ */ import_react41.default.createElement(import_react_icons13.VerticalMenuIcon, null))
      ), /* @__PURE__ */ import_react41.default.createElement(Dropdown.Content, { css: { p: 0, w: "$100" }, alignOffset: -50, sideOffset: 10 }, /* @__PURE__ */ import_react41.default.createElement(
        Dropdown.Item,
        {
          css: {
            bg: "$surface_dim",
            color: "$on_surface_medium",
            "&:hover": { bg: "$surface_default", color: "$on_surface_high" }
          },
          onClick: () => __async(void 0, null, function* () {
            return yield leaveRoom();
          }),
          "data-testid": "just_leave_btn"
        },
        /* @__PURE__ */ import_react41.default.createElement(
          LeaveCard,
          {
            title: showStream ? "Leave Stream" : "Leave Session",
            subtitle: `Others will continue after you leave. You can join the ${showStream ? "stream" : "session"} again.`,
            bg: "",
            titleColor: "$on_surface_high",
            icon: /* @__PURE__ */ import_react41.default.createElement(import_react_icons13.ExitIcon, { height: 24, width: 24, style: { transform: "rotate(180deg)" } }),
            onClick: () => __async(void 0, null, function* () {
              return yield leaveRoom();
            }),
            css: { p: 0 }
          }
        )
      ), /* @__PURE__ */ import_react41.default.createElement(
        Dropdown.Item,
        {
          css: {
            bg: "$alert_error_dim",
            color: "$alert_error_bright",
            "&:hover": { bg: "$alert_error_dim", color: "$alert_error_brighter" }
          },
          "data-testid": "end_room_btn"
        },
        /* @__PURE__ */ import_react41.default.createElement(
          LeaveCard,
          {
            title: showStream ? "End Stream" : "End Session",
            subtitle: `The ${showStream ? "stream" : "session"} will end for everyone. You can't undo this action.`,
            bg: "",
            titleColor: "$alert_error_brighter",
            icon: /* @__PURE__ */ import_react41.default.createElement(import_react_icons13.StopIcon, { height: 24, width: 24 }),
            onClick: () => {
              setOpen(false);
              setShowEndStreamAlert(true);
            },
            css: { p: 0 }
          }
        )
      )))) : /* @__PURE__ */ import_react41.default.createElement(
        LeaveIconButton,
        {
          onClick: () => {
            setShowLeaveRoomAlert(true);
          },
          key: "LeaveRoom",
          "data-testid": "leave_room_btn"
        },
        /* @__PURE__ */ import_react41.default.createElement(Tooltip, { title: "Leave Room" }, /* @__PURE__ */ import_react41.default.createElement(Box, null, /* @__PURE__ */ import_react41.default.createElement(import_react_icons13.ExitIcon, { style: { transform: "rotate(180deg)" } })))
      ), /* @__PURE__ */ import_react41.default.createElement(Dialog.Root, { open: showEndStreamAlert, modal: false }, /* @__PURE__ */ import_react41.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react41.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react41.default.createElement(Dialog.Content, { css: { w: "min(420px, 90%)", p: "$8", bg: "$surface_dim" } }, /* @__PURE__ */ import_react41.default.createElement(
        EndSessionContent,
        {
          setShowEndStreamAlert,
          leaveRoom: isStreamingOn ? () => leaveRoom({ endStream: true }) : endRoom,
          isStreamingOn,
          isModal: true
        }
      )))), /* @__PURE__ */ import_react41.default.createElement(Dialog.Root, { open: showLeaveRoomAlert, modal: false }, /* @__PURE__ */ import_react41.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react41.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react41.default.createElement(Dialog.Content, { css: { w: "min(420px, 90%)", p: "$8", bg: "$surface_dim" } }, /* @__PURE__ */ import_react41.default.createElement(LeaveSessionContent, { setShowLeaveRoomAlert, leaveRoom, isModal: true })))));
    };
  }
});

// src/Sheet/Sheet.tsx
var import_react42, DialogPrimitive2, SheetRoot, SheetTrigger, StyledOverlay, StyledContent6, SheetContent, SheetClose, SheetTitle, SheetDescription, SheetDefaultCloseIcon, Sheet;
var init_Sheet = __esm({
  "src/Sheet/Sheet.tsx"() {
    "use strict";
    init_define_process_env();
    import_react42 = __toESM(require("react"));
    DialogPrimitive2 = __toESM(require("@radix-ui/react-dialog"));
    init_Modal();
    init_Theme();
    init_utils();
    SheetRoot = styled(DialogPrimitive2.Root, {
      minHeight: "240px",
      maxWidth: "100%"
    });
    SheetTrigger = styled(DialogPrimitive2.Trigger, {
      appearance: "none !important"
      // Needed for safari it shows white overlay
    });
    StyledOverlay = styled(Dialog.Overlay, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      '&[data-state="open"]': {
        animation: `${sheetFadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
      },
      '&[data-state="closed"]': {
        animation: `${sheetFadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
      }
    });
    StyledContent6 = styled(DialogPrimitive2.Content, {
      color: "$on_surface_medium",
      backgroundColor: "$surface_default",
      borderTopLeftRadius: "$3",
      borderTopRightRadius: "$3",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      position: "fixed",
      zIndex: 1001,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      maxHeight: "96%",
      // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
      // Affects animated and non-animated dialogs alike.
      willChange: "transform",
      "&:focus": {
        outline: "none"
      },
      "@allowMotion": {
        '&[data-state="open"]': {
          animation: `${sheetSlideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
        },
        '&[data-state="closed"]': {
          animation: `${sheetSlideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
        }
      },
      variants: {
        side: {
          top: {
            $$transformValue: "translate3d(0,-100%,0)",
            bottom: "auto"
          },
          right: {
            $$transformValue: "translate3d(100%,0,0)",
            right: 0
          },
          bottom: {
            $$transformValue: "translate3d(0,100%,0)",
            bottom: 0,
            top: "auto"
          },
          left: {
            $$transformValue: "translate3d(-100%,0,0)",
            left: 0
          }
        }
      },
      defaultVariants: {
        side: "bottom"
      }
    });
    SheetContent = import_react42.default.forwardRef(
      (_a7, forwardedRef) => {
        var _b7 = _a7, { children } = _b7, props = __objRest(_b7, ["children"]);
        return /* @__PURE__ */ import_react42.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react42.default.createElement(StyledOverlay, null), /* @__PURE__ */ import_react42.default.createElement(StyledContent6, __spreadProps(__spreadValues({}, props), { ref: forwardedRef }), children));
      }
    );
    SheetClose = Dialog.Close;
    SheetTitle = styled(DialogPrimitive2.Title, {
      margin: 0
    });
    SheetDescription = Dialog.Description;
    SheetDefaultCloseIcon = Dialog.DefaultClose;
    Sheet = {
      Root: SheetRoot,
      Trigger: SheetTrigger,
      Content: SheetContent,
      Description: SheetDescription,
      Title: SheetTitle,
      Close: SheetClose,
      DefaultClose: SheetDefaultCloseIcon
    };
  }
});

// src/Sheet/index.ts
var init_Sheet2 = __esm({
  "src/Sheet/index.ts"() {
    "use strict";
    init_define_process_env();
    init_Sheet();
  }
});

// src/Prebuilt/components/Leave/MwebLeaveRoom.tsx
var import_react43, import_react_sdk13, import_react_icons14, MwebLeaveRoom;
var init_MwebLeaveRoom = __esm({
  "src/Prebuilt/components/Leave/MwebLeaveRoom.tsx"() {
    "use strict";
    init_define_process_env();
    import_react43 = __toESM(require("react"));
    import_react_sdk13 = require("@100mslive/react-sdk");
    import_react_icons14 = require("@100mslive/react-icons");
    init_Layout();
    init_Sheet2();
    init_Tooltip2();
    init_EndSessionContent();
    init_LeaveAtoms();
    init_LeaveCard();
    init_LeaveSessionContent();
    init_useDropdownList();
    MwebLeaveRoom = ({
      leaveRoom,
      screenType,
      endRoom
    }) => {
      const [open, setOpen] = (0, import_react43.useState)(false);
      const [showLeaveRoomAlert, setShowLeaveRoomAlert] = (0, import_react43.useState)(false);
      const [showEndStreamAlert, setShowEndStreamAlert] = (0, import_react43.useState)(false);
      const isConnected = (0, import_react_sdk13.useHMSStore)(import_react_sdk13.selectIsConnectedToRoom);
      const permissions = (0, import_react_sdk13.useHMSStore)(import_react_sdk13.selectPermissions);
      const { isStreamingOn } = (0, import_react_sdk13.useRecordingStreaming)();
      const showStream = screenType !== "hls_live_streaming" && isStreamingOn;
      const showLeaveOptions = (permissions == null ? void 0 : permissions.hlsStreaming) && isStreamingOn || (permissions == null ? void 0 : permissions.endRoom);
      useDropdownList({ open, name: "LeaveRoom" });
      if (!permissions || !isConnected) {
        return null;
      }
      return /* @__PURE__ */ import_react43.default.createElement(import_react43.Fragment, null, showLeaveOptions ? /* @__PURE__ */ import_react43.default.createElement(Sheet.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react43.default.createElement(Sheet.Trigger, { asChild: true }, /* @__PURE__ */ import_react43.default.createElement(
        LeaveIconButton,
        {
          key: "LeaveRoom",
          "data-testid": "leave_room_btn",
          css: {
            borderTopRightRadius: "$1",
            borderBottomRightRadius: "$1"
          }
        },
        /* @__PURE__ */ import_react43.default.createElement(Tooltip, { title: "Leave Room" }, /* @__PURE__ */ import_react43.default.createElement(Box, null, /* @__PURE__ */ import_react43.default.createElement(import_react_icons14.ExitIcon, { style: { transform: "rotate(180deg)" } })))
      )), /* @__PURE__ */ import_react43.default.createElement(Sheet.Content, null, /* @__PURE__ */ import_react43.default.createElement(
        LeaveCard,
        {
          title: showStream ? "Leave Stream" : "Leave Session",
          subtitle: `Others will continue after you leave. You can join the ${showStream ? "stream" : "session"} again.`,
          bg: "$surface_default",
          titleColor: "$on_surface_high",
          icon: /* @__PURE__ */ import_react43.default.createElement(import_react_icons14.ExitIcon, { height: 24, width: 24, style: { transform: "rotate(180deg)" } }),
          onClick: () => __async(void 0, null, function* () {
            return yield leaveRoom();
          }),
          css: { pt: 0, mt: "$10", color: "$on_surface_low", "&:hover": { color: "$on_surface_high" } }
        }
      ), /* @__PURE__ */ import_react43.default.createElement(
        LeaveCard,
        {
          title: showStream ? "End Stream" : "End Session",
          subtitle: `The will end the ${showStream ? "stream" : "session"} for everyone. You can't undo this action.`,
          bg: "$alert_error_dim",
          titleColor: "$alert_error_brighter",
          css: { color: "$alert_error_bright", "&:hover": { color: "$alert_error_brighter" } },
          icon: /* @__PURE__ */ import_react43.default.createElement(import_react_icons14.StopIcon, { height: 24, width: 24 }),
          onClick: () => {
            setOpen(false);
            setShowEndStreamAlert(true);
          }
        }
      ))) : /* @__PURE__ */ import_react43.default.createElement(LeaveIconButton, { key: "LeaveRoom", "data-testid": "leave_room_btn", onClick: () => setShowLeaveRoomAlert(true) }, /* @__PURE__ */ import_react43.default.createElement(Tooltip, { title: "Leave Room" }, /* @__PURE__ */ import_react43.default.createElement(Box, null, /* @__PURE__ */ import_react43.default.createElement(import_react_icons14.ExitIcon, { style: { transform: "rotate(180deg)" } })))), /* @__PURE__ */ import_react43.default.createElement(Sheet.Root, { open: showEndStreamAlert, onOpenChange: setShowEndStreamAlert }, /* @__PURE__ */ import_react43.default.createElement(Sheet.Content, { css: { bg: "$surface_dim", p: "$10", pb: "$12" } }, /* @__PURE__ */ import_react43.default.createElement(
        EndSessionContent,
        {
          setShowEndStreamAlert,
          leaveRoom: isStreamingOn ? leaveRoom : endRoom,
          isStreamingOn
        }
      ))), /* @__PURE__ */ import_react43.default.createElement(Sheet.Root, { open: showLeaveRoomAlert, onOpenChange: setShowLeaveRoomAlert }, /* @__PURE__ */ import_react43.default.createElement(Sheet.Content, { css: { bg: "$surface_dim", p: "$10", pb: "$12" } }, /* @__PURE__ */ import_react43.default.createElement(LeaveSessionContent, { setShowLeaveRoomAlert, leaveRoom }))));
    };
  }
});

// src/Prebuilt/components/Leave/LeaveRoom.tsx
var import_react44, import_react_use3, import_react_sdk14, LeaveRoom;
var init_LeaveRoom = __esm({
  "src/Prebuilt/components/Leave/LeaveRoom.tsx"() {
    "use strict";
    init_define_process_env();
    import_react44 = __toESM(require("react"));
    import_react_use3 = require("react-use");
    import_react_sdk14 = require("@100mslive/react-sdk");
    init_Theme();
    init_ToastManager();
    init_DesktopLeaveRoom();
    init_MwebLeaveRoom();
    LeaveRoom = ({ screenType }) => {
      const isConnected = (0, import_react_sdk14.useHMSStore)(import_react_sdk14.selectIsConnectedToRoom);
      const permissions = (0, import_react_sdk14.useHMSStore)(import_react_sdk14.selectPermissions);
      const isMobile = (0, import_react_use3.useMedia)(config.media.md);
      const rolesMap = (0, import_react_sdk14.useHMSStore)(import_react_sdk14.selectRolesMap);
      const streamingPermissionRoles = Object.keys(rolesMap).filter((roleName) => {
        const roleObj = rolesMap[roleName];
        return roleObj.permissions.hlsStreaming;
      });
      const peersWithStreamingRights = (0, import_react_sdk14.useHMSStore)(
        (0, import_react_sdk14.selectPeersByCondition)((peer) => streamingPermissionRoles.includes(peer.roleName || ""))
      );
      const hlsState = (0, import_react_sdk14.useHMSStore)(import_react_sdk14.selectHLSState);
      const hmsActions = (0, import_react_sdk14.useHMSActions)();
      const stopStream = () => __async(void 0, null, function* () {
        try {
          if (permissions == null ? void 0 : permissions.hlsStreaming) {
            console.log("Stopping HLS stream");
            yield hmsActions.stopHLSStreaming();
            ToastManager.addToast({ title: "Stopping the stream" });
          }
        } catch (e) {
          console.error("Error stopping stream", e);
          ToastManager.addToast({ title: "Error in stopping the stream", type: "error" });
        }
      });
      const endRoom = () => __async(void 0, null, function* () {
        yield hmsActions.endRoom(false, "End Room");
      });
      const leaveRoom = (..._0) => __async(void 0, [..._0], function* (options = { endStream: false }) {
        if (options.endStream || hlsState.running && peersWithStreamingRights.length === 1) {
          yield stopStream();
        }
        yield hmsActions.leave();
      });
      if (!permissions || !isConnected) {
        return null;
      }
      return isMobile ? /* @__PURE__ */ import_react44.default.createElement(MwebLeaveRoom, { leaveRoom, screenType, endRoom }) : /* @__PURE__ */ import_react44.default.createElement(DesktopLeaveRoom, { leaveRoom, screenType, endRoom });
    };
  }
});

// src/Prebuilt/components/PIP/pipUtils.js
function setPIPCanvasColors() {
  if (!CANVAS_FILL_COLOR) {
    CANVAS_FILL_COLOR = window.getComputedStyle(document.documentElement).getPropertyValue("--hms-ui-colors-surface_bright");
  }
  if (!CANVAS_STROKE_COLOR) {
    CANVAS_STROKE_COLOR = window.getComputedStyle(document.documentElement).getPropertyValue("--hms-ui-colors-border_bright");
  }
}
function resetPIPCanvasColors() {
  CANVAS_FILL_COLOR = "";
  CANVAS_STROKE_COLOR = "";
}
function drawVideoElementsOnCanvas(videoElements, canvas) {
  let videoTiles = videoElements.filter((videoElement) => videoElement.srcObject !== null);
  const ctx = canvas.getContext("2d");
  setPIPCanvasColors();
  ctx.fillStyle = CANVAS_FILL_COLOR;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (videoTiles.length === 0) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }
  fillGridTiles(videoTiles.slice(0, 4), ctx, canvas);
}
function dummyChangeInCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  setPIPCanvasColors();
  ctx.fillStyle = CANVAS_FILL_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function fillGridTiles(videoElements, ctx, canvas) {
  const offset = 8;
  canvas.width = 480;
  canvas.height = 320;
  ctx.fillStyle = CANVAS_FILL_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (videoElements.length > 0) {
    ctx.strokeStyle = CANVAS_STROKE_COLOR;
    ctx.lineWidth = offset / 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }
  if (videoElements.length === 1) {
    const video = videoElements[0];
    const { width, height } = getRenderDimensions(video, canvas.width - offset, canvas.height - offset);
    const xOffset = (canvas.width - width) / 2;
    const yOffset = (canvas.height - height) / 2;
    ctx.drawImage(video, xOffset, yOffset, width, height);
  }
  if (videoElements.length === 2) {
    videoElements.forEach((video, index) => {
      const { width, height } = getRenderDimensions(
        video,
        canvas.width / 2 - offset,
        // This will be the max available width for each tile
        canvas.height - offset
      );
      const xOffset = (canvas.width / 2 - width) / 2 + canvas.width / 2 * index;
      const yOffset = (canvas.height - height) / 2;
      ctx.drawImage(video, xOffset, yOffset, width, height);
    });
    const path = new Path2D();
    path.moveTo(canvas.width / 2, 0);
    path.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke(path);
  }
  if (videoElements.length === 3) {
    videoElements.forEach((video, index) => {
      const { width, height } = getRenderDimensions(video, canvas.width / 2 - offset, canvas.height / 2 - offset);
      const xOffset = index < 2 ? (canvas.width / 2 - width) / 2 + canvas.width / 2 * index : canvas.width / 2 - width / 2;
      const yOffset = (index < 2 ? 0 : canvas.height / 2) + (canvas.height / 2 - height) / 2;
      ctx.drawImage(video, xOffset, yOffset, width, height);
    });
    const path = new Path2D();
    path.moveTo(canvas.width / 2, 0);
    path.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke(path);
    path.moveTo(0, canvas.height / 2);
    path.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke(path);
  }
  if (videoElements.length === 4) {
    videoElements.forEach((video, index) => {
      const { width, height } = getRenderDimensions(video, canvas.width / 2 - offset, canvas.height / 2 - offset);
      const xOffset = (canvas.width / 2 - width) / 2 + canvas.width / 2 * (index % 2);
      const yOffset = (index < 2 ? 0 : canvas.height / 2) + (canvas.height / 2 - height) / 2;
      ctx.drawImage(video, xOffset, yOffset, width, height);
    });
    const path = new Path2D();
    path.moveTo(canvas.width / 2, 0);
    path.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke(path);
    path.moveTo(0, canvas.height / 2);
    path.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke(path);
  }
}
function getRenderDimensions(video, width, height) {
  let finalWidth = video.videoWidth / video.videoHeight * height;
  let finalHeight = height;
  if (finalWidth > width) {
    finalWidth = width;
    finalHeight = video.videoHeight / video.videoWidth * width;
  }
  return { width: finalWidth, height: finalHeight };
}
var CANVAS_FILL_COLOR, CANVAS_STROKE_COLOR;
var init_pipUtils = __esm({
  "src/Prebuilt/components/PIP/pipUtils.js"() {
    "use strict";
    init_define_process_env();
  }
});

// src/Prebuilt/components/PIP/PIPManager.js
var workerTimers, MAX_NUMBER_OF_TILES_IN_PIP, DEFAULT_FPS, DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT, LEAVE_EVENT_NAME, PIPStates, PipManager, PictureInPicture;
var init_PIPManager = __esm({
  "src/Prebuilt/components/PIP/PIPManager.js"() {
    "use strict";
    init_define_process_env();
    workerTimers = __toESM(require("worker-timers"));
    init_pipUtils();
    init_constants();
    MAX_NUMBER_OF_TILES_IN_PIP = 4;
    DEFAULT_FPS = 30;
    DEFAULT_CANVAS_WIDTH = 480;
    DEFAULT_CANVAS_HEIGHT = 320;
    LEAVE_EVENT_NAME = "leavepictureinpicture";
    PIPStates = {
      starting: "starting",
      started: "started",
      stopping: "stopping",
      stopped: "stopped"
    };
    PipManager = class {
      constructor() {
        __publicField(this, "listeners", /* @__PURE__ */ new Set());
        __publicField(this, "stop", () => __async(this, null, function* () {
          var _a7;
          if (this.state === PIPStates.stopped) {
            return;
          }
          this.state = PIPStates.stopping;
          (_a7 = this.pipVideo) == null ? void 0 : _a7.removeEventListener(LEAVE_EVENT_NAME, this.stop);
          if (this.timeoutRef) {
            workerTimers.clearTimeout(this.timeoutRef);
            this.timeoutRef = null;
          }
          if (this.isOn()) {
            this.exitPIP();
          }
          yield this.detachOldAttachNewTracks(this.tracksToShow, []);
          this.onStateChange(false);
          this.callListeners(false);
          this.reset();
          this.state = PIPStates.stopped;
        }));
        // ------- Private function --------------
        /**
         * @private {boolean} on - whether pip is on/off
         */
        __publicField(this, "callListeners", (on) => {
          this.listeners.forEach((listener) => listener == null ? void 0 : listener(on));
        });
        this.reset();
      }
      listenToStateChange(cb) {
        this.listeners.add(cb);
      }
      /**
       * @private
       */
      reset() {
        console.debug("resetting PIP state");
        resetPIPCanvasColors();
        this.canvas = null;
        this.pipVideo = null;
        this.timeoutRef = null;
        this.hmsActions = null;
        this.videoElements = [];
        this.tracksToShow = [];
        this.onStateChange = () => {
        };
        this.state = PIPStates.stopped;
      }
      /**
       * check if PIP is supported in this browser env
       */
      isSupported() {
        return !!document.pictureInPictureEnabled && !isIOS && !(isMacOS && isSafari);
      }
      /**
       * check if pip is currently turned on
       */
      isOn() {
        return !!document.pictureInPictureElement;
      }
      /**
       * request browser to start pip and start the render loop updating the pip
       * video element with peer tracks.
       * @param hmsActions
       * @param onStateChangeFn {function(bool):void} callback called to notify change in pip state
       */
      start(hmsActions, onStateChangeFn) {
        return __async(this, null, function* () {
          if (!this.isSupported()) {
            throw new Error("pip is not supported on this browser");
          }
          console.debug("starting PIP, current state", this.state);
          if (this.state === PIPStates.started) {
            yield this.stop();
          } else if (this.state === PIPStates.starting) {
            return;
          }
          this.state = PIPStates.starting;
          try {
            yield this.init(hmsActions, onStateChangeFn);
            this.pipVideo.addEventListener(LEAVE_EVENT_NAME, this.stop);
            this.renderLoop();
            if (!this.isOn()) {
              yield this.requestPIP();
            }
            console.debug("pip started");
            this.state = PIPStates.started;
            this.onStateChange(true);
            this.callListeners(true);
          } catch (err) {
            console.error("error in request pip", err);
            this.state = PIPStates.stopped;
          }
        });
      }
      /**
       * @param peers {Array} All Remote Peers present in call.
       * @param tracksMap {Object} map of track id to track
       * */
      updatePeersAndTracks(peers, tracksMap) {
        return __async(this, null, function* () {
          if (!this.canvas) {
            return;
          }
          const newTracksToShowUnordered = this.pickTracksToShow(peers, tracksMap);
          const currentTracksShowing = this.tracksToShow;
          this.tracksToShow = this.orderNewTracksToShow(newTracksToShowUnordered, currentTracksShowing);
          try {
            yield this.detachOldAttachNewTracks(currentTracksShowing, this.tracksToShow, tracksMap);
          } catch (error) {
            console.error("error in detaching/attaching tracks", error);
          }
        });
      }
      /**
       * @private
       */
      init(hmsActions, onStateChangeFn) {
        return __async(this, null, function* () {
          yield this.initMediaElements();
          this.hmsActions = hmsActions;
          this.onStateChange = onStateChangeFn;
        });
      }
      initMediaElements() {
        return __async(this, null, function* () {
          if (!this.canvas) {
            const { canvas, pipVideo } = this.initializeCanvasAndVideoElement();
            this.canvas = canvas;
            this.pipVideo = pipVideo;
            this.videoElements = this.initializeVideoElements();
            const videoPlayPromise = this.pipVideo.play();
            dummyChangeInCanvas(this.canvas);
            yield videoPlayPromise;
          }
        });
      }
      initializeCanvasAndVideoElement() {
        const canvas = document.createElement("canvas");
        canvas.width = DEFAULT_CANVAS_WIDTH;
        canvas.height = DEFAULT_CANVAS_HEIGHT;
        const pipVideo = document.createElement("video");
        pipVideo.width = DEFAULT_CANVAS_WIDTH;
        pipVideo.height = DEFAULT_CANVAS_HEIGHT;
        pipVideo.muted = true;
        pipVideo.srcObject = canvas.captureStream();
        return { canvas, pipVideo };
      }
      initializeVideoElements() {
        let videoElements = [];
        for (let i = 0; i < MAX_NUMBER_OF_TILES_IN_PIP; i++) {
          const videoElement = document.createElement("video");
          videoElement.autoplay = true;
          videoElement.playsinline = true;
          videoElements.push(videoElement);
        }
        return videoElements;
      }
      /**
       * render loop is responsible for rendering the video elements on canvas/pip.
       * in each loop current video elements are stitched and painted on canvas
       */
      renderLoop() {
        const delay = 1e3 / DEFAULT_FPS;
        this.timeoutRef = workerTimers.setTimeout(() => {
          if (this.state === PIPStates.stopping || this.state === PIPStates.stopped) {
            return;
          }
          if (this.state === PIPStates.started) {
            drawVideoElementsOnCanvas(this.videoElements, this.canvas);
          }
          this.renderLoop();
        }, delay);
      }
      requestPIP() {
        return __async(this, null, function* () {
          try {
            if (this.isOn()) {
              this.exitPIP();
            }
            yield this.pipVideo.requestPictureInPicture();
          } catch (error) {
            console.error("error in requestpip", error, "state", this.state);
            throw error;
          }
        });
      }
      exitPIP() {
        document.exitPictureInPicture();
      }
      /**
       * Logic - pick only enabled video tracks
       * @param peers {Array<any>}
       * @param tracksMap {Record<string, any>}
       */
      pickTracksToShow(peers, tracksMap) {
        var _a7;
        const tracksToShow = [];
        for (const peer of peers) {
          if (tracksToShow.length === MAX_NUMBER_OF_TILES_IN_PIP) {
            break;
          } else if (peer.videoTrack && ((_a7 = tracksMap[peer.videoTrack]) == null ? void 0 : _a7.enabled)) {
            tracksToShow.push(peer.videoTrack);
          }
        }
        return tracksToShow;
      }
      /**
       * there has to be a smart reordering of new tracks based on currently showing
       * ones to reduce unnecessary displacement. If someone was showing up both
       * earlier and now, it's a better UX to keep their position same instead
       * of letting it change.
       * The returned array is a shuffled version of newTracks with position of
       * tracks present in the old tracks intact.
       * eg. old = [1,5,9,3], new = [3,8,2,9], result = [8,2,9,3]
       * @param oldTracks {Array}
       * @param newTracks {Array}
       * @return {Array}
       */
      orderNewTracksToShow(newTracks, oldTracks) {
        const betterNewTracks = [];
        const leftOvers = [];
        newTracks.forEach((track) => {
          const oldPosition = oldTracks.indexOf(track);
          if (oldPosition !== -1 && oldPosition < newTracks.length) {
            betterNewTracks[oldPosition] = track;
          } else {
            leftOvers.push(track);
          }
        });
        for (let i = 0; i < newTracks.length; i++) {
          if (!betterNewTracks[i]) {
            betterNewTracks[i] = leftOvers.shift();
          }
        }
        return betterNewTracks;
      }
      /**
       * call detach for tracks which no longer need to be shown and attach for
       * new ones which are to be shown now.
       * Note: oldTracks and newTracks are not necessarily of same length
       * @param oldTracks {Array<String>}
       * @param newTracks {Array<String>}
       * @param tracksMap {Record<String, any>}
       */
      // eslint-disable-next-line complexity
      detachOldAttachNewTracks(oldTracks, newTracks, tracksMap = null) {
        return __async(this, null, function* () {
          const numTracks = Math.max(oldTracks.length, newTracks.length);
          for (let i = 0; i < numTracks; i++) {
            if (oldTracks[i] === newTracks[i]) {
              continue;
            } else if (oldTracks[i]) {
              if (!tracksMap || tracksMap[oldTracks[i]]) {
                yield this.hmsActions.detachVideo(oldTracks[i], this.videoElements[i]);
              }
              if (this.videoElements[i]) {
                this.videoElements[i].srcObject = null;
              }
            }
            if (newTracks[i]) {
              yield this.hmsActions.attachVideo(newTracks[i], this.videoElements[i]);
            }
          }
        });
      }
    };
    PictureInPicture = new PipManager();
  }
});

// src/Prebuilt/components/PIP/SetupMediaSession.js
var import_react_sdk15, SetupMediaSession, MediaSession;
var init_SetupMediaSession = __esm({
  "src/Prebuilt/components/PIP/SetupMediaSession.js"() {
    "use strict";
    init_define_process_env();
    import_react_sdk15 = require("@100mslive/react-sdk");
    SetupMediaSession = class {
      constructor() {
        __publicField(this, "setup", (actions, store) => {
          this.actions = actions;
          this.store = store;
          this.initState();
          this.setUpHandlers();
        });
        __publicField(this, "initState", () => {
          var _a7, _b7, _c, _d;
          const isMicActive = this.store.getState(import_react_sdk15.selectIsLocalAudioEnabled);
          const isCamActive = this.store.getState(import_react_sdk15.selectIsLocalVideoEnabled);
          (_b7 = (_a7 = navigator.mediaSession) == null ? void 0 : _a7.setMicrophoneActive) == null ? void 0 : _b7.call(_a7, isMicActive);
          (_d = (_c = navigator.mediaSession) == null ? void 0 : _c.setCameraActive) == null ? void 0 : _d.call(_c, isCamActive);
          this.store.subscribe((isMicActive2) => {
            var _a8, _b8;
            (_b8 = (_a8 = navigator.mediaSession) == null ? void 0 : _a8.setMicrophoneActive) == null ? void 0 : _b8.call(_a8, isMicActive2);
          }, import_react_sdk15.selectIsLocalAudioEnabled);
          this.store.subscribe((isCamActive2) => {
            var _a8, _b8;
            (_b8 = (_a8 = navigator.mediaSession) == null ? void 0 : _a8.setCameraActive) == null ? void 0 : _b8.call(_a8, isCamActive2);
          }, import_react_sdk15.selectIsLocalVideoEnabled);
        });
        __publicField(this, "toggleMic", () => __async(this, null, function* () {
          console.log("toggle mic clicked in pip");
          const current = this.store.getState(import_react_sdk15.selectIsLocalAudioEnabled);
          yield this.actions.setLocalAudioEnabled(!current);
        }));
        __publicField(this, "toggleCam", () => __async(this, null, function* () {
          console.log("toggle cam clicked in pip");
          const current = this.store.getState(import_react_sdk15.selectIsLocalVideoEnabled);
          yield this.actions.setLocalVideoEnabled(!current);
        }));
        __publicField(this, "leave", () => {
          console.log("leave called from pip");
          this.actions.leave();
        });
        __publicField(this, "setUpHandlers", () => {
          if (navigator.mediaSession) {
            try {
              navigator.mediaSession.setActionHandler("togglemicrophone", this.toggleMic);
              navigator.mediaSession.setActionHandler("togglecamera", this.toggleCam);
              navigator.mediaSession.setActionHandler("hangup", this.leave);
            } catch (err) {
              console.error("error in setting media session handlers", err);
            }
          }
        });
      }
    };
    MediaSession = new SetupMediaSession();
  }
});

// src/Prebuilt/components/PIP/PIPComponent.jsx
var import_react45, import_react_sdk16, import_react_icons15, PIPComponent, ActivatedPIP, PIPComponent_default;
var init_PIPComponent = __esm({
  "src/Prebuilt/components/PIP/PIPComponent.jsx"() {
    "use strict";
    init_define_process_env();
    import_react45 = __toESM(require("react"));
    import_react_sdk16 = require("@100mslive/react-sdk");
    import_react_icons15 = require("@100mslive/react-icons");
    init_src();
    init_IconButton3();
    init_PIPManager();
    init_SetupMediaSession();
    init_useUISettings();
    PIPComponent = ({ content = null }) => {
      const [isPipOn, setIsPipOn] = (0, import_react45.useState)(PictureInPicture.isOn());
      const hmsActions = (0, import_react_sdk16.useHMSActions)();
      const store = (0, import_react_sdk16.useHMSVanillaStore)();
      const onPipToggle = (0, import_react45.useCallback)(() => {
        if (!isPipOn) {
          PictureInPicture.start(hmsActions, setIsPipOn).catch((err) => console.error("error in starting pip", err));
          MediaSession.setup(hmsActions, store);
        } else {
          PictureInPicture.stop().catch((err) => console.error("error in stopping pip", err));
        }
      }, [hmsActions, isPipOn, store]);
      if (!PictureInPicture.isSupported()) {
        return null;
      }
      return /* @__PURE__ */ import_react45.default.createElement(import_react45.default.Fragment, null, content ? /* @__PURE__ */ import_react45.default.createElement(Flex, { css: { w: "100%" }, onClick: () => onPipToggle(), "data-testid": "pip_btn" }, content) : /* @__PURE__ */ import_react45.default.createElement(Tooltip, { title: `${isPipOn ? "Deactivate" : "Activate"} picture in picture view` }, /* @__PURE__ */ import_react45.default.createElement(IconButton_default, { active: !isPipOn, key: "pip", onClick: () => onPipToggle(), "data-testid": "pip_btn" }, /* @__PURE__ */ import_react45.default.createElement(import_react_icons15.PipIcon, null))));
    };
    ActivatedPIP = () => {
      const tracksMap = (0, import_react_sdk16.useHMSStore)(import_react_sdk16.selectTracksMap);
      const storePeers = (0, import_react_sdk16.useHMSStore)(import_react_sdk16.selectPeers);
      const pinnedTrack = usePinnedTrack();
      (0, import_react45.useEffect)(() => {
        function updatePIP() {
          if (!PictureInPicture.isOn()) {
            return;
          }
          let pipPeers = storePeers;
          if (pinnedTrack) {
            pipPeers = storePeers.filter((peer) => pinnedTrack.peerId === peer.id);
          }
          PictureInPicture.updatePeersAndTracks(pipPeers, tracksMap).catch((err) => {
            console.error("error in updating pip", err);
          });
        }
        PictureInPicture.listenToStateChange(updatePIP);
        updatePIP();
      }, [storePeers, tracksMap, pinnedTrack]);
      return /* @__PURE__ */ import_react45.default.createElement(import_react45.default.Fragment, null);
    };
    PIPComponent_default = PIPComponent;
  }
});

// src/Prebuilt/components/PIP/index.jsx
var import_react46, PIP;
var init_PIP = __esm({
  "src/Prebuilt/components/PIP/index.jsx"() {
    "use strict";
    init_define_process_env();
    import_react46 = __toESM(require("react"));
    init_PIPComponent();
    PIP = ({ content = null }) => {
      return /* @__PURE__ */ import_react46.default.createElement(PIPComponent_default, { content });
    };
  }
});

// src/Prebuilt/components/hooks/useDropdownSelection.jsx
var useDropdownSelection;
var init_useDropdownSelection = __esm({
  "src/Prebuilt/components/hooks/useDropdownSelection.jsx"() {
    "use strict";
    init_define_process_env();
    useDropdownSelection = () => {
      return "$surface_bright";
    };
  }
});

// src/Prebuilt/provider/roomLayoutProvider/constants/index.ts
var import_join_form, defaultLayout;
var init_constants3 = __esm({
  "src/Prebuilt/provider/roomLayoutProvider/constants/index.ts"() {
    "use strict";
    init_define_process_env();
    import_join_form = require("@100mslive/types-prebuilt/elements/join_form");
    defaultLayout = {
      id: "",
      role_id: "",
      template_id: "",
      app_id: "",
      typography: {
        font_family: "Inter"
      },
      themes: [],
      options: {},
      screens: {
        preview: {
          default: {
            elements: {
              preview_header: {
                title: "Get Started",
                sub_title: "Setup your audio and video before joining"
              },
              join_form: {
                join_btn_type: import_join_form.JoinForm_JoinBtnType.JOIN_BTN_TYPE_JOIN_ONLY,
                join_btn_label: "Entrar",
                go_live_btn_label: "Go Live"
              }
            }
          }
        },
        conferencing: {
          default: {
            elements: {
              chat: {},
              participant_list: {},
              video_tile_layout: {
                grid: {
                  enable_local_tile_inset: true,
                  prominent_roles: [],
                  enable_spotlighting_peer: true
                }
              },
              emoji_reactions: {}
            }
          }
        },
        leave: {}
      }
    };
  }
});

// src/Prebuilt/provider/roomLayoutProvider/hooks/useFetchRoomLayout.ts
var import_react47, fetchWithRetry, useFetchRoomLayout;
var init_useFetchRoomLayout = __esm({
  "src/Prebuilt/provider/roomLayoutProvider/hooks/useFetchRoomLayout.ts"() {
    "use strict";
    init_define_process_env();
    import_react47 = require("react");
    init_constants3();
    fetchWithRetry = (..._0) => __async(void 0, [..._0], function* (url = "", options = {}) {
      const MAX_RETRIES2 = 4;
      let error = Error("something went wrong");
      for (let i = 0; i < MAX_RETRIES2; i++) {
        try {
          return yield fetch(url, options);
        } catch (err) {
          error = err;
        }
      }
      console.error("Fetch failed after max retries", { url, options });
      throw error;
    });
    useFetchRoomLayout = ({
      endpoint = "",
      authToken = ""
    }) => {
      const [layout, setLayout] = (0, import_react47.useState)(void 0);
      const layoutResp = (0, import_react47.useRef)();
      const isFetchInProgress = (0, import_react47.useRef)(false);
      const updateRoomLayoutForRole = (0, import_react47.useCallback)((role) => {
        var _a7;
        if (!layoutResp.current) {
          return;
        }
        const [layout2] = (((_a7 = layoutResp.current) == null ? void 0 : _a7.data) || []).filter((layout3) => layout3.role === role);
        if (layout2) {
          setLayout(layout2);
        }
      }, []);
      (0, import_react47.useEffect)(() => {
        (() => __async(void 0, null, function* () {
          var _a7, _b7;
          if (isFetchInProgress.current || !authToken) {
            return;
          }
          isFetchInProgress.current = true;
          try {
            const resp = yield fetchWithRetry(endpoint || "https://api.100ms.live/v2/layouts/ui", {
              headers: {
                Authorization: `Bearer ${authToken}`
              }
            });
            layoutResp.current = yield resp.json();
          } catch (e) {
            console.error("[Room Layout API]: Failed to fetch / process room layout. Resorting to default layout.", e);
            layoutResp.current = {
              data: [defaultLayout]
            };
          }
          let layoutForRole = (_b7 = (_a7 = layoutResp.current) == null ? void 0 : _a7.data) == null ? void 0 : _b7[0];
          if (!layoutForRole) {
            console.error(
              "[Room Layout API]: Unable to figure out room layout from API response. Resorting to default layout."
            );
            layoutForRole = defaultLayout;
          }
          const layout2 = layoutForRole;
          setLayout(layout2);
          isFetchInProgress.current = false;
        }))();
      }, [authToken, endpoint]);
      return { layout, updateRoomLayoutForRole };
    };
  }
});

// src/Prebuilt/provider/roomLayoutProvider/index.tsx
var import_react48, import_lodash2, RoomLayoutContext, RoomLayoutProvider, useRoomLayout, useUpdateRoomLayout;
var init_roomLayoutProvider = __esm({
  "src/Prebuilt/provider/roomLayoutProvider/index.tsx"() {
    "use strict";
    init_define_process_env();
    import_react48 = __toESM(require("react"));
    import_lodash2 = __toESM(require("lodash.merge"));
    init_useUISettings();
    init_useFetchRoomLayout();
    RoomLayoutContext = import_react48.default.createContext(void 0);
    RoomLayoutProvider = ({
      children,
      roomLayoutEndpoint,
      overrideLayout
    }) => {
      const authToken = useAuthToken();
      const { layout, updateRoomLayoutForRole } = useFetchRoomLayout({ authToken, endpoint: roomLayoutEndpoint });
      const mergedLayout = authToken && layout ? (0, import_lodash2.default)(layout, overrideLayout) : layout;
      return /* @__PURE__ */ import_react48.default.createElement(RoomLayoutContext.Provider, { value: { layout: mergedLayout, updateRoomLayoutForRole } }, children);
    };
    useRoomLayout = () => {
      var _a7;
      return (_a7 = import_react48.default.useContext(RoomLayoutContext)) == null ? void 0 : _a7.layout;
    };
    useUpdateRoomLayout = () => {
      var _a7;
      return (_a7 = import_react48.default.useContext(RoomLayoutContext)) == null ? void 0 : _a7.updateRoomLayoutForRole;
    };
  }
});

// src/Prebuilt/common/hooks.js
var import_react49, import_join_form2, import_react_sdk17, useFilteredRoles, useShowStreamingUI, useParticipants;
var init_hooks = __esm({
  "src/Prebuilt/common/hooks.js"() {
    "use strict";
    init_define_process_env();
    import_react49 = require("react");
    import_join_form2 = require("@100mslive/types-prebuilt/elements/join_form");
    import_react_sdk17 = require("@100mslive/react-sdk");
    init_roomLayoutProvider();
    useFilteredRoles = () => {
      const roles = (0, import_react_sdk17.useHMSStore)(import_react_sdk17.selectAvailableRoleNames);
      return roles;
    };
    useShowStreamingUI = () => {
      var _a7, _b7, _c;
      const layout = useRoomLayout();
      const { join_form } = ((_c = (_b7 = (_a7 = layout == null ? void 0 : layout.screens) == null ? void 0 : _a7.preview) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements) || {};
      return (join_form == null ? void 0 : join_form.join_btn_type) === import_join_form2.JoinForm_JoinBtnType.JOIN_BTN_TYPE_JOIN_AND_GO_LIVE;
    };
    useParticipants = (params) => {
      var _a7;
      const isConnected = (0, import_react_sdk17.useHMSStore)(import_react_sdk17.selectIsConnectedToRoom);
      const peerCount = (0, import_react_sdk17.useHMSStore)(import_react_sdk17.selectPeerCount);
      const availableRoles = (0, import_react_sdk17.useHMSStore)(import_react_sdk17.selectAvailableRoleNames);
      let participantList = (0, import_react_sdk17.useHMSStore)(isConnected ? import_react_sdk17.selectPeers : import_react_sdk17.selectRemotePeers);
      const rolesWithParticipants = Array.from(new Set(participantList.map((peer) => peer.roleName)));
      const vanillaStore = (0, import_react_sdk17.useHMSVanillaStore)();
      if ((_a7 = params == null ? void 0 : params.metadata) == null ? void 0 : _a7.isHandRaised) {
        participantList = participantList.filter((peer) => {
          return vanillaStore.getState((0, import_react_sdk17.selectPeerMetadata)(peer.id)).isHandRaised;
        });
      }
      if ((params == null ? void 0 : params.role) && availableRoles.includes(params.role)) {
        participantList = participantList.filter((peer) => peer.roleName === params.role);
      }
      if (params == null ? void 0 : params.search) {
        const search = params.search;
        participantList = participantList.filter((peer) => peer.name.toLowerCase().includes(search));
      }
      return { participants: participantList, isConnected, peerCount, rolesWithParticipants };
    };
  }
});

// src/Prebuilt/components/RoleChangeModal.jsx
var import_react50, import_react_sdk18, import_react_icons16, PeerName, RoleChangeModal;
var init_RoleChangeModal = __esm({
  "src/Prebuilt/components/RoleChangeModal.jsx"() {
    "use strict";
    init_define_process_env();
    import_react50 = __toESM(require("react"));
    import_react_sdk18 = require("@100mslive/react-sdk");
    import_react_icons16 = require("@100mslive/react-icons");
    init_Button2();
    init_Checkbox2();
    init_Dropdown2();
    init_Label2();
    init_Layout();
    init_Modal();
    init_Text2();
    init_Tooltip2();
    init_useDropdownSelection();
    init_hooks();
    init_utils();
    PeerName = (0, import_react50.forwardRef)((_a7, ref) => {
      var _b7 = _a7, { children, maxWidth } = _b7, rest = __objRest(_b7, ["children", "maxWidth"]);
      return /* @__PURE__ */ import_react50.default.createElement(
        Text,
        __spreadProps(__spreadValues({}, rest), {
          ref,
          as: "strong",
          variant: "body2",
          css: __spreadProps(__spreadValues({}, textEllipsis(maxWidth)), {
            display: "inline-block",
            fontWeight: "$semiBold",
            c: "inherit"
          })
        }),
        children
      );
    });
    RoleChangeModal = ({ peerId, onOpenChange }) => {
      var _a7;
      const peer = (0, import_react_sdk18.useHMSStore)((0, import_react_sdk18.selectPeerByID)(peerId));
      const roles = useFilteredRoles();
      const [selectedRole, setRole] = (0, import_react50.useState)(peer == null ? void 0 : peer.roleName);
      const [requestPermission, setRequestPermission] = (0, import_react50.useState)(true);
      const hmsActions = (0, import_react_sdk18.useHMSActions)();
      const [open, setOpen] = (0, import_react50.useState)(false);
      const selectionBg = useDropdownSelection();
      const [peerNameRef, setPeerNameRef] = (0, import_react50.useState)();
      const ref = (0, import_react50.useRef)();
      if (!peer) {
        return null;
      }
      const peerNameMaxWidth = 200;
      return /* @__PURE__ */ import_react50.default.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react50.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react50.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react50.default.createElement(Dialog.Content, { css: { width: "min(400px,80%)", p: "$10" } }, /* @__PURE__ */ import_react50.default.createElement(Dialog.Title, { css: { p: 0 }, asChild: true }, /* @__PURE__ */ import_react50.default.createElement(Text, { as: "h6", variant: "h6" }, "Change Role")), /* @__PURE__ */ import_react50.default.createElement(Dialog.Description, { asChild: true }, /* @__PURE__ */ import_react50.default.createElement(
        Text,
        {
          variant: "body2",
          css: {
            mt: "$4",
            mb: "$8",
            c: "$on_surface_medium",
            display: "flex",
            flexWrap: "wrap",
            columnGap: "4px"
          }
        },
        "Change the role of",
        peerNameRef && peerNameRef.clientWidth === peerNameMaxWidth ? /* @__PURE__ */ import_react50.default.createElement(Tooltip, { title: peer.name, side: "top" }, /* @__PURE__ */ import_react50.default.createElement(PeerName, { ref: setPeerNameRef, maxWidth: peerNameMaxWidth }, peer.name)) : /* @__PURE__ */ import_react50.default.createElement(PeerName, { ref: setPeerNameRef, maxWidth: peerNameMaxWidth }, peer.name),
        "to"
      )), /* @__PURE__ */ import_react50.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            w: "100%",
            mb: "$10"
          }
        },
        /* @__PURE__ */ import_react50.default.createElement(
          Box,
          {
            css: {
              position: "relative",
              flex: "1 1 0",
              minWidth: 0
            }
          },
          /* @__PURE__ */ import_react50.default.createElement(Dropdown.Root, { open, onOpenChange: setOpen, css: { width: "100%" } }, /* @__PURE__ */ import_react50.default.createElement(
            Dropdown.Trigger,
            {
              "data-testid": "open_role_selection_dropdown",
              asChild: true,
              css: {
                border: "1px solid $border_bright",
                bg: "$surface_bright",
                r: "$1",
                p: "$6 $9"
              },
              ref
            },
            /* @__PURE__ */ import_react50.default.createElement(Flex, { align: "center", justify: "between", css: { width: "100%" } }, /* @__PURE__ */ import_react50.default.createElement(Text, null, selectedRole), open ? /* @__PURE__ */ import_react50.default.createElement(import_react_icons16.ChevronUpIcon, null) : /* @__PURE__ */ import_react50.default.createElement(import_react_icons16.ChevronDownIcon, null))
          ), /* @__PURE__ */ import_react50.default.createElement(Dropdown.Portal, null, /* @__PURE__ */ import_react50.default.createElement(
            Dropdown.Content,
            {
              align: "start",
              sideOffset: 8,
              css: { zIndex: 1e3, width: (_a7 = ref.current) == null ? void 0 : _a7.clientWidth }
            },
            roles.map((role) => {
              return /* @__PURE__ */ import_react50.default.createElement(
                Dropdown.Item,
                {
                  "data-testid": role,
                  key: role,
                  onSelect: () => setRole(role),
                  css: {
                    px: "$9",
                    bg: role === selectedRole ? selectionBg : void 0
                  }
                },
                role
              );
            })
          )))
        )
      ), !peer.isLocal && /* @__PURE__ */ import_react50.default.createElement(Flex, { justify: "between", css: { w: "100%", mb: "$10" } }, /* @__PURE__ */ import_react50.default.createElement(Label3, { htmlFor: "requestRoleChangePermission", css: { cursor: "pointer" } }, "Request Permission"), /* @__PURE__ */ import_react50.default.createElement(
        Checkbox.Root,
        {
          checked: requestPermission,
          onCheckedChange: (value) => setRequestPermission(value),
          id: "requestRoleChangePermission",
          "data-testid": "force_role_change_checkbox"
        },
        /* @__PURE__ */ import_react50.default.createElement(Checkbox.Indicator, null, /* @__PURE__ */ import_react50.default.createElement(import_react_icons16.CheckIcon, { width: 16, height: 16 }))
      )), /* @__PURE__ */ import_react50.default.createElement(Flex, { justify: "center", align: "center", css: { width: "100%", gap: "$md" } }, /* @__PURE__ */ import_react50.default.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ import_react50.default.createElement(Dialog.Close, { css: { width: "100%", p: "$4 $8" }, asChild: true }, /* @__PURE__ */ import_react50.default.createElement(Button, { variant: "standard", outlined: true, css: { width: "100%" }, "data-testid": "cancel_button" }, "Cancel"))), /* @__PURE__ */ import_react50.default.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ import_react50.default.createElement(
        Button,
        {
          "data-testid": "change_button",
          variant: "primary",
          css: { width: "100%" },
          onClick: () => __async(void 0, null, function* () {
            yield hmsActions.changeRole(peerId, selectedRole, peer.isLocal ? true : !requestPermission);
            onOpenChange(false);
          })
        },
        "Change"
      ))))));
    };
  }
});

// src/Prebuilt/primitives/DropdownTrigger.jsx
var import_react51, import_react_icons17, DialogDropdownTrigger;
var init_DropdownTrigger = __esm({
  "src/Prebuilt/primitives/DropdownTrigger.jsx"() {
    "use strict";
    init_define_process_env();
    import_react51 = __toESM(require("react"));
    import_react_icons17 = require("@100mslive/react-icons");
    init_src();
    DialogDropdownTrigger = import_react51.default.forwardRef(({ title, css: css2, open, icon, titleCSS = {} }, ref) => {
      return /* @__PURE__ */ import_react51.default.createElement(
        Dropdown.Trigger,
        {
          asChild: true,
          "data-testid": `${title}_selector`,
          css: __spreadValues({
            border: "1px solid $border_bright",
            bg: "$surface_bright",
            r: "$1",
            p: "$6 $9",
            zIndex: 10
          }, css2),
          ref
        },
        /* @__PURE__ */ import_react51.default.createElement(
          Flex,
          {
            css: {
              display: "flex",
              justifyContent: "space-between",
              color: "$on_surface_high",
              w: "100%"
            }
          },
          icon,
          /* @__PURE__ */ import_react51.default.createElement(
            Text,
            {
              css: __spreadValues(__spreadProps(__spreadValues({
                color: "inherit"
              }, textEllipsis("90%")), {
                flex: "1 1 0",
                mx: icon ? "$6" : "0"
              }), titleCSS)
            },
            title
          ),
          open ? /* @__PURE__ */ import_react51.default.createElement(import_react_icons17.ChevronUpIcon, null) : /* @__PURE__ */ import_react51.default.createElement(import_react_icons17.ChevronDownIcon, null)
        )
      );
    });
  }
});

// src/Prebuilt/components/Settings/DeviceSettings.jsx
var import_react52, import_react_use4, import_react_sdk19, import_react_icons18, Settings, DeviceSelector, TEST_AUDIO_URL, TestAudio, DeviceSettings_default;
var init_DeviceSettings = __esm({
  "src/Prebuilt/components/Settings/DeviceSettings.jsx"() {
    "use strict";
    init_define_process_env();
    import_react52 = __toESM(require("react"));
    import_react_use4 = require("react-use");
    import_react_sdk19 = require("@100mslive/react-sdk");
    import_react_icons18 = require("@100mslive/react-icons");
    init_src();
    init_Theme();
    init_DropdownTrigger();
    init_useUISettings();
    init_useDropdownSelection();
    init_common();
    init_constants();
    Settings = ({ setHide }) => {
      var _a7;
      const { allDevices, selectedDeviceIDs, updateDevice } = (0, import_react_sdk19.useDevices)();
      const { videoInput, audioInput, audioOutput } = allDevices;
      const videoTrackId = (0, import_react_sdk19.useHMSStore)(import_react_sdk19.selectLocalVideoTrackID);
      const isVideoOn = (0, import_react_sdk19.useHMSStore)(import_react_sdk19.selectIsLocalVideoEnabled);
      const shouldShowAudioOutput = "setSinkId" in HTMLMediaElement.prototype;
      const mirrorLocalVideo = useUISettings(UI_SETTINGS.mirrorLocalVideo);
      const trackSelector = (0, import_react_sdk19.selectVideoTrackByID)(videoTrackId);
      const hmsActions = (0, import_react_sdk19.useHMSActions)();
      const track = (0, import_react_sdk19.useHMSStore)(trackSelector);
      const isMobile = (0, import_react_use4.useMedia)(config.media.md);
      (0, import_react52.useEffect)(() => {
        if (isMobile) {
          hmsActions.refreshDevices();
        }
      }, [hmsActions, isMobile]);
      const audioOutputFiltered = (_a7 = audioOutput == null ? void 0 : audioOutput.filter((item) => !!item.label)) != null ? _a7 : [];
      if (!(videoInput == null ? void 0 : videoInput.length) && !(audioInput == null ? void 0 : audioInput.length) && !(audioOutputFiltered == null ? void 0 : audioOutputFiltered.length)) {
        setHide(true);
      }
      return /* @__PURE__ */ import_react52.default.createElement(Box, { className: settingOverflow() }, (videoInput == null ? void 0 : videoInput.length) ? /* @__PURE__ */ import_react52.default.createElement(import_react52.Fragment, null, isVideoOn && /* @__PURE__ */ import_react52.default.createElement(
        StyledVideoTile.Container,
        {
          css: {
            w: "90%",
            px: "$10",
            height: "$48",
            bg: "transparent",
            m: "$10 auto"
          }
        },
        /* @__PURE__ */ import_react52.default.createElement(Video, { trackId: videoTrackId, mirror: (track == null ? void 0 : track.facingMode) !== "environment" && mirrorLocalVideo })
      ), /* @__PURE__ */ import_react52.default.createElement(
        DeviceSelector,
        {
          title: "Video",
          devices: videoInput,
          icon: /* @__PURE__ */ import_react52.default.createElement(import_react_icons18.VideoOnIcon, null),
          selection: selectedDeviceIDs.videoInput,
          onChange: (deviceId) => updateDevice({
            deviceId,
            deviceType: import_react_sdk19.DeviceType.videoInput
          })
        }
      )) : null, (audioInput == null ? void 0 : audioInput.length) ? /* @__PURE__ */ import_react52.default.createElement(
        DeviceSelector,
        {
          title: shouldShowAudioOutput ? "Microphone" : "Audio",
          icon: /* @__PURE__ */ import_react52.default.createElement(import_react_icons18.MicOnIcon, null),
          devices: audioInput,
          selection: selectedDeviceIDs.audioInput,
          onChange: (deviceId) => updateDevice({
            deviceId,
            deviceType: import_react_sdk19.DeviceType.audioInput
          })
        }
      ) : null, (audioOutputFiltered == null ? void 0 : audioOutputFiltered.length) && shouldShowAudioOutput ? /* @__PURE__ */ import_react52.default.createElement(
        DeviceSelector,
        {
          title: "Speaker",
          icon: /* @__PURE__ */ import_react52.default.createElement(import_react_icons18.SpeakerIcon, null),
          devices: audioOutput,
          selection: selectedDeviceIDs.audioOutput,
          onChange: (deviceId) => updateDevice({
            deviceId,
            deviceType: import_react_sdk19.DeviceType.audioOutput
          })
        },
        /* @__PURE__ */ import_react52.default.createElement(TestAudio, { id: selectedDeviceIDs.audioOutput })
      ) : null);
    };
    DeviceSelector = ({ title, devices, selection, onChange, icon, children = null }) => {
      var _a7, _b7;
      const [open, setOpen] = (0, import_react52.useState)(false);
      const selectionBg = useDropdownSelection();
      const ref = (0, import_react52.useRef)(null);
      return /* @__PURE__ */ import_react52.default.createElement(Box, { css: { mb: "$10" } }, /* @__PURE__ */ import_react52.default.createElement(Text, { css: { mb: "$4" } }, title), /* @__PURE__ */ import_react52.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            gap: "$4",
            "@md": {
              flexDirection: children ? "column" : "row",
              alignItems: children ? "start" : "center"
            }
          }
        },
        /* @__PURE__ */ import_react52.default.createElement(
          Box,
          {
            css: {
              position: "relative",
              flex: "1 1 0",
              minWidth: 0,
              w: "100%",
              maxWidth: "100%",
              "@md": {
                mb: children ? "$8" : 0
              }
            }
          },
          /* @__PURE__ */ import_react52.default.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react52.default.createElement(
            DialogDropdownTrigger,
            {
              ref,
              icon,
              title: ((_a7 = devices.find(({ deviceId }) => deviceId === selection)) == null ? void 0 : _a7.label) || "Select device from list",
              open
            }
          ), /* @__PURE__ */ import_react52.default.createElement(Dropdown.Portal, null, /* @__PURE__ */ import_react52.default.createElement(Dropdown.Content, { align: "start", sideOffset: 8, css: { w: (_b7 = ref.current) == null ? void 0 : _b7.clientWidth, zIndex: 1001 } }, devices.map((device) => {
            return /* @__PURE__ */ import_react52.default.createElement(
              Dropdown.Item,
              {
                key: device.label,
                onSelect: () => onChange(device.deviceId),
                css: {
                  px: "$9",
                  bg: device.deviceId === selection ? selectionBg : void 0
                }
              },
              device.label
            );
          }))))
        ),
        children
      ));
    };
    TEST_AUDIO_URL = "https://100ms.live/test-audio.wav";
    TestAudio = ({ id }) => {
      const audioRef = (0, import_react52.useRef)(null);
      const [playing, setPlaying] = (0, import_react52.useState)(false);
      (0, import_react52.useEffect)(() => {
        if (audioRef.current && id) {
          try {
            if (typeof audioRef.current.setSinkId !== "undefined") {
              audioRef.current.setSinkId(id);
            }
          } catch (error) {
            console.log(error);
          }
        }
      }, [id]);
      return /* @__PURE__ */ import_react52.default.createElement(import_react52.default.Fragment, null, /* @__PURE__ */ import_react52.default.createElement(
        Button,
        {
          variant: "standard",
          css: {
            flexShrink: 0,
            p: "$6 $9",
            "@md": {
              w: "100%"
            }
          },
          onClick: () => {
            var _a7;
            return (_a7 = audioRef.current) == null ? void 0 : _a7.play();
          },
          disabled: playing
        },
        /* @__PURE__ */ import_react52.default.createElement(import_react_icons18.SpeakerIcon, null),
        "\xA0Test",
        " ",
        /* @__PURE__ */ import_react52.default.createElement(Text, { as: "span", css: { display: "none", "@md": { display: "inline" } } }, "\xA0 speaker")
      ), /* @__PURE__ */ import_react52.default.createElement("audio", { ref: audioRef, src: TEST_AUDIO_URL, onEnded: () => setPlaying(false), onPlay: () => setPlaying(true) }));
    };
    DeviceSettings_default = Settings;
  }
});

// src/Prebuilt/components/Settings/SwitchWithLabel.jsx
var import_react53, SwitchWithLabel, SwitchWithLabel_default;
var init_SwitchWithLabel = __esm({
  "src/Prebuilt/components/Settings/SwitchWithLabel.jsx"() {
    "use strict";
    init_define_process_env();
    import_react53 = __toESM(require("react"));
    init_Label2();
    init_Layout();
    init_Switch2();
    SwitchWithLabel = ({ label, icon, id, onChange, checked, hide = false }) => {
      return /* @__PURE__ */ import_react53.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            my: "$2",
            py: "$8",
            w: "100%",
            borderBottom: "1px solid $border_default",
            display: hide ? "none" : "flex"
          }
        },
        /* @__PURE__ */ import_react53.default.createElement(
          Label3,
          {
            htmlFor: id,
            css: {
              fontSize: "$md",
              fontWeight: "$semiBold",
              color: checked ? "$on_surface_high" : "$on_surface_low",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "$8",
              flex: "1 1 0"
            }
          },
          icon,
          label
        ),
        /* @__PURE__ */ import_react53.default.createElement(Switch, { id, checked, onCheckedChange: onChange })
      );
    };
    SwitchWithLabel_default = SwitchWithLabel;
  }
});

// src/Prebuilt/components/Settings/LayoutSettings.jsx
var import_react54, import_react_sdk20, LayoutSettings;
var init_LayoutSettings = __esm({
  "src/Prebuilt/components/Settings/LayoutSettings.jsx"() {
    "use strict";
    init_define_process_env();
    import_react54 = __toESM(require("react"));
    import_react_sdk20 = require("@100mslive/react-sdk");
    init_src();
    init_SwitchWithLabel();
    init_useUISettings();
    init_common();
    init_constants();
    LayoutSettings = () => {
      const hmsActions = (0, import_react_sdk20.useHMSActions)();
      const isLocalVideoEnabled = (0, import_react_sdk20.useHMSStore)(import_react_sdk20.selectIsLocalVideoEnabled);
      const isLocalScreenShared = (0, import_react_sdk20.useHMSStore)(import_react_sdk20.selectIsLocalScreenShared);
      const [{ isAudioOnly, maxTileCount, mirrorLocalVideo }, setUISettings] = useSetUiSettings();
      const toggleIsAudioOnly = (0, import_react54.useCallback)(
        (isAudioOnlyModeOn) => __async(void 0, null, function* () {
          if (isAudioOnlyModeOn) {
            isLocalVideoEnabled && (yield hmsActions.setLocalVideoEnabled(false));
            isLocalScreenShared && (yield hmsActions.setScreenShareEnabled(false));
          }
          setUISettings({ [UI_SETTINGS.isAudioOnly]: isAudioOnlyModeOn });
        }),
        [hmsActions, isLocalVideoEnabled, isLocalScreenShared, setUISettings]
      );
      return /* @__PURE__ */ import_react54.default.createElement(Box, { className: settingOverflow() }, /* @__PURE__ */ import_react54.default.createElement(SwitchWithLabel_default, { label: "Audio Only Mode", id: "audioOnlyMode", checked: isAudioOnly, onChange: toggleIsAudioOnly }), /* @__PURE__ */ import_react54.default.createElement(
        SwitchWithLabel_default,
        {
          label: "Mirror Local Video",
          id: "mirrorMode",
          checked: mirrorLocalVideo,
          onChange: (value) => {
            setUISettings({
              [UI_SETTINGS.mirrorLocalVideo]: value
            });
          }
        }
      ), /* @__PURE__ */ import_react54.default.createElement(Flex, { align: "center", css: { w: "100%", my: "$2", py: "$8", "@md": { display: "none" } } }, /* @__PURE__ */ import_react54.default.createElement(Text, { variant: "md", css: { fontWeight: "$semiBold" } }, "Tiles In View(", maxTileCount, ")"), /* @__PURE__ */ import_react54.default.createElement(Flex, { justify: "end", css: { flex: "1 1 0" } }, /* @__PURE__ */ import_react54.default.createElement(
        Slider,
        {
          step: 1,
          value: [maxTileCount],
          min: 1,
          max: 49,
          onValueChange: (e) => {
            setUISettings({ [UI_SETTINGS.maxTileCount]: e[0] });
          },
          css: { w: "70%" }
        }
      ))));
    };
  }
});

// src/Prebuilt/components/Settings/NotificationSettings.jsx
var import_react55, import_react_icons19, NotificationItem, NotificationSettings;
var init_NotificationSettings = __esm({
  "src/Prebuilt/components/Settings/NotificationSettings.jsx"() {
    "use strict";
    init_define_process_env();
    import_react55 = __toESM(require("react"));
    import_react_icons19 = require("@100mslive/react-icons");
    init_src();
    init_SwitchWithLabel();
    init_useUISettings();
    init_common();
    init_constants();
    NotificationItem = ({ type, label, icon, checked }) => {
      const [, setSubscribedNotifications] = useSetSubscribedNotifications(type);
      return /* @__PURE__ */ import_react55.default.createElement(
        SwitchWithLabel_default,
        {
          label,
          id: type,
          icon,
          checked,
          onChange: (value) => {
            setSubscribedNotifications(value);
          }
        }
      );
    };
    NotificationSettings = () => {
      const subscribedNotifications = useSubscribedNotifications();
      return /* @__PURE__ */ import_react55.default.createElement(Box, { className: settingOverflow() }, /* @__PURE__ */ import_react55.default.createElement(
        NotificationItem,
        {
          label: "Peer Joined",
          type: SUBSCRIBED_NOTIFICATIONS.PEER_JOINED,
          icon: /* @__PURE__ */ import_react55.default.createElement(import_react_icons19.PeopleAddIcon, null),
          checked: subscribedNotifications.PEER_JOINED
        }
      ), /* @__PURE__ */ import_react55.default.createElement(
        NotificationItem,
        {
          label: "Peer Leave",
          type: SUBSCRIBED_NOTIFICATIONS.PEER_LEFT,
          icon: /* @__PURE__ */ import_react55.default.createElement(import_react_icons19.PeopleRemoveIcon, null),
          checked: subscribedNotifications.PEER_LEFT
        }
      ), /* @__PURE__ */ import_react55.default.createElement(
        NotificationItem,
        {
          label: "Hand Raised",
          type: SUBSCRIBED_NOTIFICATIONS.METADATA_UPDATED,
          icon: /* @__PURE__ */ import_react55.default.createElement(import_react_icons19.HandIcon, null),
          checked: subscribedNotifications.METADATA_UPDATED
        }
      ), /* @__PURE__ */ import_react55.default.createElement(
        NotificationItem,
        {
          label: "Error",
          type: SUBSCRIBED_NOTIFICATIONS.ERROR,
          icon: /* @__PURE__ */ import_react55.default.createElement(import_react_icons19.AlertOctagonIcon, null),
          checked: subscribedNotifications.ERROR
        }
      ));
    };
  }
});

// src/Prebuilt/components/Settings/common.js
var import_react_icons20, settingOverflow, settingContent, settingsList;
var init_common = __esm({
  "src/Prebuilt/components/Settings/common.js"() {
    "use strict";
    init_define_process_env();
    import_react_icons20 = require("@100mslive/react-icons");
    init_src();
    init_DeviceSettings();
    init_LayoutSettings();
    init_NotificationSettings();
    settingOverflow = css({
      flex: "1 1 0",
      pr: "$12",
      mr: "-$12",
      overflowY: "auto"
    });
    settingContent = css({
      display: "flex",
      flexDirection: "column",
      "&[hidden]": {
        display: "none"
      }
    });
    settingsList = [
      {
        tabName: "devices",
        title: "Device Settings",
        icon: import_react_icons20.SettingsIcon,
        content: DeviceSettings_default
      },
      {
        tabName: "notifications",
        title: "Notifications",
        icon: import_react_icons20.NotificationsIcon,
        content: NotificationSettings
      },
      {
        tabName: "layout",
        title: "Layout",
        icon: import_react_icons20.GridFourIcon,
        content: LayoutSettings
      }
    ];
  }
});

// src/Prebuilt/components/Settings/SettingsModal.jsx
var import_react56, import_react_use5, import_react_icons21, SettingsModal, MobileSettingModal, DesktopSettingModal, SettingsContentHeader, SettingsModal_default;
var init_SettingsModal = __esm({
  "src/Prebuilt/components/Settings/SettingsModal.jsx"() {
    "use strict";
    init_define_process_env();
    import_react56 = __toESM(require("react"));
    import_react_use5 = require("react-use");
    import_react_icons21 = require("@100mslive/react-icons");
    init_Divider2();
    init_IconButton2();
    init_Layout();
    init_Modal();
    init_Sheet2();
    init_Tabs2();
    init_Text2();
    init_Theme();
    init_common();
    SettingsModal = ({ open, onOpenChange, screenType, children = /* @__PURE__ */ import_react56.default.createElement(import_react56.default.Fragment, null) }) => {
      const mediaQueryLg = config.media.md;
      const isMobile = (0, import_react_use5.useMedia)(mediaQueryLg);
      const [showSetting, setShowSetting] = (0, import_react56.useState)(
        () => settingsList.reduce((obj, { tabName }) => __spreadProps(__spreadValues({}, obj), { [tabName]: true }), {})
      );
      const hideSettingByTabName = (0, import_react56.useCallback)(
        (key) => (hide) => setShowSetting((prev) => __spreadProps(__spreadValues({}, prev), { [key]: !hide })),
        [setShowSetting]
      );
      (0, import_react56.useEffect)(() => {
        if (screenType === "hls_live_streaming") {
          hideSettingByTabName("layout")(true);
        }
      }, [screenType, hideSettingByTabName]);
      const [selection, setSelection] = (0, import_react56.useState)(() => {
        var _a7;
        return (_a7 = Object.keys(showSetting).find((key) => showSetting[key])) != null ? _a7 : "";
      });
      const resetSelection = (0, import_react56.useCallback)(() => {
        setSelection("");
      }, []);
      (0, import_react56.useEffect)(() => {
        var _a7;
        if (isMobile) {
          setSelection("");
        } else {
          const firstNotHiddenTabName = (_a7 = Object.keys(showSetting).find((key) => showSetting[key])) != null ? _a7 : "";
          setSelection(firstNotHiddenTabName);
        }
      }, [isMobile, showSetting]);
      return isMobile ? /* @__PURE__ */ import_react56.default.createElement(
        MobileSettingModal,
        {
          open,
          onOpenChange,
          selection,
          setSelection,
          showSetting,
          hideSettingByTabName,
          resetSelection,
          children
        }
      ) : /* @__PURE__ */ import_react56.default.createElement(
        DesktopSettingModal,
        {
          open,
          onOpenChange,
          selection,
          setSelection,
          showSetting,
          hideSettingByTabName,
          resetSelection,
          children
        }
      );
    };
    MobileSettingModal = ({
      open,
      onOpenChange,
      selection,
      setSelection,
      showSetting,
      hideSettingByTabName,
      resetSelection,
      children = /* @__PURE__ */ import_react56.default.createElement(import_react56.default.Fragment, null)
    }) => {
      return /* @__PURE__ */ import_react56.default.createElement(Sheet.Root, { open, onOpenChange }, /* @__PURE__ */ import_react56.default.createElement(Sheet.Trigger, { asChild: true }, children), /* @__PURE__ */ import_react56.default.createElement(
        Sheet.Content,
        {
          css: {
            bg: "$surface_dim",
            overflowY: "auto"
          }
        },
        /* @__PURE__ */ import_react56.default.createElement(Sheet.Title, { css: { py: "$10", px: "$8", alignItems: "center" } }, /* @__PURE__ */ import_react56.default.createElement(Flex, { direction: "row", justify: "between", css: { w: "100%" } }, !selection ? /* @__PURE__ */ import_react56.default.createElement(Text, { variant: "h6", css: { display: "flex" } }, "Settings") : /* @__PURE__ */ import_react56.default.createElement(Text, { variant: "h6", css: { display: "flex" } }, /* @__PURE__ */ import_react56.default.createElement(Box, { as: "span", css: { r: "$round", mr: "$2" }, onClick: resetSelection }, /* @__PURE__ */ import_react56.default.createElement(import_react_icons21.ChevronLeftIcon, null)), (selection == null ? void 0 : selection.charAt(0).toUpperCase()) + selection.slice(1)), /* @__PURE__ */ import_react56.default.createElement(Sheet.Close, null, /* @__PURE__ */ import_react56.default.createElement(IconButton, { as: "div", "data-testid": "dialog_cross_icon" }, /* @__PURE__ */ import_react56.default.createElement(import_react_icons21.CrossIcon, null))))),
        /* @__PURE__ */ import_react56.default.createElement(HorizontalDivider, null),
        !selection ? /* @__PURE__ */ import_react56.default.createElement(
          Flex,
          {
            direction: "column",
            css: {
              px: "$8",
              pb: "$8",
              overflowY: "auto"
            }
          },
          settingsList.filter(({ tabName }) => showSetting[tabName]).map(({ icon: Icon3, tabName, title }) => {
            return /* @__PURE__ */ import_react56.default.createElement(
              Box,
              {
                key: tabName,
                value: tabName,
                onClick: () => {
                  setSelection(tabName);
                },
                as: "div",
                css: {
                  all: "unset",
                  fontFamily: "$sans",
                  py: "$10",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "$sm",
                  lineHeight: "$sm",
                  color: "$on_surface_high",
                  userSelect: "none",
                  gap: "$8",
                  cursor: "pointer",
                  "&:hover": {
                    bg: "$surface_brighter",
                    r: "$1",
                    gap: "$8",
                    border: "none"
                  },
                  borderBottom: "1px solid $border_default"
                }
              },
              /* @__PURE__ */ import_react56.default.createElement(Icon3, null),
              title
            );
          })
        ) : /* @__PURE__ */ import_react56.default.createElement(
          Box,
          {
            direction: "column",
            css: { overflowY: "scroll", px: "$8", py: "$10", maxHeight: "70vh", overflowX: "hidden" }
          },
          settingsList.filter(({ tabName }) => showSetting[tabName] && selection === tabName).map(({ content: Content11, title, tabName }) => {
            return /* @__PURE__ */ import_react56.default.createElement(Content11, { key: title, setHide: hideSettingByTabName(tabName) });
          })
        )
      ));
    };
    DesktopSettingModal = ({
      open,
      onOpenChange,
      selection,
      setSelection,
      showSetting,
      hideSettingByTabName,
      resetSelection,
      children = /* @__PURE__ */ import_react56.default.createElement(import_react56.default.Fragment, null)
    }) => {
      return /* @__PURE__ */ import_react56.default.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ import_react56.default.createElement(Dialog.Trigger, { asChild: true }, children), /* @__PURE__ */ import_react56.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react56.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react56.default.createElement(
        Dialog.Content,
        {
          css: {
            w: "min(800px, 90%)",
            height: "min(656px, 90%)",
            p: 0,
            r: "$4"
          }
        },
        /* @__PURE__ */ import_react56.default.createElement(
          Tabs.Root,
          {
            value: selection,
            activationMode: "automatic",
            onValueChange: setSelection,
            css: { size: "100%", position: "relative" }
          },
          /* @__PURE__ */ import_react56.default.createElement(
            Tabs.List,
            {
              css: {
                w: "18.625rem",
                flexDirection: "column",
                bg: "$background_default",
                p: "$14 $10",
                borderTopLeftRadius: "$4",
                borderBottomLeftRadius: "$4"
              }
            },
            /* @__PURE__ */ import_react56.default.createElement(Text, { variant: "h5" }, "Settings "),
            /* @__PURE__ */ import_react56.default.createElement(Flex, { direction: "column", css: { mx: 0, overflowY: "auto", pt: "$10" } }, settingsList.filter(({ tabName }) => showSetting[tabName]).map(({ icon: Icon3, tabName, title }) => {
              return /* @__PURE__ */ import_react56.default.createElement(Tabs.Trigger, { key: tabName, value: tabName, css: { gap: "$8" } }, /* @__PURE__ */ import_react56.default.createElement(Icon3, null), title);
            }))
          ),
          selection && /* @__PURE__ */ import_react56.default.createElement(
            Flex,
            {
              direction: "column",
              css: {
                flex: "1 1 0",
                minWidth: 0,
                mr: "$4"
              }
            },
            settingsList.filter(({ tabName }) => showSetting[tabName]).map(({ content: Content11, title, tabName }) => {
              return /* @__PURE__ */ import_react56.default.createElement(Tabs.Content, { key: tabName, value: tabName, className: settingContent() }, /* @__PURE__ */ import_react56.default.createElement(SettingsContentHeader, { onBack: resetSelection, isMobile: false }, title), /* @__PURE__ */ import_react56.default.createElement(Content11, { setHide: hideSettingByTabName(tabName) }));
            })
          )
        ),
        /* @__PURE__ */ import_react56.default.createElement(Dialog.Close, { css: { position: "absolute", right: "$10", top: "$10" } }, /* @__PURE__ */ import_react56.default.createElement(IconButton, { as: "div", "data-testid": "dialog_cross_icon" }, /* @__PURE__ */ import_react56.default.createElement(import_react_icons21.CrossIcon, null)))
      )));
    };
    SettingsContentHeader = ({ children, isMobile, onBack }) => {
      return /* @__PURE__ */ import_react56.default.createElement(Text, { variant: "h6", css: { mb: "$12", display: "flex", alignItems: "center" } }, isMobile && /* @__PURE__ */ import_react56.default.createElement(Box, { as: "span", css: { bg: "$surface_bright", mr: "$4", r: "$round", p: "$2" }, onClick: onBack }, /* @__PURE__ */ import_react56.default.createElement(import_react_icons21.ChevronLeftIcon, null)), children);
    };
    SettingsModal_default = SettingsModal;
  }
});

// src/Prebuilt/components/Streaming/ResolutionInput.jsx
var import_react57, import_react_icons22, ResolutionInput;
var init_ResolutionInput = __esm({
  "src/Prebuilt/components/Streaming/ResolutionInput.jsx"() {
    "use strict";
    init_define_process_env();
    import_react57 = __toESM(require("react"));
    import_react_icons22 = require("@100mslive/react-icons");
    init_src();
    init_DialogContent2();
    init_constants();
    ResolutionInput = ({ onResolutionChange, disabled, tooltipText, css: css2, testId }) => {
      const [resolution, setResolution] = (0, import_react57.useState)(RTMP_RECORD_DEFAULT_RESOLUTION);
      const resolutionChangeHandler = (0, import_react57.useCallback)(
        (event) => {
          const { name, value } = event.target;
          let width = name === "resWidth" ? Number(value) : resolution.width;
          let height = name === "resHeight" ? Number(value) : resolution.height;
          if (width === 0) {
            width = null;
          }
          if (height === 0) {
            height = null;
          }
          const newResolution = {
            width: !isNaN(width) ? width : RTMP_RECORD_DEFAULT_RESOLUTION.width,
            height: !isNaN(height) ? height : RTMP_RECORD_DEFAULT_RESOLUTION.height
          };
          setResolution(newResolution);
        },
        [resolution]
      );
      return /* @__PURE__ */ import_react57.default.createElement(DialogRow, { breakSm: true, css: css2 }, /* @__PURE__ */ import_react57.default.createElement(Flex, { gap: 1 }, /* @__PURE__ */ import_react57.default.createElement(Label3, { css: { mb: "$8" } }, "Resolution"), tooltipText && /* @__PURE__ */ import_react57.default.createElement(Tooltip, { title: tooltipText }, /* @__PURE__ */ import_react57.default.createElement("div", null, /* @__PURE__ */ import_react57.default.createElement(import_react_icons22.InfoIcon, { color: "#B0C3DB" })))), /* @__PURE__ */ import_react57.default.createElement(
        Flex,
        {
          justify: "between",
          css: { width: !tooltipText ? "100%" : "70%", "@sm": { width: "100%" } },
          gap: 2,
          direction: "column"
        },
        /* @__PURE__ */ import_react57.default.createElement(Flex, { justify: "between", gap: 2 }, /* @__PURE__ */ import_react57.default.createElement(Flex, { direction: "column", css: { width: "50%" } }, /* @__PURE__ */ import_react57.default.createElement(Text, { variant: "xs" }, "Width"), /* @__PURE__ */ import_react57.default.createElement(
          Input,
          {
            "data-testid": `${testId}_width`,
            css: { width: "100%", mt: "$4" },
            name: "resWidth",
            value: resolution.width,
            onChange: resolutionChangeHandler,
            readOnly: disabled,
            min: RTMP_RECORD_RESOLUTION_MIN,
            max: RTMP_RECORD_RESOLUTION_MAX,
            onBlur: () => onResolutionChange(resolution),
            type: "number"
          }
        )), /* @__PURE__ */ import_react57.default.createElement(Flex, { direction: "column", css: { width: "50%" } }, /* @__PURE__ */ import_react57.default.createElement(Text, { variant: "xs" }, "Height"), /* @__PURE__ */ import_react57.default.createElement(
          Input,
          {
            "data-testid": `${testId}_height`,
            css: { width: "100%", mt: "$4" },
            name: "resHeight",
            value: resolution.height,
            onChange: resolutionChangeHandler,
            onBlur: () => onResolutionChange(resolution),
            readOnly: disabled,
            min: RTMP_RECORD_RESOLUTION_MIN,
            max: RTMP_RECORD_RESOLUTION_MAX,
            type: "number"
          }
        )))
      ));
    };
  }
});

// src/Prebuilt/components/Settings/StartRecording.jsx
function getResolution(recordingResolution) {
  const resolution = {};
  if (recordingResolution.width) {
    resolution.width = recordingResolution.width;
  }
  if (recordingResolution.height) {
    resolution.height = recordingResolution.height;
  }
  if (Object.keys(resolution).length > 0) {
    return resolution;
  }
}
var import_react58, import_react_sdk21, import_react_icons23, StartRecording, StartRecording_default;
var init_StartRecording = __esm({
  "src/Prebuilt/components/Settings/StartRecording.jsx"() {
    "use strict";
    init_define_process_env();
    import_react58 = __toESM(require("react"));
    import_react_sdk21 = require("@100mslive/react-sdk");
    import_react_icons23 = require("@100mslive/react-icons");
    init_src();
    init_ResolutionInput();
    init_ToastManager();
    init_useUISettings();
    init_constants();
    StartRecording = ({ open, onOpenChange }) => {
      const permissions = (0, import_react_sdk21.useHMSStore)(import_react_sdk21.selectPermissions);
      const [resolution, setResolution] = (0, import_react58.useState)(RTMP_RECORD_DEFAULT_RESOLUTION);
      const [recordingStarted, setRecordingState] = useSetAppDataByKey(APP_DATA.recordingStarted);
      const { isBrowserRecordingOn, isStreamingOn, isHLSRunning } = (0, import_react_sdk21.useRecordingStreaming)();
      const hmsActions = (0, import_react_sdk21.useHMSActions)();
      if (!(permissions == null ? void 0 : permissions.browserRecording) || isHLSRunning) {
        return null;
      }
      if (isBrowserRecordingOn) {
        return /* @__PURE__ */ import_react58.default.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ import_react58.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react58.default.createElement(
          Dialog.Content,
          {
            css: {
              width: "min(400px,80%)",
              p: "$10",
              bg: "#201617"
            }
          },
          /* @__PURE__ */ import_react58.default.createElement(Dialog.Title, null, /* @__PURE__ */ import_react58.default.createElement(Flex, { gap: 2, css: { c: "$alert_error_default" } }, /* @__PURE__ */ import_react58.default.createElement(import_react_icons23.AlertTriangleIcon, null), /* @__PURE__ */ import_react58.default.createElement(Text, { css: { c: "inherit" }, variant: "h6" }, "End Recording"))),
          /* @__PURE__ */ import_react58.default.createElement(Text, { variant: "sm", css: { c: "$on_surface_medium", my: "$8" } }, "Are you sure you want to end recording? You can\u2019t undo this action."),
          /* @__PURE__ */ import_react58.default.createElement(Flex, { justify: "end", css: { mt: "$12" } }, /* @__PURE__ */ import_react58.default.createElement(Dialog.Close, { asChild: true }, /* @__PURE__ */ import_react58.default.createElement(Button, { outlined: true, css: { borderColor: "$secondary_bright", mr: "$4" } }, "Don't end")), /* @__PURE__ */ import_react58.default.createElement(
            Button,
            {
              "data-testid": "stop_recording_confirm_mobile",
              variant: "danger",
              icon: true,
              onClick: () => __async(void 0, null, function* () {
                try {
                  yield hmsActions.stopRTMPAndRecording();
                } catch (error) {
                  ToastManager.addToast({
                    title: error.message,
                    variant: "error"
                  });
                }
                onOpenChange(false);
              })
            },
            "End recording"
          ))
        )));
      }
      return /* @__PURE__ */ import_react58.default.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ import_react58.default.createElement(Dialog.Content, { css: { width: "min(400px,80%)", p: "$10" } }, /* @__PURE__ */ import_react58.default.createElement(Dialog.Title, null, /* @__PURE__ */ import_react58.default.createElement(Text, { variant: "h6" }, "Start Recording")), /* @__PURE__ */ import_react58.default.createElement(
        ResolutionInput,
        {
          testId: "recording_resolution_mobile",
          css: { flexDirection: "column", alignItems: "start" },
          onResolutionChange: setResolution
        }
      ), /* @__PURE__ */ import_react58.default.createElement(
        Button,
        {
          "data-testid": "start_recording_confirm_mobile",
          variant: "primary",
          icon: true,
          css: { ml: "auto" },
          type: "submit",
          disabled: recordingStarted || isStreamingOn,
          onClick: () => __async(void 0, null, function* () {
            try {
              setRecordingState(true);
              yield hmsActions.startRTMPOrRecording({
                resolution: getResolution(resolution),
                record: true
              });
            } catch (error) {
              if (error.message.includes("stream already running")) {
                ToastManager.addToast({
                  title: "Recording already running",
                  variant: "error"
                });
              } else {
                ToastManager.addToast({
                  title: error.message,
                  variant: "error"
                });
              }
              setRecordingState(false);
            }
            onOpenChange(false);
          })
        },
        "Start"
      )));
    };
    StartRecording_default = StartRecording;
  }
});

// src/Prebuilt/components/StatsForNerds.jsx
var import_react59, import_react_sdk22, StatsForNerds, useTracksWithLabel, LocalPeerStats, TrackStats, StatsRow2, formatBytes2;
var init_StatsForNerds = __esm({
  "src/Prebuilt/components/StatsForNerds.jsx"() {
    "use strict";
    init_define_process_env();
    import_react59 = __toESM(require("react"));
    import_react_sdk22 = require("@100mslive/react-sdk");
    init_Divider2();
    init_Dropdown2();
    init_Label2();
    init_Layout();
    init_Modal();
    init_Switch2();
    init_Text2();
    init_DropdownTrigger();
    init_useUISettings();
    init_useDropdownSelection();
    init_constants();
    StatsForNerds = ({ onOpenChange }) => {
      var _a7;
      const tracksWithLabels = useTracksWithLabel();
      const statsOptions = (0, import_react59.useMemo)(
        () => [{ id: "local-peer", label: "Local Peer Stats" }, ...tracksWithLabels],
        [tracksWithLabels]
      );
      const [selectedStat, setSelectedStat] = (0, import_react59.useState)(statsOptions[0]);
      const [showStatsOnTiles, setShowStatsOnTiles] = useSetUiSettings(UI_SETTINGS.showStatsOnTiles);
      const [open, setOpen] = (0, import_react59.useState)(false);
      const ref = (0, import_react59.useRef)();
      const selectionBg = useDropdownSelection();
      (0, import_react59.useEffect)(() => {
        if (selectedStat.id !== "local-peer" && !tracksWithLabels.find((track) => track.id === selectedStat.id)) {
          setSelectedStat("local-peer");
        }
      }, [tracksWithLabels, selectedStat]);
      return /* @__PURE__ */ import_react59.default.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react59.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react59.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react59.default.createElement(
        Dialog.Content,
        {
          css: {
            width: "min(500px, 95%)",
            maxHeight: "100%",
            overflowY: "auto"
          }
        },
        /* @__PURE__ */ import_react59.default.createElement(Dialog.Title, { css: { p: "$4 0" } }, /* @__PURE__ */ import_react59.default.createElement(Flex, { justify: "between" }, /* @__PURE__ */ import_react59.default.createElement(Flex, { align: "center", css: { mb: "$1" } }, /* @__PURE__ */ import_react59.default.createElement(Text, { variant: "h6", inline: true }, "Stats For Nerds")), /* @__PURE__ */ import_react59.default.createElement(Dialog.DefaultClose, { "data-testid": "stats_dialog_close_icon" }))),
        /* @__PURE__ */ import_react59.default.createElement(HorizontalDivider, { css: { mt: "0.8rem" } }),
        /* @__PURE__ */ import_react59.default.createElement(Flex, { justify: "start", gap: 4, css: { m: "$10 0" } }, /* @__PURE__ */ import_react59.default.createElement(Switch, { checked: showStatsOnTiles, onCheckedChange: setShowStatsOnTiles }), /* @__PURE__ */ import_react59.default.createElement(Text, { variant: "body2", css: { fontWeight: "$semiBold" } }, "Show Stats on Tiles")),
        /* @__PURE__ */ import_react59.default.createElement(
          Flex,
          {
            direction: "column",
            css: {
              mb: "$12",
              position: "relative",
              minWidth: 0
            }
          },
          /* @__PURE__ */ import_react59.default.createElement(Label3, { variant: "body2", css: { c: "$on_surface_high" } }, "Stats For"),
          /* @__PURE__ */ import_react59.default.createElement(Dropdown.Root, { "data-testid": "dialog_select_Stats For", open, onOpenChange: setOpen }, /* @__PURE__ */ import_react59.default.createElement(
            DialogDropdownTrigger,
            {
              title: selectedStat.label || "Select Stats",
              css: { mt: "$4" },
              titleCSS: { mx: 0 },
              open,
              ref
            }
          ), /* @__PURE__ */ import_react59.default.createElement(Dropdown.Portal, null, /* @__PURE__ */ import_react59.default.createElement(Dropdown.Content, { align: "start", sideOffset: 8, css: { w: (_a7 = ref.current) == null ? void 0 : _a7.clientWidth, zIndex: 1e3 } }, statsOptions.map((option) => {
            const isSelected = option.id === selectedStat.id && option.layer === selectedStat.layer;
            return /* @__PURE__ */ import_react59.default.createElement(
              Dropdown.Item,
              {
                key: `${option.id}-${option.layer || ""}`,
                onClick: () => {
                  setSelectedStat(option);
                },
                css: {
                  px: "$9",
                  bg: isSelected ? selectionBg : void 0,
                  c: isSelected ? "$on_primary_high" : "$on_primary_high"
                }
              },
              option.label
            );
          }))))
        ),
        selectedStat.id === "local-peer" ? /* @__PURE__ */ import_react59.default.createElement(LocalPeerStats, null) : /* @__PURE__ */ import_react59.default.createElement(TrackStats, { trackID: selectedStat.id, layer: selectedStat.layer, local: selectedStat.local })
      )));
    };
    useTracksWithLabel = () => {
      const tracksMap = (0, import_react_sdk22.useHMSStore)(import_react_sdk22.selectTracksMap);
      const peersMap = (0, import_react_sdk22.useHMSStore)(import_react_sdk22.selectPeersMap);
      const localPeerID = (0, import_react_sdk22.useHMSStore)(import_react_sdk22.selectLocalPeerID);
      const tracksWithLabels = (0, import_react59.useMemo)(
        () => Object.values(tracksMap).reduce((res, track) => {
          var _a7, _b7;
          const peerName = (_a7 = peersMap[track.peerId]) == null ? void 0 : _a7.name;
          const isLocalTrack = track.peerId === localPeerID;
          if (isLocalTrack && ((_b7 = track.layerDefinitions) == null ? void 0 : _b7.length)) {
            res = res.concat(
              track.layerDefinitions.map(({ layer }) => {
                return {
                  id: track.id,
                  layer,
                  local: true,
                  label: `${peerName} ${track.source} ${track.type} - ${layer}`
                };
              })
            );
            return res;
          }
          res.push({
            id: track.id,
            local: isLocalTrack,
            label: `${peerName} ${track.source} ${track.type}`
          });
          return res;
        }, []),
        [tracksMap, peersMap, localPeerID]
      );
      return tracksWithLabels;
    };
    LocalPeerStats = () => {
      var _a7, _b7, _c, _d, _e, _f, _g, _h, _i;
      const stats = (0, import_react_sdk22.useHMSStatsStore)(import_react_sdk22.selectHMSStats.localPeerStats);
      if (!stats) {
        return null;
      }
      return /* @__PURE__ */ import_react59.default.createElement(Flex, { css: { flexWrap: "wrap", gap: "$10" } }, /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Packets Lost", value: (_a7 = stats.subscribe) == null ? void 0 : _a7.packetsLost }), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Jitter", value: (_b7 = stats.subscribe) == null ? void 0 : _b7.jitter }), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Publish Bitrate", value: formatBytes2((_c = stats.publish) == null ? void 0 : _c.bitrate, "b/s") }), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Subscribe Bitrate", value: formatBytes2((_d = stats.subscribe) == null ? void 0 : _d.bitrate, "b/s") }), /* @__PURE__ */ import_react59.default.createElement(
        StatsRow2,
        {
          label: "Available Outgoing Bitrate",
          value: formatBytes2((_e = stats.publish) == null ? void 0 : _e.availableOutgoingBitrate, "b/s")
        }
      ), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Total Bytes Sent", value: formatBytes2((_f = stats.publish) == null ? void 0 : _f.bytesSent) }), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Total Bytes Received", value: formatBytes2((_g = stats.subscribe) == null ? void 0 : _g.bytesReceived) }), /* @__PURE__ */ import_react59.default.createElement(
        StatsRow2,
        {
          label: "Round Trip Time",
          value: `${(((((_h = stats.publish) == null ? void 0 : _h.currentRoundTripTime) || 0) + (((_i = stats.subscribe) == null ? void 0 : _i.currentRoundTripTime) || 0)) / 2).toFixed(3) * 1e3} ms`
        }
      ));
    };
    TrackStats = ({ trackID, layer, local }) => {
      var _a7;
      const selector = layer ? import_react_sdk22.selectHMSStats.localVideoTrackStatsByLayer(layer)(trackID) : local ? import_react_sdk22.selectHMSStats.localAudioTrackStatsByID(trackID) : import_react_sdk22.selectHMSStats.trackStatsByID(trackID);
      const stats = (0, import_react_sdk22.useHMSStatsStore)(selector);
      if (!stats) {
        return null;
      }
      const inbound = stats.type.includes("inbound");
      return /* @__PURE__ */ import_react59.default.createElement(Flex, { css: { flexWrap: "wrap", gap: "$10" } }, /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Type", value: stats.type + " " + stats.kind }), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Bitrate", value: formatBytes2(stats.bitrate, "b/s") }), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Packets Lost", value: stats.packetsLost }), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Jitter", value: (_a7 = stats.jitter) == null ? void 0 : _a7.toFixed(3) }), /* @__PURE__ */ import_react59.default.createElement(
        StatsRow2,
        {
          label: inbound ? "Bytes Received" : "Bytes Sent",
          value: formatBytes2(inbound ? stats.bytesReceived : stats.bytesSent)
        }
      ), stats.kind === "video" && /* @__PURE__ */ import_react59.default.createElement(import_react59.default.Fragment, null, /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Framerate", value: stats.framesPerSecond }), !inbound && /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Quality Limitation Reason", value: stats.qualityLimitationReason })), /* @__PURE__ */ import_react59.default.createElement(StatsRow2, { label: "Round Trip Time", value: stats.roundTripTime ? `${stats.roundTripTime * 1e3} ms` : "-" }));
    };
    StatsRow2 = import_react59.default.memo(({ label, value }) => /* @__PURE__ */ import_react59.default.createElement(Box, { css: { bg: "$surface_bright", w: "calc(50% - $6)", p: "$8", r: "$3" } }, /* @__PURE__ */ import_react59.default.createElement(
      Text,
      {
        variant: "overline",
        css: {
          fontWeight: "$semiBold",
          color: "$on_surface_medium",
          textTransform: "uppercase"
        }
      },
      label
    ), /* @__PURE__ */ import_react59.default.createElement(Text, { variant: "sub1", css: { fontWeight: "$semiBold", color: "$on_surface_high" } }, value || "-")));
    formatBytes2 = (bytes, unit = "B", decimals = 2) => {
      if (bytes === void 0)
        return "-";
      if (bytes === 0)
        return "0 " + unit;
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"].map((size) => size + unit);
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };
  }
});

// src/Prebuilt/components/MoreSettings/BulkRoleChangeModal.jsx
var import_react60, import_react_sdk23, import_react_icons24, BulkRoleChangeModal;
var init_BulkRoleChangeModal = __esm({
  "src/Prebuilt/components/MoreSettings/BulkRoleChangeModal.jsx"() {
    "use strict";
    init_define_process_env();
    import_react60 = __toESM(require("react"));
    import_react_sdk23 = require("@100mslive/react-sdk");
    import_react_icons24 = require("@100mslive/react-icons");
    init_src();
    init_DialogContent2();
    init_DropdownTrigger();
    init_hooks();
    BulkRoleChangeModal = ({ onOpenChange }) => {
      var _a7, _b7;
      const roles = useFilteredRoles();
      const hmsActions = (0, import_react_sdk23.useHMSActions)();
      const ref = (0, import_react60.useRef)(null);
      const roleRef = (0, import_react60.useRef)(null);
      const [selectedBulkRole, setBulkRole] = (0, import_react60.useState)([]);
      const [selectedRole, setRole] = (0, import_react60.useState)("");
      const [bulkRoleDialog, setBulkRoleDialog] = (0, import_react60.useState)(false);
      const [roleDialog, setRoleDialog] = (0, import_react60.useState)(false);
      const [errorMessage, setErrorMessage] = (0, import_react60.useState)("");
      const [isSubmiting, setIsSubmiting] = (0, import_react60.useState)(false);
      const changeBulkRole = (0, import_react60.useCallback)(() => __async(void 0, null, function* () {
        if (selectedBulkRole.length > 0 && selectedRole) {
          try {
            setIsSubmiting(true);
            yield hmsActions.changeRoleOfPeersWithRoles(selectedBulkRole, selectedRole);
            setIsSubmiting(false);
            setErrorMessage("");
            onOpenChange(false);
          } catch (err) {
            setErrorMessage((err == null ? void 0 : err.message) ? err == null ? void 0 : err.message : "Unknown error");
            setIsSubmiting(false);
          }
        }
      }), [selectedBulkRole, selectedRole, hmsActions, onOpenChange]);
      return /* @__PURE__ */ import_react60.default.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react60.default.createElement(DialogContent, { title: "Bulk Role Change", Icon: import_react_icons24.ChangeRoleIcon }, /* @__PURE__ */ import_react60.default.createElement(DialogRow, null, /* @__PURE__ */ import_react60.default.createElement(Text, null, "For Roles: "), /* @__PURE__ */ import_react60.default.createElement(
        Dropdown.Root,
        {
          open: bulkRoleDialog,
          onOpenChange: (value) => {
            if (value) {
              setBulkRoleDialog(value);
            }
          },
          modal: false
        },
        /* @__PURE__ */ import_react60.default.createElement(
          DialogDropdownTrigger,
          {
            ref,
            title: selectedBulkRole.length === 0 ? "Select Multiple Roles" : selectedBulkRole.toString(),
            css: {
              w: "70%",
              p: "$8"
            },
            open: bulkRoleDialog
          }
        ),
        /* @__PURE__ */ import_react60.default.createElement(
          Dropdown.Content,
          {
            css: { w: (_a7 = ref.current) == null ? void 0 : _a7.clientWidth, zIndex: 1e3 },
            onInteractOutside: () => {
              if (bulkRoleDialog) {
                setBulkRoleDialog(false);
              }
            }
          },
          roles && roles.map((role) => {
            return /* @__PURE__ */ import_react60.default.createElement(
              Dropdown.CheckboxItem,
              {
                key: role,
                checked: selectedBulkRole.includes(role),
                onCheckedChange: (value) => {
                  setBulkRole((selection) => {
                    return value ? [...selection, role] : selection.filter((selectedRole2) => selectedRole2 !== role);
                  });
                  setErrorMessage("");
                }
              },
              /* @__PURE__ */ import_react60.default.createElement(Checkbox.Root, { css: { margin: "$2" }, checked: selectedBulkRole.includes(role) }, /* @__PURE__ */ import_react60.default.createElement(Checkbox.Indicator, null, /* @__PURE__ */ import_react60.default.createElement(import_react_icons24.CheckIcon, { width: 16, height: 16 }))),
              role
            );
          })
        )
      )), /* @__PURE__ */ import_react60.default.createElement(DialogRow, null, /* @__PURE__ */ import_react60.default.createElement(Text, null, "To Role: "), /* @__PURE__ */ import_react60.default.createElement(Dropdown.Root, { open: roleDialog, onOpenChange: (value) => setRoleDialog(value) }, /* @__PURE__ */ import_react60.default.createElement(
        DialogDropdownTrigger,
        {
          ref: roleRef,
          title: selectedRole || "Select Role",
          css: {
            w: "70%",
            p: "$8"
          },
          open: roleDialog
        }
      ), /* @__PURE__ */ import_react60.default.createElement(Dropdown.Content, { css: { w: (_b7 = roleRef.current) == null ? void 0 : _b7.clientWidth, zIndex: 1e3 } }, roles && roles.map((role) => {
        return /* @__PURE__ */ import_react60.default.createElement(
          Dropdown.Item,
          {
            key: role,
            onSelect: () => {
              setRole(role);
              setErrorMessage("");
            }
          },
          role
        );
      })))), /* @__PURE__ */ import_react60.default.createElement(DialogRow, null, errorMessage && /* @__PURE__ */ import_react60.default.createElement(Flex, { gap: 2, css: { c: "$alert_error_default", w: "70%", ml: "auto" } }, /* @__PURE__ */ import_react60.default.createElement(import_react_icons24.AlertTriangleIcon, null), /* @__PURE__ */ import_react60.default.createElement(Text, { css: { c: "inherit" } }, errorMessage))), /* @__PURE__ */ import_react60.default.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ import_react60.default.createElement(Button, { variant: "primary", onClick: changeBulkRole, disabled: !(selectedRole && selectedBulkRole.length > 0) }, isSubmiting && /* @__PURE__ */ import_react60.default.createElement(Loading, { css: { color: "$on_primary_medium" } }), "Apply"))));
    };
  }
});

// src/Prebuilt/components/hooks/useFullscreen.js
var import_react61, import_screenfull, useFullscreen;
var init_useFullscreen = __esm({
  "src/Prebuilt/components/hooks/useFullscreen.js"() {
    "use strict";
    init_define_process_env();
    import_react61 = require("react");
    import_screenfull = __toESM(require("screenfull"));
    init_ToastManager();
    useFullscreen = () => {
      const [isFullScreenEnabled, setIsFullScreenEnabled] = (0, import_react61.useState)(import_screenfull.default.isFullscreen);
      const toggle = (0, import_react61.useCallback)(() => __async(void 0, null, function* () {
        if (!import_screenfull.default.isEnabled) {
          ToastManager.addToast({ title: "Fullscreen feature not supported" });
          return;
        }
        try {
          if (isFullScreenEnabled) {
            yield import_screenfull.default.exit();
          } else {
            yield import_screenfull.default.request();
          }
        } catch (err) {
          ToastManager.addToast({ title: err.message });
        }
      }), [isFullScreenEnabled]);
      (0, import_react61.useEffect)(() => {
        const onChange = () => {
          setIsFullScreenEnabled(import_screenfull.default.isFullscreen);
        };
        if (import_screenfull.default.isEnabled) {
          import_screenfull.default.on("change", onChange);
        }
        return () => {
          if (import_screenfull.default.isEnabled) {
            import_screenfull.default.off("change", onChange);
          }
        };
      }, []);
      return {
        allowed: import_screenfull.default.isEnabled,
        isFullscreen: isFullScreenEnabled,
        toggleFullscreen: toggle
      };
    };
  }
});

// src/Prebuilt/components/MoreSettings/FullScreenItem.jsx
var import_react62, import_react_icons25, FullScreenItem;
var init_FullScreenItem = __esm({
  "src/Prebuilt/components/MoreSettings/FullScreenItem.jsx"() {
    "use strict";
    init_define_process_env();
    import_react62 = __toESM(require("react"));
    import_react_icons25 = require("@100mslive/react-icons");
    init_src();
    init_useFullscreen();
    FullScreenItem = () => {
      const { allowed, isFullscreen, toggleFullscreen } = useFullscreen();
      if (!allowed) {
        return null;
      }
      return /* @__PURE__ */ import_react62.default.createElement(
        Dropdown.Item,
        {
          onClick: () => {
            toggleFullscreen();
          },
          "data-testid": "full_screen_btn"
        },
        /* @__PURE__ */ import_react62.default.createElement(import_react_icons25.ExpandIcon, null),
        /* @__PURE__ */ import_react62.default.createElement(Text, { variant: "sm", css: { ml: "$4" } }, isFullscreen ? "Exit " : "Go ", "Fullscreen")
      );
    };
  }
});

// src/Prebuilt/components/MoreSettings/MuteAllContent.jsx
var import_react63, MuteAllContent;
var init_MuteAllContent = __esm({
  "src/Prebuilt/components/MoreSettings/MuteAllContent.jsx"() {
    "use strict";
    init_define_process_env();
    import_react63 = __toESM(require("react"));
    init_Button2();
    init_Label2();
    init_Layout();
    init_RadioGroup2();
    init_Text2();
    init_DialogContent2();
    MuteAllContent = (props) => {
      const roles = props.roles || [];
      return /* @__PURE__ */ import_react63.default.createElement(import_react63.default.Fragment, null, /* @__PURE__ */ import_react63.default.createElement(
        DialogSelect,
        {
          title: "Role",
          options: [{ label: "All Roles", value: "" }, ...roles.map((role) => ({ label: role, value: role }))],
          selected: props.selectedRole,
          keyField: "value",
          labelField: "label",
          onChange: props.setRole
        }
      ), /* @__PURE__ */ import_react63.default.createElement(
        DialogSelect,
        {
          title: "Track type",
          options: props.trackTypeOptions,
          selected: props.trackType,
          onChange: props.setTrackType,
          keyField: "value",
          labelField: "label"
        }
      ), /* @__PURE__ */ import_react63.default.createElement(
        DialogSelect,
        {
          title: "Track source",
          options: props.trackSourceOptions,
          selected: props.selectedSource,
          onChange: props.setSource,
          keyField: "value",
          labelField: "label"
        }
      ), /* @__PURE__ */ import_react63.default.createElement(DialogRow, null, /* @__PURE__ */ import_react63.default.createElement(Text, { variant: "md" }, "Track status"), /* @__PURE__ */ import_react63.default.createElement(RadioGroup.Root, { value: props.enabled, onValueChange: props.setEnabled }, /* @__PURE__ */ import_react63.default.createElement(Flex, { align: "center", css: { mr: "$8" } }, /* @__PURE__ */ import_react63.default.createElement(RadioGroup.Item, { value: false, id: "trackDisableRadio", css: { mr: "$4" } }, /* @__PURE__ */ import_react63.default.createElement(RadioGroup.Indicator, null)), /* @__PURE__ */ import_react63.default.createElement(Label3, { htmlFor: "trackDisableRadio" }, "Mute")), /* @__PURE__ */ import_react63.default.createElement(Flex, { align: "center", css: { cursor: "pointer" } }, /* @__PURE__ */ import_react63.default.createElement(RadioGroup.Item, { value: true, id: "trackEnableRadio", css: { mr: "$4" } }, /* @__PURE__ */ import_react63.default.createElement(RadioGroup.Indicator, null)), /* @__PURE__ */ import_react63.default.createElement(Label3, { htmlFor: "trackEnableRadio" }, "Request Unmute")))), /* @__PURE__ */ import_react63.default.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ import_react63.default.createElement(Button, { variant: "primary", onClick: props.muteAll, css: { w: (props == null ? void 0 : props.isMobile) ? "100%" : "" } }, "Apply")));
    };
  }
});

// src/Prebuilt/components/MoreSettings/MuteAllModal.jsx
var import_react64, import_react_sdk24, import_react_icons26, trackSourceOptions, trackTypeOptions, MuteAllModal;
var init_MuteAllModal = __esm({
  "src/Prebuilt/components/MoreSettings/MuteAllModal.jsx"() {
    "use strict";
    init_define_process_env();
    import_react64 = __toESM(require("react"));
    import_react_sdk24 = require("@100mslive/react-sdk");
    import_react_icons26 = require("@100mslive/react-icons");
    init_src();
    init_Sheet2();
    init_DialogContent2();
    init_MuteAllContent();
    init_hooks();
    trackSourceOptions = [
      { label: "All Track Sources", value: "" },
      { label: "regular", value: "regular" },
      { label: "screen", value: "screen" },
      { label: "audioplaylist", value: "audioplaylist" },
      { label: "videoplaylist", value: "videoplaylist" }
    ];
    trackTypeOptions = [
      { label: "All Track Types", value: "" },
      { label: "audio", value: "audio" },
      { label: "video", value: "video" }
    ];
    MuteAllModal = ({ onOpenChange, isMobile = false }) => {
      const roles = useFilteredRoles();
      const hmsActions = (0, import_react_sdk24.useHMSActions)();
      const [enabled, setEnabled] = (0, import_react64.useState)(false);
      const [trackType, setTrackType] = (0, import_react64.useState)();
      const [selectedRole, setRole] = (0, import_react64.useState)();
      const [selectedSource, setSource] = (0, import_react64.useState)();
      const muteAll = (0, import_react64.useCallback)(() => __async(void 0, null, function* () {
        yield hmsActions.setRemoteTracksEnabled({
          enabled,
          type: trackType,
          source: selectedSource,
          roles: selectedRole ? [selectedRole] : void 0
        });
        onOpenChange(false);
      }), [selectedRole, enabled, trackType, selectedSource, hmsActions, onOpenChange]);
      const props = {
        muteAll,
        roles,
        enabled,
        setEnabled,
        trackType,
        setTrackType,
        selectedRole,
        setRole,
        selectedSource,
        setSource,
        trackSourceOptions,
        trackTypeOptions,
        isMobile
      };
      if (isMobile) {
        return /* @__PURE__ */ import_react64.default.createElement(Sheet.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react64.default.createElement(Sheet.Content, { css: { px: "$10" } }, /* @__PURE__ */ import_react64.default.createElement(MuteAllContent, __spreadValues({}, props))));
      }
      return /* @__PURE__ */ import_react64.default.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react64.default.createElement(DialogContent, { title: "Mute/Unmute Remote Tracks", Icon: import_react_icons26.MicOffIcon }, /* @__PURE__ */ import_react64.default.createElement(MuteAllContent, __spreadValues({}, props))));
    };
  }
});

// src/Prebuilt/components/hooks/useMetadata.jsx
var import_react65, import_react_sdk25, useMyMetadata;
var init_useMetadata = __esm({
  "src/Prebuilt/components/hooks/useMetadata.jsx"() {
    "use strict";
    init_define_process_env();
    import_react65 = require("react");
    import_react_sdk25 = require("@100mslive/react-sdk");
    useMyMetadata = () => {
      const hmsActions = (0, import_react_sdk25.useHMSActions)();
      const localPeerId = (0, import_react_sdk25.useHMSStore)(import_react_sdk25.selectLocalPeerID);
      const vanillaStore = (0, import_react_sdk25.useHMSVanillaStore)();
      const metaData = (0, import_react_sdk25.useHMSStore)((0, import_react_sdk25.selectPeerMetadata)(localPeerId));
      const isHandRaised = (0, import_react_sdk25.useHMSStore)((0, import_react_sdk25.selectHasPeerHandRaised)(localPeerId));
      const update = (updatedFields) => __async(void 0, null, function* () {
        try {
          const currentMetadata = vanillaStore.getState((0, import_react_sdk25.selectPeerMetadata)(localPeerId));
          yield hmsActions.changeMetadata(Object.assign(currentMetadata, updatedFields));
          return true;
        } catch (error) {
          console.error("failed to update metadata ", updatedFields);
        }
      });
      const toggleHandRaise = (0, import_react65.useCallback)(() => __async(void 0, null, function* () {
        if (isHandRaised) {
          yield hmsActions.lowerLocalPeerHand();
        } else {
          yield hmsActions.raiseLocalPeerHand();
          yield update({ isBRBOn: false });
        }
      }), [isHandRaised]);
      const toggleBRB = (0, import_react65.useCallback)(() => __async(void 0, null, function* () {
        const newValue = !(metaData == null ? void 0 : metaData.isBRBOn);
        yield update({ isBRBOn: newValue });
        if (newValue) {
          yield hmsActions.lowerLocalPeerHand();
        }
      }), [metaData == null ? void 0 : metaData.isBRBOn]);
      const setPrevRole = (role) => __async(void 0, null, function* () {
        yield update({
          prevRole: role
        });
      });
      return {
        isHandRaised,
        isBRBOn: !!(metaData == null ? void 0 : metaData.isBRBOn),
        metaData,
        updateMetaData: update,
        toggleHandRaise,
        toggleBRB,
        setPrevRole
      };
    };
  }
});

// src/Prebuilt/components/MoreSettings/SplitComponents/DesktopOptions.tsx
var import_react66, import_hls_player, import_react_sdk26, import_react_icons27, MODALS, DesktopOptions;
var init_DesktopOptions = __esm({
  "src/Prebuilt/components/MoreSettings/SplitComponents/DesktopOptions.tsx"() {
    "use strict";
    init_define_process_env();
    import_react66 = __toESM(require("react"));
    import_hls_player = require("@100mslive/hls-player");
    import_react_sdk26 = require("@100mslive/react-sdk");
    import_react_icons27 = require("@100mslive/react-icons");
    init_src();
    init_IconButton3();
    init_PIP();
    init_PIPManager();
    init_RoleChangeModal();
    init_SettingsModal();
    init_StartRecording();
    init_StatsForNerds();
    init_BulkRoleChangeModal();
    init_FullScreenItem();
    init_MuteAllModal();
    init_useDropdownList();
    init_useMetadata();
    init_constants();
    MODALS = {
      CHANGE_NAME: "changeName",
      SELF_ROLE_CHANGE: "selfRoleChange",
      MORE_SETTINGS: "moreSettings",
      START_RECORDING: "startRecording",
      DEVICE_SETTINGS: "deviceSettings",
      STATS_FOR_NERDS: "statsForNerds",
      BULK_ROLE_CHANGE: "bulkRoleChange",
      MUTE_ALL: "muteAll",
      EMBED_URL: "embedUrl"
    };
    DesktopOptions = ({
      elements,
      screenType
    }) => {
      const localPeerId = (0, import_react_sdk26.useHMSStore)(import_react_sdk26.selectLocalPeerID);
      const hmsActions = (0, import_react_sdk26.useHMSActions)();
      const enablHlsStats = (0, import_react_sdk26.useHMSStore)((0, import_react_sdk26.selectAppData)(APP_DATA.hlsStats));
      const [openModals, setOpenModals] = (0, import_react66.useState)(/* @__PURE__ */ new Set());
      const { isBRBOn, toggleBRB } = useMyMetadata();
      const isPipOn = PictureInPicture.isOn();
      const isBRBEnabled = !!(elements == null ? void 0 : elements.brb);
      useDropdownList({ open: openModals.size > 0, name: "MoreSettings" });
      const updateState = (modalName, value) => {
        setOpenModals((modals) => {
          const copy = new Set(modals);
          if (value) {
            copy.clear();
            copy.add(modalName);
          } else {
            copy.delete(modalName);
          }
          return copy;
        });
      };
      return /* @__PURE__ */ import_react66.default.createElement(import_react66.Fragment, null, /* @__PURE__ */ import_react66.default.createElement(
        Dropdown.Root,
        {
          open: openModals.has(MODALS.MORE_SETTINGS),
          onOpenChange: (value) => updateState(MODALS.MORE_SETTINGS, value),
          modal: false
        },
        /* @__PURE__ */ import_react66.default.createElement(Tooltip, { title: "More options" }, /* @__PURE__ */ import_react66.default.createElement(Dropdown.Trigger, { asChild: true, "data-testid": "more_settings_btn" }, /* @__PURE__ */ import_react66.default.createElement(IconButton_default, null, /* @__PURE__ */ import_react66.default.createElement(import_react_icons27.DragHandleIcon, null)))),
        /* @__PURE__ */ import_react66.default.createElement(
          Dropdown.Content,
          {
            sideOffset: 5,
            align: "end",
            css: {
              py: "$0",
              maxHeight: "unset",
              "@md": { w: "$64" },
              "div[role='separator']:first-child": {
                display: "none"
              }
            }
          },
          isBRBEnabled && screenType !== "hls_live_streaming" ? /* @__PURE__ */ import_react66.default.createElement(Dropdown.Item, { onClick: toggleBRB, "data-testid": "brb_btn" }, /* @__PURE__ */ import_react66.default.createElement(import_react_icons27.BrbIcon, null), /* @__PURE__ */ import_react66.default.createElement(Text, { variant: "sm", css: { ml: "$4", color: "$on_surface_high" } }, "Be Right Back"), /* @__PURE__ */ import_react66.default.createElement(Flex, { justify: "end", css: { color: "$on_surface_high", flexGrow: "1" } }, isBRBOn ? /* @__PURE__ */ import_react66.default.createElement(import_react_icons27.CheckIcon, null) : null)) : null,
          screenType !== "hls_live_streaming" ? /* @__PURE__ */ import_react66.default.createElement(Dropdown.Item, null, /* @__PURE__ */ import_react66.default.createElement(
            PIP,
            {
              content: /* @__PURE__ */ import_react66.default.createElement(Flex, { css: { w: "100%" } }, /* @__PURE__ */ import_react66.default.createElement(import_react_icons27.PipIcon, null), /* @__PURE__ */ import_react66.default.createElement(Text, { variant: "sm", css: { ml: "$4" } }, isPipOn ? "Disable" : "Enable", " Picture-in-Picture"))
            }
          )) : null,
          /* @__PURE__ */ import_react66.default.createElement(FullScreenItem, null),
          /* @__PURE__ */ import_react66.default.createElement(Dropdown.ItemSeparator, { css: { mx: 0 } }),
          /* @__PURE__ */ import_react66.default.createElement(Dropdown.Item, { onClick: () => updateState(MODALS.DEVICE_SETTINGS, true), "data-testid": "device_settings_btn" }, /* @__PURE__ */ import_react66.default.createElement(import_react_icons27.SettingsIcon, null), /* @__PURE__ */ import_react66.default.createElement(Text, { variant: "sm", css: { ml: "$4" } }, "Settings")),
          screenType === "hls_live_streaming" ? import_hls_player.HMSHLSPlayer.isSupported() ? /* @__PURE__ */ import_react66.default.createElement(
            Dropdown.Item,
            {
              onClick: () => hmsActions.setAppData(APP_DATA.hlsStats, !enablHlsStats),
              "data-testid": "hls_stats"
            },
            /* @__PURE__ */ import_react66.default.createElement(
              Checkbox.Root,
              {
                css: { margin: "$2" },
                checked: enablHlsStats,
                onCheckedChange: () => hmsActions.setAppData(APP_DATA.hlsStats, !enablHlsStats)
              },
              /* @__PURE__ */ import_react66.default.createElement(Checkbox.Indicator, null, /* @__PURE__ */ import_react66.default.createElement(import_react_icons27.CheckIcon, { width: 16, height: 16 }))
            ),
            /* @__PURE__ */ import_react66.default.createElement(Flex, { justify: "between", css: { width: "100%" } }, /* @__PURE__ */ import_react66.default.createElement(Text, { variant: "sm", css: { ml: "$4" } }, "Show HLS Stats"), /* @__PURE__ */ import_react66.default.createElement(Text, { variant: "sm", css: { ml: "$4" } }, `${isMacOS ? "\u2318" : "ctrl"} + ]`))
          ) : null : /* @__PURE__ */ import_react66.default.createElement(Dropdown.Item, { onClick: () => updateState(MODALS.STATS_FOR_NERDS, true), "data-testid": "stats_for_nreds_btn" }, /* @__PURE__ */ import_react66.default.createElement(import_react_icons27.InfoIcon, null), /* @__PURE__ */ import_react66.default.createElement(Text, { variant: "sm", css: { ml: "$4" } }, "Stats for Nerds"))
        )
      ), openModals.has(MODALS.BULK_ROLE_CHANGE) && /* @__PURE__ */ import_react66.default.createElement(BulkRoleChangeModal, { onOpenChange: (value) => updateState(MODALS.BULK_ROLE_CHANGE, value) }), openModals.has(MODALS.MUTE_ALL) && /* @__PURE__ */ import_react66.default.createElement(MuteAllModal, { onOpenChange: (value) => updateState(MODALS.MUTE_ALL, value) }), openModals.has(MODALS.START_RECORDING) && /* @__PURE__ */ import_react66.default.createElement(StartRecording_default, { open: true, onOpenChange: (value) => updateState(MODALS.START_RECORDING, value) }), openModals.has(MODALS.DEVICE_SETTINGS) && /* @__PURE__ */ import_react66.default.createElement(
        SettingsModal_default,
        {
          open: true,
          onOpenChange: (value) => updateState(MODALS.DEVICE_SETTINGS, value),
          screenType
        }
      ), openModals.has(MODALS.STATS_FOR_NERDS) && /* @__PURE__ */ import_react66.default.createElement(StatsForNerds, { open: true, onOpenChange: (value) => updateState(MODALS.STATS_FOR_NERDS, value) }), openModals.has(MODALS.SELF_ROLE_CHANGE) && /* @__PURE__ */ import_react66.default.createElement(
        RoleChangeModal,
        {
          peerId: localPeerId,
          onOpenChange: (value) => updateState(MODALS.SELF_ROLE_CHANGE, value)
        }
      ));
    };
  }
});

// src/Prebuilt/common/utils.js
var getMetadata, isScreenshareSupported, getFormattedCount, formatTime, compareArrays, checkCorrectAnswer, isValidTextInput, calculateAvatarAndAttribBoxSize;
var init_utils2 = __esm({
  "src/Prebuilt/common/utils.js"() {
    "use strict";
    init_define_process_env();
    init_constants();
    getMetadata = (metadataString) => {
      try {
        return !metadataString ? {} : JSON.parse(metadataString);
      } catch (error) {
        return {};
      }
    };
    isScreenshareSupported = () => {
      return typeof navigator.mediaDevices.getDisplayMedia !== "undefined";
    };
    getFormattedCount = (num) => {
      const formatter = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 2 });
      const formattedNum = formatter.format(num);
      return formattedNum;
    };
    formatTime = (timeInSeconds) => {
      timeInSeconds = Math.floor(timeInSeconds / 1e3);
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor(timeInSeconds % 3600 / 60);
      const seconds = timeInSeconds % 60;
      const hour = hours !== 0 ? `${hours < 10 ? "0" : ""}${hours}:` : "";
      return `${hour}${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
    compareArrays = (a, b) => {
      if (a.length !== b.length)
        return false;
      else {
        for (var i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
    };
    checkCorrectAnswer = (answer, localPeerResponse, type) => {
      if (type === QUESTION_TYPE.SINGLE_CHOICE) {
        return (answer == null ? void 0 : answer.option) === (localPeerResponse == null ? void 0 : localPeerResponse.option);
      } else if (type === QUESTION_TYPE.MULTIPLE_CHOICE) {
        return (answer == null ? void 0 : answer.options) && (localPeerResponse == null ? void 0 : localPeerResponse.options) && compareArrays(answer == null ? void 0 : answer.options, localPeerResponse == null ? void 0 : localPeerResponse.options);
      }
    };
    isValidTextInput = (text, minLength = 1, maxLength = 100) => {
      return text && text.length >= minLength && text.length <= maxLength;
    };
    calculateAvatarAndAttribBoxSize = (calculatedWidth, calculatedHeight) => {
      if (!calculatedWidth || !calculatedHeight) {
        return [void 0, void 0];
      }
      let avatarSize = "large";
      if (calculatedWidth <= 150 || calculatedHeight <= 150) {
        avatarSize = "small";
      } else if (calculatedWidth <= 300 || calculatedHeight <= 300) {
        avatarSize = "medium";
      }
      let attribBoxSize = "medium";
      if (calculatedWidth <= 180 || calculatedHeight <= 180) {
        attribBoxSize = "small";
      }
      return [avatarSize, attribBoxSize];
    };
  }
});

// src/Prebuilt/services/FeatureFlags.jsx
function FeatureFlagsInit() {
  const roomId = (0, import_react_sdk27.useHMSStore)(import_react_sdk27.selectRoomID);
  (0, import_react67.useEffect)(() => {
    if (roomId) {
      FeatureFlags.init(roomId);
    }
  }, [roomId]);
  return null;
}
var import_react67, import_react_sdk27, FeatureFlags;
var init_FeatureFlags = __esm({
  "src/Prebuilt/services/FeatureFlags.jsx"() {
    "use strict";
    init_define_process_env();
    import_react67 = require("react");
    import_react_sdk27 = require("@100mslive/react-sdk");
    FeatureFlags = class {
      static init(roomId) {
        if (!window.HMS) {
          window.HMS = {};
        }
        window.HMS.OPTIMISE_HLS_LATENCY = false;
        window.HMS.ALWAYS_REQUEST_PERMISSIONS = false;
        window.HMS.SHOW_NS = define_process_env_default.REACT_APP_ENV !== "prod";
        this.enableTranscription = define_process_env_default.REACT_APP_TRANSCRIPTION_ROOM_ID === roomId;
      }
      static showNS() {
        return window.HMS.SHOW_NS;
      }
      static optimiseHLSLatency() {
        return window.HMS.OPTIMISE_HLS_LATENCY;
      }
      static alwaysRequestPermissions() {
        return window.HMS.ALWAYS_REQUEST_PERMISSIONS;
      }
    };
    __publicField(FeatureFlags, "enableTranscription", define_process_env_default.REACT_APP_ENABLE_TRANSCRIPTION === "true");
    __publicField(FeatureFlags, "enableStatsForNerds", define_process_env_default.REACT_APP_ENABLE_STATS_FOR_NERDS === "true");
    __publicField(FeatureFlags, "enableWhiteboard", define_process_env_default.REACT_APP_ENABLE_WHITEBOARD && define_process_env_default.REACT_APP_PUSHER_APP_KEY && define_process_env_default.REACT_APP_PUSHER_AUTHENDPOINT);
  }
});

// src/Prebuilt/plugins/whiteboard/useWhiteboardMetadata.js
var import_react68, import_react_sdk28, isWhiteboardOwner, useWhiteboardMetadata;
var init_useWhiteboardMetadata = __esm({
  "src/Prebuilt/plugins/whiteboard/useWhiteboardMetadata.js"() {
    "use strict";
    init_define_process_env();
    import_react68 = require("react");
    import_react_sdk28 = require("@100mslive/react-sdk");
    init_useMetadata();
    init_utils2();
    init_FeatureFlags();
    isWhiteboardOwner = (peer) => {
      return !!getMetadata(peer == null ? void 0 : peer.metadata).whiteboardOwner;
    };
    useWhiteboardMetadata = () => {
      const localPeerID = (0, import_react_sdk28.useHMSStore)(import_react_sdk28.selectLocalPeerID);
      const { updateMetaData } = useMyMetadata();
      const whiteboardOwner = (0, import_react_sdk28.useHMSStore)((0, import_react_sdk28.selectPeerByCondition)(isWhiteboardOwner));
      const amIWhiteboardOwner = (0, import_react68.useMemo)(() => localPeerID === (whiteboardOwner == null ? void 0 : whiteboardOwner.id), [localPeerID, whiteboardOwner]);
      const toggleWhiteboard = (0, import_react68.useCallback)(() => __async(void 0, null, function* () {
        if (!define_process_env_default.REACT_APP_PUSHER_APP_KEY) {
          console.error("Cannot start whiteboard - Pusher Key unavailable");
        }
        try {
          if (!whiteboardOwner || amIWhiteboardOwner) {
            yield updateMetaData({ whiteboardOwner: !whiteboardOwner });
          } else {
            console.warn("Cannot toggle whiteboard as it was shared by another peer");
          }
        } catch (error) {
          console.error("failed to toggle whiteboard to ", !whiteboardOwner, error);
        }
      }), [whiteboardOwner, updateMetaData, amIWhiteboardOwner]);
      (0, import_react68.useEffect)(() => {
        window.toggleWhiteboard = toggleWhiteboard;
      }, [toggleWhiteboard]);
      return {
        /** is whiteboard enabled for the room */
        whiteboardEnabled: FeatureFlags.enableWhiteboard,
        /** owner of the active whiteboard, can also be used to check if whiteboard is active */
        whiteboardOwner,
        amIWhiteboardOwner,
        toggleWhiteboard
      };
    };
  }
});

// src/Prebuilt/components/hooks/usePlaylistMusic.js
var import_react69, import_react_sdk29, usePlaylistMusic;
var init_usePlaylistMusic = __esm({
  "src/Prebuilt/components/hooks/usePlaylistMusic.js"() {
    "use strict";
    init_define_process_env();
    import_react69 = require("react");
    import_react_sdk29 = require("@100mslive/react-sdk");
    usePlaylistMusic = () => {
      const peer = (0, import_react_sdk29.useHMSStore)(import_react_sdk29.selectPeerSharingAudioPlaylist);
      const track = (0, import_react_sdk29.useHMSStore)((0, import_react_sdk29.selectAudioPlaylistTrackByPeerID)(peer == null ? void 0 : peer.id));
      const selection = (0, import_react_sdk29.useHMSStore)(import_react_sdk29.selectAudioPlaylist.selectedItem);
      const hmsActions = (0, import_react_sdk29.useHMSActions)();
      const play = (0, import_react69.useCallback)(
        (selectedId) => __async(void 0, null, function* () {
          yield hmsActions.audioPlaylist.play(selectedId);
        }),
        [hmsActions]
      );
      const pause = (0, import_react69.useCallback)(() => {
        hmsActions.audioPlaylist.pause();
      }, [hmsActions]);
      const setVolume = (0, import_react69.useCallback)(
        (value) => {
          hmsActions.setVolume(value, track == null ? void 0 : track.id);
        },
        [hmsActions, track]
      );
      return { selection, peer, track, play, pause, setVolume };
    };
  }
});

// src/Prebuilt/components/hooks/useScreenshareAudio.js
var import_react70, import_react_sdk30, useScreenshareAudio;
var init_useScreenshareAudio = __esm({
  "src/Prebuilt/components/hooks/useScreenshareAudio.js"() {
    "use strict";
    init_define_process_env();
    import_react70 = require("react");
    import_react_sdk30 = require("@100mslive/react-sdk");
    useScreenshareAudio = () => {
      const hmsActions = (0, import_react_sdk30.useHMSActions)();
      const peer = (0, import_react_sdk30.useHMSStore)(import_react_sdk30.selectPeerSharingAudio);
      const track = (0, import_react_sdk30.useHMSStore)((0, import_react_sdk30.selectScreenShareAudioByPeerID)(peer == null ? void 0 : peer.id));
      const handleMute = (0, import_react70.useCallback)(() => {
        if (!peer.isLocal) {
          hmsActions.setVolume(!track.volume ? 100 : 0, track.id);
        } else {
          hmsActions.setEnabledTrack(track.id, !track.enabled).catch(console.error);
        }
      }, [peer, hmsActions, track]);
      let muted = void 0;
      if (peer && track) {
        muted = peer.isLocal ? !track.enabled : track.volume === 0;
      }
      return { peer, track, muted, onToggle: handleMute };
    };
  }
});

// src/Prebuilt/components/Header/AdditionalRoomState.jsx
var import_react71, import_react_sdk31, import_react_icons28, getRecordingText, AdditionalRoomState;
var init_AdditionalRoomState = __esm({
  "src/Prebuilt/components/Header/AdditionalRoomState.jsx"() {
    "use strict";
    init_define_process_env();
    import_react71 = __toESM(require("react"));
    import_react_sdk31 = require("@100mslive/react-sdk");
    import_react_icons28 = require("@100mslive/react-icons");
    init_src();
    init_useWhiteboardMetadata();
    init_useUISettings();
    init_usePlaylistMusic();
    init_useScreenshareAudio();
    init_constants();
    getRecordingText = ({ isBrowserRecordingOn, isServerRecordingOn, isHLSRecordingOn }, delimiter = ", ") => {
      if (!isBrowserRecordingOn && !isServerRecordingOn && !isHLSRecordingOn) {
        return "";
      }
      const title = [];
      if (isBrowserRecordingOn) {
        title.push("Browser");
      }
      if (isServerRecordingOn) {
        title.push("Server");
      }
      if (isHLSRecordingOn) {
        title.push("HLS");
      }
      return title.join(delimiter);
    };
    AdditionalRoomState = () => {
      var _a7, _b7, _c, _d, _e;
      const playlist = usePlaylistMusic();
      const isAudioOnly = useUISettings(UI_SETTINGS.isAudioOnly);
      const screenshareAudio = useScreenshareAudio();
      const [open, setOpen] = (0, import_react71.useState)(false);
      const isPlaylistInactive = [
        !playlist.peer || !playlist.track,
        !((_a7 = playlist.peer) == null ? void 0 : _a7.isLocal) && !((_b7 = playlist.track) == null ? void 0 : _b7.enabled),
        ((_c = playlist.peer) == null ? void 0 : _c.isLocal) && !playlist.selection
      ].some(Boolean);
      const isAudioshareInactive = [
        !screenshareAudio.peer || !screenshareAudio.track,
        !((_d = screenshareAudio.peer) == null ? void 0 : _d.isLocal) && !((_e = screenshareAudio.track) == null ? void 0 : _e.enabled)
      ].some(Boolean);
      const peerSharingPlaylist = (0, import_react_sdk31.useHMSStore)(import_react_sdk31.selectPeerSharingVideoPlaylist);
      const localPeerID = (0, import_react_sdk31.useHMSStore)(import_react_sdk31.selectLocalPeerID);
      const isVideoPlayListPlaying = !!(peerSharingPlaylist == null ? void 0 : peerSharingPlaylist.id);
      const { screenSharingPeerName, screenSharingPeerId, screenShareVideoTrackId } = (0, import_react_sdk31.useScreenShare)();
      const isVideoScreenSharingOn = !!screenShareVideoTrackId;
      const { whiteboardOwner, amIWhiteboardOwner, toggleWhiteboard } = useWhiteboardMetadata();
      const shouldShowScreenShareState = isAudioOnly && isVideoScreenSharingOn;
      const shouldShowVideoState = isAudioOnly && isVideoPlayListPlaying;
      if (isPlaylistInactive && isAudioshareInactive && !shouldShowScreenShareState && !shouldShowVideoState && !whiteboardOwner) {
        return null;
      }
      return /* @__PURE__ */ import_react71.default.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react71.default.createElement(Dropdown.Trigger, { asChild: true }, /* @__PURE__ */ import_react71.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            color: "$on_primary_high",
            borderRadius: "$1",
            border: "1px solid $on_surface_low",
            padding: "$4",
            "@sm": { display: "none" }
          },
          "data-testid": "record_status_dropdown"
        },
        !isAudioshareInactive && /* @__PURE__ */ import_react71.default.createElement(Tooltip, { title: "Screenshare Audio" }, /* @__PURE__ */ import_react71.default.createElement(Flex, { align: "center", css: { color: "$on_primary_high", mx: "$2" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.MusicIcon, { width: 24, height: 24 }))),
        shouldShowScreenShareState && /* @__PURE__ */ import_react71.default.createElement(Tooltip, { title: "Screenshare" }, /* @__PURE__ */ import_react71.default.createElement(Flex, { align: "center", css: { color: "$on_primary_high", mx: "$2" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.ShareScreenIcon, { width: 24, height: 24 }))),
        shouldShowVideoState && /* @__PURE__ */ import_react71.default.createElement(Tooltip, { title: "video playlist" }, /* @__PURE__ */ import_react71.default.createElement(Flex, { align: "center", css: { color: "$on_primary_high", mx: "$2" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.VideoPlayerIcon, { width: 24, height: 24 }))),
        !isPlaylistInactive && /* @__PURE__ */ import_react71.default.createElement(Tooltip, { title: "Playlist Music" }, /* @__PURE__ */ import_react71.default.createElement(Flex, { align: "center", css: { color: "$on_primary_high", mx: "$2" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.AudioPlayerIcon, { width: 24, height: 24 }))),
        whiteboardOwner && /* @__PURE__ */ import_react71.default.createElement(Tooltip, { title: "Whiteboard" }, /* @__PURE__ */ import_react71.default.createElement(Flex, { align: "center", css: { color: "$on_primary_high", mx: "$2" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.PencilDrawIcon, { width: 24, height: 24 }))),
        /* @__PURE__ */ import_react71.default.createElement(Box, { css: { "@lg": { display: "none" }, color: "$on_surface_low" } }, open ? /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.ChevronUpIcon, null) : /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.ChevronDownIcon, null))
      )), /* @__PURE__ */ import_react71.default.createElement(Dropdown.Content, { sideOffset: 5, align: "end", css: { w: "$60" } }, !isPlaylistInactive && /* @__PURE__ */ import_react71.default.createElement(Dropdown.Item, { css: { color: "$on_primary_high" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.AudioPlayerIcon, { width: 24, height: 24 }), /* @__PURE__ */ import_react71.default.createElement(Text, { variant: "sm", css: { ml: "$2", flex: "1 1 0" } }, "Playlist is playing"), playlist.peer.isLocal ? /* @__PURE__ */ import_react71.default.createElement(
        Text,
        {
          variant: "sm",
          css: { color: "$alert_error_default", cursor: "pointer", ml: "$2" },
          onClick: (e) => {
            e.preventDefault();
            playlist.selection.playing ? playlist.pause() : playlist.play(playlist.selection.id);
          }
        },
        playlist.selection.playing ? "Pause" : "Play"
      ) : /* @__PURE__ */ import_react71.default.createElement(
        Text,
        {
          variant: "sm",
          css: { color: "$alert_error_default", ml: "$2", cursor: "pointer" },
          onClick: (e) => {
            e.preventDefault();
            playlist.setVolume(!playlist.track.volume ? 100 : 0);
          }
        },
        playlist.track.volume === 0 ? "Unmute" : "Mute"
      )), !isAudioshareInactive && /* @__PURE__ */ import_react71.default.createElement(Dropdown.Item, { css: { color: "$on_primary_high" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.MusicIcon, { width: 24, height: 24 }), /* @__PURE__ */ import_react71.default.createElement(Text, { variant: "sm", css: { ml: "$2", flex: "1 1 0" } }, "Music is playing"), /* @__PURE__ */ import_react71.default.createElement(
        Text,
        {
          variant: "sm",
          css: { color: "$alert_error_default", ml: "$2", cursor: "pointer" },
          onClick: (e) => {
            e.preventDefault();
            screenshareAudio.onToggle();
          }
        },
        screenshareAudio.muted ? "Unmute" : "Mute"
      )), shouldShowScreenShareState && /* @__PURE__ */ import_react71.default.createElement(Dropdown.Item, { css: { color: "$on_primary_high" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.ShareScreenIcon, { width: 24, height: 24 }), /* @__PURE__ */ import_react71.default.createElement(Text, { variant: "sm", css: { ml: "$2", flex: "1 1 0" } }, `Shared by: ${screenSharingPeerId === localPeerID ? "You" : screenSharingPeerName}`)), shouldShowVideoState && /* @__PURE__ */ import_react71.default.createElement(Dropdown.Item, { css: { color: "$on_primary_high" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.VideoPlayerIcon, { width: 24, height: 24 }), /* @__PURE__ */ import_react71.default.createElement(Text, { variant: "sm", css: { ml: "$2", flex: "1 1 0" } }, `Shared by: ${peerSharingPlaylist.id === localPeerID ? "You" : peerSharingPlaylist.name}`)), whiteboardOwner && /* @__PURE__ */ import_react71.default.createElement(Dropdown.Item, { css: { color: "$on_primary_high" } }, /* @__PURE__ */ import_react71.default.createElement(import_react_icons28.PencilDrawIcon, { width: 24, height: 24 }), /* @__PURE__ */ import_react71.default.createElement(Text, { variant: "sm", css: { ml: "$2", flex: "1 1 0" } }, "Whiteboard Owner - ", whiteboardOwner.name, amIWhiteboardOwner && "(You)"), amIWhiteboardOwner && /* @__PURE__ */ import_react71.default.createElement(
        Text,
        {
          variant: "sm",
          css: { color: "$alert_error_default", ml: "$2", cursor: "pointer" },
          onClick: (e) => {
            e.preventDefault();
            toggleWhiteboard();
          }
        },
        "Stop"
      ))));
    };
  }
});

// src/Prebuilt/provider/roomLayoutProvider/hooks/useRoomLayoutScreen.ts
function useRoomLayoutScreen({
  screen
}) {
  var _a7;
  const roomLayout = useRoomLayout();
  const screenProps = (_a7 = roomLayout == null ? void 0 : roomLayout.screens) == null ? void 0 : _a7[screen];
  return screenProps;
}
function useRoomLayoutPreviewScreen() {
  var _a7;
  const screenProps = useRoomLayoutScreen({ screen: "preview" });
  const isPreviewScreenEnabled = !!screenProps;
  let elements;
  let screenType;
  if (isPreviewScreenEnabled) {
    screenType = Object.keys(screenProps)[0];
    elements = (_a7 = screenProps[screenType]) == null ? void 0 : _a7.elements;
  }
  return {
    isPreviewScreenEnabled,
    elements,
    screenType
  };
}
function useRoomLayoutConferencingScreen() {
  var _a7, _b7;
  const screenProps = useRoomLayoutScreen({ screen: "conferencing" }) || {};
  const screenType = Object.keys(screenProps)[0];
  const elements = (_a7 = screenProps[screenType]) == null ? void 0 : _a7.elements;
  const hideSections = ((_b7 = screenProps[screenType]) == null ? void 0 : _b7.hideSections) || [];
  return {
    hideSections,
    elements,
    screenType
  };
}
function useRoomLayoutLeaveScreen() {
  const screenProps = useRoomLayoutScreen({ screen: "leave" });
  const isLeaveScreenEnabled = !!screenProps;
  return {
    isLeaveScreenEnabled
  };
}
var init_useRoomLayoutScreen = __esm({
  "src/Prebuilt/provider/roomLayoutProvider/hooks/useRoomLayoutScreen.ts"() {
    "use strict";
    init_define_process_env();
    init_roomLayoutProvider();
  }
});

// src/Prebuilt/components/Header/StreamActions.tsx
var import_react72, import_react_use6, import_react_sdk32, import_react_icons29, LiveStatus, RecordingStatus, StartRecording2, StreamActions, StopRecordingInSheet;
var init_StreamActions = __esm({
  "src/Prebuilt/components/Header/StreamActions.tsx"() {
    "use strict";
    init_define_process_env();
    import_react72 = __toESM(require("react"));
    import_react_use6 = require("react-use");
    import_react_sdk32 = require("@100mslive/react-sdk");
    import_react_icons29 = require("@100mslive/react-icons");
    init_src();
    init_Sheet2();
    init_ToastManager();
    init_AdditionalRoomState();
    init_useRoomLayoutScreen();
    init_useUISettings();
    init_utils2();
    init_constants();
    LiveStatus = () => {
      var _a7;
      const { isHLSRunning, isRTMPRunning } = (0, import_react_sdk32.useRecordingStreaming)();
      const hlsState = (0, import_react_sdk32.useHMSStore)(import_react_sdk32.selectHLSState);
      const isMobile = (0, import_react_use6.useMedia)(config.media.md);
      const intervalRef = (0, import_react72.useRef)(null);
      const { screenType } = useRoomLayoutConferencingScreen();
      const [liveTime, setLiveTime] = (0, import_react72.useState)(0);
      const startTimer = (0, import_react72.useCallback)(() => {
        intervalRef.current = setInterval(() => {
          var _a8;
          const timeStamp = (_a8 = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _a8[screenType === "hls_live_streaming" ? "startedAt" : "initialisedAt"];
          if ((hlsState == null ? void 0 : hlsState.running) && timeStamp) {
            setLiveTime(Date.now() - timeStamp.getTime());
          }
        }, 1e3);
      }, [hlsState == null ? void 0 : hlsState.running, hlsState == null ? void 0 : hlsState.variants]);
      (0, import_react72.useEffect)(() => {
        if (hlsState == null ? void 0 : hlsState.running) {
          startTimer();
        }
        if (!(hlsState == null ? void 0 : hlsState.running) && intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        return () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        };
      }, [hlsState.running, isMobile, startTimer]);
      if (!isHLSRunning && !isRTMPRunning) {
        return null;
      }
      return /* @__PURE__ */ import_react72.default.createElement(
        Flex,
        {
          align: "center",
          gap: "1",
          css: {
            border: "1px solid $border_default",
            padding: "$4 $6 $4 $6",
            borderRadius: "$1"
          }
        },
        /* @__PURE__ */ import_react72.default.createElement(Box, { css: { w: "$4", h: "$4", r: "$round", bg: "$alert_error_default", mr: "$2" } }),
        /* @__PURE__ */ import_react72.default.createElement(Flex, { align: "center", gap: "2" }, /* @__PURE__ */ import_react72.default.createElement(Text, { variant: !isMobile ? "button" : "body2" }, "LIVE"), /* @__PURE__ */ import_react72.default.createElement(Text, { variant: "caption" }, ((_a7 = hlsState == null ? void 0 : hlsState.variants) == null ? void 0 : _a7.length) > 0 ? formatTime(liveTime) : ""))
      );
    };
    RecordingStatus = () => {
      const { isBrowserRecordingOn, isServerRecordingOn, isHLSRecordingOn, isRecordingOn } = (0, import_react_sdk32.useRecordingStreaming)();
      const permissions = (0, import_react_sdk32.useHMSStore)(import_react_sdk32.selectPermissions);
      const isMobile = (0, import_react_use6.useMedia)(config.media.md);
      if (!isRecordingOn || // if only browser recording is enabled, stop recording is shown
        // so no need to show this as it duplicates
        [permissions == null ? void 0 : permissions.browserRecording, !isServerRecordingOn, !isHLSRecordingOn, isBrowserRecordingOn].every(
          (value) => !!value
        )) {
        if (!(isMobile && isRecordingOn))
          return null;
      }
      return /* @__PURE__ */ import_react72.default.createElement(
        Tooltip,
        {
          boxCss: { zIndex: 1 },
          title: getRecordingText({
            isBrowserRecordingOn,
            isServerRecordingOn,
            isHLSRecordingOn
          })
        },
        /* @__PURE__ */ import_react72.default.createElement(
          Flex,
          {
            css: {
              color: "$alert_error_default",
              alignItems: "center"
            }
          },
          /* @__PURE__ */ import_react72.default.createElement(import_react_icons29.RecordIcon, { width: 24, height: 24 })
        )
      );
    };
    StartRecording2 = () => {
      const permissions = (0, import_react_sdk32.useHMSStore)(import_react_sdk32.selectPermissions);
      const [open, setOpen] = (0, import_react72.useState)(false);
      const [recordingStarted, setRecordingState] = useSetAppDataByKey(APP_DATA.recordingStarted);
      const { isBrowserRecordingOn, isStreamingOn, isHLSRunning } = (0, import_react_sdk32.useRecordingStreaming)();
      const hmsActions = (0, import_react_sdk32.useHMSActions)();
      if (!(permissions == null ? void 0 : permissions.browserRecording) || isHLSRunning) {
        return null;
      }
      if (isBrowserRecordingOn) {
        return /* @__PURE__ */ import_react72.default.createElement(Popover2.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react72.default.createElement(Popover2.Trigger, { asChild: true }, /* @__PURE__ */ import_react72.default.createElement(Button, { variant: "danger", "data-testid": "stop_recording", icon: true, outlined: true, onClick: () => setOpen(true) }, /* @__PURE__ */ import_react72.default.createElement(import_react_icons29.RecordIcon, null), /* @__PURE__ */ import_react72.default.createElement(Text, { as: "span", css: { "@md": { display: "none" }, color: "currentColor" } }, "Stop Recording"))), /* @__PURE__ */ import_react72.default.createElement(Popover2.Portal, null, /* @__PURE__ */ import_react72.default.createElement(Popover2.Content, { align: "end", sideOffset: 8, css: { w: "$64" } }, /* @__PURE__ */ import_react72.default.createElement(Text, { variant: "body1", css: { color: "$on_surface_medium" } }, "Are you sure you want to end the recording?"), /* @__PURE__ */ import_react72.default.createElement(
          Button,
          {
            "data-testid": "stop_recording_confirm",
            variant: "danger",
            icon: true,
            css: { ml: "auto" },
            onClick: () => __async(void 0, null, function* () {
              try {
                yield hmsActions.stopRTMPAndRecording();
              } catch (error) {
                const err = error;
                ToastManager.addToast({
                  title: err.message,
                  variant: "error"
                });
              }
              setOpen(false);
            })
          },
          "Stop"
        ))));
      }
      return /* @__PURE__ */ import_react72.default.createElement(
        Button,
        {
          "data-testid": "start_recording",
          variant: "standard",
          icon: true,
          disabled: recordingStarted || isStreamingOn,
          onClick: () => __async(void 0, null, function* () {
            try {
              setRecordingState(true);
              yield hmsActions.startRTMPOrRecording({
                record: true
              });
            } catch (error) {
              const err = error;
              if (err.message.includes("stream already running")) {
                ToastManager.addToast({
                  title: "Recording already running",
                  variant: "error"
                });
              } else {
                ToastManager.addToast({
                  title: err.message,
                  variant: "error"
                });
              }
              setRecordingState(false);
            }
          })
        },
        recordingStarted ? /* @__PURE__ */ import_react72.default.createElement(Loading, { size: 24, color: "currentColor" }) : /* @__PURE__ */ import_react72.default.createElement(import_react_icons29.RecordIcon, null),
        /* @__PURE__ */ import_react72.default.createElement(Text, { as: "span", css: { "@md": { display: "none" }, color: "currentColor" } }, recordingStarted ? "Starting" : "Start", " Recording")
      );
    };
    StreamActions = () => {
      const isConnected = (0, import_react_sdk32.useHMSStore)(import_react_sdk32.selectIsConnectedToRoom);
      const isMobile = (0, import_react_use6.useMedia)(config.media.md);
      const roomState = (0, import_react_sdk32.useHMSStore)(import_react_sdk32.selectRoomState);
      return /* @__PURE__ */ import_react72.default.createElement(Flex, { align: "center", css: { gap: "$4" } }, /* @__PURE__ */ import_react72.default.createElement(AdditionalRoomState, null), !isMobile && /* @__PURE__ */ import_react72.default.createElement(Flex, { align: "center", css: { gap: "$4" } }, /* @__PURE__ */ import_react72.default.createElement(RecordingStatus, null), roomState !== import_react_sdk32.HMSRoomState.Preview ? /* @__PURE__ */ import_react72.default.createElement(LiveStatus, null) : null), isConnected && !isMobile ? /* @__PURE__ */ import_react72.default.createElement(StartRecording2, null) : null);
    };
    StopRecordingInSheet = ({
      onStopRecording,
      onClose
    }) => {
      return /* @__PURE__ */ import_react72.default.createElement(Sheet.Root, { open: true }, /* @__PURE__ */ import_react72.default.createElement(Sheet.Content, null, /* @__PURE__ */ import_react72.default.createElement(Sheet.Title, { css: { p: "$10" } }, /* @__PURE__ */ import_react72.default.createElement(Flex, { direction: "row", justify: "between", css: { w: "100%", c: "$alert_error_default" } }, /* @__PURE__ */ import_react72.default.createElement(Flex, { justify: "start", align: "center", gap: "3" }, /* @__PURE__ */ import_react72.default.createElement(import_react_icons29.AlertTriangleIcon, null), /* @__PURE__ */ import_react72.default.createElement(Text, { variant: "h5", css: { c: "$alert_error_default" } }, "Stop Recording")), /* @__PURE__ */ import_react72.default.createElement(Sheet.Close, { css: { color: "white" }, onClick: onClose }, /* @__PURE__ */ import_react72.default.createElement(import_react_icons29.CrossIcon, null)))), /* @__PURE__ */ import_react72.default.createElement(HorizontalDivider, null), /* @__PURE__ */ import_react72.default.createElement(Box, { as: "div", css: { p: "$10", overflowY: "scroll", maxHeight: "70vh" } }, /* @__PURE__ */ import_react72.default.createElement(Text, { variant: "caption", css: { c: "$on_surface_medium", pb: "$8" } }, "Are you sure you want to stop recording? You can\u2019t undo this action."), /* @__PURE__ */ import_react72.default.createElement(
        Button,
        {
          variant: "danger",
          css: { width: "100%" },
          type: "submit",
          "data-testid": "popup_change_btn",
          onClick: onStopRecording
        },
        "Stop"
      ))));
    };
  }
});

// src/Prebuilt/components/MoreSettings/ActionTile.jsx
var import_react73, ActionTileRoot, ActionTileCount, ActionTileTitle, ActionTile;
var init_ActionTile = __esm({
  "src/Prebuilt/components/MoreSettings/ActionTile.jsx"() {
    "use strict";
    init_define_process_env();
    import_react73 = __toESM(require("react"));
    init_Layout();
    init_Text2();
    init_Theme();
    ActionTileRoot = (_a7) => {
      var _b7 = _a7, { active, disabled = false, children, onClick } = _b7, props = __objRest(_b7, ["active", "disabled", "children", "onClick"]);
      return /* @__PURE__ */ import_react73.default.createElement(
        Flex,
        __spreadProps(__spreadValues({}, props), {
          css: {
            flexDirection: "column",
            alignItems: "center",
            p: "$4 $2",
            position: "relative",
            bg: active ? "$surface_bright" : "",
            color: disabled ? "$on_surface_low" : "$on_surface_high",
            gap: "$4",
            r: "$1",
            "&:hover": {
              bg: "$surface_bright"
            }
          },
          onClick: () => {
            if (!disabled) {
              onClick();
            }
          }
        }),
        children
      );
    };
    ActionTileCount = styled(Text, {
      position: "absolute",
      top: 0,
      right: 0,
      fontWeight: "$semiBold",
      color: "$on_surface_high",
      p: "$1 $2",
      minWidth: "$9",
      textAlign: "center",
      boxSizing: "border-box",
      bg: "$surface_bright",
      r: "$round",
      letterSpacing: "1.5px",
      fontSize: "$tiny !important",
      lineHeight: "$tiny !important"
    });
    ActionTileTitle = styled(Text, {
      fontWeight: "$semiBold",
      color: "inherit",
      textAlign: "center",
      fontSize: "$xs !important"
    });
    ActionTile = {
      Root: ActionTileRoot,
      Title: ActionTileTitle,
      Count: ActionTileCount
    };
  }
});

// src/Prebuilt/components/MoreSettings/ChangeNameContent.jsx
var import_react74, import_react_icons30, ChangeNameContent;
var init_ChangeNameContent = __esm({
  "src/Prebuilt/components/MoreSettings/ChangeNameContent.jsx"() {
    "use strict";
    init_define_process_env();
    import_react74 = __toESM(require("react"));
    import_react_icons30 = require("@100mslive/react-icons");
    init_Button2();
    init_Input2();
    init_Layout();
    init_Text2();
    ChangeNameContent = ({
      changeName,
      setCurrentName,
      currentName,
      localPeerName,
      isMobile,
      onExit,
      onBackClick
    }) => {
      return /* @__PURE__ */ import_react74.default.createElement(
        "form",
        {
          onSubmit: (e) => __async(void 0, null, function* () {
            e.preventDefault();
            yield changeName();
          })
        },
        /* @__PURE__ */ import_react74.default.createElement(
          Text,
          {
            variant: isMobile ? "md" : "lg",
            css: {
              color: "$on_surface_high",
              fontWeight: "$semiBold",
              display: "flex",
              pb: "$4",
              "@md": { px: "$8", borderBottom: "1px solid $border_default" }
            }
          },
          isMobile ? /* @__PURE__ */ import_react74.default.createElement(import_react_icons30.ChevronLeftIcon, { onClick: onBackClick, style: { marginRight: "0.5rem" } }) : null,
          "Change Name",
          /* @__PURE__ */ import_react74.default.createElement(
            Box,
            {
              css: { color: "inherit", ml: "auto", "&:hover": { color: "$on_surface_medium", cursor: "pointer" } },
              onClick: onExit
            },
            /* @__PURE__ */ import_react74.default.createElement(import_react_icons30.CrossIcon, null)
          )
        ),
        /* @__PURE__ */ import_react74.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium", pb: "$6", mb: "$8", "@md": { px: "$8", mt: "$4" } } }, "Your name will be visible to other participants in the session."),
        /* @__PURE__ */ import_react74.default.createElement(Flex, { justify: "center", align: "center", css: { my: "$8", w: "100%", "@md": { px: "$8" } } }, /* @__PURE__ */ import_react74.default.createElement(
          Input,
          {
            css: { width: "100%", bg: "$surface_default" },
            value: currentName,
            type: isMobile ? "search" : "text",
            onChange: (e) => {
              setCurrentName(e.target.value);
            },
            autoComplete: "name",
            required: true,
            "data-testid": "change_name_field",
            onKeyDown: (e) => __async(void 0, null, function* () {
              if (e.key === "Enter" && currentName.trim().length > 0 && currentName !== localPeerName) {
                e.preventDefault();
                if (isMobile) {
                  return;
                }
                changeName();
              }
            })
          }
        )),
        /* @__PURE__ */ import_react74.default.createElement(
          Flex,
          {
            justify: "between",
            align: "center",
            css: {
              width: "100%",
              gap: "$md",
              mt: "$10",
              "@md": { px: "$4" }
            }
          },
          isMobile ? null : /* @__PURE__ */ import_react74.default.createElement(
            Button,
            {
              variant: "standard",
              css: { w: "100%" },
              outlined: true,
              type: "submit",
              disabled: !localPeerName,
              onClick: onExit
            },
            "Cancel"
          ),
          /* @__PURE__ */ import_react74.default.createElement(
            Button,
            {
              variant: "primary",
              css: { width: "100%" },
              type: "submit",
              disabled: !currentName.trim() || currentName.trim() === localPeerName,
              "data-testid": "popup_change_btn"
            },
            "Change"
          )
        )
      );
    };
  }
});

// src/Prebuilt/components/MoreSettings/ChangeNameModal.jsx
var import_react75, import_react_use7, import_react_sdk33, ChangeNameModal;
var init_ChangeNameModal = __esm({
  "src/Prebuilt/components/MoreSettings/ChangeNameModal.jsx"() {
    "use strict";
    init_define_process_env();
    import_react75 = __toESM(require("react"));
    import_react_use7 = require("react-use");
    import_react_sdk33 = require("@100mslive/react-sdk");
    init_src();
    init_Sheet2();
    init_ToastManager();
    init_ChangeNameContent();
    init_useUserPreferences();
    ChangeNameModal = ({ onOpenChange, openParentSheet = null }) => {
      const [previewPreference, setPreviewPreference] = useUserPreferences(UserPreferencesKeys.PREVIEW);
      const hmsActions = (0, import_react_sdk33.useHMSActions)();
      const localPeerName = (0, import_react_sdk33.useHMSStore)(import_react_sdk33.selectLocalPeerName);
      const [currentName, setCurrentName] = (0, import_react75.useState)(localPeerName);
      const isMobile = (0, import_react_use7.useMedia)(config.media.md);
      const changeName = () => __async(void 0, null, function* () {
        const name = currentName.trim();
        if (!name || name === localPeerName) {
          return;
        }
        try {
          yield hmsActions.changeName(name);
          setPreviewPreference(__spreadProps(__spreadValues({}, previewPreference || {}), {
            name
          }));
        } catch (error) {
          console.error("failed to update name", error);
          ToastManager.addToast({ title: error.message });
        } finally {
          onOpenChange(false);
        }
      });
      const props = {
        changeName,
        setCurrentName,
        currentName,
        localPeerName,
        isMobile,
        onExit: () => onOpenChange(false),
        onBackClick: () => {
          onOpenChange(false);
          openParentSheet();
        }
      };
      if (isMobile) {
        return /* @__PURE__ */ import_react75.default.createElement(Sheet.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react75.default.createElement(Sheet.Content, { css: { bg: "$surface_dim", p: "$8 0" } }, /* @__PURE__ */ import_react75.default.createElement(ChangeNameContent, __spreadValues({}, props))));
      }
      return /* @__PURE__ */ import_react75.default.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react75.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react75.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react75.default.createElement(Dialog.Content, { css: { bg: "$surface_dim", width: "min(400px,80%)", p: "$10" } }, /* @__PURE__ */ import_react75.default.createElement(ChangeNameContent, __spreadValues({}, props)))));
    };
  }
});

// src/Prebuilt/components/MoreSettings/SplitComponents/MwebOptions.tsx
var import_react76, import_react_use8, import_react_sdk34, import_react_icons31, MODALS2, MwebOptions;
var init_MwebOptions = __esm({
  "src/Prebuilt/components/MoreSettings/SplitComponents/MwebOptions.tsx"() {
    "use strict";
    init_define_process_env();
    import_react76 = __toESM(require("react"));
    import_react_use8 = require("react-use");
    import_react_sdk34 = require("@100mslive/react-sdk");
    import_react_icons31 = require("@100mslive/react-icons");
    init_src();
    init_Sheet2();
    init_IconButton3();
    init_EmojiReaction();
    init_StreamActions();
    init_SettingsModal();
    init_ToastManager();
    init_ActionTile();
    init_ChangeNameModal();
    init_MuteAllModal();
    init_useSidepane();
    init_useUISettings();
    init_useDropdownList();
    init_useMetadata();
    init_utils2();
    init_constants();
    MODALS2 = {
      CHANGE_NAME: "changeName",
      SELF_ROLE_CHANGE: "selfRoleChange",
      MORE_SETTINGS: "moreSettings",
      START_RECORDING: "startRecording",
      DEVICE_SETTINGS: "deviceSettings",
      STATS_FOR_NERDS: "statsForNerds",
      BULK_ROLE_CHANGE: "bulkRoleChange",
      MUTE_ALL: "muteAll",
      EMBED_URL: "embedUrl"
    };
    MwebOptions = ({
      elements,
      screenType
    }) => {
      const hmsActions = (0, import_react_sdk34.useHMSActions)();
      const permissions = (0, import_react_sdk34.useHMSStore)(import_react_sdk34.selectPermissions);
      const isConnected = (0, import_react_sdk34.useHMSStore)(import_react_sdk34.selectIsConnectedToRoom);
      const { isBrowserRecordingOn, isStreamingOn, isHLSRunning } = (0, import_react_sdk34.useRecordingStreaming)();
      const [openModals, setOpenModals] = (0, import_react76.useState)(/* @__PURE__ */ new Set());
      const [openOptionsSheet, setOpenOptionsSheet] = (0, import_react76.useState)(false);
      const [openSettingsSheet, setOpenSettingsSheet] = (0, import_react76.useState)(false);
      const [showEmojiCard, setShowEmojiCard] = (0, import_react76.useState)(false);
      const [showRecordingOn, setShowRecordingOn] = (0, import_react76.useState)(false);
      const [isRecordingLoading, setIsRecordingLoading] = (0, import_react76.useState)(false);
      const toggleParticipants = useSidepaneToggle(SIDE_PANE_OPTIONS.PARTICIPANTS);
      const { showPolls } = useShowPolls();
      const togglePollView = usePollViewToggle();
      const peerCount = (0, import_react_sdk34.useHMSStore)(import_react_sdk34.selectPeerCount);
      const emojiCardRef = (0, import_react76.useRef)(null);
      const { isBRBOn, toggleBRB, isHandRaised, toggleHandRaise } = useMyMetadata();
      const { toggleAudio, toggleVideo } = (0, import_react_sdk34.useAVToggle)();
      const noAVPermissions = !(toggleAudio || toggleVideo);
      useDropdownList({ open: openModals.size > 0 || openOptionsSheet || openSettingsSheet, name: "MoreSettings" });
      const updateState = (modalName, value) => {
        setOpenModals((modals) => {
          const copy = new Set(modals);
          if (value) {
            copy.add(modalName);
          } else {
            copy.delete(modalName);
          }
          return copy;
        });
      };
      (0, import_react_use8.useClickAway)(emojiCardRef, () => setShowEmojiCard(false));
      return /* @__PURE__ */ import_react76.default.createElement(import_react76.default.Fragment, null, /* @__PURE__ */ import_react76.default.createElement(Sheet.Root, { open: openOptionsSheet, onOpenChange: setOpenOptionsSheet }, /* @__PURE__ */ import_react76.default.createElement(Tooltip, { title: "More options" }, /* @__PURE__ */ import_react76.default.createElement(Sheet.Trigger, { asChild: true, "data-testid": "more_settings_btn" }, /* @__PURE__ */ import_react76.default.createElement(IconButton_default, null, /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.DragHandleIcon, null)))), /* @__PURE__ */ import_react76.default.createElement(Sheet.Content, { css: { bg: "$surface_dim", pb: "$14" } }, /* @__PURE__ */ import_react76.default.createElement(
        Sheet.Title,
        {
          css: {
            display: "flex",
            color: "$on_surface_high",
            w: "100%",
            justifyContent: "space-between",
            fontSize: "$md",
            mt: "$8",
            px: "$10",
            pb: "$8",
            borderBottom: "1px solid $border_default",
            mb: "$8",
            alignItems: "center"
          }
        },
        "Options",
        /* @__PURE__ */ import_react76.default.createElement(Sheet.Close, null, /* @__PURE__ */ import_react76.default.createElement(Box, { css: { color: "$on_surface_high" } }, /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.CrossIcon, null)))
      ), /* @__PURE__ */ import_react76.default.createElement(
        Box,
        {
          css: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto",
            gridColumnGap: "$6",
            gridRowGap: "$8",
            px: "$9"
          }
        },
        (elements == null ? void 0 : elements.participant_list) && /* @__PURE__ */ import_react76.default.createElement(
          ActionTile.Root,
          {
            onClick: () => {
              toggleParticipants();
              setOpenOptionsSheet(false);
            }
          },
          /* @__PURE__ */ import_react76.default.createElement(ActionTile.Count, null, getFormattedCount(peerCount)),
          /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.PeopleIcon, null),
          /* @__PURE__ */ import_react76.default.createElement(ActionTile.Title, null, "Participants")
        ),
        !noAVPermissions ? /* @__PURE__ */ import_react76.default.createElement(
          ActionTile.Root,
          {
            active: isHandRaised,
            onClick: () => {
              toggleHandRaise();
              setOpenOptionsSheet(false);
            }
          },
          isHandRaised ? /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.HandRaiseSlashedIcon, null) : /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.HandIcon, null),
          /* @__PURE__ */ import_react76.default.createElement(ActionTile.Title, null, isHandRaised ? "Lower" : "Raise", " Hand")
        ) : null,
        (elements == null ? void 0 : elements.emoji_reactions) && /* @__PURE__ */ import_react76.default.createElement(
          ActionTile.Root,
          {
            onClick: () => {
              setShowEmojiCard(true);
              setOpenOptionsSheet(false);
            }
          },
          /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.EmojiIcon, null),
          /* @__PURE__ */ import_react76.default.createElement(ActionTile.Title, null, "Emoji Reactions")
        ),
        showPolls && /* @__PURE__ */ import_react76.default.createElement(
          ActionTile.Root,
          {
            onClick: () => {
              togglePollView();
              setOpenOptionsSheet(false);
            }
          },
          /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.QuizIcon, null),
          /* @__PURE__ */ import_react76.default.createElement(ActionTile.Title, null, "Polls and Quizzes")
        ),
        (elements == null ? void 0 : elements.brb) && /* @__PURE__ */ import_react76.default.createElement(
          ActionTile.Root,
          {
            active: isBRBOn,
            onClick: () => {
              toggleBRB();
              setOpenOptionsSheet(false);
            }
          },
          /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.BrbIcon, null),
          /* @__PURE__ */ import_react76.default.createElement(ActionTile.Title, null, "Be Right Back")
        ),
        /* @__PURE__ */ import_react76.default.createElement(
          ActionTile.Root,
          {
            onClick: () => {
              setOpenSettingsSheet(true);
              setOpenOptionsSheet(false);
            }
          },
          /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.SettingsIcon, null),
          /* @__PURE__ */ import_react76.default.createElement(ActionTile.Title, null, "Settings")
        ),
        isConnected && (permissions == null ? void 0 : permissions.browserRecording) ? /* @__PURE__ */ import_react76.default.createElement(
          ActionTile.Root,
          {
            disabled: isHLSRunning,
            onClick: () => __async(void 0, null, function* () {
              if (isRecordingLoading) {
                return;
              }
              if (isBrowserRecordingOn || isStreamingOn) {
                setOpenOptionsSheet(false);
                setShowRecordingOn(true);
              } else {
                setIsRecordingLoading(true);
                try {
                  yield hmsActions.startRTMPOrRecording({
                    record: true
                  });
                  setOpenOptionsSheet(false);
                  setIsRecordingLoading(false);
                } catch (error) {
                  if (error.message.includes("stream already running")) {
                    ToastManager.addToast({
                      title: "Recording already running",
                      variant: "error"
                    });
                  } else {
                    ToastManager.addToast({
                      // @ts-ignore
                      title: error.message,
                      variant: "error"
                    });
                  }
                  setIsRecordingLoading(false);
                }
              }
              if (isHLSRunning) {
                setOpenOptionsSheet(false);
              }
            })
          },
          isRecordingLoading ? /* @__PURE__ */ import_react76.default.createElement(Loading, null) : /* @__PURE__ */ import_react76.default.createElement(import_react_icons31.RecordIcon, null),
          /* @__PURE__ */ import_react76.default.createElement(ActionTile.Title, null, isBrowserRecordingOn ? "Recording On" : isRecordingLoading ? "Starting Recording" : "Start Recording")
        ) : null
      ))), /* @__PURE__ */ import_react76.default.createElement(SettingsModal_default, { open: openSettingsSheet, onOpenChange: setOpenSettingsSheet, screenType }), openModals.has(MODALS2.MUTE_ALL) && /* @__PURE__ */ import_react76.default.createElement(MuteAllModal, { onOpenChange: (value) => updateState(MODALS2.MUTE_ALL, value), isMobile: true }), openModals.has(MODALS2.CHANGE_NAME) && /* @__PURE__ */ import_react76.default.createElement(
        ChangeNameModal,
        {
          onOpenChange: (value) => updateState(MODALS2.CHANGE_NAME, value),
          openParentSheet: () => setOpenOptionsSheet(true)
        }
      ), showEmojiCard && /* @__PURE__ */ import_react76.default.createElement(
        Box,
        {
          ref: emojiCardRef,
          css: {
            maxWidth: "100%",
            w: "100%",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "$18",
            bg: "$surface_default",
            zIndex: "10",
            p: "$8",
            pb: 0,
            r: "$1",
            mx: "$4"
          }
        },
        /* @__PURE__ */ import_react76.default.createElement(EmojiReaction, null)
      ), showRecordingOn && /* @__PURE__ */ import_react76.default.createElement(
        StopRecordingInSheet,
        {
          onClose: () => setShowRecordingOn(false),
          onStopRecording: () => __async(void 0, null, function* () {
            try {
              yield hmsActions.stopRTMPAndRecording();
              setShowRecordingOn(false);
            } catch (error) {
              ToastManager.addToast({
                // @ts-ignore
                title: error.message,
                variant: "error"
              });
            }
          })
        }
      ));
    };
  }
});

// src/Prebuilt/components/MoreSettings/MoreSettings.tsx
var import_react77, import_react_use9, MoreSettings;
var init_MoreSettings = __esm({
  "src/Prebuilt/components/MoreSettings/MoreSettings.tsx"() {
    "use strict";
    init_define_process_env();
    import_react77 = __toESM(require("react"));
    import_react_use9 = require("react-use");
    init_DesktopOptions();
    init_MwebOptions();
    init_src();
    MoreSettings = ({
      elements,
      screenType
    }) => {
      const isMobile = (0, import_react_use9.useMedia)(config.media.md);
      return isMobile ? /* @__PURE__ */ import_react77.default.createElement(MwebOptions, { elements, screenType }) : /* @__PURE__ */ import_react77.default.createElement(DesktopOptions, { elements, screenType });
    };
  }
});

// src/Prebuilt/components/RaiseHand.jsx
var import_react78, import_react_icons32, RaiseHand;
var init_RaiseHand = __esm({
  "src/Prebuilt/components/RaiseHand.jsx"() {
    "use strict";
    init_define_process_env();
    import_react78 = __toESM(require("react"));
    import_react_icons32 = require("@100mslive/react-icons");
    init_Tooltip2();
    init_IconButton3();
    init_useMetadata();
    RaiseHand = () => {
      const { isHandRaised, toggleHandRaise } = useMyMetadata();
      return /* @__PURE__ */ import_react78.default.createElement(Tooltip, { title: isHandRaised ? "Lower hand" : "Raise hand" }, /* @__PURE__ */ import_react78.default.createElement(IconButton_default, {
        "data-testid": "hand_raise_btn", active: !isHandRaised, onClick: () => __async(void 0, null, function* () {
          return yield toggleHandRaise();
        })
      }, /* @__PURE__ */ import_react78.default.createElement(import_react_icons32.HandIcon, null)));
    };
  }
});

// src/Prebuilt/images/pdf-share.png
var pdf_share_default;
var init_pdf_share = __esm({
  "src/Prebuilt/images/pdf-share.png"() {
    pdf_share_default = "data:image/png;base64,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";
  }
});

// src/Prebuilt/images/screen-share.png
var screen_share_default;
var init_screen_share = __esm({
  "src/Prebuilt/images/screen-share.png"() {
    screen_share_default = "data:image/png;base64,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";
  }
});

// src/Prebuilt/components/ShareMenuIcon.jsx
var ScreenShareButton, ShareMenuIcon;
var init_ShareMenuIcon = __esm({
  "src/Prebuilt/components/ShareMenuIcon.jsx"() {
    "use strict";
    init_define_process_env();
    init_Theme();
    init_IconButton3();
    ScreenShareButton = styled(IconButton_default, {
      h: "$14",
      px: "$8",
      r: "$1",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      "@md": {
        px: "$4",
        mx: 0
      }
    });
    ShareMenuIcon = styled(ScreenShareButton, {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: "$1",
      borderBottomRightRadius: "$1",
      borderLeftWidth: 0,
      w: "$4",
      "@md": {
        w: "unset",
        px: "$2"
      }
    });
  }
});

// src/Prebuilt/components/pdfAnnotator/pdfHeader.jsx
var import_react79, PDFHeader;
var init_pdfHeader = __esm({
  "src/Prebuilt/components/pdfAnnotator/pdfHeader.jsx"() {
    "use strict";
    init_define_process_env();
    import_react79 = __toESM(require("react"));
    init_src();
    init_DialogContent2();
    PDFHeader = () => {
      return /* @__PURE__ */ import_react79.default.createElement(
        DialogCol,
        {
          align: "start",
          css: {
            mt: 0,
            mb: "$6"
          }
        },
        /* @__PURE__ */ import_react79.default.createElement(Dialog.Title, { asChild: true }, /* @__PURE__ */ import_react79.default.createElement(Text, { as: "h6", variant: "h6" }, "Share PDF")),
        /* @__PURE__ */ import_react79.default.createElement(Dialog.Description, { asChild: true }, /* @__PURE__ */ import_react79.default.createElement(
          Text,
          {
            variant: "sm",
            css: {
              c: "$on_surface_medium"
            }
          },
          "Choose PDF you want to annotate and share"
        ))
      );
    };
  }
});

// src/Prebuilt/components/pdfAnnotator/submitPdf.jsx
var import_react80, SubmitPDF;
var init_submitPdf = __esm({
  "src/Prebuilt/components/pdfAnnotator/submitPdf.jsx"() {
    "use strict";
    init_define_process_env();
    import_react80 = __toESM(require("react"));
    init_src();
    init_useUISettings();
    init_constants();
    SubmitPDF = ({ pdfFile, onOpenChange }) => {
      const [, setPDFConfig] = useSetAppDataByKey(APP_DATA.pdfConfig);
      return /* @__PURE__ */ import_react80.default.createElement(
        Flex,
        {
          direction: "row",
          css: {
            mb: "0",
            mt: "auto",
            gap: "$8"
          }
        },
        /* @__PURE__ */ import_react80.default.createElement(
          Button,
          {
            variant: "standard",
            outlined: true,
            type: "submit",
            onClick: () => {
              onOpenChange(false);
            },
            css: { w: "50%" }
          },
          "Cancel"
        ),
        /* @__PURE__ */ import_react80.default.createElement(
          Button,
          {
            variant: "primary",
            type: "submit",
            onClick: () => {
              if (pdfFile) {
                setPDFConfig(pdfFile);
                onOpenChange(false);
              }
            },
            disabled: !pdfFile,
            "data-testid": "share_pdf_btn",
            css: {
              w: "50%"
            }
          },
          "Start Sharing"
        )
      );
    };
  }
});

// src/Prebuilt/components/pdfAnnotator/pdfInfo.jsx
var import_react81, import_react_icons33, PDFInfo;
var init_pdfInfo = __esm({
  "src/Prebuilt/components/pdfAnnotator/pdfInfo.jsx"() {
    "use strict";
    init_define_process_env();
    import_react81 = __toESM(require("react"));
    import_react_icons33 = require("@100mslive/react-icons");
    init_src();
    init_DialogContent2();
    PDFInfo = () => {
      return /* @__PURE__ */ import_react81.default.createElement(
        DialogRow,
        {
          css: {
            px: "$8",
            py: "$3",
            bg: "$surface_default",
            r: "$1",
            outline: "none",
            border: "1px solid $border_bright",
            minHeight: "$11"
          }
        },
        /* @__PURE__ */ import_react81.default.createElement(
          import_react_icons33.InfoIcon,
          {
            width: "64px",
            height: "64px",
            style: {
              paddingRight: "16px"
            }
          }
        ),
        /* @__PURE__ */ import_react81.default.createElement(Text, { variant: "caption" }, "On the next screen, ensure you select \u201CThis Tab\u201D and click on share. Only the PDF viewer will be seen by other participants")
      );
    };
  }
});

// src/Prebuilt/components/pdfAnnotator/uploadedFile.jsx
var import_react82, import_react_icons34, UploadedFile;
var init_uploadedFile = __esm({
  "src/Prebuilt/components/pdfAnnotator/uploadedFile.jsx"() {
    "use strict";
    init_define_process_env();
    import_react82 = __toESM(require("react"));
    import_react_icons34 = require("@100mslive/react-icons");
    init_src();
    init_DialogContent2();
    init_pdfHeader();
    init_pdfInfo();
    init_submitPdf();
    UploadedFile = ({ pdfFile, setPDFFile, onOpenChange }) => {
      const [fileName, ext] = pdfFile.name.split(".");
      return /* @__PURE__ */ import_react82.default.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react82.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react82.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react82.default.createElement(
        Dialog.Content,
        {
          css: {
            w: "min(420px,80%)",
            overflow: "auto",
            p: "$10",
            bg: "$surface_dim"
          }
        },
        /* @__PURE__ */ import_react82.default.createElement(Flex, { direction: "column" }, /* @__PURE__ */ import_react82.default.createElement(PDFHeader, null), /* @__PURE__ */ import_react82.default.createElement(
          DialogRow,
          {
            css: {
              fontFamily: "$sans",
              bg: "$surface_bright",
              r: "$1",
              outline: "none",
              border: "1px solid $border_bright",
              p: "$4 $6",
              minHeight: "$11",
              c: "$on_primary_high",
              fs: "$md",
              w: "100%",
              "&:focus": {
                boxShadow: "0 0 0 1px $colors$primary_default",
                border: "1px solid $transparent"
              },
              mb: 0,
              mt: "$6"
            }
          },
          /* @__PURE__ */ import_react82.default.createElement(Flex, { direction: "row", css: { flexGrow: "1", maxWidth: "88%" } }, /* @__PURE__ */ import_react82.default.createElement(
            Text,
            {
              css: {
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }
            },
            fileName
          ), /* @__PURE__ */ import_react82.default.createElement(Text, { css: { whiteSpace: "nowrap" } }, ".", ext)),
          /* @__PURE__ */ import_react82.default.createElement(
            import_react_icons34.TrashIcon,
            {
              onClick: () => setPDFFile(null),
              style: {
                cursor: "pointer"
              }
            }
          )
        ), /* @__PURE__ */ import_react82.default.createElement(PDFInfo, null), /* @__PURE__ */ import_react82.default.createElement(SubmitPDF, { pdfFile, onOpenChange }))
      )));
    };
  }
});

// src/Prebuilt/components/pdfAnnotator/pdfFileOptions.jsx
function PDFFileOptions({ onOpenChange }) {
  const [pdfFile, setPDFFile] = (0, import_react83.useState)(null);
  return !pdfFile ? /* @__PURE__ */ import_react83.default.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ import_react83.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react83.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react83.default.createElement(
    Dialog.Content,
    {
      css: {
        w: "min(420px,80%)",
        overflow: "auto",
        p: "$10",
        bg: "$surface_dim"
      }
    },
    /* @__PURE__ */ import_react83.default.createElement(Flex, { direction: "column" }, /* @__PURE__ */ import_react83.default.createElement(PDFHeader, null), /* @__PURE__ */ import_react83.default.createElement(
      DialogInputFile,
      {
        onChange: (target) => {
          setPDFFile(target.files[0]);
        },
        placeholder: "Click to upload",
        type: "file",
        accept: ".pdf"
      }
    ), /* @__PURE__ */ import_react83.default.createElement(SubmitPDF, { pdfFile, onOpenChange }))
  ))) : /* @__PURE__ */ import_react83.default.createElement(UploadedFile, { pdfFile, setPDFFile, onOpenChange });
}
var import_react83;
var init_pdfFileOptions = __esm({
  "src/Prebuilt/components/pdfAnnotator/pdfFileOptions.jsx"() {
    "use strict";
    init_define_process_env();
    import_react83 = __toESM(require("react"));
    init_src();
    init_DialogContent2();
    init_pdfHeader();
    init_submitPdf();
    init_uploadedFile();
  }
});

// src/Prebuilt/components/pdfAnnotator/shareScreenOptions.jsx
function ShareScreenOptions() {
  const [openModals, setOpenModals] = (0, import_react84.useState)(/* @__PURE__ */ new Set());
  const { amIScreenSharing } = (0, import_react_sdk35.useScreenShare)();
  const updateState = (modalName, value) => {
    setOpenModals((modals) => {
      const copy = new Set(modals);
      if (value) {
        copy.add(modalName);
      } else {
        copy.delete(modalName);
      }
      return copy;
    });
  };
  const { toggleScreenShare } = (0, import_react_sdk35.useScreenShare)();
  return /* @__PURE__ */ import_react84.default.createElement(import_react84.Fragment, null, /* @__PURE__ */ import_react84.default.createElement(
    Dropdown.Root,
    {
      open: openModals.has(MODALS3.SHARE),
      onOpenChange: (value) => updateState(MODALS3.SHARE, value),
      modal: false
    },
    /* @__PURE__ */ import_react84.default.createElement(Dropdown.Trigger, { asChild: true, "data-testid": "sharing_btn", disabled: amIScreenSharing }, /* @__PURE__ */ import_react84.default.createElement(ShareMenuIcon, { disabled: amIScreenSharing }, /* @__PURE__ */ import_react84.default.createElement(Tooltip, { title: "Share" }, /* @__PURE__ */ import_react84.default.createElement(Box, null, /* @__PURE__ */ import_react84.default.createElement(import_react_icons35.VerticalMenuIcon, null))))),
    /* @__PURE__ */ import_react84.default.createElement(
      Dropdown.Content,
      {
        sideOffset: 5,
        css: {
          w: "$96",
          maxHeight: "$96",
          p: 0,
          bg: "$surface_dim"
        }
      },
      /* @__PURE__ */ import_react84.default.createElement(
        Dropdown.Item,
        {
          css: {
            flexDirection: "column",
            alignItems: "flex-start",
            px: "$10",
            pt: "$10",
            pb: "$6",
            "&:hover": {
              bg: "$transparent",
              cursor: "default"
            }
          }
        },
        /* @__PURE__ */ import_react84.default.createElement(Text, { variant: "h6" }, "Start Sharing"),
        /* @__PURE__ */ import_react84.default.createElement(Text, { variant: "sm" }, "Choose what you want to share")
      ),
      /* @__PURE__ */ import_react84.default.createElement(
        Dropdown.Item,
        {
          css: {
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "$8",
            px: "$10",
            pt: "$6",
            pb: "$10",
            "&:hover": {
              bg: "$transparent",
              cursor: "default"
            }
          }
        },
        /* @__PURE__ */ import_react84.default.createElement(
          Flex,
          {
            direction: "column",
            align: "center",
            css: {
              gap: "$6"
            }
          },
          /* @__PURE__ */ import_react84.default.createElement(
            IconButton,
            {
              as: "div",
              onClick: () => toggleScreenShare(),
              css: {
                p: "$6",
                display: "flex",
                justifyContent: "center",
                border: "1px solid $border_bright",
                r: "$2",
                bg: "$surface_brighter",
                pb: "0"
              }
            },
            /* @__PURE__ */ import_react84.default.createElement(
              "img",
              {
                src: screen_share_default,
                alt: "screen-share",
                width: "100%",
                height: "100%",
                style: {
                  borderTopLeftRadius: "0.5rem",
                  // TODO: create image component to solve for style hardcoding
                  borderTopRightRadius: "0.5rem"
                }
              }
            )
          ),
          /* @__PURE__ */ import_react84.default.createElement(Flex, { direction: "column", align: "center" }, /* @__PURE__ */ import_react84.default.createElement(Text, { variant: "body2" }, "Share Screen"), /* @__PURE__ */ import_react84.default.createElement(
            Text,
            {
              variant: "caption",
              css: {
                c: "$on_surface_low",
                textAlign: "center"
              }
            },
            "Share your tab, window or your entire screen"
          ))
        ),
        /* @__PURE__ */ import_react84.default.createElement(
          Flex,
          {
            direction: "column",
            align: "center",
            css: {
              gap: "$6"
            }
          },
          /* @__PURE__ */ import_react84.default.createElement(
            IconButton,
            {
              onClick: () => {
                updateState(MODALS3.PDF_SHARE, true);
              },
              disabled: amIScreenSharing,
              css: {
                p: "$6",
                display: "flex",
                justifyContent: "center",
                border: "$border_bright 1px solid",
                r: "$2",
                bg: "$surface_bright",
                pb: "0"
              }
            },
            /* @__PURE__ */ import_react84.default.createElement(
              "img",
              {
                src: pdf_share_default,
                alt: "pdf-share",
                width: "100%",
                height: "100%",
                style: {
                  borderTopLeftRadius: "0.5rem",
                  // TODO: create image component to solve for style hardcoding
                  borderTopRightRadius: "0.5rem"
                }
              }
            ),
            /* @__PURE__ */ import_react84.default.createElement(
              Flex,
              {
                direction: "row",
                align: "center",
                css: {
                  position: "absolute",
                  top: "35%",
                  left: "54%",
                  padding: "$2 $4",
                  r: "$2",
                  bg: "$primary_bright",
                  zIndex: "2",
                  gap: "$2"
                }
              },
              /* @__PURE__ */ import_react84.default.createElement(import_react_icons35.StarIcon, { height: 14, width: 14 }),
              /* @__PURE__ */ import_react84.default.createElement(
                Text,
                {
                  variant: "xs",
                  css: {
                    fontWeight: "$semiBold",
                    c: "$on_primary_high",
                    pr: "$4"
                  }
                },
                "New"
              )
            )
          ),
          /* @__PURE__ */ import_react84.default.createElement(Flex, { direction: "column", align: "center" }, /* @__PURE__ */ import_react84.default.createElement(Text, { variant: "body2" }, "Share PDF"), /* @__PURE__ */ import_react84.default.createElement(
            Text,
            {
              variant: "caption",
              css: {
                c: "$on_surface_low",
                textAlign: "center"
              }
            },
            "Annotate, draw shapes, and more over PDFs"
          ))
        )
      )
    )
  ), openModals.has(MODALS3.PDF_SHARE) && /* @__PURE__ */ import_react84.default.createElement(PDFFileOptions, { onOpenChange: (value) => updateState(MODALS3.PDF_SHARE, value) }));
}
var import_react84, import_react_sdk35, import_react_icons35, MODALS3;
var init_shareScreenOptions = __esm({
  "src/Prebuilt/components/pdfAnnotator/shareScreenOptions.jsx"() {
    "use strict";
    init_define_process_env();
    import_react84 = __toESM(require("react"));
    import_react_sdk35 = require("@100mslive/react-sdk");
    import_react_icons35 = require("@100mslive/react-icons");
    init_pdf_share();
    init_screen_share();
    init_src();
    init_ShareMenuIcon();
    init_pdfFileOptions();
    MODALS3 = {
      SHARE: "share",
      SCREEN_SHARE: "screenShare",
      PDF_SHARE: "pdfShare"
    };
  }
});

// src/Prebuilt/components/ScreenShareToggle.jsx
var import_react85, import_react_sdk36, import_react_icons36, ScreenshareToggle;
var init_ScreenShareToggle = __esm({
  "src/Prebuilt/components/ScreenShareToggle.jsx"() {
    "use strict";
    init_define_process_env();
    import_react85 = __toESM(require("react"));
    import_react_sdk36 = require("@100mslive/react-sdk");
    import_react_icons36 = require("@100mslive/react-icons");
    init_shareScreenOptions();
    init_Layout();
    init_Tooltip2();
    init_ShareMenuIcon();
    init_useUISettings();
    init_utils2();
    init_constants();
    ScreenshareToggle = ({ css: css2 = {} }) => {
      const isAllowedToPublish = (0, import_react_sdk36.useHMSStore)(import_react_sdk36.selectIsAllowedToPublish);
      const isAudioOnly = useUISettings(UI_SETTINGS.isAudioOnly);
      const { amIScreenSharing, screenShareVideoTrackId: video, toggleScreenShare } = (0, import_react_sdk36.useScreenShare)();
      const isVideoScreenshare = amIScreenSharing && !!video;
      if (!isAllowedToPublish.screen || !isScreenshareSupported()) {
        return null;
      }
      return /* @__PURE__ */ import_react85.default.createElement(import_react85.Fragment, null, /* @__PURE__ */ import_react85.default.createElement(Flex, { direction: "row", css: { "@md": { display: "none" } } }, /* @__PURE__ */ import_react85.default.createElement(
        ScreenShareButton,
        {
          variant: "standard",
          key: "ShareScreen",
          active: !isVideoScreenshare,
          css: css2,
          disabled: isAudioOnly,
          onClick: () => {
            toggleScreenShare();
          }
        },
        /* @__PURE__ */ import_react85.default.createElement(Tooltip, { title: `${!isVideoScreenshare ? "Start" : "Stop"} screen sharing` }, /* @__PURE__ */ import_react85.default.createElement(Box, null, /* @__PURE__ */ import_react85.default.createElement(import_react_icons36.ShareScreenIcon, null)))
      ), /* @__PURE__ */ import_react85.default.createElement(ShareScreenOptions, null)));
    };
  }
});

// src/Prebuilt/components/VirtualBackground/VBToggle.jsx
var import_react86, import_react_sdk37, import_react_icons37, VBToggle;
var init_VBToggle = __esm({
  "src/Prebuilt/components/VirtualBackground/VBToggle.jsx"() {
    "use strict";
    init_define_process_env();
    import_react86 = __toESM(require("react"));
    import_react_sdk37 = require("@100mslive/react-sdk");
    import_react_icons37 = require("@100mslive/react-icons");
    init_Tooltip2();
    init_IconButton3();
    init_useSidepane();
    init_constants();
    VBToggle = () => {
      const toggleVB = useSidepaneToggle(SIDE_PANE_OPTIONS.VB);
      const isVBOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.VB);
      const isVideoOn = (0, import_react_sdk37.useHMSStore)(import_react_sdk37.selectIsLocalVideoEnabled);
      if (!isVideoOn || isSafari) {
        return null;
      }
      return /* @__PURE__ */ import_react86.default.createElement(Tooltip, { side: "top", disabled: isVBOpen, title: "Configure Virtual Background" }, /* @__PURE__ */ import_react86.default.createElement(IconButton_default, { active: !isVBOpen, onClick: toggleVB }, /* @__PURE__ */ import_react86.default.createElement(import_react_icons37.VirtualBackgroundIcon, null)));
    };
  }
});

// src/Prebuilt/components/Footer/ChatToggle.tsx
var import_react87, import_react_sdk38, import_react_icons38, ChatToggle;
var init_ChatToggle = __esm({
  "src/Prebuilt/components/Footer/ChatToggle.tsx"() {
    "use strict";
    init_define_process_env();
    import_react87 = __toESM(require("react"));
    import_react_sdk38 = require("@100mslive/react-sdk");
    import_react_icons38 = require("@100mslive/react-icons");
    init_src();
    init_IconButton3();
    init_useSidepane();
    init_constants();
    ChatToggle = () => {
      const countUnreadMessages = (0, import_react_sdk38.useHMSStore)(import_react_sdk38.selectUnreadHMSMessagesCount);
      const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
      const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
      return /* @__PURE__ */ import_react87.default.createElement(Tooltip, { key: "chat", title: `${isChatOpen ? "Close" : "Open"} chat` }, /* @__PURE__ */ import_react87.default.createElement(IconButton_default, { onClick: toggleChat, active: !isChatOpen, "data-testid": "chat_btn" }, countUnreadMessages === 0 ? /* @__PURE__ */ import_react87.default.createElement(import_react_icons38.ChatIcon, null) : /* @__PURE__ */ import_react87.default.createElement(import_react_icons38.ChatUnreadIcon, { "data-testid": "chat_unread_btn" })));
    };
  }
});

// src/Prebuilt/components/Connection/connectionQualityUtils.js
var connectionTooltip, getTooltipText, getColor;
var init_connectionQualityUtils = __esm({
  "src/Prebuilt/components/Connection/connectionQualityUtils.js"() {
    "use strict";
    init_define_process_env();
    connectionTooltip = {
      0: "Reconnecting",
      1: "Very Bad Connection",
      2: "Bad Connection",
      3: "Moderate Connection",
      4: "Good Connection",
      5: "Excellent Connection"
    };
    connectionTooltip[-1] = "Network Unknown";
    getTooltipText = (connectionScore) => {
      return connectionTooltip[connectionScore];
    };
    getColor = (position, connectionScore, defaultColor, theme2) => {
      const shouldBeColored = position <= connectionScore;
      if (!shouldBeColored) {
        return defaultColor;
      }
      if (connectionScore >= 4) {
        return theme2.colors.alert_success;
      } else if (connectionScore >= 3) {
        return theme2.colors.alert_warning;
      } else if (connectionScore >= 1) {
        return theme2.colors.alert_default;
      }
      return defaultColor;
    };
  }
});

// src/Prebuilt/components/Connection/ConnectionIndicator.tsx
var import_react88, import_react_sdk39, import_react_icons39, Wrapper, ConnectionIndicator;
var init_ConnectionIndicator = __esm({
  "src/Prebuilt/components/Connection/ConnectionIndicator.tsx"() {
    "use strict";
    init_define_process_env();
    import_react88 = __toESM(require("react"));
    import_react_sdk39 = require("@100mslive/react-sdk");
    import_react_icons39 = require("@100mslive/react-icons");
    init_src();
    init_connectionQualityUtils();
    Wrapper = styled("span", {
      width: "28px",
      height: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "$round",
      variants: {
        isTile: {
          true: {
            width: "unset",
            height: "unset"
          }
        }
      }
    });
    ConnectionIndicator = ({
      peerId,
      isTile = false,
      hideBg = false
    }) => {
      var _a7;
      const downlinkQuality = (_a7 = (0, import_react_sdk39.useHMSStore)((0, import_react_sdk39.selectConnectionQualityByPeerID)(peerId))) == null ? void 0 : _a7.downlinkQuality;
      const { theme: theme2 } = useTheme();
      const defaultColor = theme2.colors.surface_brighter;
      if (downlinkQuality === -1 || downlinkQuality === void 0) {
        return null;
      }
      if (downlinkQuality === 0) {
        return /* @__PURE__ */ import_react88.default.createElement(Tooltip, { side: "left", title: getTooltipText(downlinkQuality) }, /* @__PURE__ */ import_react88.default.createElement(Wrapper, { isTile, css: { color: "#ED4C5A" }, "data-testid": "tile_network" }, /* @__PURE__ */ import_react88.default.createElement(import_react_icons39.PoorConnectivityIcon, null)));
      }
      const size = isTile ? 12 : 16;
      return /* @__PURE__ */ import_react88.default.createElement(Tooltip, { side: "left", title: getTooltipText(downlinkQuality) }, /* @__PURE__ */ import_react88.default.createElement(Wrapper, { isTile, "data-testid": "tile_network", css: { backgroundColor: hideBg ? "" : "$surface_bright" } }, /* @__PURE__ */ import_react88.default.createElement(
        "svg",
        {
          width: size,
          height: size,
          viewBox: "0 0 14 12",
          xmlns: "http://www.w3.org/2000/svg",
          xmlSpace: "preserve",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
          }
        },
        /* @__PURE__ */ import_react88.default.createElement(
          "path",
          {
            d: "M6.875 0c2.549.035 4.679.902 6.445 2.648.366.362.45.796.216 1.096-.239.306-.714.34-1.142.072a2.28 2.28 0 0 1-.341-.271C9.24.862 4.924.775 1.992 3.346c-.284.249-.594.419-.983.393-.272-.019-.49-.135-.613-.388-.125-.261-.05-.498.114-.713.073-.092.156-.177.245-.254C2.516.804 4.591.039 6.875 0Z",
            fill: getColor(4, downlinkQuality, defaultColor, theme2),
            transform: "translate(-.333)"
          }
        ),
        /* @__PURE__ */ import_react88.default.createElement(
          "path",
          {
            d: "M7.056 2.964c1.756.035 3.208.7 4.499 1.763.162.134.277.315.354.512.098.251.114.503-.075.72-.193.222-.452.259-.725.198-.293-.066-.518-.247-.738-.443a4.859 4.859 0 0 0-6.198-.26c-.166.127-.318.271-.475.409-.242.211-.513.343-.843.317-.43-.034-.679-.397-.561-.81.062-.211.181-.4.345-.546 1.265-1.162 2.733-1.836 4.417-1.86Z",
            fill: getColor(3, downlinkQuality, defaultColor, theme2),
            transform: "translate(-.333)"
          }
        ),
        /* @__PURE__ */ import_react88.default.createElement(
          "path",
          {
            d: "M7.384,6.052C8.293,6.068 9.157,6.449 9.783,7.108C10.005,7.339 10.157,7.6 10.07,7.942C9.959,8.377 9.435,8.581 9.071,8.243C7.935,7.191 6.356,7.183 5.152,8.183C4.816,8.462 4.6,8.485 4.332,8.27C4.063,8.055 3.998,7.691 4.177,7.358C4.273,7.179 4.414,7.038 4.57,6.911C5.26,6.349 6.149,6.05 7.384,6.052L7.384,6.052Z",
            fill: getColor(2, downlinkQuality, defaultColor, theme2)
          }
        ),
        /* @__PURE__ */ import_react88.default.createElement(
          "path",
          {
            d: "M8.214,9.941C8.214,10.234 8.097,10.515 7.888,10.721C7.68,10.928 7.398,11.042 7.104,11.039C6.471,11.036 5.982,10.541 5.993,9.912C6.004,9.259 6.499,8.766 7.133,8.779C7.744,8.791 8.22,9.301 8.214,9.941Z",
            fill: getColor(1, downlinkQuality, defaultColor, theme2)
          }
        )
      )));
    };
  }
});

// src/Prebuilt/components/Footer/RoleOptions.tsx
var import_react89, import_react_sdk40, import_react_icons40, dropdownItemCSS, optionTextCSS, RoleOptions;
var init_RoleOptions = __esm({
  "src/Prebuilt/components/Footer/RoleOptions.tsx"() {
    "use strict";
    init_define_process_env();
    import_react89 = __toESM(require("react"));
    import_react_sdk40 = require("@100mslive/react-sdk");
    import_react_icons40 = require("@100mslive/react-icons");
    init_Dropdown2();
    init_Layout();
    init_Text2();
    init_useRoomLayoutScreen();
    init_utils2();
    dropdownItemCSS = { backgroundColor: "$surface_default", gap: "$4", p: "$8" };
    optionTextCSS = { fontWeight: "$semiBold", color: "$on_surface_high", textTransform: "none" };
    RoleOptions = ({ roleName, peerList }) => {
      const [openOptions, setOpenOptions] = (0, import_react89.useState)(false);
      const permissions = (0, import_react_sdk40.useHMSStore)(import_react_sdk40.selectPermissions);
      const hmsActions = (0, import_react_sdk40.useHMSActions)();
      const { elements } = useRoomLayoutConferencingScreen();
      const { on_stage_role, off_stage_roles = [] } = (elements == null ? void 0 : elements.on_stage_exp) || {};
      const vanillaStore = (0, import_react_sdk40.useHMSVanillaStore)();
      const store = vanillaStore.getState();
      let allPeersHaveVideoOn = true;
      let allPeersHaveAudioOn = true;
      peerList.forEach((peer) => {
        var _a7, _b7;
        const isAudioOn = !!peer.audioTrack && ((_a7 = store.tracks[peer.audioTrack]) == null ? void 0 : _a7.enabled);
        const isVideoOn = !!peer.videoTrack && ((_b7 = store.tracks[peer.videoTrack]) == null ? void 0 : _b7.enabled);
        allPeersHaveAudioOn = allPeersHaveAudioOn && isAudioOn;
        allPeersHaveVideoOn = allPeersHaveVideoOn && isVideoOn;
      });
      const canMuteRole = (permissions == null ? void 0 : permissions.mute) && roleName === on_stage_role;
      const canRemoveRoleFromStage = (permissions == null ? void 0 : permissions.changeRole) && roleName === on_stage_role;
      const canRemoveRoleFromRoom = (permissions == null ? void 0 : permissions.removeOthers) && (on_stage_role === roleName || (off_stage_roles == null ? void 0 : off_stage_roles.includes(roleName)));
      if (!(canMuteRole || canRemoveRoleFromStage || canRemoveRoleFromRoom) || peerList.length === 0) {
        return null;
      }
      const removeAllFromStage = () => {
        peerList.forEach((peer) => {
          const prevRole = getMetadata(peer.metadata).prevRole;
          if (prevRole) {
            hmsActions.changeRoleOfPeer(peer.id, prevRole, true);
          }
        });
      };
      const setTrackEnabled = (type, enabled = false) => __async(void 0, null, function* () {
        try {
          yield hmsActions.setRemoteTracksEnabled({ roles: [roleName], source: "regular", type, enabled });
        } catch (e) {
          console.error(e);
        }
      });
      const removePeersFromRoom = () => __async(void 0, null, function* () {
        try {
          peerList.forEach((peer) => __async(void 0, null, function* () {
            yield hmsActions.removePeer(peer.id, "");
          }));
        } catch (e) {
          console.error(e);
        }
      });
      return /* @__PURE__ */ import_react89.default.createElement(Dropdown.Root, { open: openOptions, onOpenChange: setOpenOptions }, /* @__PURE__ */ import_react89.default.createElement(
        Dropdown.Trigger,
        {
          onClick: (e) => e.stopPropagation(),
          className: "role_actions",
          asChild: true,
          css: {
            p: "$1",
            r: "$0",
            c: "$on_surface_high",
            visibility: openOptions ? "visible" : "hidden",
            "&:hover": {
              c: "$on_surface_medium"
            },
            "@md": {
              visibility: "visible"
            }
          }
        },
        /* @__PURE__ */ import_react89.default.createElement(Flex, null, /* @__PURE__ */ import_react89.default.createElement(import_react_icons40.VerticalMenuIcon, null))
      ), /* @__PURE__ */ import_react89.default.createElement(
        Dropdown.Content,
        {
          onClick: (e) => e.stopPropagation(),
          css: { w: "max-content", maxWidth: "$64", bg: "$surface_default", py: 0 },
          align: "end"
        },
        canRemoveRoleFromStage && /* @__PURE__ */ import_react89.default.createElement(
          Dropdown.Item,
          {
            css: __spreadProps(__spreadValues({}, dropdownItemCSS), { borderBottom: "1px solid $border_bright" }),
            onClick: removeAllFromStage
          },
          /* @__PURE__ */ import_react89.default.createElement(import_react_icons40.PersonRectangleIcon, null),
          /* @__PURE__ */ import_react89.default.createElement(Text, { variant: "sm", css: optionTextCSS }, "Remove all from Stage")
        ),
        canMuteRole && /* @__PURE__ */ import_react89.default.createElement(import_react89.default.Fragment, null, /* @__PURE__ */ import_react89.default.createElement(Dropdown.Item, { css: dropdownItemCSS, onClick: () => setTrackEnabled("audio", !allPeersHaveAudioOn) }, allPeersHaveAudioOn ? /* @__PURE__ */ import_react89.default.createElement(import_react_icons40.MicOffIcon, null) : /* @__PURE__ */ import_react89.default.createElement(import_react_icons40.MicOnIcon, null), /* @__PURE__ */ import_react89.default.createElement(Text, { variant: "sm", css: optionTextCSS }, allPeersHaveAudioOn ? "Mute" : "Unmute", " Audio")), /* @__PURE__ */ import_react89.default.createElement(
          Dropdown.Item,
          {
            css: __spreadProps(__spreadValues({}, dropdownItemCSS), { borderTop: "1px solid $border_bright" }),
            onClick: () => setTrackEnabled("video", !allPeersHaveVideoOn)
          },
          allPeersHaveVideoOn ? /* @__PURE__ */ import_react89.default.createElement(import_react_icons40.VideoOffIcon, null) : /* @__PURE__ */ import_react89.default.createElement(import_react_icons40.VideoOnIcon, null),
          /* @__PURE__ */ import_react89.default.createElement(Text, { variant: "sm", css: optionTextCSS }, allPeersHaveVideoOn ? "Mute" : "Unmute", " Video")
        )),
        canRemoveRoleFromRoom && /* @__PURE__ */ import_react89.default.createElement(
          Dropdown.Item,
          {
            css: __spreadProps(__spreadValues({}, dropdownItemCSS), { borderTop: "1px solid $border_bright", color: "$alert_error_default" }),
            onClick: removePeersFromRoom
          },
          /* @__PURE__ */ import_react89.default.createElement(import_react_icons40.RemoveUserIcon, null),
          /* @__PURE__ */ import_react89.default.createElement(Text, { variant: "sm", css: __spreadProps(__spreadValues({}, optionTextCSS), { color: "inherit" }) }, "Remove all from Room")
        )
      ));
    };
  }
});

// src/Prebuilt/components/Footer/RoleAccordion.tsx
function itemKey(index, data3) {
  var _a7;
  return (_a7 = data3.peerList[index]) == null ? void 0 : _a7.id;
}
var import_react90, import_react_use10, import_react_window, import_react_sdk41, import_react_icons41, ROW_HEIGHT, ITER_TIMER, VirtualizedParticipantItem, RoleAccordion;
var init_RoleAccordion = __esm({
  "src/Prebuilt/components/Footer/RoleAccordion.tsx"() {
    "use strict";
    init_define_process_env();
    import_react90 = __toESM(require("react"));
    import_react_use10 = require("react-use");
    import_react_window = require("react-window");
    import_react_sdk41 = require("@100mslive/react-sdk");
    import_react_icons41 = require("@100mslive/react-icons");
    init_Accordion2();
    init_Layout();
    init_Text2();
    init_ParticipantList();
    init_RoleOptions();
    init_utils2();
    ROW_HEIGHT = 50;
    ITER_TIMER = 5e3;
    VirtualizedParticipantItem = import_react90.default.memo(({ index, data: data3 }) => {
      return /* @__PURE__ */ import_react90.default.createElement(Participant, { key: data3.peerList[index].id, peer: data3.peerList[index], isConnected: data3.isConnected });
    });
    RoleAccordion = ({
      peerList = [],
      roleName,
      isConnected,
      filter,
      isHandRaisedAccordion = false,
      offStageRoles,
      onActive
    }) => {
      const [ref, { width }] = (0, import_react_use10.useMeasure)();
      const showAcordion = (filter == null ? void 0 : filter.search) ? peerList.some((peer) => peer.name.toLowerCase().includes(filter.search)) : true;
      const isLargeRoom = (0, import_react_sdk41.useHMSStore)(import_react_sdk41.selectIsLargeRoom);
      const { peers, total, loadPeers } = (0, import_react_sdk41.usePaginatedParticipants)({ role: roleName, limit: 10 });
      const isOffStageRole = roleName && offStageRoles.includes(roleName);
      (0, import_react90.useEffect)(() => {
        if (!isOffStageRole || !isLargeRoom) {
          return;
        }
        loadPeers();
        const interval = setInterval(() => {
          loadPeers();
        }, ITER_TIMER);
        return () => clearInterval(interval);
      }, [isOffStageRole, isLargeRoom]);
      if (!showAcordion || isHandRaisedAccordion && (filter == null ? void 0 : filter.search) || peerList.length === 0 && (filter == null ? void 0 : filter.search)) {
        return null;
      }
      const peersInAccordion = isOffStageRole && isLargeRoom ? peers : peerList;
      const height = ROW_HEIGHT * peersInAccordion.length;
      const hasNext = total > peersInAccordion.length;
      if (peersInAccordion.length === 0) {
        return null;
      }
      return /* @__PURE__ */ import_react90.default.createElement(Accordion.Item, { value: roleName, css: { "&:hover .role_actions": { visibility: "visible" }, mb: "$8" }, ref }, /* @__PURE__ */ import_react90.default.createElement(
        Accordion.Header,
        {
          iconStyles: { c: "$on_surface_high" },
          css: {
            textTransform: "capitalize",
            p: "$6 $8",
            fontSize: "$sm",
            fontWeight: "$semiBold",
            c: "$on_surface_medium",
            borderRadius: "$1",
            border: "1px solid $border_default",
            '&[data-state="open"]': {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }
          }
        },
        /* @__PURE__ */ import_react90.default.createElement(Flex, { justify: "between", css: { flexGrow: 1, pr: "$6" } }, /* @__PURE__ */ import_react90.default.createElement(
          Text,
          {
            variant: "sm",
            css: { fontWeight: "$semiBold", textTransform: "capitalize", color: "$on_surface_medium" }
          },
          roleName,
          " ",
          `(${getFormattedCount(isLargeRoom && isOffStageRole ? total : peerList.length)})`
        ), /* @__PURE__ */ import_react90.default.createElement(RoleOptions, { roleName, peerList: peersInAccordion }))
      ), /* @__PURE__ */ import_react90.default.createElement(Accordion.Content, { contentStyles: { border: "1px solid $border_default", borderTop: "none" } }, /* @__PURE__ */ import_react90.default.createElement(
        import_react_window.FixedSizeList,
        {
          itemSize: ROW_HEIGHT,
          itemData: { peerList: peersInAccordion, isConnected },
          itemKey,
          itemCount: peersInAccordion.length,
          width,
          height
        },
        VirtualizedParticipantItem
      ), (offStageRoles == null ? void 0 : offStageRoles.includes(roleName)) && hasNext ? /* @__PURE__ */ import_react90.default.createElement(
        Flex,
        {
          align: "center",
          justify: "end",
          css: {
            gap: "$1",
            cursor: "pointer",
            color: "$on_surface_high",
            p: "$6",
            borderTop: "1px solid $border_default"
          },
          onClick: () => onActive == null ? void 0 : onActive(roleName)
        },
        /* @__PURE__ */ import_react90.default.createElement(Text, { variant: "sm", css: { color: "inherit" } }, "View All"),
        /* @__PURE__ */ import_react90.default.createElement(import_react_icons41.ChevronRightIcon, null)
      ) : null));
    };
  }
});

// src/Prebuilt/components/Footer/ParticipantList.jsx
var import_react91, import_react_use11, import_react_sdk42, import_react_icons42, ParticipantList, ParticipantCount, VirtualizedParticipants, Participant, ParticipantActions, ParticipantMoreActions, ParticipantSearch;
var init_ParticipantList = __esm({
  "src/Prebuilt/components/Footer/ParticipantList.jsx"() {
    "use strict";
    init_define_process_env();
    import_react91 = __toESM(require("react"));
    import_react_use11 = require("react-use");
    import_react_sdk42 = require("@100mslive/react-sdk");
    import_react_icons42 = require("@100mslive/react-icons");
    init_src();
    init_IconButton3();
    init_ConnectionIndicator();
    init_ToastManager();
    init_RoleAccordion();
    init_useRoomLayoutScreen();
    init_useSidepane();
    init_hooks();
    init_utils2();
    init_constants();
    ParticipantList = ({ offStageRoles = [], onActive }) => {
      const [filter, setFilter] = (0, import_react91.useState)();
      const { participants, isConnected, peerCount } = useParticipants(filter);
      const isLargeRoom = (0, import_react_sdk42.useHMSStore)(import_react_sdk42.selectIsLargeRoom);
      const peersOrderedByRoles = {};
      const handRaisedPeers = (0, import_react_sdk42.useHMSStore)(import_react_sdk42.selectHandRaisedPeers);
      participants.forEach((participant) => {
        if (peersOrderedByRoles[participant.roleName] === void 0) {
          peersOrderedByRoles[participant.roleName] = [];
        }
        peersOrderedByRoles[participant.roleName].push(participant);
      });
      if (isLargeRoom) {
        offStageRoles.forEach((role) => {
          if (!peersOrderedByRoles[role]) {
            peersOrderedByRoles[role] = [];
          }
        });
      }
      const onSearch = (0, import_react91.useCallback)((value) => {
        setFilter((filterValue) => {
          if (!filterValue) {
            filterValue = {};
          }
          filterValue.search = value.toLowerCase();
          return __spreadValues({}, filterValue);
        });
      }, []);
      if (peerCount === 0) {
        return null;
      }
      return /* @__PURE__ */ import_react91.default.createElement(import_react91.Fragment, null, /* @__PURE__ */ import_react91.default.createElement(Flex, { direction: "column", css: { size: "100%", gap: "$4" } }, !(filter == null ? void 0 : filter.search) && participants.length === 0 ? null : /* @__PURE__ */ import_react91.default.createElement(ParticipantSearch, { onSearch, inSidePane: true }), participants.length === 0 ? /* @__PURE__ */ import_react91.default.createElement(Flex, { align: "center", justify: "center", css: { w: "100%", p: "$8 0" } }, /* @__PURE__ */ import_react91.default.createElement(Text, { variant: "sm" }, !filter ? "No participants" : "No matching participants")) : null, /* @__PURE__ */ import_react91.default.createElement(
        VirtualizedParticipants,
        {
          peersOrderedByRoles,
          handRaisedList: handRaisedPeers,
          isConnected,
          filter,
          offStageRoles,
          isLargeRoom,
          onActive
        }
      )));
    };
    ParticipantCount = () => {
      const peerCount = (0, import_react_sdk42.useHMSStore)(import_react_sdk42.selectPeerCount);
      const toggleSidepane = useSidepaneToggle(SIDE_PANE_OPTIONS.PARTICIPANTS);
      const isParticipantsOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.PARTICIPANTS);
      if (peerCount === 0) {
        return null;
      }
      return /* @__PURE__ */ import_react91.default.createElement(
        IconButton_default,
        {
          css: {
            w: "auto",
            p: "$4",
            h: "auto"
          },
          onClick: () => {
            if (peerCount > 0) {
              toggleSidepane();
            }
          },
          active: !isParticipantsOpen,
          "data-testid": "participant_list"
        },
        /* @__PURE__ */ import_react91.default.createElement(import_react_icons42.PeopleIcon, null),
        /* @__PURE__ */ import_react91.default.createElement(Text, { variant: "sm", css: { mx: "$4", c: "inherit" } }, getFormattedCount(peerCount))
      );
    };
    VirtualizedParticipants = ({
      peersOrderedByRoles = {},
      isConnected,
      filter,
      handRaisedList = [],
      offStageRoles,
      isLargeRoom,
      onActive
    }) => {
      return /* @__PURE__ */ import_react91.default.createElement(
        Flex,
        {
          direction: "column",
          css: {
            gap: "$8",
            overflowY: "auto",
            overflowX: "hidden",
            pr: "$10",
            mr: "-$10",
            flex: "1 1 0"
          }
        },
        /* @__PURE__ */ import_react91.default.createElement(Accordion.Root, { type: isLargeRoom ? "single" : "multiple", collapsible: true }, handRaisedList.length > 0 ? /* @__PURE__ */ import_react91.default.createElement(
          RoleAccordion,
          {
            peerList: handRaisedList,
            roleName: "Hand Raised",
            filter,
            isConnected,
            isHandRaisedAccordion: true,
            offStageRoles
          }
        ) : null, Object.keys(peersOrderedByRoles).map((role) => /* @__PURE__ */ import_react91.default.createElement(
          RoleAccordion,
          {
            key: role,
            peerList: peersOrderedByRoles[role],
            roleName: role,
            isConnected,
            filter,
            offStageRoles,
            onActive
          }
        )))
      );
    };
    Participant = ({ peer, isConnected, style }) => {
      const localPeerId = (0, import_react_sdk42.useHMSStore)(import_react_sdk42.selectLocalPeerID);
      return /* @__PURE__ */ import_react91.default.createElement(
        Flex,
        {
          key: peer.id,
          css: {
            w: "100%",
            p: "$4 $8",
            pr: "$6",
            h: "$16",
            "&:hover .participant_item": { display: "flex" }
          },
          align: "center",
          justify: "between",
          "data-testid": "participant_" + peer.name,
          style
        },
        /* @__PURE__ */ import_react91.default.createElement(
          Text,
          {
            variant: "sm",
            css: __spreadProps(__spreadValues({}, textEllipsis("100%")), { flex: "1 1 0", mr: "$8", fontWeight: "$semiBold", color: "$on_surface_high" })
          },
          peer.name,
          " ",
          localPeerId === peer.id ? "(You)" : ""
        ),
        isConnected ? /* @__PURE__ */ import_react91.default.createElement(ParticipantActions, { peerId: peer.id, isLocal: peer.id === localPeerId, role: peer.roleName }) : null
      );
    };
    ParticipantActions = import_react91.default.memo(({ peerId, role, isLocal }) => {
      var _a7, _b7;
      const isHandRaised = (0, import_react_sdk42.useHMSStore)((0, import_react_sdk42.selectHasPeerHandRaised)(peerId));
      const canChangeRole = (_a7 = (0, import_react_sdk42.useHMSStore)(import_react_sdk42.selectPermissions)) == null ? void 0 : _a7.changeRole;
      const canRemoveOthers = (_b7 = (0, import_react_sdk42.useHMSStore)(import_react_sdk42.selectPermissions)) == null ? void 0 : _b7.removeOthers;
      const { elements } = useRoomLayoutConferencingScreen();
      const { on_stage_exp } = elements || {};
      const shouldShowMoreActions = on_stage_exp && canChangeRole || canRemoveOthers;
      const isAudioMuted = !(0, import_react_sdk42.useHMSStore)((0, import_react_sdk42.selectIsPeerAudioEnabled)(peerId));
      return /* @__PURE__ */ import_react91.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            flexShrink: 0,
            gap: "$8"
          }
        },
        /* @__PURE__ */ import_react91.default.createElement(ConnectionIndicator, { peerId }),
        isHandRaised && /* @__PURE__ */ import_react91.default.createElement(
          Flex,
          {
            align: "center",
            justify: "center",
            css: { p: "$1", c: "$on_surface_high", bg: "$surface_bright", borderRadius: "$round" }
          },
          /* @__PURE__ */ import_react91.default.createElement(import_react_icons42.HandIcon, { height: 19, width: 19 })
        ),
        isAudioMuted ? /* @__PURE__ */ import_react91.default.createElement(
          Flex,
          {
            align: "center",
            justify: "center",
            css: { p: "$2", c: "$on_surface_high", bg: "$surface_bright", borderRadius: "$round" }
          },
          /* @__PURE__ */ import_react91.default.createElement(import_react_icons42.MicOffIcon, { height: 19, width: 19 })
        ) : null,
        shouldShowMoreActions && !isLocal ? /* @__PURE__ */ import_react91.default.createElement(
          ParticipantMoreActions,
          {
            peerId,
            role,
            elements,
            canChangeRole,
            canRemoveOthers
          }
        ) : null
      );
    });
    ParticipantMoreActions = ({ peerId, role, elements, canChangeRole, canRemoveOthers }) => {
      var _a7;
      const hmsActions = (0, import_react_sdk42.useHMSActions)();
      const {
        bring_to_stage_label,
        remove_from_stage_label,
        on_stage_role,
        off_stage_roles = []
      } = elements.on_stage_exp || {};
      const isInStage = role === on_stage_role;
      const shouldShowStageRoleChange = canChangeRole && (isInStage && remove_from_stage_label || (off_stage_roles == null ? void 0 : off_stage_roles.includes(role)) && bring_to_stage_label);
      const prevRole = (_a7 = (0, import_react_sdk42.useHMSStore)((0, import_react_sdk42.selectPeerMetadata)(peerId))) == null ? void 0 : _a7.prevRole;
      const localPeerId = (0, import_react_sdk42.useHMSStore)(import_react_sdk42.selectLocalPeerID);
      const isLocal = localPeerId === peerId;
      const [open, setOpen] = (0, import_react91.useState)(false);
      const handleStageAction = () => __async(void 0, null, function* () {
        if (isInStage) {
          prevRole && hmsActions.changeRoleOfPeer(peerId, prevRole, true);
        } else {
          yield hmsActions.changeRoleOfPeer(peerId, on_stage_role);
        }
        setOpen(false);
      });
      return /* @__PURE__ */ import_react91.default.createElement(Dropdown.Root, { open, onOpenChange: (value) => setOpen(value), modal: false }, /* @__PURE__ */ import_react91.default.createElement(
        Dropdown.Trigger,
        {
          asChild: true,
          "data-testid": "participant_more_actions",
          className: "participant_item",
          css: {
            p: "$1",
            r: "$0",
            c: "$on_surface_high",
            display: open ? "flex" : "none",
            "&:hover": {
              bg: "$surface_bright"
            },
            "@md": {
              display: "flex"
            }
          },
          tabIndex: 0
        },
        /* @__PURE__ */ import_react91.default.createElement(Box, { css: { my: "auto" } }, /* @__PURE__ */ import_react91.default.createElement(import_react_icons42.VerticalMenuIcon, null))
      ), /* @__PURE__ */ import_react91.default.createElement(Dropdown.Portal, null, /* @__PURE__ */ import_react91.default.createElement(Dropdown.Content, { align: "end", sideOffset: 8, css: { w: "$64", bg: "$surface_default" } }, shouldShowStageRoleChange ? /* @__PURE__ */ import_react91.default.createElement(Dropdown.Item, { css: { bg: "$surface_default" }, onClick: () => handleStageAction() }, /* @__PURE__ */ import_react91.default.createElement(import_react_icons42.ChangeRoleIcon, null), /* @__PURE__ */ import_react91.default.createElement(Text, { variant: "sm", css: { ml: "$4", fontWeight: "$semiBold", c: "$on_surface_high" } }, isInStage ? remove_from_stage_label : bring_to_stage_label)) : null, !isLocal && canRemoveOthers && /* @__PURE__ */ import_react91.default.createElement(
        Dropdown.Item,
        {
          css: { color: "$alert_error_default", bg: "$surface_default" },
          onClick: () => __async(void 0, null, function* () {
            try {
              yield hmsActions.removePeer(peerId, "");
            } catch (error) {
              ToastManager.addToast({ title: error.message, variant: "error" });
            }
          })
        },
        /* @__PURE__ */ import_react91.default.createElement(import_react_icons42.PeopleRemoveIcon, null),
        /* @__PURE__ */ import_react91.default.createElement(Text, { variant: "sm", css: { ml: "$4", color: "inherit", fontWeight: "$semiBold" } }, "Remove Participant")
      ))));
    };
    ParticipantSearch = ({ onSearch, placeholder, inSidePane = false }) => {
      const [value, setValue] = import_react91.default.useState("");
      const isMobile = (0, import_react_use11.useMedia)(config.media.md);
      (0, import_react_use11.useDebounce)(
        () => {
          onSearch(value);
        },
        300,
        [value, onSearch]
      );
      return /* @__PURE__ */ import_react91.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            p: isMobile ? "0" : "$2 0",
            mb: "$2",
            position: "relative",
            color: "$on_surface_medium",
            mt: inSidePane ? "$4" : ""
          }
        },
        /* @__PURE__ */ import_react91.default.createElement(import_react_icons42.SearchIcon, { style: { position: "absolute", left: isMobile ? "1.25rem" : "0.5rem" } }),
        /* @__PURE__ */ import_react91.default.createElement(
          Input,
          {
            type: "text",
            placeholder: placeholder || "Search for participants",
            css: { w: "100%", p: "$6", pl: "$14", bg: inSidePane ? "$surface_default" : "$surface_dim" },
            value,
            onKeyDown: (event) => {
              event.stopPropagation();
            },
            onChange: (event) => {
              setValue(event.currentTarget.value);
            },
            autoComplete: "off",
            "aria-autocomplete": "none"
          }
        )
      );
    };
  }
});

// src/Prebuilt/components/Footer/PollsToggle.tsx
var import_react92, import_react_icons43, PollsToggle;
var init_PollsToggle = __esm({
  "src/Prebuilt/components/Footer/PollsToggle.tsx"() {
    "use strict";
    init_define_process_env();
    import_react92 = __toESM(require("react"));
    import_react_icons43 = require("@100mslive/react-icons");
    init_src();
    init_IconButton3();
    init_useSidepane();
    init_constants();
    PollsToggle = () => {
      const isPollsOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.POLLS);
      const togglePollView = usePollViewToggle();
      return /* @__PURE__ */ import_react92.default.createElement(Tooltip, { key: "polls", title: `${isPollsOpen ? "Close" : "Open"} polls and quizzes` }, /* @__PURE__ */ import_react92.default.createElement(IconButton_default, { onClick: togglePollView, active: !isPollsOpen, "data-testid": "polls_btn" }, /* @__PURE__ */ import_react92.default.createElement(import_react_icons43.QuizIcon, null)));
    };
  }
});

// src/Prebuilt/components/Footer/Footer.tsx
var import_react93, import_react_use12, import_chat, import_react_sdk43, Footer2;
var init_Footer3 = __esm({
  "src/Prebuilt/components/Footer/Footer.tsx"() {
    "use strict";
    init_define_process_env();
    import_react93 = __toESM(require("react"));
    import_react_use12 = require("react-use");
    import_chat = require("@100mslive/types-prebuilt/elements/chat");
    import_react_sdk43 = require("@100mslive/react-sdk");
    init_src();
    init_AudioVideoToggle();
    init_EmojiReaction();
    init_LeaveRoom();
    init_MoreSettings();
    init_RaiseHand();
    init_ScreenShareToggle();
    init_VBToggle();
    init_ChatToggle();
    init_ParticipantList();
    init_PollsToggle();
    init_useSidepane();
    init_useUISettings();
    init_constants();
    Footer2 = ({
      screenType,
      elements
    }) => {
      var _a7, _b7;
      const isMobile = (0, import_react_use12.useMedia)(config.media.md);
      const isOverlayChat = !!((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay);
      const openByDefault = ((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.initial_state) === import_chat.Chat_ChatState.CHAT_STATE_OPEN;
      const { toggleAudio, toggleVideo } = (0, import_react_sdk43.useAVToggle)();
      const noAVPermissions = !(toggleAudio || toggleVideo);
      const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
      const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
      const { showPolls } = useShowPolls();
      (0, import_react93.useEffect)(() => {
        if (!isChatOpen && openByDefault) {
          toggleChat();
        }
      }, [toggleChat, openByDefault]);
      return /* @__PURE__ */ import_react93.default.createElement(
        Footer.Root,
        {
          css: {
            flexWrap: "nowrap",
            "@md": {
              justifyContent: "center",
              gap: "$10",
              position: "relative",
              // To prevent it from showing over the sidepane if chat type is not overlay
              zIndex: isOverlayChat && isChatOpen ? 20 : 1
            }
          }
        },
        /* @__PURE__ */ import_react93.default.createElement(
          Footer.Left,
          {
            css: {
              "@md": {
                w: "unset",
                p: "0",
                gap: "$10"
              }
            }
          },
          isMobile ? /* @__PURE__ */ import_react93.default.createElement(LeaveRoom, { screenType }) : null,
          /* @__PURE__ */ import_react93.default.createElement(AudioVideoToggle, null),
          isMobile ? null : /* @__PURE__ */ import_react93.default.createElement(VBToggle, null)
        ),
        /* @__PURE__ */ import_react93.default.createElement(
          Footer.Center,
          {
            css: {
              "@md": {
                w: "unset",
                gap: "$10"
              }
            }
          },
          isMobile ? /* @__PURE__ */ import_react93.default.createElement(import_react93.default.Fragment, null, noAVPermissions ? /* @__PURE__ */ import_react93.default.createElement(RaiseHand, null) : null, (elements == null ? void 0 : elements.chat) && /* @__PURE__ */ import_react93.default.createElement(ChatToggle, null), /* @__PURE__ */ import_react93.default.createElement(MoreSettings, { elements, screenType })) : /* @__PURE__ */ import_react93.default.createElement(import_react93.default.Fragment, null, /* @__PURE__ */ import_react93.default.createElement(ScreenshareToggle, null), /* @__PURE__ */ import_react93.default.createElement(RaiseHand, null), (elements == null ? void 0 : elements.emoji_reactions) && /* @__PURE__ */ import_react93.default.createElement(EmojiReaction, null), /* @__PURE__ */ import_react93.default.createElement(LeaveRoom, { screenType }))
        ),
        /* @__PURE__ */ import_react93.default.createElement(Footer.Right, null, showPolls && /* @__PURE__ */ import_react93.default.createElement(PollsToggle, null), !isMobile && (elements == null ? void 0 : elements.chat) && /* @__PURE__ */ import_react93.default.createElement(ChatToggle, null), (elements == null ? void 0 : elements.participant_list) && /* @__PURE__ */ import_react93.default.createElement(ParticipantCount, null), /* @__PURE__ */ import_react93.default.createElement(MoreSettings, { elements, screenType }))
      );
    };
  }
});

// src/Prebuilt/components/Notifications/HLSFailureModal.tsx
function HLSFailureModal() {
  const hlsError = (0, import_react_sdk44.useHMSStore)(import_react_sdk44.selectHLSState).error || false;
  const [openModal, setOpenModal] = (0, import_react94.useState)(!!hlsError);
  const hmsActions = (0, import_react_sdk44.useHMSActions)();
  const { isRTMPRunning } = (0, import_react_sdk44.useRecordingStreaming)();
  const [isHLSStarted, setHLSStarted] = useSetAppDataByKey(APP_DATA.hlsStarted);
  const startHLS = (0, import_react94.useCallback)(() => __async(this, null, function* () {
    try {
      if (isHLSStarted || isRTMPRunning) {
        return;
      }
      setHLSStarted(true);
      yield hmsActions.startHLSStreaming({});
    } catch (error) {
      console.error(error);
      setHLSStarted(false);
    }
  }), [hmsActions, isHLSStarted, setHLSStarted, isRTMPRunning]);
  return hlsError ? /* @__PURE__ */ import_react94.default.createElement(
    Dialog.Root,
    {
      open: openModal,
      onOpenChange: (value) => {
        if (!value) {
          setOpenModal(false);
        }
      }
    },
    /* @__PURE__ */ import_react94.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react94.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react94.default.createElement(Dialog.Content, { css: { w: "min(360px, 90%)" } }, /* @__PURE__ */ import_react94.default.createElement(
      Dialog.Title,
      {
        css: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid $border_default",
          mt: "$4"
        }
      },
      /* @__PURE__ */ import_react94.default.createElement(Text, { variant: "h6", css: { fontWeight: "$semiBold" } }, "Failed to Go Live")
    ), /* @__PURE__ */ import_react94.default.createElement(Text, { variant: "sm", css: { mb: "$10", color: "$on_surface_medium" } }, "Something went wrong and your live broadcast failed. Please try again."), /* @__PURE__ */ import_react94.default.createElement(Flex, { align: "center", justify: "between", css: { w: "100%", gap: "$8" } }, /* @__PURE__ */ import_react94.default.createElement(Button, { outlined: true, variant: "standard", css: { w: "100%" }, onClick: () => setOpenModal(false) }, "Dismiss"), /* @__PURE__ */ import_react94.default.createElement(Button, { css: { w: "100%" }, onClick: startHLS }, "Go Live"))))
  ) : null;
}
var import_react94, import_react_sdk44;
var init_HLSFailureModal = __esm({
  "src/Prebuilt/components/Notifications/HLSFailureModal.tsx"() {
    "use strict";
    init_define_process_env();
    import_react94 = __toESM(require("react"));
    import_react_sdk44 = require("@100mslive/react-sdk");
    init_Button2();
    init_Layout();
    init_Modal();
    init_Text2();
    init_useUISettings();
    init_constants();
  }
});

// src/Prebuilt/components/Streaming/Common.jsx
var import_react95, import_react_sdk45, import_react_icons44, ContentHeader, Container3, ErrorText;
var init_Common = __esm({
  "src/Prebuilt/components/Streaming/Common.jsx"() {
    "use strict";
    init_define_process_env();
    import_react95 = __toESM(require("react"));
    import_react_sdk45 = require("@100mslive/react-sdk");
    import_react_icons44 = require("@100mslive/react-icons");
    init_src();
    ContentHeader = ({ onBack, onClose, title = "", content }) => {
      return /* @__PURE__ */ import_react95.default.createElement(
        Flex,
        {
          css: { w: "100%", py: "$8", px: "$10", cursor: "pointer", borderBottom: "1px solid $border_bright", mb: "$8" }
        },
        onBack ? /* @__PURE__ */ import_react95.default.createElement(
          Text,
          {
            css: {
              alignSelf: "center",
              mr: "$8"
            },
            onClick: onBack,
            "data-testid": "go_back"
          },
          /* @__PURE__ */ import_react95.default.createElement(import_react_icons44.ChevronLeftIcon, null)
        ) : null,
        /* @__PURE__ */ import_react95.default.createElement(Box, { css: { flex: "1 1 0" } }, title ? /* @__PURE__ */ import_react95.default.createElement(
          Text,
          {
            variant: "tiny",
            css: {
              textTransform: "uppercase",
              fontWeight: "$semiBold",
              color: "$on_surface_medium"
            }
          },
          title
        ) : null, /* @__PURE__ */ import_react95.default.createElement(Text, { variant: "h6" }, content)),
        onClose ? /* @__PURE__ */ import_react95.default.createElement(IconButton, { onClick: onClose, css: { alignSelf: "flex-start" }, "data-testid": "close_stream_section" }, /* @__PURE__ */ import_react95.default.createElement(import_react_icons44.CrossIcon, null)) : null
      );
    };
    Container3 = ({ children, rounded = false }) => {
      return /* @__PURE__ */ import_react95.default.createElement(
        Box,
        {
          css: {
            size: "100%",
            zIndex: 2,
            position: "absolute",
            top: 0,
            left: 0,
            bg: "$surface_dim",
            transform: "translateX(10%)",
            animation: `${slideLeftAndFade("10%")} 100ms ease-out forwards`,
            display: "flex",
            flexDirection: "column",
            borderRadius: rounded ? "$2" : "0"
          }
        },
        children
      );
    };
    ErrorText = ({ error }) => {
      if (!error) {
        return null;
      }
      return /* @__PURE__ */ import_react95.default.createElement(Text, { variant: "sm", css: { my: "$4", color: "$alert_error_default" } }, error);
    };
  }
});

// src/Prebuilt/components/Polls/common/StatusIndicator.jsx
var import_react96, StatusIndicator;
var init_StatusIndicator = __esm({
  "src/Prebuilt/components/Polls/common/StatusIndicator.jsx"() {
    "use strict";
    init_define_process_env();
    import_react96 = __toESM(require("react"));
    init_src();
    StatusIndicator = ({ isLive, shouldShowTimer }) => {
      return /* @__PURE__ */ import_react96.default.createElement(Flex, { align: "center" }, /* @__PURE__ */ import_react96.default.createElement(
        Flex,
        {
          css: {
            backgroundColor: isLive ? "$alert_error_default" : "$secondary_default",
            p: "$2 $4",
            borderRadius: shouldShowTimer ? "$0 0 0 $0" : "$0"
          }
        },
        /* @__PURE__ */ import_react96.default.createElement(
          Text,
          {
            variant: "caption",
            css: {
              fontWeight: "$semiBold",
              color: "$on_surface_high"
            }
          },
          isLive ? "LIVE" : "ENDED"
        )
      ), shouldShowTimer ? /* @__PURE__ */ import_react96.default.createElement(
        Flex,
        {
          css: {
            borderRadius: "0 $0 $0 0",
            p: "$2 $4",
            backgroundColor: "$background_default"
          }
        },
        /* @__PURE__ */ import_react96.default.createElement(
          Text,
          {
            variant: "caption",
            css: {
              fontWeight: "$semiBold",
              color: "$on_surface_high"
            }
          },
          "0:32"
        )
      ) : null);
    };
  }
});

// src/Prebuilt/components/Polls/CreatePollQuiz/PollsQuizMenu.jsx
function InteractionSelectionCard({ title, icon, active, onClick }) {
  const activeBorderStyle = active ? "$space$px solid $primary_default" : "$space$px solid $border_bright";
  return /* @__PURE__ */ import_react97.default.createElement(
    Flex,
    {
      onClick,
      css: {
        border: activeBorderStyle,
        p: "$4",
        r: "$2",
        w: "100%",
        cursor: "pointer"
      },
      align: "center"
    },
    /* @__PURE__ */ import_react97.default.createElement(
      Flex,
      {
        css: {
          border: activeBorderStyle,
          p: "$4",
          bg: "$surface_bright",
          c: "$on_surface_high",
          r: "$0"
        }
      },
      icon
    ),
    /* @__PURE__ */ import_react97.default.createElement(Text, { variant: "sub1", css: { ml: "$md" } }, title)
  );
}
var import_react97, import_react_sdk46, import_react_icons45, PollsQuizMenu, AddMenu, PrevMenu, InteractionCard;
var init_PollsQuizMenu = __esm({
  "src/Prebuilt/components/Polls/CreatePollQuiz/PollsQuizMenu.jsx"() {
    "use strict";
    init_define_process_env();
    import_react97 = __toESM(require("react"));
    import_react_sdk46 = require("@100mslive/react-sdk");
    import_react_icons45 = require("@100mslive/react-icons");
    init_src();
    init_Common();
    init_useSidepane();
    init_useUISettings();
    init_utils2();
    init_StatusIndicator();
    init_constants();
    PollsQuizMenu = () => {
      const togglePollView = usePollViewToggle();
      const permissions = (0, import_react_sdk46.useHMSStore)(import_react_sdk46.selectPermissions);
      return /* @__PURE__ */ import_react97.default.createElement(Container3, { rounded: true }, /* @__PURE__ */ import_react97.default.createElement(ContentHeader, { content: "Polls and Quizzes", onClose: togglePollView }), /* @__PURE__ */ import_react97.default.createElement(Flex, { direction: "column", css: { px: "$10", pb: "$10", overflowY: "auto" } }, (permissions == null ? void 0 : permissions.pollWrite) && /* @__PURE__ */ import_react97.default.createElement(AddMenu, null), /* @__PURE__ */ import_react97.default.createElement(PrevMenu, null)));
    };
    AddMenu = () => {
      const actions = (0, import_react_sdk46.useHMSActions)();
      const [title, setTitle] = (0, import_react97.useState)("");
      const localPeerRoleName = (0, import_react_sdk46.useHMSStore)(import_react_sdk46.selectLocalPeerRoleName);
      const [anonymous, setAnonymous] = (0, import_react97.useState)(false);
      const [hideVoteCount, setHideVoteCount] = (0, import_react97.useState)(false);
      const [error, setError] = (0, import_react97.useState)();
      const [titleError, setTitleError] = (0, import_react97.useState)("");
      const { setPollState } = usePollViewState();
      const [interactionType, setInteractionType] = (0, import_react97.useState)(INTERACTION_TYPE.POLL);
      const handleCreate = (id) => {
        setPollState({
          [POLL_STATE.pollInView]: id,
          [POLL_STATE.view]: POLL_VIEWS.CREATE_QUESTIONS
        });
      };
      const validateTitle = (0, import_react97.useMemo)(() => {
        if (!isValidTextInput(title)) {
          if (title) {
            setTitleError("The title should have between 2-100 characters");
          }
          return true;
        } else {
          setTitleError("");
          return false;
        }
      }, [title]);
      return /* @__PURE__ */ import_react97.default.createElement(import_react97.default.Fragment, null, /* @__PURE__ */ import_react97.default.createElement(Text, { variant: "caption", css: { c: "$on_surface_medium", mb: "$md" } }, "Select the type you want to continue with"), /* @__PURE__ */ import_react97.default.createElement(Flex, { css: { w: "100%", gap: "$10", mb: "$md" } }, /* @__PURE__ */ import_react97.default.createElement(
        InteractionSelectionCard,
        {
          title: INTERACTION_TYPE.POLL,
          icon: /* @__PURE__ */ import_react97.default.createElement(import_react_icons45.StatsIcon, { width: 32, height: 32 }),
          onClick: () => setInteractionType(INTERACTION_TYPE.POLL),
          active: interactionType === INTERACTION_TYPE.POLL
        }
      ), /* @__PURE__ */ import_react97.default.createElement(
        InteractionSelectionCard,
        {
          title: INTERACTION_TYPE.QUIZ,
          icon: /* @__PURE__ */ import_react97.default.createElement(import_react_icons45.QuestionIcon, { width: 32, height: 32 }),
          onClick: () => setInteractionType(INTERACTION_TYPE.QUIZ),
          active: interactionType === INTERACTION_TYPE.QUIZ
        }
      )), /* @__PURE__ */ import_react97.default.createElement(Flex, { direction: "column" }, /* @__PURE__ */ import_react97.default.createElement(Text, { variant: "body2", css: { mb: "$4" } }, `Name this ${interactionType.toLowerCase()}`), /* @__PURE__ */ import_react97.default.createElement(
        Input,
        {
          type: "text",
          value: title,
          onChange: (event) => setTitle(event.target.value),
          css: {
            backgroundColor: "$surface_bright",
            border: "1px solid $border_default"
          }
        }
      ), /* @__PURE__ */ import_react97.default.createElement(Flex, { align: "center", css: { mt: "$10" } }, /* @__PURE__ */ import_react97.default.createElement(Switch, { onCheckedChange: (value) => setHideVoteCount(value), css: { mr: "$6" } }), /* @__PURE__ */ import_react97.default.createElement(Text, { variant: "body2", css: { c: "$on_surface_medium" } }, "Hide Vote Count")), /* @__PURE__ */ import_react97.default.createElement(Flex, { align: "center", css: { mt: "$10" } }, /* @__PURE__ */ import_react97.default.createElement(Switch, { onCheckedChange: (value) => setAnonymous(value), css: { mr: "$6" } }), /* @__PURE__ */ import_react97.default.createElement(Text, { variant: "body2", css: { c: "$on_surface_medium" } }, "Make Results Anonymous")), /* @__PURE__ */ import_react97.default.createElement(
        Button,
        {
          variant: "primary",
          disabled: validateTitle,
          css: { mt: "$10" },
          onClick: () => __async(void 0, null, function* () {
            const id = Date.now().toString();
            yield actions.interactivityCenter.createPoll({
              id,
              title,
              anonymous,
              rolesThatCanViewResponses: hideVoteCount && localPeerRoleName ? [localPeerRoleName] : void 0,
              type: interactionType.toLowerCase()
              // duration: showTimerDropDown ? timer : undefined,
            }).then(() => handleCreate(id)).catch((err) => setError(err.message));
          })
        },
        "Create ",
        interactionType
      ), /* @__PURE__ */ import_react97.default.createElement(ErrorText, { error: error || titleError })));
    };
    PrevMenu = () => {
      var _a7;
      const polls = (_a7 = (0, import_react_sdk46.useHMSStore)(import_react_sdk46.selectPolls)) == null ? void 0 : _a7.filter((poll) => poll.state === "started" || poll.state === "stopped").sort((a, b) => {
        var _a8, _b7;
        return (((_a8 = b.createdAt) == null ? void 0 : _a8.getTime()) || 0) - (((_b7 = a.createdAt) == null ? void 0 : _b7.getTime()) || 0);
      }).sort((a, b) => (b.state === "started" ? 1 : 0) - (a.state === "started" ? 1 : 0));
      return (polls == null ? void 0 : polls.length) ? /* @__PURE__ */ import_react97.default.createElement(
        Flex,
        {
          css: {
            borderTop: "$space$px solid $border_bright",
            mt: "$10",
            pt: "$10"
          }
        },
        /* @__PURE__ */ import_react97.default.createElement(Flex, { direction: "column", css: { w: "100%" } }, /* @__PURE__ */ import_react97.default.createElement(Text, { variant: "h6", css: { c: "$on_surface_high" } }, "Previous Polls and Quizzes"), /* @__PURE__ */ import_react97.default.createElement(Flex, { direction: "column", css: { gap: "$10", mt: "$8" } }, polls.map((poll) => /* @__PURE__ */ import_react97.default.createElement(
          InteractionCard,
          {
            key: poll.id,
            id: poll.id,
            title: poll.title,
            isLive: poll.state === "started",
            isTimed: (poll.duration || 0) > 0
          }
        ))))
      ) : null;
    };
    InteractionCard = ({ id, title, isLive, isTimed }) => {
      const { setPollState } = usePollViewState();
      const goToVote = (id2) => {
        setPollState({
          [POLL_STATE.pollInView]: id2,
          [POLL_STATE.view]: POLL_VIEWS.VOTE
        });
      };
      return /* @__PURE__ */ import_react97.default.createElement(Flex, { direction: "column", css: { backgroundColor: "$surface_bright", borderRadius: "$1", p: "$8" } }, /* @__PURE__ */ import_react97.default.createElement(Flex, { css: { w: "100%", justifyContent: "space-between", mb: "$sm" } }, /* @__PURE__ */ import_react97.default.createElement(Text, { variant: "sub1", css: { c: "$on_surface_high", fontWeight: "$semiBold" } }, title), /* @__PURE__ */ import_react97.default.createElement(StatusIndicator, { isLive, shouldShowTimer: isLive && isTimed })), /* @__PURE__ */ import_react97.default.createElement(Flex, { css: { w: "100%", gap: "$4" }, justify: "end" }, /* @__PURE__ */ import_react97.default.createElement(Button, { variant: "primary", onClick: () => goToVote(id) }, "View")));
    };
  }
});

// src/Prebuilt/components/Polls/CreateQuestions/DeleteQuestionModal.jsx
var import_react98, import_react_icons46, DeleteQuestionModal;
var init_DeleteQuestionModal = __esm({
  "src/Prebuilt/components/Polls/CreateQuestions/DeleteQuestionModal.jsx"() {
    "use strict";
    init_define_process_env();
    import_react98 = __toESM(require("react"));
    import_react_icons46 = require("@100mslive/react-icons");
    init_Button2();
    init_Layout();
    init_Modal();
    init_Text2();
    DeleteQuestionModal = ({ open, setOpen, removeQuestion }) => {
      return /* @__PURE__ */ import_react98.default.createElement(Dialog.Root, { open }, /* @__PURE__ */ import_react98.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react98.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react98.default.createElement(Dialog.Content, { css: { p: "$10" } }, /* @__PURE__ */ import_react98.default.createElement(Box, null, /* @__PURE__ */ import_react98.default.createElement(
        Flex,
        {
          css: {
            color: "$alert_error_default",
            display: "flex",
            alignItems: "center"
          }
        },
        /* @__PURE__ */ import_react98.default.createElement(import_react_icons46.AlertTriangleIcon, { style: { marginRight: "0.5rem" } }),
        /* @__PURE__ */ import_react98.default.createElement(Text, { variant: "lg", css: { color: "inherit", fontWeight: "$semiBold" } }, "Delete Question?"),
        /* @__PURE__ */ import_react98.default.createElement(
          Box,
          {
            css: {
              ml: "auto",
              color: "$on_surface_medium",
              "&:hover": { color: "$on_surface_high", cursor: "pointer" }
            },
            onClick: () => setOpen(false)
          },
          /* @__PURE__ */ import_react98.default.createElement(import_react_icons46.CrossIcon, null)
        )
      ), /* @__PURE__ */ import_react98.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium", mb: "$8", mt: "$4" } }, "The question will be deleted. You can't undo this action."), /* @__PURE__ */ import_react98.default.createElement(Flex, { css: { w: "100%", mt: "$12", gap: "$md" } }, /* @__PURE__ */ import_react98.default.createElement(
        Button,
        {
          variant: "standard",
          outlined: true,
          onClick: () => setOpen(false),
          css: { w: "100%", fontSize: "$md", fontWeight: "$semiBold" }
        },
        "Cancel"
      ), /* @__PURE__ */ import_react98.default.createElement(
        Button,
        {
          css: { w: "100%", fontSize: "$md", fontWeight: "$semiBold" },
          variant: "danger",
          onClick: () => {
            removeQuestion();
            setOpen(false);
          }
        },
        "Delete"
      ))))));
    };
  }
});

// src/Prebuilt/components/Polls/common/OptionInputWithDelete.jsx
var import_react99, import_react_icons47, OptionInputWithDelete;
var init_OptionInputWithDelete = __esm({
  "src/Prebuilt/components/Polls/common/OptionInputWithDelete.jsx"() {
    "use strict";
    init_define_process_env();
    import_react99 = __toESM(require("react"));
    import_react_icons47 = require("@100mslive/react-icons");
    init_Input2();
    init_IconButton3();
    OptionInputWithDelete = ({ index, option, handleOptionTextChange, removeOption }) => {
      return /* @__PURE__ */ import_react99.default.createElement(import_react99.default.Fragment, null, /* @__PURE__ */ import_react99.default.createElement(
        Input,
        {
          placeholder: `Option ${index + 1}`,
          css: {
            w: "100%",
            backgroundColor: "$surface_default",
            border: "1px solid $border_bright"
          },
          value: (option == null ? void 0 : option.text) || "",
          key: index,
          onChange: (event) => handleOptionTextChange(index, event.target.value)
        }
      ), /* @__PURE__ */ import_react99.default.createElement(IconButton_default, { onClick: () => removeOption(index), css: { bg: "$transparent", border: "none" } }, /* @__PURE__ */ import_react99.default.createElement(import_react_icons47.TrashIcon, null)));
    };
  }
});

// src/Prebuilt/components/Polls/common/VoteCount.jsx
var import_react100, VoteCount;
var init_VoteCount = __esm({
  "src/Prebuilt/components/Polls/common/VoteCount.jsx"() {
    "use strict";
    init_define_process_env();
    import_react100 = __toESM(require("react"));
    init_src();
    VoteCount = ({ isQuiz, voteCount, isCorrectAnswer }) => {
      return /* @__PURE__ */ import_react100.default.createElement(Flex, { css: { alignItems: "center" } }, isQuiz && /* @__PURE__ */ import_react100.default.createElement(
        Text,
        {
          variant: "xs",
          css: {
            p: "$2",
            mr: "$2",
            color: isCorrectAnswer ? "$alert_success" : "$alert_error_default",
            borderRadius: "$1",
            border: `1px solid ${isCorrectAnswer ? "$alert_success" : "$alert_error_default"}`
          }
        },
        isCorrectAnswer ? "Correct" : "Incorrect"
      ), /* @__PURE__ */ import_react100.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium" } }, voteCount, "\xA0", voteCount === 1 ? "vote" : "votes"));
    };
  }
});

// src/Prebuilt/components/Polls/common/VoteProgress.jsx
var import_react101, VoteProgress;
var init_VoteProgress = __esm({
  "src/Prebuilt/components/Polls/common/VoteProgress.jsx"() {
    "use strict";
    init_define_process_env();
    import_react101 = __toESM(require("react"));
    init_src();
    VoteProgress = ({ option, totalResponses }) => {
      const showProgress = typeof option.voteCount === "number" && typeof totalResponses === "number" && totalResponses > 0;
      const progressValue = 100 * option.voteCount / totalResponses;
      return showProgress ? /* @__PURE__ */ import_react101.default.createElement(Progress.Root, { value: progressValue }, /* @__PURE__ */ import_react101.default.createElement(
        Progress.Content,
        {
          style: {
            transform: `translateX(-${100 - progressValue}%)`
          }
        }
      )) : null;
    };
  }
});

// src/Prebuilt/components/Polls/common/MultipleChoiceOptions.jsx
var import_react102, import_react_icons48, MultipleChoiceOptions, MultipleChoiceOptionInputs;
var init_MultipleChoiceOptions = __esm({
  "src/Prebuilt/components/Polls/common/MultipleChoiceOptions.jsx"() {
    "use strict";
    init_define_process_env();
    import_react102 = __toESM(require("react"));
    import_react_icons48 = require("@100mslive/react-icons");
    init_src();
    init_OptionInputWithDelete();
    init_VoteCount();
    init_VoteProgress();
    MultipleChoiceOptions = ({
      questionIndex,
      isQuiz,
      options,
      correctOptionIndexes,
      canRespond,
      response,
      totalResponses,
      selectedOptions,
      setSelectedOptions,
      showVoteCount
    }) => {
      const handleCheckedChange = (checked, index) => {
        const newSelected = new Set(selectedOptions);
        if (checked) {
          newSelected.add(index);
        } else {
          newSelected.delete(index);
        }
        setSelectedOptions(newSelected);
      };
      return /* @__PURE__ */ import_react102.default.createElement(Flex, { direction: "column", css: { gap: "$md", w: "100%", mb: "$md" } }, options.map((option) => {
        var _a7;
        const isCorrectAnswer = isQuiz && (correctOptionIndexes == null ? void 0 : correctOptionIndexes.includes(option.index));
        return /* @__PURE__ */ import_react102.default.createElement(Flex, { align: "center", key: `${questionIndex}-${option.index}`, css: { w: "100%", gap: "$9" } }, /* @__PURE__ */ import_react102.default.createElement(
          Checkbox.Root,
          {
            id: `${questionIndex}-${option.index}`,
            disabled: !canRespond,
            checked: (_a7 = response == null ? void 0 : response.options) == null ? void 0 : _a7.includes(option.index),
            onCheckedChange: (checked) => handleCheckedChange(checked, option.index),
            css: {
              cursor: canRespond ? "pointer" : "not-allowed"
            }
          },
          /* @__PURE__ */ import_react102.default.createElement(Checkbox.Indicator, null, /* @__PURE__ */ import_react102.default.createElement(import_react_icons48.CheckIcon, { width: 16, height: 16 }))
        ), /* @__PURE__ */ import_react102.default.createElement(Flex, { direction: "column", css: { flexGrow: "1" } }, /* @__PURE__ */ import_react102.default.createElement(Flex, { css: { w: "100%" } }, /* @__PURE__ */ import_react102.default.createElement(Text, { css: { display: "flex", flexGrow: "1" } }, /* @__PURE__ */ import_react102.default.createElement(Label3, { htmlFor: `${questionIndex}-${option.index}` }, option.text)), showVoteCount && /* @__PURE__ */ import_react102.default.createElement(VoteCount, { isQuiz, isCorrectAnswer, voteCount: option.voteCount })), showVoteCount && /* @__PURE__ */ import_react102.default.createElement(VoteProgress, { option, totalResponses })));
      }));
    };
    MultipleChoiceOptionInputs = ({ isQuiz, options, selectAnswer, handleOptionTextChange, removeOption }) => {
      return /* @__PURE__ */ import_react102.default.createElement(Flex, { direction: "column", css: { gap: "$md", w: "100%", mb: "$md" } }, options.map((option, index) => {
        return /* @__PURE__ */ import_react102.default.createElement(Flex, { align: "center", key: index, css: { w: "100%", gap: "$5" } }, isQuiz && /* @__PURE__ */ import_react102.default.createElement(
          Checkbox.Root,
          {
            onCheckedChange: (checked) => selectAnswer(checked, index),
            checked: option.isCorrectAnswer,
            css: {
              cursor: "pointer",
              width: "$9"
            }
          },
          /* @__PURE__ */ import_react102.default.createElement(Checkbox.Indicator, null, /* @__PURE__ */ import_react102.default.createElement(import_react_icons48.CheckIcon, { width: 16, height: 16 }))
        ), /* @__PURE__ */ import_react102.default.createElement(
          OptionInputWithDelete,
          {
            index,
            option,
            handleOptionTextChange,
            removeOption
          }
        ));
      }));
    };
  }
});

// src/Prebuilt/components/Polls/common/SingleChoiceOptions.jsx
var import_react103, SingleChoiceOptions, SingleChoiceOptionInputs;
var init_SingleChoiceOptions = __esm({
  "src/Prebuilt/components/Polls/common/SingleChoiceOptions.jsx"() {
    "use strict";
    init_define_process_env();
    import_react103 = __toESM(require("react"));
    init_src();
    init_OptionInputWithDelete();
    init_VoteCount();
    init_VoteProgress();
    SingleChoiceOptions = ({
      questionIndex,
      isQuiz,
      options,
      response,
      canRespond,
      correctOptionIndex,
      setAnswer,
      totalResponses,
      showVoteCount
    }) => {
      return /* @__PURE__ */ import_react103.default.createElement(RadioGroup.Root, { value: response == null ? void 0 : response.option, onValueChange: (value) => setAnswer(value) }, /* @__PURE__ */ import_react103.default.createElement(Flex, { direction: "column", css: { gap: "$md", w: "100%", mb: "$md" } }, options.map((option) => {
        const isCorrectAnswer = isQuiz && option.index === correctOptionIndex;
        return /* @__PURE__ */ import_react103.default.createElement(Flex, { align: "center", key: `${questionIndex}-${option.index}`, css: { w: "100%", gap: "$5" } }, /* @__PURE__ */ import_react103.default.createElement(
          RadioGroup.Item,
          {
            css: {
              background: "none",
              h: "$9",
              w: "$9",
              border: "2px solid",
              borderColor: "$on_surface_high",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: canRespond ? "pointer" : "not-allowed",
              '&[data-state="checked"]': {
                borderColor: "$primary_bright",
                borderWidth: "2px"
              }
            },
            disabled: !canRespond,
            value: option.index,
            id: `${questionIndex}-${option.index}`
          },
          /* @__PURE__ */ import_react103.default.createElement(
            RadioGroup.Indicator,
            {
              css: {
                h: "80%",
                w: "80%",
                background: "$primary_bright",
                borderRadius: "$round"
              }
            }
          )
        ), /* @__PURE__ */ import_react103.default.createElement(Flex, { direction: "column", css: { flexGrow: "1" } }, /* @__PURE__ */ import_react103.default.createElement(Flex, { css: { w: "100%" } }, /* @__PURE__ */ import_react103.default.createElement(Text, { css: { display: "flex", flexGrow: "1" } }, /* @__PURE__ */ import_react103.default.createElement(Label3, { htmlFor: `${questionIndex}-${option.index}` }, option.text)), showVoteCount && /* @__PURE__ */ import_react103.default.createElement(VoteCount, { isQuiz, isCorrectAnswer, voteCount: option.voteCount })), showVoteCount && /* @__PURE__ */ import_react103.default.createElement(VoteProgress, { option, totalResponses })));
      })));
    };
    SingleChoiceOptionInputs = ({ isQuiz, options, selectAnswer, handleOptionTextChange, removeOption }) => {
      const correctOptionIndex = options.findIndex((option) => option.isCorrectAnswer);
      return /* @__PURE__ */ import_react103.default.createElement(RadioGroup.Root, { value: correctOptionIndex, onValueChange: selectAnswer }, /* @__PURE__ */ import_react103.default.createElement(Flex, { direction: "column", css: { gap: "$md", w: "100%", mb: "$md" } }, options.map((option, index) => {
        return /* @__PURE__ */ import_react103.default.createElement(Flex, { align: "center", key: `option-${index}`, css: { w: "100%", gap: "$5" } }, isQuiz && /* @__PURE__ */ import_react103.default.createElement(
          RadioGroup.Item,
          {
            css: {
              background: "none",
              w: "$9",
              border: "2px solid",
              borderColor: "$on_surface_high",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              '&[data-state="checked"]': {
                borderColor: "$primary_bright",
                borderWidth: "2px"
              }
            },
            value: index
          },
          /* @__PURE__ */ import_react103.default.createElement(
            RadioGroup.Indicator,
            {
              css: {
                h: "80%",
                w: "80%",
                background: "$primary_bright",
                borderRadius: "$round"
              }
            }
          )
        ), /* @__PURE__ */ import_react103.default.createElement(
          OptionInputWithDelete,
          {
            index,
            option,
            handleOptionTextChange,
            removeOption
          }
        ));
      })));
    };
  }
});

// src/Prebuilt/components/Polls/CreateQuestions/QuestionForm.jsx
var import_react104, import_react_icons49, QuestionForm, isValidQuestion;
var init_QuestionForm = __esm({
  "src/Prebuilt/components/Polls/CreateQuestions/QuestionForm.jsx"() {
    "use strict";
    init_define_process_env();
    import_react104 = __toESM(require("react"));
    import_react_icons49 = require("@100mslive/react-icons");
    init_src();
    init_DropdownTrigger();
    init_DeleteQuestionModal();
    init_useDropdownSelection();
    init_utils2();
    init_MultipleChoiceOptions();
    init_SingleChoiceOptions();
    init_constants();
    QuestionForm = ({ question, index, length, onSave, removeQuestion, isQuiz }) => {
      var _a7;
      const ref = (0, import_react104.useRef)(null);
      const selectionBg = useDropdownSelection();
      const [openDelete, setOpenDelete] = (0, import_react104.useState)(false);
      const [open, setOpen] = (0, import_react104.useState)(false);
      const [type, setType] = (0, import_react104.useState)(question.type || QUESTION_TYPE.SINGLE_CHOICE);
      const [text, setText] = (0, import_react104.useState)(question.text);
      const [options, setOptions] = (0, import_react104.useState)(
        (question == null ? void 0 : question.options) || [
          { text: "", isCorrectAnswer: false },
          { text: "", isCorrectAnswer: false }
        ]
      );
      const [skippable, setSkippable] = (0, import_react104.useState)(false);
      const isValid = isValidQuestion({
        text,
        type,
        options,
        isQuiz
      });
      const handleOptionTextChange = (0, import_react104.useCallback)(
        (index2, text2) => {
          setOptions((options2) => [...options2.slice(0, index2), __spreadProps(__spreadValues({}, options2[index2]), { text: text2 }), ...options2.slice(index2 + 1)]);
        },
        [setOptions]
      );
      const removeOption = (0, import_react104.useCallback)(
        (index2) => setOptions((options2) => {
          const newOptions = [...options2];
          newOptions.splice(index2, 1);
          return newOptions;
        }),
        [setOptions]
      );
      const selectSingleChoiceAnswer = (0, import_react104.useCallback)(
        (answerIndex) => {
          if (!isQuiz) {
            return;
          }
          setOptions(
            (options2) => options2.map((option, index2) => __spreadProps(__spreadValues({}, option), {
              isCorrectAnswer: index2 === answerIndex
            }))
          );
        },
        [setOptions, isQuiz]
      );
      const selectMultipleChoiceAnswer = (0, import_react104.useCallback)(
        (checked, index2) => {
          if (!isQuiz) {
            return;
          }
          setOptions((options2) => [
            ...options2.slice(0, index2),
            __spreadProps(__spreadValues({}, options2[index2]), { isCorrectAnswer: checked }),
            ...options2.slice(index2 + 1)
          ]);
        },
        [setOptions, isQuiz]
      );
      return /* @__PURE__ */ import_react104.default.createElement(import_react104.default.Fragment, null, /* @__PURE__ */ import_react104.default.createElement(Text, { variant: "overline", css: { c: "$on_surface_low", textTransform: "uppercase" } }, "Question ", index + 1, " of ", length), /* @__PURE__ */ import_react104.default.createElement(Text, { variant: "body2", css: { mt: "$4", mb: "$md" } }, "Question Type"), /* @__PURE__ */ import_react104.default.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react104.default.createElement(
        DialogDropdownTrigger,
        {
          ref,
          title: QUESTION_TYPE_TITLE[type],
          css: {
            backgroundColor: "$surface_bright",
            border: "1px solid $border_bright"
          },
          open
        }
      ), /* @__PURE__ */ import_react104.default.createElement(Dropdown.Portal, null, /* @__PURE__ */ import_react104.default.createElement(Dropdown.Content, { align: "start", sideOffset: 8, css: { w: (_a7 = ref.current) == null ? void 0 : _a7.clientWidth, zIndex: 1e3 } }, Object.keys(QUESTION_TYPE_TITLE).map((value) => {
        return /* @__PURE__ */ import_react104.default.createElement(
          Dropdown.Item,
          {
            key: value,
            onSelect: () => setType(value),
            css: {
              px: "$9",
              bg: type === value ? selectionBg : void 0
            }
          },
          QUESTION_TYPE_TITLE[value]
        );
      })))), /* @__PURE__ */ import_react104.default.createElement(
        Input,
        {
          placeholder: "Ask a question",
          css: {
            mt: "$md",
            backgroundColor: "$surface_bright",
            border: "1px solid $border_bright"
          },
          type: "text",
          value: text,
          onChange: (event) => setText(event.target.value)
        }
      ), type === QUESTION_TYPE.SINGLE_CHOICE || type === QUESTION_TYPE.MULTIPLE_CHOICE ? /* @__PURE__ */ import_react104.default.createElement(import_react104.default.Fragment, null, /* @__PURE__ */ import_react104.default.createElement(Text, { variant: "body2", css: { my: "$6", c: "$on_surface_medium" } }, "Options"), isQuiz && /* @__PURE__ */ import_react104.default.createElement(Text, { variant: "xs", css: { c: "$on_surface_medium", mb: "$md" } }, type === QUESTION_TYPE.SINGLE_CHOICE ? "Use the radio buttons to indicate the correct answer" : "Use the checkboxes to indicate the correct answer(s)"), type === QUESTION_TYPE.SINGLE_CHOICE && /* @__PURE__ */ import_react104.default.createElement(
        SingleChoiceOptionInputs,
        {
          isQuiz,
          options,
          selectAnswer: selectSingleChoiceAnswer,
          handleOptionTextChange,
          removeOption
        }
      ), type === QUESTION_TYPE.MULTIPLE_CHOICE && /* @__PURE__ */ import_react104.default.createElement(
        MultipleChoiceOptionInputs,
        {
          isQuiz,
          options,
          selectAnswer: selectMultipleChoiceAnswer,
          handleOptionTextChange,
          removeOption
        }
      ), (options == null ? void 0 : options.length) < 20 && /* @__PURE__ */ import_react104.default.createElement(
        Flex,
        {
          css: {
            c: "$on_surface_medium",
            cursor: "pointer",
            "&:hover": { c: "$on_surface_high" }
          },
          onClick: () => setOptions([...options, { text: "", isCorrectAnswer: false }])
        },
        /* @__PURE__ */ import_react104.default.createElement(import_react_icons49.AddCircleIcon, { style: { position: "relative", left: "-2px" } }),
        /* @__PURE__ */ import_react104.default.createElement(
          Text,
          {
            variant: "body1",
            css: {
              ml: "$4",
              c: "inherit"
            }
          },
          "Add an option"
        )
      ), isQuiz ? /* @__PURE__ */ import_react104.default.createElement(Flex, { css: { mt: "$md", gap: "$6" } }, /* @__PURE__ */ import_react104.default.createElement(Switch, { defaultChecked: skippable, onCheckedChange: (checked) => setSkippable(checked) }), /* @__PURE__ */ import_react104.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium" } }, "Not required to answer")) : null) : null, /* @__PURE__ */ import_react104.default.createElement(Flex, { justify: "between", align: "center", css: { mt: "$12" } }, /* @__PURE__ */ import_react104.default.createElement(
        Box,
        {
          css: {
            color: "$on_surface_medium",
            cursor: "pointer",
            "&:hover": { color: "$on_surface_high" }
          }
        },
        /* @__PURE__ */ import_react104.default.createElement(import_react_icons49.TrashIcon, { onClick: () => setOpenDelete(!open) })
      ), /* @__PURE__ */ import_react104.default.createElement(
        Tooltip,
        {
          disabled: isValid,
          title: options.length === 0 ? "At least one option is required for a question" : `Please fill all the fields ${isQuiz ? "and mark the correct answer(s)" : ""} to continue`,
          boxCss: { maxWidth: "$40" }
        },
        /* @__PURE__ */ import_react104.default.createElement(
          Button,
          {
            variant: "standard",
            disabled: !isValid,
            onClick: () => {
              onSave({
                saved: true,
                text,
                type,
                options,
                skippable,
                draftID: question.draftID
              });
            }
          },
          "Save"
        )
      )), /* @__PURE__ */ import_react104.default.createElement(DeleteQuestionModal, { open: openDelete, setOpen: setOpenDelete, removeQuestion }));
    };
    isValidQuestion = ({ text, type, options, isQuiz = false }) => {
      if (!isValidTextInput(text) || !type) {
        return false;
      }
      if (![QUESTION_TYPE.SINGLE_CHOICE, QUESTION_TYPE.MULTIPLE_CHOICE].includes(type)) {
        return true;
      }
      const everyOptionHasText = options.length > 0 && options.every((option) => option && isValidTextInput(option.text, 1));
      const hasCorrectAnswer = options.some((option) => option.isCorrectAnswer);
      if (!isQuiz) {
        return everyOptionHasText;
      }
      return everyOptionHasText && hasCorrectAnswer;
    };
  }
});

// src/Prebuilt/components/Polls/CreateQuestions/SavedQuestion.jsx
var import_react105, import_react_icons50, SavedQuestion;
var init_SavedQuestion = __esm({
  "src/Prebuilt/components/Polls/CreateQuestions/SavedQuestion.jsx"() {
    "use strict";
    init_define_process_env();
    import_react105 = __toESM(require("react"));
    import_react_icons50 = require("@100mslive/react-icons");
    init_src();
    init_DeleteQuestionModal();
    init_constants();
    SavedQuestion = ({ question, index, length, convertToDraft, removeQuestion }) => {
      const [openDeleteModal, setOpenDeleteModal] = (0, import_react105.useState)(false);
      return /* @__PURE__ */ import_react105.default.createElement(import_react105.default.Fragment, null, /* @__PURE__ */ import_react105.default.createElement(Text, { variant: "overline", css: { c: "$on_surface_low", textTransform: "uppercase" } }, "Question ", index + 1, " of ", length, ": ", QUESTION_TYPE_TITLE[question.type]), /* @__PURE__ */ import_react105.default.createElement(Text, { variant: "body2", css: { mt: "$4", mb: "$md" } }, question.text), question.options.map((option) => /* @__PURE__ */ import_react105.default.createElement(Flex, { css: { alignItems: "center", my: "$xs" } }, /* @__PURE__ */ import_react105.default.createElement(Text, { variant: "body2", css: { c: "$on_surface_medium" } }, option.text), option.isCorrectAnswer && /* @__PURE__ */ import_react105.default.createElement(Flex, { css: { color: "$alert_success", mx: "$xs" } }, /* @__PURE__ */ import_react105.default.createElement(import_react_icons50.CheckCircleIcon, { height: 24, width: 24 })))), question.skippable ? /* @__PURE__ */ import_react105.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_low", my: "$md" } }, "Not required to answer") : null, /* @__PURE__ */ import_react105.default.createElement(Flex, { justify: "between", css: { w: "100%", alignItems: "center" } }, /* @__PURE__ */ import_react105.default.createElement(
        Box,
        {
          onClick: () => setOpenDeleteModal(true),
          css: { color: "$on_surface_low", "&:hover": { color: "$on_surface_medium", cursor: "pointer" } }
        },
        /* @__PURE__ */ import_react105.default.createElement(import_react_icons50.TrashIcon, null)
      ), /* @__PURE__ */ import_react105.default.createElement(
        Button,
        {
          variant: "standard",
          css: { fontWeight: "$semiBold", p: "$4 $8" },
          onClick: () => convertToDraft(question.draftID)
        },
        "Edit"
      )), /* @__PURE__ */ import_react105.default.createElement(
        DeleteQuestionModal,
        {
          removeQuestion: () => removeQuestion(question.draftID),
          open: openDeleteModal,
          setOpen: setOpenDeleteModal
        }
      ));
    };
  }
});

// src/Prebuilt/components/Polls/CreateQuestions/CreateQuestions.jsx
function CreateQuestions() {
  var _a7, _b7, _c;
  const [questions, setQuestions] = (0, import_react106.useState)([{ draftID: (0, import_uuid2.v4)() }]);
  const actions = (0, import_react_sdk47.useHMSActions)();
  const togglePollView = usePollViewToggle();
  const { pollInView: id, setPollView } = usePollViewState();
  const interaction = (0, import_react_sdk47.useHMSStore)((0, import_react_sdk47.selectPollByID)(id));
  const isValidPoll = (0, import_react106.useMemo)(
    () => questions.length > 0 && questions.every((question) => isValidQuestion(question)),
    [questions]
  );
  const launchPoll = () => __async(this, null, function* () {
    const validQuestions = questions.filter((question) => isValidQuestion(question)).map((question) => ({
      text: question.text,
      type: question.type,
      options: question.options,
      skippable: question.skippable
    }));
    yield actions.interactivityCenter.addQuestionsToPoll(id, validQuestions);
    yield actions.interactivityCenter.startPoll(id);
    setPollView(POLL_VIEWS.VOTE);
  });
  const headingTitle = (interaction == null ? void 0 : interaction.type) ? ((_b7 = (_a7 = interaction == null ? void 0 : interaction.type) == null ? void 0 : _a7[0]) == null ? void 0 : _b7.toUpperCase()) + ((_c = interaction == null ? void 0 : interaction.type) == null ? void 0 : _c.slice(1)) : "Polls and Quizzes";
  const isQuiz = (interaction == null ? void 0 : interaction.type) === "quiz";
  return /* @__PURE__ */ import_react106.default.createElement(Container3, { rounded: true }, /* @__PURE__ */ import_react106.default.createElement(
    ContentHeader,
    {
      content: headingTitle,
      onClose: togglePollView,
      onBack: () => setPollView(POLL_VIEWS.CREATE_POLL_QUIZ)
    }
  ), /* @__PURE__ */ import_react106.default.createElement(Flex, { direction: "column", css: { p: "$10", overflowY: "auto" } }, /* @__PURE__ */ import_react106.default.createElement(Flex, { direction: "column" }, questions.map((question, index) => /* @__PURE__ */ import_react106.default.createElement(
    QuestionCard,
    {
      key: question.draftID,
      question,
      index,
      length: questions.length,
      onSave: (questionParams) => {
        setQuestions((questions2) => [
          ...questions2.slice(0, index),
          questionParams,
          ...questions2.slice(index + 1)
        ]);
      },
      isQuiz,
      removeQuestion: (questionID) => setQuestions((prev) => {
        return prev.filter((questionFromSet) => questionID !== questionFromSet.draftID);
      }),
      convertToDraft: (questionID) => setQuestions((prev) => {
        const copyOfQuestions = [...prev];
        copyOfQuestions.forEach((question2) => {
          if (questionID && question2.draftID === questionID) {
            question2.saved = false;
          }
        });
        return copyOfQuestions;
      })
    }
  ))), /* @__PURE__ */ import_react106.default.createElement(
    Flex,
    {
      css: {
        c: "$on_surface_low",
        my: "$sm",
        cursor: "pointer",
        "&:hover": { c: "$on_surface_medium" }
      },
      onClick: () => setQuestions([...questions, { draftID: (0, import_uuid2.v4)() }])
    },
    /* @__PURE__ */ import_react106.default.createElement(import_react_icons51.AddCircleIcon, null),
    /* @__PURE__ */ import_react106.default.createElement(Text, { variant: "body1", css: { ml: "$md", c: "$inherit" } }, "Add another question")
  ), /* @__PURE__ */ import_react106.default.createElement(Flex, { css: { w: "100%" }, justify: "end" }, /* @__PURE__ */ import_react106.default.createElement(Button, { disabled: !isValidPoll, onClick: launchPoll }, "Launch ", interaction.type))));
}
var import_react106, import_uuid2, import_react_sdk47, import_react_icons51, QuestionCard;
var init_CreateQuestions = __esm({
  "src/Prebuilt/components/Polls/CreateQuestions/CreateQuestions.jsx"() {
    "use strict";
    init_define_process_env();
    import_react106 = __toESM(require("react"));
    import_uuid2 = require("uuid");
    import_react_sdk47 = require("@100mslive/react-sdk");
    import_react_icons51 = require("@100mslive/react-icons");
    init_src();
    init_Common();
    init_QuestionForm();
    init_SavedQuestion();
    init_useSidepane();
    init_useUISettings();
    init_constants();
    QuestionCard = ({ question, onSave, index, length, removeQuestion, isQuiz, convertToDraft }) => {
      return /* @__PURE__ */ import_react106.default.createElement(Flex, { direction: "column", css: { p: "$md", bg: "$surface_default", r: "$1", mb: "$sm" } }, question.saved ? /* @__PURE__ */ import_react106.default.createElement(
        SavedQuestion,
        {
          question,
          index,
          length,
          convertToDraft,
          removeQuestion
        }
      ) : /* @__PURE__ */ import_react106.default.createElement(
        QuestionForm,
        {
          question,
          removeQuestion: () => removeQuestion(question.draftID),
          onSave: (params) => onSave(params),
          index,
          length,
          isQuiz
        }
      ));
    };
  }
});

// src/Prebuilt/components/Polls/Voting/QuestionCard.jsx
var import_react107, import_react_sdk48, import_react_icons52, TextArea, QuestionCard2, QuestionActions;
var init_QuestionCard = __esm({
  "src/Prebuilt/components/Polls/Voting/QuestionCard.jsx"() {
    "use strict";
    init_define_process_env();
    import_react107 = __toESM(require("react"));
    import_react_sdk48 = require("@100mslive/react-sdk");
    import_react_icons52 = require("@100mslive/react-icons");
    init_src();
    init_utils2();
    init_MultipleChoiceOptions();
    init_SingleChoiceOptions();
    init_constants();
    TextArea = styled("textarea", {
      backgroundColor: "$surface_brighter",
      border: "1px solid $border_bright",
      borderRadius: "$1",
      mb: "$md",
      color: "$on_surface_high",
      resize: "none",
      p: "$2",
      w: "100%"
    });
    QuestionCard2 = ({
      pollID,
      isQuiz,
      startedBy,
      pollState,
      index,
      totalQuestions,
      result,
      type,
      text,
      options = [],
      answer,
      setCurrentIndex,
      skippable = false,
      responses = [],
      isTimed = false,
      rolesThatCanViewResponses
    }) => {
      const actions = (0, import_react_sdk48.useHMSActions)();
      const localPeerID = (0, import_react_sdk48.useHMSStore)(import_react_sdk48.selectLocalPeerID);
      const localPeerResponse = responses == null ? void 0 : responses.find((response) => {
        var _a7;
        return ((_a7 = response.peer) == null ? void 0 : _a7.peerid) === localPeerID;
      });
      const isLocalPeerCreator = localPeerID === startedBy;
      const localPeerRoleName = (0, import_react_sdk48.useHMSStore)(import_react_sdk48.selectLocalPeerRoleName);
      const roleCanViewResponse = !rolesThatCanViewResponses || rolesThatCanViewResponses.length === 0 || rolesThatCanViewResponses.includes(localPeerRoleName || "");
      const showVoteCount = roleCanViewResponse && (localPeerResponse || isLocalPeerCreator && pollState === "stopped");
      const isLive = pollState === "started";
      const canRespond = isLive && !localPeerResponse;
      const isCorrectAnswer = checkCorrectAnswer(answer, localPeerResponse, type);
      const prev = index !== 1;
      const next = index !== totalQuestions && (skippable || localPeerResponse);
      const moveNext = (0, import_react107.useCallback)(() => {
        setCurrentIndex((curr) => Math.min(totalQuestions, curr + 1));
      }, [setCurrentIndex, totalQuestions]);
      const movePrev = () => {
        setCurrentIndex((curr) => Math.max(1, curr - 1));
      };
      const [textAnswer, setTextAnswer] = (0, import_react107.useState)("");
      const [singleOptionAnswer, setSingleOptionAnswer] = (0, import_react107.useState)();
      const [multipleOptionAnswer, setMultipleOptionAnswer] = (0, import_react107.useState)(/* @__PURE__ */ new Set());
      const stringAnswerExpected = [QUESTION_TYPE.LONG_ANSWER, QUESTION_TYPE.SHORT_ANSWER].includes(type);
      const isValidVote = (0, import_react107.useMemo)(() => {
        if (stringAnswerExpected) {
          return textAnswer.length > 0;
        } else if (type === QUESTION_TYPE.SINGLE_CHOICE) {
          return singleOptionAnswer !== void 0;
        } else if (type === QUESTION_TYPE.MULTIPLE_CHOICE) {
          return multipleOptionAnswer.size > 0;
        }
      }, [textAnswer, singleOptionAnswer, multipleOptionAnswer, type, stringAnswerExpected]);
      const handleVote = (0, import_react107.useCallback)(() => __async(void 0, null, function* () {
        if (!isValidVote) {
          return;
        }
        yield actions.interactivityCenter.addResponsesToPoll(pollID, [
          {
            questionIndex: index,
            text: textAnswer,
            option: singleOptionAnswer,
            options: Array.from(multipleOptionAnswer)
          }
        ]);
      }), [actions, index, pollID, isValidVote, textAnswer, singleOptionAnswer, multipleOptionAnswer]);
      const handleSkip = (0, import_react107.useCallback)(() => __async(void 0, null, function* () {
        yield actions.interactivityCenter.addResponsesToPoll(pollID, [
          {
            questionIndex: index,
            skipped: true
          }
        ]);
        moveNext();
      }), [actions, index, pollID, moveNext]);
      return /* @__PURE__ */ import_react107.default.createElement(
        Box,
        {
          css: {
            backgroundColor: "$surface_bright",
            borderRadius: "$1",
            p: "$md",
            mt: "$md",
            border: isQuiz && localPeerResponse && !localPeerResponse.skipped ? `1px solid ${isCorrectAnswer ? "$alert_success" : "$alert_error_default"}` : "none"
          }
        },
        /* @__PURE__ */ import_react107.default.createElement(Flex, { align: "center", justify: "between" }, /* @__PURE__ */ import_react107.default.createElement(Text, { variant: "caption", css: { color: "$on_surface_low", fontWeight: "$semiBold" } }, "QUESTION ", index, " OF ", totalQuestions, ": ", type.toUpperCase()), isTimed ? /* @__PURE__ */ import_react107.default.createElement(Flex, { align: "center", css: { gap: "$4" } }, /* @__PURE__ */ import_react107.default.createElement(
          IconButton,
          {
            disabled: !prev,
            onClick: movePrev,
            css: prev ? { color: "$on_surface_high", cursor: "pointer" } : {
              color: "$on_surface_low",
              cursor: "not-allowed"
            }
          },
          /* @__PURE__ */ import_react107.default.createElement(import_react_icons52.ChevronLeftIcon, { height: 16, width: 16 })
        ), /* @__PURE__ */ import_react107.default.createElement(
          IconButton,
          {
            disabled: !next,
            onClick: moveNext,
            css: next ? { color: "$on_surface_high", cursor: "pointer" } : {
              color: "$on_surface_low",
              cursor: "not-allowed"
            }
          },
          /* @__PURE__ */ import_react107.default.createElement(import_react_icons52.ChevronRightIcon, { height: 16, width: 16 })
        )) : null),
        /* @__PURE__ */ import_react107.default.createElement(Box, { css: { my: "$md" } }, /* @__PURE__ */ import_react107.default.createElement(Text, { css: { color: "$on_surface_high" } }, text)),
        type === QUESTION_TYPE.SHORT_ANSWER ? /* @__PURE__ */ import_react107.default.createElement(
          Input,
          {
            disabled: !canRespond,
            placeholder: "Enter your answer",
            onChange: (e) => setTextAnswer(e.target.value),
            css: {
              w: "100%",
              backgroundColor: "$surface_brighter",
              mb: "$md",
              border: "1px solid $border_default",
              cursor: localPeerResponse ? "not-allowed" : "text"
            }
          }
        ) : null,
        type === QUESTION_TYPE.LONG_ANSWER ? /* @__PURE__ */ import_react107.default.createElement(
          TextArea,
          {
            disabled: !canRespond,
            placeholder: "Enter your answer",
            onChange: (e) => setTextAnswer(e.target.value)
          }
        ) : null,
        type === QUESTION_TYPE.SINGLE_CHOICE ? /* @__PURE__ */ import_react107.default.createElement(
          SingleChoiceOptions,
          {
            questionIndex: index,
            isQuiz,
            canRespond,
            response: localPeerResponse,
            correctOptionIndex: answer == null ? void 0 : answer.option,
            options,
            setAnswer: setSingleOptionAnswer,
            totalResponses: result == null ? void 0 : result.totalResponses,
            showVoteCount
          }
        ) : null,
        type === QUESTION_TYPE.MULTIPLE_CHOICE ? /* @__PURE__ */ import_react107.default.createElement(
          MultipleChoiceOptions,
          {
            questionIndex: index,
            isQuiz,
            canRespond,
            response: localPeerResponse,
            correctOptionIndexes: answer == null ? void 0 : answer.options,
            options,
            selectedOptions: multipleOptionAnswer,
            setSelectedOptions: setMultipleOptionAnswer,
            totalResponses: result == null ? void 0 : result.totalResponses,
            showVoteCount
          }
        ) : null,
        isLive && /* @__PURE__ */ import_react107.default.createElement(
          QuestionActions,
          {
            isValidVote,
            skippable,
            onSkip: handleSkip,
            onVote: handleVote,
            response: localPeerResponse,
            stringAnswerExpected
          }
        )
      );
    };
    QuestionActions = ({ isValidVote, skippable, response, stringAnswerExpected, onVote, onSkip }) => {
      return /* @__PURE__ */ import_react107.default.createElement(Flex, { align: "center", justify: "end", css: { gap: "$4", w: "100%" } }, skippable && !response ? /* @__PURE__ */ import_react107.default.createElement(Button, { variant: "standard", onClick: onSkip, css: { p: "$xs $10", fontWeight: "$semiBold" } }, "Skip") : null, response ? /* @__PURE__ */ import_react107.default.createElement(Text, { css: { fontWeight: "$semiBold", color: "$on_surface_medium" } }, response.skipped ? "Skipped" : stringAnswerExpected ? "Submitted" : "Voted") : /* @__PURE__ */ import_react107.default.createElement(Button, { css: { p: "$xs $10", fontWeight: "$semiBold" }, disabled: !isValidVote, onClick: onVote }, stringAnswerExpected ? "Submit" : "Vote"));
    };
  }
});

// src/Prebuilt/components/Polls/Voting/StandardVoting.jsx
var import_react108, StandardView;
var init_StandardVoting = __esm({
  "src/Prebuilt/components/Polls/Voting/StandardVoting.jsx"() {
    "use strict";
    init_define_process_env();
    import_react108 = __toESM(require("react"));
    init_QuestionCard();
    StandardView = ({ poll }) => {
      var _a7;
      if (!(poll == null ? void 0 : poll.questions)) {
        return null;
      }
      return /* @__PURE__ */ import_react108.default.createElement(import_react108.default.Fragment, null, (_a7 = poll.questions) == null ? void 0 : _a7.map((question, index) => {
        var _a8;
        return /* @__PURE__ */ import_react108.default.createElement(
          QuestionCard2,
          {
            pollID: poll.id,
            isQuiz: poll.type === "quiz",
            startedBy: poll.startedBy,
            pollState: poll.state,
            key: `${question.text}-${index}`,
            index: question.index,
            text: question.text,
            type: question.type,
            result: question.result,
            totalQuestions: ((_a8 = poll.questions) == null ? void 0 : _a8.length) || 0,
            options: question.options,
            skippable: question.skippable,
            responses: question.responses,
            answer: question.answer,
            setCurrentIndex: () => {
              return;
            },
            rolesThatCanViewResponses: poll.rolesThatCanViewResponses
          }
        );
      }));
    };
  }
});

// src/Prebuilt/components/Polls/Voting/TimedVoting.jsx
var import_react109, TimedView;
var init_TimedVoting = __esm({
  "src/Prebuilt/components/Polls/Voting/TimedVoting.jsx"() {
    "use strict";
    init_define_process_env();
    import_react109 = __toESM(require("react"));
    init_QuestionCard();
    TimedView = ({ poll }) => {
      var _a7, _b7;
      const [currentIndex, setCurrentIndex] = (0, import_react109.useState)(0);
      const activeQuestion = (_a7 = poll.questions) == null ? void 0 : _a7[currentIndex];
      if (!activeQuestion) {
        return null;
      }
      return /* @__PURE__ */ import_react109.default.createElement(
        QuestionCard2,
        {
          pollID: poll.id,
          isQuiz: poll.type === "quiz",
          startedBy: poll.startedBy,
          pollState: poll.state,
          index: activeQuestion.index,
          text: activeQuestion.text,
          type: activeQuestion.type,
          result: activeQuestion == null ? void 0 : activeQuestion.result,
          totalQuestions: ((_b7 = poll.questions) == null ? void 0 : _b7.length) || 0,
          options: activeQuestion.options,
          skippable: activeQuestion.skippable || false,
          responses: activeQuestion.responses,
          answer: activeQuestion.answer,
          setCurrentIndex,
          rolesThatCanViewResponses: poll.rolesThatCanViewResponses,
          isTimed: true
        }
      );
    };
  }
});

// src/Prebuilt/components/Polls/Voting/Voting.jsx
var import_react110, import_react_sdk49, import_react_icons53, Voting;
var init_Voting = __esm({
  "src/Prebuilt/components/Polls/Voting/Voting.jsx"() {
    "use strict";
    init_define_process_env();
    import_react110 = __toESM(require("react"));
    import_react_sdk49 = require("@100mslive/react-sdk");
    import_react_icons53 = require("@100mslive/react-icons");
    init_src();
    init_Common();
    init_StandardVoting();
    init_TimedVoting();
    init_useUISettings();
    init_StatusIndicator();
    init_constants();
    Voting = ({ id, toggleVoting }) => {
      var _a7;
      const actions = (0, import_react_sdk49.useHMSActions)();
      const poll = (0, import_react_sdk49.useHMSStore)((0, import_react_sdk49.selectPollByID)(id));
      const pollCreatorName = (0, import_react_sdk49.useHMSStore)((0, import_react_sdk49.selectPeerNameByID)(poll == null ? void 0 : poll.createdBy));
      const isLocalPeerCreator = (0, import_react_sdk49.useHMSStore)(import_react_sdk49.selectLocalPeerID) === (poll == null ? void 0 : poll.createdBy);
      const { setPollView } = usePollViewState();
      if (!poll) {
        return null;
      }
      const isTimed = (poll.duration || 0) > 0;
      const isLive = poll.state === "started";
      return /* @__PURE__ */ import_react110.default.createElement(Container3, { rounded: true }, /* @__PURE__ */ import_react110.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            gap: "$6",
            py: "$6",
            px: "$10",
            my: "$4",
            w: "100%",
            color: "$on_surface_high",
            borderBottom: "1px solid $border_default"
          }
        },
        /* @__PURE__ */ import_react110.default.createElement(
          Flex,
          {
            onClick: () => setPollView(POLL_VIEWS.CREATE_POLL_QUIZ),
            css: { cursor: "pointer", c: "$on_surface_medium", "&:hover": { color: "$on_surface_high" } }
          },
          /* @__PURE__ */ import_react110.default.createElement(import_react_icons53.ChevronLeftIcon, null)
        ),
        /* @__PURE__ */ import_react110.default.createElement(Text, { variant: "h6" }, (_a7 = poll == null ? void 0 : poll.type) == null ? void 0 : _a7.toUpperCase()),
        /* @__PURE__ */ import_react110.default.createElement(StatusIndicator, { isLive, shouldShowTimer: isLive && isTimed }),
        /* @__PURE__ */ import_react110.default.createElement(
          Box,
          {
            css: {
              marginLeft: "auto",
              cursor: "pointer",
              "&:hover": { opacity: "0.8" }
            }
          },
          /* @__PURE__ */ import_react110.default.createElement(import_react_icons53.CrossIcon, { onClick: toggleVoting })
        )
      ), /* @__PURE__ */ import_react110.default.createElement(Flex, { direction: "column", css: { p: "$8 $10", overflowY: "auto" } }, /* @__PURE__ */ import_react110.default.createElement(Flex, { align: "center" }, /* @__PURE__ */ import_react110.default.createElement(Box, { css: { flex: "auto" } }, /* @__PURE__ */ import_react110.default.createElement(Text, { css: { color: "$on_surface_medium", fontWeight: "$semiBold" } }, pollCreatorName || "Participant", " started a ", poll.type)), poll.state === "started" && isLocalPeerCreator && /* @__PURE__ */ import_react110.default.createElement(Box, { css: { flex: "initial" } }, /* @__PURE__ */ import_react110.default.createElement(
        Button,
        {
          variant: "danger",
          css: { fontSize: "$sm", fontWeight: "$semiBold", p: "$3 $6" },
          onClick: () => actions.interactivityCenter.stopPoll(id)
        },
        "End ",
        poll.type
      ))), isTimed ? /* @__PURE__ */ import_react110.default.createElement(TimedView, { poll }) : /* @__PURE__ */ import_react110.default.createElement(StandardView, { poll })));
    };
  }
});

// src/Prebuilt/components/Polls/Polls.tsx
var import_react111, Polls;
var init_Polls = __esm({
  "src/Prebuilt/components/Polls/Polls.tsx"() {
    "use strict";
    init_define_process_env();
    import_react111 = __toESM(require("react"));
    init_PollsQuizMenu();
    init_CreateQuestions();
    init_Voting();
    init_useSidepane();
    init_useUISettings();
    init_constants();
    Polls = () => {
      const togglePollView = usePollViewToggle();
      const { pollInView: pollID, view } = usePollViewState();
      if (view === POLL_VIEWS.CREATE_POLL_QUIZ) {
        return /* @__PURE__ */ import_react111.default.createElement(PollsQuizMenu, null);
      } else if (view === POLL_VIEWS.CREATE_QUESTIONS) {
        return /* @__PURE__ */ import_react111.default.createElement(CreateQuestions, null);
      } else if (view === POLL_VIEWS.VOTE) {
        return /* @__PURE__ */ import_react111.default.createElement(Voting, { toggleVoting: togglePollView, id: pollID });
      } else {
        return null;
      }
    };
  }
});

// src/Prebuilt/images/empty-chat.svg
var empty_chat_default;
var init_empty_chat = __esm({
  "src/Prebuilt/images/empty-chat.svg"() {
    empty_chat_default = 'data:image/svg+xml,<svg width="184" height="133" viewBox="0 0 184 133" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M144.885 91.3998C145.318 91.023 145.861 90.7947 146.433 90.7483L146.446 90.7473L169.355 89.1614C169.702 89.1376 170.049 89.2101 170.358 89.3712C170.662 89.5305 170.918 89.7702 171.096 90.0642C171.098 90.0672 171.1 90.0703 171.102 90.0734L171.104 90.0766C171.281 90.3744 171.373 90.7154 171.369 91.062C171.365 91.4097 171.265 91.7496 171.08 92.044L158.85 111.504C158.539 111.986 158.081 112.356 157.544 112.56C157.007 112.764 156.419 112.791 155.866 112.636C155.313 112.482 154.823 112.155 154.469 111.703C154.115 111.25 153.915 110.697 153.898 110.123C153.898 110.109 153.898 110.094 153.898 110.08L153.996 100.307L145.347 95.7858C145.334 95.779 145.321 95.7721 145.308 95.7649C144.811 95.4785 144.417 95.0404 144.186 94.5146C143.955 93.9888 143.898 93.4029 144.024 92.8425C144.15 92.2821 144.451 91.7765 144.885 91.3998ZM167.441 91.0088L146.603 92.8952C146.49 92.9053 146.383 92.9508 146.298 93.0251C146.211 93.1005 146.151 93.2016 146.125 93.3137C146.1 93.4257 146.112 93.5429 146.158 93.6481C146.202 93.7484 146.276 93.8327 146.369 93.89L155.26 98.296L167.441 91.0088ZM156.32 100.171L168.547 92.8564L157.039 110.339C156.976 110.434 156.886 110.506 156.78 110.547C156.673 110.587 156.555 110.593 156.444 110.562C156.334 110.531 156.236 110.466 156.165 110.375C156.097 110.289 156.058 110.184 156.052 110.075L156.32 100.171Z" fill="%23444954"/>%0A<path d="M83.3248 35.4156C71.7182 47.1017 51.2098 75.5175 62.0292 95.6918C75.5536 120.91 140.453 79.2983 115.364 67.6657C90.2756 56.0331 65.8818 122.018 101.568 120.391C116.398 118.62 131.221 114.699 145.703 105.512" stroke="%23293042" stroke-width="2.25" stroke-dasharray="6 6"/>%0A<rect x="0.00256348" y="0.5" width="173.524" height="58.3398" rx="29.1699" fill="%23272A31"/>%0A<g opacity="0.4">%0A<rect x="24.7526" y="20.9312" width="111" height="4.5" rx="2.25" fill="%23444954"/>%0A</g>%0A<g opacity="0.4">%0A<rect x="38.2526" y="34.4312" width="110.25" height="4.5" rx="2.25" fill="%23444954"/>%0A</g>%0A<path d="M40.3918 71.5547L28.4246 55.0999L52.3589 55.0999L40.3918 71.5547Z" fill="%23272A31"/>%0A</svg>%0A';
  }
});

// src/Prebuilt/components/hooks/useSetPinnedMessage.js
var import_react112, import_react_sdk50, useSetPinnedMessage;
var init_useSetPinnedMessage = __esm({
  "src/Prebuilt/components/hooks/useSetPinnedMessage.js"() {
    "use strict";
    init_define_process_env();
    import_react112 = require("react");
    import_react_sdk50 = require("@100mslive/react-sdk");
    init_ToastManager();
    init_constants();
    useSetPinnedMessage = () => {
      const hmsActions = (0, import_react_sdk50.useHMSActions)();
      const vanillaStore = (0, import_react_sdk50.useHMSVanillaStore)();
      const pinnedMessage = (0, import_react_sdk50.useHMSStore)(import_react_sdk50.selectSessionMetadata);
      const setPinnedMessage = (0, import_react112.useCallback)(
        /**
         * @param {import("@100mslive/react-sdk").HMSMessage | undefined} message
         */
        (message) => __async(void 0, null, function* () {
          const peerName = vanillaStore.getState((0, import_react_sdk50.selectPeerNameByID)(message == null ? void 0 : message.sender)) || (message == null ? void 0 : message.senderName);
          const newPinnedMessage = message ? peerName ? `${peerName}: ${message.message}` : message.message : null;
          if (newPinnedMessage !== pinnedMessage) {
            yield hmsActions.sessionStore.set(SESSION_STORE_KEY.PINNED_MESSAGE, newPinnedMessage).catch((err) => ToastManager.addToast({ title: err.description }));
          }
        }),
        [hmsActions, vanillaStore, pinnedMessage]
      );
      return { setPinnedMessage };
    };
  }
});

// src/Prebuilt/components/Chat/useUnreadCount.js
var import_react_sdk51, useUnreadCount;
var init_useUnreadCount = __esm({
  "src/Prebuilt/components/Chat/useUnreadCount.js"() {
    "use strict";
    init_define_process_env();
    import_react_sdk51 = require("@100mslive/react-sdk");
    useUnreadCount = ({ role, peerId }) => {
      const unreadCountSelector = role ? (0, import_react_sdk51.selectMessagesUnreadCountByRole)(role) : peerId ? (0, import_react_sdk51.selectMessagesUnreadCountByPeerID)(peerId) : import_react_sdk51.selectUnreadHMSMessagesCount;
      const unreadCount = (0, import_react_sdk51.useHMSStore)(unreadCountSelector);
      return unreadCount;
    };
  }
});

// src/Prebuilt/components/Chat/ChatBody.jsx
var import_react113, import_react_intersection_observer, import_react_use13, import_react_virtualized_auto_sizer, import_react_window2, import_react_sdk52, import_react_icons54, formatTime2, MessageTypeContainer, MessageType, URL_REGEX, Link3, AnnotisedMessage, getMessageType, ChatActions, SenderName, ChatMessage, ChatList, VirtualizedChatMessages, ChatBody;
var init_ChatBody = __esm({
  "src/Prebuilt/components/Chat/ChatBody.jsx"() {
    "use strict";
    init_define_process_env();
    import_react113 = __toESM(require("react"));
    import_react_intersection_observer = require("react-intersection-observer");
    import_react_use13 = require("react-use");
    import_react_virtualized_auto_sizer = __toESM(require("react-virtualized-auto-sizer"));
    import_react_window2 = require("react-window");
    import_react_sdk52 = require("@100mslive/react-sdk");
    import_react_icons54 = require("@100mslive/react-icons");
    init_Dropdown2();
    init_IconButton2();
    init_Layout();
    init_Text2();
    init_Theme();
    init_Tooltip2();
    init_empty_chat();
    init_useRoomLayoutScreen();
    init_useSetPinnedMessage();
    init_useUnreadCount();
    formatTime2 = (date) => {
      if (!(date instanceof Date)) {
        return "";
      }
      let hours = date.getHours();
      let mins = date.getMinutes();
      const suffix = hours > 11 ? "PM" : "AM";
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (mins < 10) {
        mins = "0" + mins;
      }
      return `${hours}:${mins} ${suffix}`;
    };
    MessageTypeContainer = ({ left, right }) => {
      return /* @__PURE__ */ import_react113.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            ml: "auto",
            mr: "$4",
            p: "$2 $4",
            border: "1px solid $border_bright",
            r: "$0"
          }
        },
        left && /* @__PURE__ */ import_react113.default.createElement(SenderName, { variant: "tiny", as: "span", css: { color: "$on_surface_medium" } }, left),
        left && right && /* @__PURE__ */ import_react113.default.createElement(Box, { css: { borderLeft: "1px solid $border_bright", mx: "$4", h: "$8" } }),
        right && /* @__PURE__ */ import_react113.default.createElement(SenderName, { as: "span", variant: "tiny", css: { textTransform: "uppercase" } }, right)
      );
    };
    MessageType = ({ roles, hasCurrentUserSent, receiver }) => {
      const peerName = (0, import_react_sdk52.useHMSStore)((0, import_react_sdk52.selectPeerNameByID)(receiver));
      const localPeerRoleName = (0, import_react_sdk52.useHMSStore)(import_react_sdk52.selectLocalPeerRoleName);
      if (receiver) {
        return /* @__PURE__ */ import_react113.default.createElement(
          MessageTypeContainer,
          {
            left: hasCurrentUserSent ? `${peerName ? `TO ${peerName}` : ""}` : "TO YOU",
            right: "PRIVATE"
          }
        );
      }
      if (roles && roles.length) {
        return /* @__PURE__ */ import_react113.default.createElement(MessageTypeContainer, { left: "TO", right: hasCurrentUserSent ? roles.join(",") : localPeerRoleName });
      }
      return null;
    };
    URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    Link3 = styled("a", {
      color: "$primary_default",
      wordBreak: "break-word",
      "&:hover": {
        textDecoration: "underline"
      }
    });
    AnnotisedMessage = ({ message }) => {
      if (!message) {
        return /* @__PURE__ */ import_react113.default.createElement(import_react113.Fragment, null);
      }
      return /* @__PURE__ */ import_react113.default.createElement(import_react113.Fragment, null, message.trim().split(/(\s)/).map(
        (part) => URL_REGEX.test(part) ? /* @__PURE__ */ import_react113.default.createElement(Link3, { href: part, key: part, target: "_blank", rel: "noopener noreferrer" }, part) : part
      ));
    };
    getMessageType = ({ roles, receiver }) => {
      if (roles && roles.length > 0) {
        return "role";
      }
      return receiver ? "private" : "";
    };
    ChatActions = ({ onPin, showPinAction }) => {
      const [open, setOpen] = (0, import_react113.useState)(false);
      if (!showPinAction) {
        return null;
      }
      return /* @__PURE__ */ import_react113.default.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react113.default.createElement(Dropdown.Trigger, { className: "chat_actions", css: { opacity: open ? 1 : 0, "@md": { opacity: 1 } }, asChild: true }, /* @__PURE__ */ import_react113.default.createElement(IconButton, null, /* @__PURE__ */ import_react113.default.createElement(Tooltip, { title: "More options" }, /* @__PURE__ */ import_react113.default.createElement(import_react_icons54.VerticalMenuIcon, null)))), /* @__PURE__ */ import_react113.default.createElement(Dropdown.Portal, null, /* @__PURE__ */ import_react113.default.createElement(
        Dropdown.Content,
        {
          sideOffset: 5,
          align: "end",
          css: { width: "$48", backgroundColor: "$surface_bright", py: "$0", border: "1px solid $border_bright" }
        },
        /* @__PURE__ */ import_react113.default.createElement(Dropdown.Item, { "data-testid": "pin_message_btn", onClick: onPin }, /* @__PURE__ */ import_react113.default.createElement(import_react_icons54.PinIcon, null), /* @__PURE__ */ import_react113.default.createElement(Text, { variant: "sm", css: { ml: "$4" } }, "Pin Message"))
      )));
    };
    SenderName = styled(Text, {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "24ch",
      minWidth: 0,
      color: "$on_surface_high",
      fontWeight: "$semiBold"
    });
    ChatMessage = import_react113.default.memo(
      ({ index, style = {}, message, setRowHeight, isLast = false, unreadCount = 0, scrollToBottom, onPin }) => {
        var _a7, _b7;
        const { ref, inView } = (0, import_react_intersection_observer.useInView)({ threshold: 0.5, triggerOnce: true });
        const rowRef = (0, import_react113.useRef)(null);
        (0, import_react113.useEffect)(() => {
          if (rowRef.current) {
            setRowHeight(index, rowRef.current.clientHeight);
          }
        }, [index, setRowHeight]);
        const isMobile = (0, import_react_use13.useMedia)(config.media.md);
        const { elements } = useRoomLayoutConferencingScreen();
        const isOverlay = ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay) && isMobile;
        const hmsActions = (0, import_react_sdk52.useHMSActions)();
        const localPeerId = (0, import_react_sdk52.useHMSStore)(import_react_sdk52.selectLocalPeerID);
        const permissions = (0, import_react_sdk52.useHMSStore)(import_react_sdk52.selectPermissions);
        const messageType = getMessageType({
          roles: message.recipientRoles,
          receiver: message.recipientPeer
        });
        const showPinAction = permissions.removeOthers && !messageType && ((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.allow_pinning_messages);
        (0, import_react113.useEffect)(() => {
          if (message.id && !message.read && inView) {
            hmsActions.setMessageRead(true, message.id);
          }
        }, [message.read, hmsActions, inView, message.id]);
        (0, import_react113.useEffect)(() => {
          if (isLast && inView && unreadCount >= 1) {
            scrollToBottom(1);
          }
        }, [inView, isLast, scrollToBottom, unreadCount]);
        return /* @__PURE__ */ import_react113.default.createElement(
          Box,
          {
            ref,
            as: "div",
            css: { mb: "$10", pr: "$10", mt: "$8", "&:hover .chat_actions": { opacity: 1 } },
            style
          },
          /* @__PURE__ */ import_react113.default.createElement(
            Flex,
            {
              ref: rowRef,
              align: "center",
              css: {
                flexWrap: "wrap",
                // Theme independent color, token should not be used for transparent chat
                bg: messageType ? isOverlay ? "rgba(0, 0, 0, 0.64)" : "$surface_default" : void 0,
                r: messageType ? "$1" : void 0,
                px: messageType ? "$4" : "$2",
                py: messageType ? "$4" : 0,
                userSelect: "none"
              },
              key: message.time,
              "data-testid": "chat_msg"
            },
            /* @__PURE__ */ import_react113.default.createElement(
              Text,
              {
                css: {
                  color: isOverlay ? "#FFF" : "$on_surface_high",
                  fontWeight: "$semiBold",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%"
                },
                as: "div"
              },
              /* @__PURE__ */ import_react113.default.createElement(Flex, { align: "baseline" }, message.senderName === "You" || !message.senderName ? /* @__PURE__ */ import_react113.default.createElement(SenderName, { as: "span", variant: "sm", css: { color: isOverlay ? "#FFF" : "$on_surface_high" } }, message.senderName || "Anonymous") : /* @__PURE__ */ import_react113.default.createElement(Tooltip, { title: message.senderName, side: "top", align: "start" }, /* @__PURE__ */ import_react113.default.createElement(SenderName, { as: "span", variant: "sm", css: { color: isOverlay ? "#FFF" : "$on_surface_high" } }, message.senderName)), !isOverlay ? /* @__PURE__ */ import_react113.default.createElement(
                Text,
                {
                  as: "span",
                  variant: "xs",
                  css: {
                    ml: "$4",
                    color: "$on_surface_medium",
                    flexShrink: 0
                  }
                },
                formatTime2(message.time)
              ) : null),
              /* @__PURE__ */ import_react113.default.createElement(
                MessageType,
                {
                  hasCurrentUserSent: message.sender === localPeerId,
                  receiver: message.recipientPeer,
                  roles: message.recipientRoles
                }
              ),
              !isOverlay ? /* @__PURE__ */ import_react113.default.createElement(ChatActions, { onPin, showPinAction }) : null
            ),
            /* @__PURE__ */ import_react113.default.createElement(
              Text,
              {
                variant: "sm",
                css: {
                  w: "100%",
                  mt: "$2",
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                  userSelect: "all",
                  color: isOverlay ? "#FFF" : "$on_surface_high"
                },
                onClick: (e) => e.stopPropagation()
              },
              /* @__PURE__ */ import_react113.default.createElement(AnnotisedMessage, { message: message.message })
            )
          )
        );
      }
    );
    ChatList = import_react113.default.forwardRef(
      ({ width, height, setRowHeight, getRowHeight, messages, unreadCount = 0, scrollToBottom }, listRef) => {
        const { setPinnedMessage } = useSetPinnedMessage();
        (0, import_react113.useLayoutEffect)(() => {
          if (listRef.current && listRef.current.scrollToItem) {
            scrollToBottom(1);
          }
        }, [listRef]);
        return /* @__PURE__ */ import_react113.default.createElement(
          import_react_window2.VariableSizeList,
          {
            ref: listRef,
            itemCount: messages.length,
            itemSize: getRowHeight,
            width,
            height: height - 1,
            style: {
              overflowX: "hidden"
            }
          },
          ({ index, style }) => /* @__PURE__ */ import_react113.default.createElement(
            ChatMessage,
            {
              style,
              index,
              key: messages[index].id,
              message: messages[index],
              setRowHeight,
              unreadCount,
              isLast: index >= messages.length - 2,
              scrollToBottom,
              onPin: () => setPinnedMessage(messages[index])
            }
          )
        );
      }
    );
    VirtualizedChatMessages = import_react113.default.forwardRef(({ messages, unreadCount = 0, scrollToBottom }, listRef) => {
      const rowHeights = (0, import_react113.useRef)({});
      function getRowHeight(index) {
        return rowHeights.current[index] + 16 || 72;
      }
      const setRowHeight = (0, import_react113.useCallback)(
        (index, size) => {
          listRef.current.resetAfterIndex(0);
          rowHeights.current = __spreadProps(__spreadValues({}, rowHeights.current), { [index]: size });
        },
        [listRef]
      );
      return /* @__PURE__ */ import_react113.default.createElement(
        Box,
        {
          css: {
            mr: "-$10",
            h: "100%"
          },
          as: "div"
        },
        /* @__PURE__ */ import_react113.default.createElement(
          import_react_virtualized_auto_sizer.default,
          {
            style: {
              width: "90%"
            }
          },
          ({ height, width }) => /* @__PURE__ */ import_react113.default.createElement(
            ChatList,
            {
              width,
              height,
              messages,
              setRowHeight,
              getRowHeight,
              scrollToBottom,
              ref: listRef,
              unreadCount
            }
          )
        )
      );
    });
    ChatBody = import_react113.default.forwardRef(({ role, peerId, scrollToBottom }, listRef) => {
      var _a7;
      const storeMessageSelector = role ? (0, import_react_sdk52.selectMessagesByRole)(role) : peerId ? (0, import_react_sdk52.selectMessagesByPeerID)(peerId) : import_react_sdk52.selectHMSMessages;
      let messages = (0, import_react_sdk52.useHMSStore)(storeMessageSelector);
      messages = (0, import_react113.useMemo)(() => (messages == null ? void 0 : messages.filter((message) => message.type === "chat")) || [], [messages]);
      const isMobile = (0, import_react_use13.useMedia)(config.media.md);
      const { elements } = useRoomLayoutConferencingScreen();
      const unreadCount = useUnreadCount({ role, peerId });
      if (messages.length === 0 && !(isMobile && ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay))) {
        return /* @__PURE__ */ import_react113.default.createElement(
          Flex,
          {
            css: {
              width: "100%",
              flex: "1 1 0",
              textAlign: "center",
              px: "$4"
            },
            align: "center",
            justify: "center"
          },
          /* @__PURE__ */ import_react113.default.createElement(Box, null, /* @__PURE__ */ import_react113.default.createElement("img", { src: empty_chat_default, alt: "Empty Chat", height: 132, width: 185, style: { margin: "0 auto" } }), /* @__PURE__ */ import_react113.default.createElement(Text, { variant: "h5", css: { mt: "$8", c: "$on_surface_high" } }, "Start a conversation"), /* @__PURE__ */ import_react113.default.createElement(
            Text,
            {
              variant: "sm",
              css: { mt: "$4", maxWidth: "80%", textAlign: "center", mx: "auto", c: "$on_surface_medium" }
            },
            "There are no messages here yet. Start a conversation by sending a message."
          ))
        );
      }
      return /* @__PURE__ */ import_react113.default.createElement(import_react113.Fragment, null, /* @__PURE__ */ import_react113.default.createElement(
        VirtualizedChatMessages,
        {
          messages,
          scrollToBottom,
          unreadCount,
          ref: listRef
        }
      ));
    });
  }
});

// src/Prebuilt/components/AppData/useChatState.js
var import_react114, import_react_sdk53, useChatDraftMessage;
var init_useChatState = __esm({
  "src/Prebuilt/components/AppData/useChatState.js"() {
    "use strict";
    init_define_process_env();
    import_react114 = require("react");
    import_react_sdk53 = require("@100mslive/react-sdk");
    init_constants();
    useChatDraftMessage = () => {
      const hmsActions = (0, import_react_sdk53.useHMSActions)();
      let chatDraftMessage = (0, import_react_sdk53.useHMSStore)((0, import_react_sdk53.selectAppData)(APP_DATA.chatDraft));
      if (chatDraftMessage === void 0 || chatDraftMessage === null) {
        chatDraftMessage = "";
      }
      const setDraftMessage = (0, import_react114.useCallback)(
        (message) => {
          hmsActions.setAppData(APP_DATA.chatDraft, message, true);
        },
        [hmsActions]
      );
      return [chatDraftMessage, setDraftMessage];
    };
  }
});

// src/Prebuilt/components/Chat/useEmojiPickerStyles.js
var import_react115, useEmojiPickerStyles;
var init_useEmojiPickerStyles = __esm({
  "src/Prebuilt/components/Chat/useEmojiPickerStyles.js"() {
    "use strict";
    init_define_process_env();
    import_react115 = require("react");
    useEmojiPickerStyles = (showing) => {
      const ref = (0, import_react115.useRef)(null);
      (0, import_react115.useEffect)(() => {
        if (showing) {
          setTimeout(() => {
            var _a7, _b7;
            const root = (_b7 = (_a7 = ref.current) == null ? void 0 : _a7.querySelector("em-emoji-picker")) == null ? void 0 : _b7.shadowRoot;
            const style = document.createElement("style");
            style.textContent = `
          #root {
            --em-rgb-color: var(--hms-ui-colors-on_surface_high);
            --em-rgb-input: var(--hms-ui-colors-on_primary_high);
            --em-color-border: var(--hms-ui-colors-surface_bright);
            --color-b: var(--hms-ui-colors-on_surface_high);
            --rgb-background: transparent;
            color: var(--hms-ui-colors-on_surface_high);
            font-family: var(--hms-ui-fonts-sans);
          }
          .sticky {
            top: 0.25rem;
            background-color: var(--hms-ui-colors-surface_bright);
            margin-top: 0.5rem;
          }
        `;
            root == null ? void 0 : root.appendChild(style);
          }, 0);
        }
      }, [showing]);
      return ref;
    };
  }
});

// src/Prebuilt/components/Chat/ChatFooter.tsx
function EmojiPicker({ onSelect }) {
  const [showEmoji, setShowEmoji] = (0, import_react116.useState)(false);
  const ref = useEmojiPickerStyles(showEmoji);
  return /* @__PURE__ */ import_react116.default.createElement(Popover2.Root, { open: showEmoji, onOpenChange: setShowEmoji }, /* @__PURE__ */ import_react116.default.createElement(Popover2.Trigger, { asChild: true, css: { appearance: "none" } }, /* @__PURE__ */ import_react116.default.createElement(IconButton, { as: "div" }, /* @__PURE__ */ import_react116.default.createElement(import_react_icons55.EmojiIcon, null))), /* @__PURE__ */ import_react116.default.createElement(Popover2.Portal, null, /* @__PURE__ */ import_react116.default.createElement(
    Popover2.Content,
    {
      alignOffset: -40,
      sideOffset: 16,
      align: "end",
      css: {
        p: 0
      }
    },
    /* @__PURE__ */ import_react116.default.createElement(
      Box,
      {
        css: {
          minWidth: 352,
          minHeight: 435
        },
        ref
      },
      /* @__PURE__ */ import_react116.default.createElement(import_react117.default, { onEmojiSelect: onSelect, data: import_data.default, previewPosition: "none", skinPosition: "search" })
    )
  )));
}
var import_react116, import_react_use14, import_data, import_react117, import_react_sdk54, import_react_icons55, TextArea2, ChatFooter;
var init_ChatFooter = __esm({
  "src/Prebuilt/components/Chat/ChatFooter.tsx"() {
    "use strict";
    init_define_process_env();
    import_react116 = __toESM(require("react"));
    import_react_use14 = require("react-use");
    import_data = __toESM(require("@emoji-mart/data"));
    import_react117 = __toESM(require("@emoji-mart/react"));
    import_react_sdk54 = require("@100mslive/react-sdk");
    import_react_icons55 = require("@100mslive/react-icons");
    init_src();
    init_ToastManager();
    init_useRoomLayoutScreen();
    init_useChatState();
    init_useEmojiPickerStyles();
    TextArea2 = styled("textarea", {
      width: "100%",
      bg: "transparent",
      color: "$on_primary_high",
      resize: "none",
      lineHeight: "1rem",
      position: "relative",
      fontFamily: "$sans",
      fontSize: "100%",
      margin: 0,
      padding: 0,
      top: "$3",
      "&:focus": {
        boxShadow: "none",
        outline: "none"
      }
    });
    ChatFooter = ({
      role,
      peerId,
      onSend,
      children
    }) => {
      var _a7;
      const hmsActions = (0, import_react_sdk54.useHMSActions)();
      const inputRef = (0, import_react116.useRef)(null);
      const [draftMessage, setDraftMessage] = useChatDraftMessage();
      const isMobile = (0, import_react_use14.useMedia)(config.media.md);
      const { elements } = useRoomLayoutConferencingScreen();
      const isOverlayChat = (_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay;
      const sendMessage = (0, import_react116.useCallback)(() => __async(void 0, null, function* () {
        var _a8;
        const message = (_a8 = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a8.value;
        if (!message || !message.trim().length) {
          return;
        }
        try {
          if (role) {
            yield hmsActions.sendGroupMessage(message, [role]);
          } else if (peerId) {
            yield hmsActions.sendDirectMessage(message, peerId);
          } else {
            yield hmsActions.sendBroadcastMessage(message);
          }
          inputRef.current.value = "";
          setTimeout(() => {
            onSend();
          }, 0);
        } catch (error) {
          const err = error;
          ToastManager.addToast({ title: err.message });
        }
      }), [role, peerId, hmsActions, onSend]);
      (0, import_react116.useEffect)(() => {
        const messageElement = inputRef.current;
        if (messageElement) {
          messageElement.value = draftMessage;
        }
      }, [draftMessage]);
      (0, import_react116.useEffect)(() => {
        const messageElement = inputRef.current;
        return () => {
          setDraftMessage((messageElement == null ? void 0 : messageElement.value) || "");
        };
      }, [setDraftMessage]);
      return /* @__PURE__ */ import_react116.default.createElement(import_react116.default.Fragment, null, /* @__PURE__ */ import_react116.default.createElement(Flex, { align: "center", css: { gap: "$4", w: "100%" } }, /* @__PURE__ */ import_react116.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            bg: isOverlayChat && isMobile ? "$surface_dim" : "$surface_default",
            minHeight: "$16",
            maxHeight: "$24",
            position: "relative",
            py: "$6",
            pl: "$8",
            flexGrow: 1,
            r: "$1",
            "@md": {
              minHeight: "unset",
              h: "$14",
              boxSizing: "border-box"
            }
          }
        },
        children,
        /* @__PURE__ */ import_react116.default.createElement(
          TextArea2,
          {
            css: {
              c: "$on_surface_high",
              "&:valid ~ .send-msg": { color: "$on_surface_high" },
              "& ~ .send-msg": { color: "$on_surface_low" },
              "&::placeholder": { color: "$on_surface_medium" }
            },
            placeholder: "Send a message....",
            ref: inputRef,
            required: true,
            autoFocus: !isMobile,
            onKeyPress: (event) => __async(void 0, null, function* () {
              if (event.key === "Enter") {
                if (!event.shiftKey) {
                  event.preventDefault();
                  yield sendMessage();
                }
              }
            }),
            autoComplete: "off",
            "aria-autocomplete": "none",
            onPaste: (e) => e.stopPropagation(),
            onCut: (e) => e.stopPropagation(),
            onCopy: (e) => e.stopPropagation()
          }
        ),
        !isMobile ? /* @__PURE__ */ import_react116.default.createElement(
          EmojiPicker,
          {
            onSelect: (emoji) => {
              if (inputRef.current) {
                inputRef.current.value += ` ${emoji.native} `;
              }
            }
          }
        ) : null,
        /* @__PURE__ */ import_react116.default.createElement(
          IconButton,
          {
            className: "send-msg",
            onClick: sendMessage,
            css: {
              ml: "auto",
              height: "max-content",
              mr: "$4",
              "&:hover": { c: isMobile ? "" : "$on_surface_medium" }
            },
            "data-testid": "send_msg_btn"
          },
          /* @__PURE__ */ import_react116.default.createElement(import_react_icons55.SendIcon, null)
        )
      )));
    };
  }
});

// src/Prebuilt/components/Chat/Chat.jsx
var import_react118, import_react_use15, import_react_sdk55, import_react_icons56, PINNED_MESSAGE_LENGTH, PinnedMessage, Chat, NewMessageIndicator;
var init_Chat = __esm({
  "src/Prebuilt/components/Chat/Chat.jsx"() {
    "use strict";
    init_define_process_env();
    import_react118 = __toESM(require("react"));
    import_react_use15 = require("react-use");
    import_react_sdk55 = require("@100mslive/react-sdk");
    import_react_icons56 = require("@100mslive/react-icons");
    init_Button2();
    init_Layout();
    init_Text2();
    init_Theme();
    init_ChatBody();
    init_ChatFooter();
    init_useRoomLayoutScreen();
    init_useUISettings();
    init_useSetPinnedMessage();
    init_useUnreadCount();
    init_constants();
    PINNED_MESSAGE_LENGTH = 80;
    PinnedMessage = ({ clearPinnedMessage }) => {
      const permissions = (0, import_react_sdk55.useHMSStore)(import_react_sdk55.selectPermissions);
      const pinnedMessage = (0, import_react_sdk55.useHMSStore)((0, import_react_sdk55.selectSessionStore)(SESSION_STORE_KEY.PINNED_MESSAGE));
      const formattedPinnedMessage = (pinnedMessage == null ? void 0 : pinnedMessage.length) && pinnedMessage.length > PINNED_MESSAGE_LENGTH ? `${pinnedMessage.slice(0, PINNED_MESSAGE_LENGTH)}...` : pinnedMessage;
      return pinnedMessage ? /* @__PURE__ */ import_react118.default.createElement(
        Flex,
        {
          title: pinnedMessage,
          css: { p: "$4", color: "$on_surface_medium", bg: "$surface_default", r: "$1", gap: "$4", mb: "$8", mt: "$8" },
          align: "center",
          justify: "between"
        },
        /* @__PURE__ */ import_react118.default.createElement(import_react_icons56.PinIcon, null),
        /* @__PURE__ */ import_react118.default.createElement(
          Box,
          {
            css: {
              color: "$on_surface_medium",
              w: "100%",
              maxHeight: "$18",
              overflowY: "auto"
            }
          },
          /* @__PURE__ */ import_react118.default.createElement(Text, { variant: "sm" }, /* @__PURE__ */ import_react118.default.createElement(AnnotisedMessage, { message: formattedPinnedMessage }))
        ),
        permissions.removeOthers && /* @__PURE__ */ import_react118.default.createElement(
          Flex,
          {
            onClick: () => clearPinnedMessage(),
            css: { cursor: "pointer", color: "$on_surface_medium", "&:hover": { color: "$on_surface_high" } }
          },
          /* @__PURE__ */ import_react118.default.createElement(import_react_icons56.CrossIcon, null)
        )
      ) : null;
    };
    Chat = ({ screenType }) => {
      var _a7, _b7;
      const notification = (0, import_react_sdk55.useHMSNotifications)(import_react_sdk55.HMSNotificationTypes.PEER_LEFT);
      const [peerSelector, setPeerSelector] = useSetSubscribedChatSelector(CHAT_SELECTOR.PEER_ID);
      const [roleSelector, setRoleSelector] = useSetSubscribedChatSelector(CHAT_SELECTOR.ROLE);
      const peerName = (0, import_react_sdk55.useHMSStore)((0, import_react_sdk55.selectPeerNameByID)(peerSelector));
      const [chatOptions, setChatOptions] = (0, import_react118.useState)({
        role: roleSelector || "",
        peerId: peerSelector && peerName ? peerSelector : "",
        selection: roleSelector ? roleSelector : peerSelector && peerName ? peerName : "Everyone"
      });
      const [isSelectorOpen] = (0, import_react118.useState)(false);
      const listRef = (0, import_react118.useRef)(null);
      const hmsActions = (0, import_react_sdk55.useHMSActions)();
      const { setPinnedMessage } = useSetPinnedMessage();
      (0, import_react118.useEffect)(() => {
        if (notification && notification.data && peerSelector === notification.data.id) {
          setPeerSelector("");
          setChatOptions({
            role: "",
            peerId: "",
            selection: "Everyone"
          });
        }
      }, [notification, peerSelector, setPeerSelector]);
      const storeMessageSelector = import_react_sdk55.selectHMSMessagesCount;
      const { elements } = useRoomLayoutConferencingScreen();
      const isMobile = (0, import_react_use15.useMedia)(config.media.md);
      let isScrolledToBottom = false;
      if (listRef.current) {
        const currentRef = listRef.current._outerRef;
        isScrolledToBottom = currentRef.scrollHeight - currentRef.clientHeight - currentRef.scrollTop < 10;
      }
      const messagesCount = (0, import_react_sdk55.useHMSStore)(storeMessageSelector) || 0;
      const scrollToBottom = (0, import_react118.useCallback)(
        (unreadCount = 0) => {
          var _a8;
          if (listRef.current && listRef.current.scrollToItem && unreadCount > 0) {
            (_a8 = listRef.current) == null ? void 0 : _a8.scrollToItem(messagesCount, "end");
            requestAnimationFrame(() => {
              var _a9;
              (_a9 = listRef.current) == null ? void 0 : _a9.scrollToItem(messagesCount, "end");
            });
            hmsActions.setMessageRead(true);
          }
        },
        [hmsActions, messagesCount]
      );
      return /* @__PURE__ */ import_react118.default.createElement(
        Flex,
        {
          direction: "column",
          css: {
            size: "100%",
            gap: "$4"
          }
        },
        isMobile && ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay) ? null : /* @__PURE__ */ import_react118.default.createElement(import_react118.default.Fragment, null, ((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.allow_pinning_messages) ? /* @__PURE__ */ import_react118.default.createElement(PinnedMessage, { clearPinnedMessage: setPinnedMessage }) : null),
        /* @__PURE__ */ import_react118.default.createElement(
          ChatBody,
          {
            role: chatOptions.role,
            peerId: chatOptions.peerId,
            ref: listRef,
            scrollToBottom,
            screenType
          }
        ),
        /* @__PURE__ */ import_react118.default.createElement(
          ChatFooter,
          {
            role: chatOptions.role,
            onSend: () => scrollToBottom(1),
            selection: chatOptions.selection,
            screenType,
            onSelect: ({ role, peerId, selection }) => {
              setChatOptions({
                role,
                peerId,
                selection
              });
              setPeerSelector(peerId);
              setRoleSelector(role);
            },
            peerId: chatOptions.peerId
          },
          !isSelectorOpen && !isScrolledToBottom && /* @__PURE__ */ import_react118.default.createElement(NewMessageIndicator, { role: chatOptions.role, peerId: chatOptions.peerId, scrollToBottom })
        )
      );
    };
    NewMessageIndicator = ({ role, peerId, scrollToBottom }) => {
      const unreadCount = useUnreadCount({ role, peerId });
      if (!unreadCount) {
        return null;
      }
      return /* @__PURE__ */ import_react118.default.createElement(
        Flex,
        {
          justify: "center",
          css: {
            width: "100%",
            left: 0,
            bottom: "100%",
            position: "absolute"
          }
        },
        /* @__PURE__ */ import_react118.default.createElement(
          Button,
          {
            variant: "standard",
            onClick: () => {
              scrollToBottom(unreadCount);
            },
            icon: true,
            css: {
              p: "$4",
              pl: "$8",
              pr: "$6",
              "& > svg": { ml: "$4" },
              borderRadius: "$round",
              position: "relative",
              bottom: "$16",
              fontSize: "$xs",
              fontWeight: "$semiBold",
              c: "$on_secondary_high"
            }
          },
          "New ",
          unreadCount === 1 ? "message" : "messages",
          /* @__PURE__ */ import_react118.default.createElement(import_react_icons56.ChevronDownIcon, null)
        )
      );
    };
  }
});

// src/Prebuilt/components/Footer/PaginatedParticipants.tsx
var import_react119, import_react_intersection_observer2, import_react_use16, import_react_window3, import_react_sdk56, import_react_icons57, LoadMoreParticipants, VirtualizedParticipantItem2, PaginatedParticipants;
var init_PaginatedParticipants = __esm({
  "src/Prebuilt/components/Footer/PaginatedParticipants.tsx"() {
    "use strict";
    init_define_process_env();
    import_react119 = __toESM(require("react"));
    import_react_intersection_observer2 = require("react-intersection-observer");
    import_react_use16 = require("react-use");
    import_react_window3 = require("react-window");
    import_react_sdk56 = require("@100mslive/react-sdk");
    import_react_icons57 = require("@100mslive/react-icons");
    init_IconButton2();
    init_Layout();
    init_Loading2();
    init_Text2();
    init_ParticipantList();
    init_RoleAccordion();
    init_useSidepane();
    init_utils2();
    LoadMoreParticipants = ({
      hasNext,
      loadMore,
      style
    }) => {
      const { ref, inView } = (0, import_react_intersection_observer2.useInView)();
      const [inProgress, setInProgress] = (0, import_react119.useState)(false);
      (0, import_react119.useEffect)(() => {
        if (hasNext && inView && !inProgress) {
          setInProgress(true);
          loadMore().catch(console.error).finally(() => setInProgress(false));
        }
      }, [hasNext, loadMore, inView, inProgress]);
      return /* @__PURE__ */ import_react119.default.createElement(Flex, { ref, style, align: "center", justify: "center" }, inProgress ? /* @__PURE__ */ import_react119.default.createElement(Loading, { size: 16 }) : null);
    };
    VirtualizedParticipantItem2 = import_react119.default.memo(
      ({
        index,
        data: data3,
        style
      }) => {
        if (!data3.peerList[index]) {
          return /* @__PURE__ */ import_react119.default.createElement(LoadMoreParticipants, { hasNext: data3.hasNext, loadMore: data3.loadMorePeers, style });
        }
        return /* @__PURE__ */ import_react119.default.createElement(
          Participant,
          {
            key: data3.peerList[index].id,
            peer: data3.peerList[index],
            isConnected: data3.isConnected,
            style
          }
        );
      }
    );
    PaginatedParticipants = ({ roleName, onBack }) => {
      const { peers, total, hasNext, loadPeers, loadMorePeers } = (0, import_react_sdk56.usePaginatedParticipants)({ role: roleName, limit: 20 });
      const [search, setSearch] = (0, import_react119.useState)("");
      const filteredPeers = peers.filter((p) => {
        var _a7;
        return (_a7 = p.name) == null ? void 0 : _a7.toLowerCase().includes(search);
      });
      const isConnected = (0, import_react_sdk56.useHMSStore)(import_react_sdk56.selectIsConnectedToRoom);
      const [ref, { width }] = (0, import_react_use16.useMeasure)();
      const height = ROW_HEIGHT * (filteredPeers.length + 1);
      const resetSidePane = useSidepaneReset();
      (0, import_react119.useEffect)(() => {
        loadPeers();
      }, []);
      return /* @__PURE__ */ import_react119.default.createElement(Flex, { ref, direction: "column", css: { size: "100%", gap: "$4" } }, /* @__PURE__ */ import_react119.default.createElement(Flex, { align: "center" }, /* @__PURE__ */ import_react119.default.createElement(Flex, { align: "center", css: { flex: "1 1 0", cursor: "pointer" }, onClick: onBack }, /* @__PURE__ */ import_react119.default.createElement(import_react_icons57.ChevronLeftIcon, null), /* @__PURE__ */ import_react119.default.createElement(Text, { variant: "lg", css: { flex: "1 1 0" } }, "Participants")), /* @__PURE__ */ import_react119.default.createElement(
        IconButton,
        {
          onClick: (e) => {
            e.stopPropagation();
            resetSidePane();
          },
          "data-testid": "close_sidepane"
        },
        /* @__PURE__ */ import_react119.default.createElement(import_react_icons57.CrossIcon, null)
      )), /* @__PURE__ */ import_react119.default.createElement(ParticipantSearch, { onSearch: (search2) => setSearch(search2), placeholder: `Search for ${roleName}` }), /* @__PURE__ */ import_react119.default.createElement(Flex, { direction: "column", css: { border: "1px solid $border_default", borderRadius: "$1", flex: "1 1 0" } }, /* @__PURE__ */ import_react119.default.createElement(Flex, { align: "center", css: { height: ROW_HEIGHT, borderBottom: "1px solid $border_default", px: "$8" } }, /* @__PURE__ */ import_react119.default.createElement(Text, { css: { fontSize: "$space$7" } }, roleName, "(", getFormattedCount(peers.length), "/", getFormattedCount(total), ")")), /* @__PURE__ */ import_react119.default.createElement(Box, { css: { flex: "1 1 0", overflowY: "auto", overflowX: "hidden", mr: "-$10" } }, /* @__PURE__ */ import_react119.default.createElement(
        import_react_window3.VariableSizeList,
        {
          itemSize: (index) => index === filteredPeers.length + 1 ? 16 : ROW_HEIGHT,
          itemData: { peerList: filteredPeers, hasNext: hasNext(), loadMorePeers, isConnected: isConnected === true },
          itemKey,
          itemCount: filteredPeers.length + 1,
          width,
          height
        },
        VirtualizedParticipantItem2
      ))));
    };
  }
});

// src/Prebuilt/components/SidePaneTabs.tsx
var import_react120, import_react_use17, import_react_sdk57, import_react_icons58, tabTriggerCSS, ParticipantCount2, SidePaneTabs;
var init_SidePaneTabs = __esm({
  "src/Prebuilt/components/SidePaneTabs.tsx"() {
    "use strict";
    init_define_process_env();
    import_react120 = __toESM(require("react"));
    import_react_use17 = require("react-use");
    import_react_sdk57 = require("@100mslive/react-sdk");
    import_react_icons58 = require("@100mslive/react-icons");
    init_Chat();
    init_PaginatedParticipants();
    init_ParticipantList();
    init_src();
    init_Tooltip2();
    init_useRoomLayoutScreen();
    init_useSidepane();
    init_utils2();
    init_constants();
    tabTriggerCSS = {
      color: "$on_surface_high",
      p: "$4",
      fontWeight: "$semiBold",
      fontSize: "$sm",
      w: "100%",
      justifyContent: "center"
    };
    ParticipantCount2 = ({ count }) => {
      return count < 1e3 ? /* @__PURE__ */ import_react120.default.createElement("span", null, "(", count, ")") : /* @__PURE__ */ import_react120.default.createElement(Tooltip, { title: count }, /* @__PURE__ */ import_react120.default.createElement("span", null, "(", getFormattedCount(count), ")"));
    };
    SidePaneTabs = import_react120.default.memo(({ active = SIDE_PANE_OPTIONS.CHAT, screenType, hideControls }) => {
      var _a7;
      const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
      const toggleParticipants = useSidepaneToggle(SIDE_PANE_OPTIONS.PARTICIPANTS);
      const resetSidePane = useSidepaneReset();
      const [activeTab, setActiveTab] = (0, import_react120.useState)(active);
      const [activeRole, setActiveRole] = (0, import_react120.useState)("");
      const peerCount = (0, import_react_sdk57.useHMSStore)(import_react_sdk57.selectPeerCount);
      const { elements } = useRoomLayoutConferencingScreen();
      const showChat = !!(elements == null ? void 0 : elements.chat);
      const showParticipants = !!(elements == null ? void 0 : elements.participant_list);
      const hideTabs = !(showChat && showParticipants);
      const isMobile = (0, import_react_use17.useMedia)(config.media.md);
      const isOverlayChat = !!((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay) && isMobile;
      const { off_stage_roles = [] } = (elements == null ? void 0 : elements.on_stage_exp) || {};
      const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
      (0, import_react120.useEffect)(() => {
        if (activeTab === SIDE_PANE_OPTIONS.CHAT && !showChat && showParticipants) {
          setActiveTab(SIDE_PANE_OPTIONS.PARTICIPANTS);
        } else if (activeTab === SIDE_PANE_OPTIONS.PARTICIPANTS && showChat && !showParticipants) {
          setActiveTab(SIDE_PANE_OPTIONS.CHAT);
        } else if (!showChat && !showParticipants) {
          resetSidePane();
        }
      }, [showChat, activeTab, showParticipants, resetSidePane]);
      (0, import_react120.useEffect)(() => {
        setActiveTab(active);
      }, [active]);
      if (activeRole) {
        return /* @__PURE__ */ import_react120.default.createElement(
          Flex,
          {
            direction: "column",
            css: {
              color: "$on_primary_high",
              h: "100%",
              marginTop: hideControls && isOverlayChat ? "$17" : "0",
              transition: "margin 0.3s ease-in-out",
              position: "relative"
            }
          },
          /* @__PURE__ */ import_react120.default.createElement(Box, { css: { position: "absolute", left: 0, top: 0, size: "100%", zIndex: 21, bg: "$surface_dim" } }, /* @__PURE__ */ import_react120.default.createElement(PaginatedParticipants, { roleName: activeRole, onBack: () => setActiveRole("") }))
        );
      }
      return /* @__PURE__ */ import_react120.default.createElement(
        Flex,
        {
          direction: "column",
          css: {
            color: "$on_primary_high",
            h: "100%",
            marginTop: hideControls && isOverlayChat ? "$17" : "0",
            transition: "margin 0.3s ease-in-out"
          }
        },
        isOverlayChat && isChatOpen && showChat ? /* @__PURE__ */ import_react120.default.createElement(Chat, { screenType }) : /* @__PURE__ */ import_react120.default.createElement(import_react120.default.Fragment, null, hideTabs ? /* @__PURE__ */ import_react120.default.createElement(import_react120.default.Fragment, null, /* @__PURE__ */ import_react120.default.createElement(Text, { variant: "sm", css: { fontWeight: "$semiBold", p: "$4", c: "$on_surface_high", pr: "$12" } }, showChat ? "Chat" : /* @__PURE__ */ import_react120.default.createElement("span", null, "Participants ", /* @__PURE__ */ import_react120.default.createElement(ParticipantCount2, { count: peerCount }))), showChat ? /* @__PURE__ */ import_react120.default.createElement(Chat, { screenType }) : /* @__PURE__ */ import_react120.default.createElement(ParticipantList, { offStageRoles: off_stage_roles, onActive: setActiveRole })) : /* @__PURE__ */ import_react120.default.createElement(
          Tabs.Root,
          {
            value: activeTab,
            onValueChange: setActiveTab,
            css: {
              flexDirection: "column",
              size: "100%"
            }
          },
          /* @__PURE__ */ import_react120.default.createElement(Tabs.List, { css: { w: "calc(100% - $12)", p: "$2", borderRadius: "$2", bg: "$surface_default" } }, /* @__PURE__ */ import_react120.default.createElement(
            Tabs.Trigger,
            {
              value: SIDE_PANE_OPTIONS.CHAT,
              onClick: toggleChat,
              css: __spreadProps(__spreadValues({}, tabTriggerCSS), {
                color: activeTab !== SIDE_PANE_OPTIONS.CHAT ? "$on_surface_low" : "$on_surface_high"
              })
            },
            "Chat"
          ), /* @__PURE__ */ import_react120.default.createElement(
            Tabs.Trigger,
            {
              value: SIDE_PANE_OPTIONS.PARTICIPANTS,
              onClick: toggleParticipants,
              css: __spreadProps(__spreadValues({}, tabTriggerCSS), {
                color: activeTab !== SIDE_PANE_OPTIONS.PARTICIPANTS ? "$on_surface_low" : "$on_surface_high"
              })
            },
            "Participants \xA0 ",
            /* @__PURE__ */ import_react120.default.createElement(ParticipantCount2, { count: peerCount })
          )),
          /* @__PURE__ */ import_react120.default.createElement(Tabs.Content, { value: SIDE_PANE_OPTIONS.PARTICIPANTS, css: { p: 0 } }, /* @__PURE__ */ import_react120.default.createElement(ParticipantList, { offStageRoles: off_stage_roles, onActive: setActiveRole })),
          /* @__PURE__ */ import_react120.default.createElement(Tabs.Content, { value: SIDE_PANE_OPTIONS.CHAT, css: { p: 0 } }, /* @__PURE__ */ import_react120.default.createElement(Chat, { screenType }))
        )),
        isOverlayChat && isChatOpen ? null : /* @__PURE__ */ import_react120.default.createElement(
          IconButton,
          {
            css: { position: "absolute", right: "$9", top: "$11", "@md": { top: "$8", right: "$6" } },
            onClick: (e) => {
              e.stopPropagation();
              if (activeTab === SIDE_PANE_OPTIONS.CHAT) {
                toggleChat();
              } else {
                toggleParticipants();
              }
            },
            "data-testid": "close_chat"
          },
          /* @__PURE__ */ import_react120.default.createElement(import_react_icons58.CrossIcon, null)
        )
      );
    });
  }
});

// src/Prebuilt/components/Connection/TileConnection.tsx
var import_react121, import_react_icons59, TileConnection, IconWrapper, Wrapper2, TileConnection_default;
var init_TileConnection = __esm({
  "src/Prebuilt/components/Connection/TileConnection.tsx"() {
    "use strict";
    init_define_process_env();
    import_react121 = __toESM(require("react"));
    import_react_icons59 = require("@100mslive/react-icons");
    init_src();
    init_ConnectionIndicator();
    TileConnection = ({
      name,
      peerId,
      hideLabel,
      width,
      spotlighted,
      pinned
    }) => {
      return /* @__PURE__ */ import_react121.default.createElement(Wrapper2, null, !hideLabel ? /* @__PURE__ */ import_react121.default.createElement(import_react121.default.Fragment, null, /* @__PURE__ */ import_react121.default.createElement(Flex, { align: "center" }, pinned && /* @__PURE__ */ import_react121.default.createElement(IconWrapper, null, /* @__PURE__ */ import_react121.default.createElement(import_react_icons59.PinIcon, { width: "15", height: "15" })), spotlighted && /* @__PURE__ */ import_react121.default.createElement(IconWrapper, null, /* @__PURE__ */ import_react121.default.createElement(import_react_icons59.SpotlightIcon, { width: "15", height: "15" })), /* @__PURE__ */ import_react121.default.createElement(
        Text,
        {
          css: __spreadValues({
            c: "$on_surface_high",
            verticalAlign: "baseline"
          }, width ? textEllipsis(width - 60) : {}),
          variant: "xs"
        },
        name
      )), /* @__PURE__ */ import_react121.default.createElement(ConnectionIndicator, { isTile: true, peerId, hideBg: true })) : null);
    };
    IconWrapper = styled("div", { c: "$on_surface_high", ml: "$3", mt: "$1" });
    Wrapper2 = styled("div", {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "absolute",
      bottom: "$2",
      left: "$2",
      backgroundColor: "$background_dim",
      borderRadius: "$1",
      maxWidth: "85%",
      "& p,span": {
        p: "$2 $3"
      }
    });
    TileConnection_default = TileConnection;
  }
});

// src/Prebuilt/components/TileMenu/TileMenuContent.jsx
var import_react122, import_react_use18, import_react_sdk58, import_react_icons60, isSameTile, spacingCSS, SpotlightActions, PinActions, MinimiseInset, SimulcastLayers, TileMenuContent;
var init_TileMenuContent = __esm({
  "src/Prebuilt/components/TileMenu/TileMenuContent.jsx"() {
    "use strict";
    init_define_process_env();
    import_react122 = __toESM(require("react"));
    import_react_use18 = require("react-use");
    import_react_sdk58 = require("@100mslive/react-sdk");
    import_react_icons60 = require("@100mslive/react-icons");
    init_Layout();
    init_Slider2();
    init_Text2();
    init_Theme();
    init_TileMenu();
    init_ToastManager();
    init_useUISettings();
    init_useDropdownSelection();
    init_constants();
    isSameTile = ({ trackId, videoTrackID, audioTrackID }) => trackId && (videoTrackID && videoTrackID === trackId || audioTrackID && audioTrackID === trackId);
    spacingCSS = { "@md": { my: "$8", fontWeight: "$semiBold", fontSize: "sm" } };
    SpotlightActions = ({
      peerId,
      onSpotLightClick = () => {
        return;
      }
    }) => {
      const hmsActions = (0, import_react_sdk58.useHMSActions)();
      const spotlightPeerId = (0, import_react_sdk58.useHMSStore)((0, import_react_sdk58.selectSessionStore)(SESSION_STORE_KEY.SPOTLIGHT));
      const isTileSpotlighted = spotlightPeerId === peerId;
      const setSpotlightPeerId = (peer) => hmsActions.sessionStore.set(SESSION_STORE_KEY.SPOTLIGHT, peer).catch((err) => ToastManager.addToast({ title: err.description }));
      return /* @__PURE__ */ import_react122.default.createElement(
        StyledMenuTile.ItemButton,
        {
          css: spacingCSS,
          onClick: () => {
            if (isTileSpotlighted) {
              setSpotlightPeerId();
            } else {
              setSpotlightPeerId(peerId);
            }
            onSpotLightClick();
          }
        },
        /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.StarIcon, { height: 20, width: 20 }),
        /* @__PURE__ */ import_react122.default.createElement("span", null, isTileSpotlighted ? "Remove from Spotlight" : "Spotlight Tile for everyone")
      );
    };
    PinActions = ({ audioTrackID, videoTrackID }) => {
      const [pinnedTrackId, setPinnedTrackId] = useSetAppDataByKey(APP_DATA.pinnedTrackId);
      const isTilePinned = isSameTile({
        trackId: pinnedTrackId,
        videoTrackID,
        audioTrackID
      });
      return /* @__PURE__ */ import_react122.default.createElement(import_react122.default.Fragment, null, /* @__PURE__ */ import_react122.default.createElement(
        StyledMenuTile.ItemButton,
        {
          css: spacingCSS,
          onClick: () => isTilePinned ? setPinnedTrackId() : setPinnedTrackId(videoTrackID || audioTrackID)
        },
        /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.PinIcon, { height: 20, width: 20 }),
        /* @__PURE__ */ import_react122.default.createElement("span", null, isTilePinned ? "Unpin" : "Pin", " Tile for myself")
      ));
    };
    MinimiseInset = () => {
      const [minimised, setMinimised] = useSetAppDataByKey(APP_DATA.minimiseInset);
      return /* @__PURE__ */ import_react122.default.createElement(import_react122.default.Fragment, null, /* @__PURE__ */ import_react122.default.createElement(StyledMenuTile.ItemButton, { css: spacingCSS, onClick: () => setMinimised(!minimised) }, /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.ShrinkIcon, { height: 20, width: 20 }), /* @__PURE__ */ import_react122.default.createElement("span", null, minimised ? "Show" : "Minimise", " your video")));
    };
    SimulcastLayers = ({ trackId }) => {
      var _a7;
      const track = (0, import_react_sdk58.useHMSStore)((0, import_react_sdk58.selectTrackByID)(trackId));
      const actions = (0, import_react_sdk58.useHMSActions)();
      const bg = useDropdownSelection();
      if (!((_a7 = track == null ? void 0 : track.layerDefinitions) == null ? void 0 : _a7.length) || track.degraded || !track.enabled) {
        return null;
      }
      const currentLayer = track.layerDefinitions.find((layer) => layer.layer === track.layer);
      return /* @__PURE__ */ import_react122.default.createElement(import_react122.Fragment, null, /* @__PURE__ */ import_react122.default.createElement(StyledMenuTile.ItemButton, { css: { color: "$on_surface_medium", cursor: "default" } }, "Select maximum resolution"), track.layerDefinitions.map((layer) => {
        return /* @__PURE__ */ import_react122.default.createElement(
          StyledMenuTile.ItemButton,
          {
            key: layer.layer,
            onClick: () => __async(void 0, null, function* () {
              yield actions.setPreferredLayer(trackId, layer.layer);
            }),
            css: {
              justifyContent: "space-between",
              bg: track.preferredLayer === layer.layer ? bg : void 0,
              "&:hover": {
                bg: track.preferredLayer === layer.layer ? bg : void 0
              }
            }
          },
          /* @__PURE__ */ import_react122.default.createElement(
            Text,
            {
              as: "span",
              css: {
                textTransform: "capitalize",
                mr: "$2",
                fontWeight: track.preferredLayer === layer.layer ? "$semiBold" : "$regular",
                color: track.preferredLayer === layer.layer ? "$on_primary_high" : "$on_surface_high"
              }
            },
            layer.layer
          ),
          /* @__PURE__ */ import_react122.default.createElement(
            Text,
            {
              as: "span",
              variant: "xs",
              css: {
                color: track.preferredLayer === layer.layer ? "$on_primary_high" : "$on_surface_high"
              }
            },
            layer.resolution.width,
            "x",
            layer.resolution.height
          )
        );
      }), /* @__PURE__ */ import_react122.default.createElement(StyledMenuTile.ItemButton, null, /* @__PURE__ */ import_react122.default.createElement(Text, { as: "span", variant: "xs", css: { color: "$on_surface_medium" } }, "Currently streaming:", /* @__PURE__ */ import_react122.default.createElement(
        Text,
        {
          as: "span",
          variant: "xs",
          css: {
            fontWeight: "$semiBold",
            textTransform: "capitalize",
            color: "$on_surface_medium",
            ml: "$2"
          }
        },
        currentLayer ? /* @__PURE__ */ import_react122.default.createElement(import_react122.default.Fragment, null, track.layer, " (", currentLayer.resolution.width, "x", currentLayer.resolution.height, ")") : "-"
      ))));
    };
    TileMenuContent = (props) => {
      const actions = (0, import_react_sdk58.useHMSActions)();
      const { removeOthers } = (0, import_react_sdk58.useHMSStore)(import_react_sdk58.selectPermissions);
      const {
        videoTrackID,
        audioTrackID,
        isLocal,
        isScreenshare,
        showSpotlight,
        showPinAction,
        peerID,
        canMinimise,
        closeSheetOnClick = () => {
          return;
        },
        openNameChangeModal = () => {
          return;
        }
      } = props;
      const { isAudioEnabled, isVideoEnabled, setVolume, toggleAudio, toggleVideo, volume } = (0, import_react_sdk58.useRemoteAVToggle)(
        audioTrackID,
        videoTrackID
      );
      const { sendEvent } = (0, import_react_sdk58.useCustomEvent)({
        type: REMOTE_STOP_SCREENSHARE_TYPE
      });
      const isMobile = (0, import_react_use18.useMedia)(config.media.md);
      return isLocal ? (showPinAction || canMinimise) && /* @__PURE__ */ import_react122.default.createElement(import_react122.default.Fragment, null, showPinAction && /* @__PURE__ */ import_react122.default.createElement(PinActions, { audioTrackID, videoTrackID }), showSpotlight && /* @__PURE__ */ import_react122.default.createElement(SpotlightActions, { peerId: peerID, onSpotLightClick: () => closeSheetOnClick() }), canMinimise && /* @__PURE__ */ import_react122.default.createElement(MinimiseInset, null), /* @__PURE__ */ import_react122.default.createElement(
        StyledMenuTile.ItemButton,
        {
          onClick: () => {
            openNameChangeModal();
            closeSheetOnClick();
          }
        },
        /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.PencilIcon, { height: 20, width: 20 }),
        /* @__PURE__ */ import_react122.default.createElement(Text, { variant: "sm", css: { "@md": { fontWeight: "$semiBold" }, c: "$on_surface_high" } }, "Change Name")
      )) : /* @__PURE__ */ import_react122.default.createElement(import_react122.default.Fragment, null, toggleVideo ? /* @__PURE__ */ import_react122.default.createElement(
        StyledMenuTile.ItemButton,
        {
          css: spacingCSS,
          onClick: () => {
            toggleVideo();
            closeSheetOnClick();
          },
          "data-testid": isVideoEnabled ? "mute_video_participant_btn" : "unmute_video_participant_btn"
        },
        isVideoEnabled ? /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.VideoOnIcon, { height: 20, width: 20 }) : /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.VideoOffIcon, { height: 20, width: 20 }),
        /* @__PURE__ */ import_react122.default.createElement("span", null, isVideoEnabled ? "Mute" : "Request Unmute")
      ) : null, toggleAudio ? /* @__PURE__ */ import_react122.default.createElement(
        StyledMenuTile.ItemButton,
        {
          css: spacingCSS,
          onClick: () => {
            toggleAudio();
            closeSheetOnClick();
          },
          "data-testid": isVideoEnabled ? "mute_audio_participant_btn" : "unmute_audio_participant_btn"
        },
        isAudioEnabled ? /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.MicOnIcon, { height: 20, width: 20 }) : /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.MicOffIcon, { height: 20, width: 20 }),
        /* @__PURE__ */ import_react122.default.createElement("span", null, isAudioEnabled ? "Mute" : "Request Unmute")
      ) : null, audioTrackID ? /* @__PURE__ */ import_react122.default.createElement(StyledMenuTile.VolumeItem, { "data-testid": "participant_volume_slider", css: __spreadProps(__spreadValues({}, spacingCSS), { mb: "$0" }) }, /* @__PURE__ */ import_react122.default.createElement(Flex, { align: "center", gap: 1 }, /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.SpeakerIcon, { height: 20, width: 20 }), /* @__PURE__ */ import_react122.default.createElement(Box, { as: "span", css: { ml: "$4" } }, "Volume (", volume, ")")), /* @__PURE__ */ import_react122.default.createElement(Slider, { css: { my: "0.5rem" }, step: 5, value: [volume], onValueChange: (e) => setVolume(e[0]) })) : null, showPinAction && /* @__PURE__ */ import_react122.default.createElement(import_react122.default.Fragment, null, /* @__PURE__ */ import_react122.default.createElement(PinActions, { audioTrackID, videoTrackID }), showSpotlight && /* @__PURE__ */ import_react122.default.createElement(SpotlightActions, { peerId: peerID, onSpotLightClick: () => closeSheetOnClick() })), isMobile ? null : /* @__PURE__ */ import_react122.default.createElement(SimulcastLayers, { trackId: videoTrackID }), removeOthers ? /* @__PURE__ */ import_react122.default.createElement(
        StyledMenuTile.RemoveItem,
        {
          css: __spreadProps(__spreadValues({}, spacingCSS), { borderTop: "none" }),
          onClick: () => __async(void 0, null, function* () {
            try {
              yield actions.removePeer(peerID, "");
            } catch (error) {
            }
            closeSheetOnClick();
          }),
          "data-testid": "remove_participant_btn"
        },
        /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.RemoveUserIcon, { height: 20, width: 20 }),
        /* @__PURE__ */ import_react122.default.createElement("span", null, "Remove Participant")
      ) : null, removeOthers && isScreenshare ? /* @__PURE__ */ import_react122.default.createElement(
        StyledMenuTile.RemoveItem,
        {
          onClick: () => {
            sendEvent({});
            closeSheetOnClick();
          },
          css: spacingCSS
        },
        /* @__PURE__ */ import_react122.default.createElement(import_react_icons60.ShareScreenIcon, { height: 20, width: 20 }),
        /* @__PURE__ */ import_react122.default.createElement("span", null, "Stop Screenshare")
      ) : null);
    };
  }
});

// src/Prebuilt/components/TileMenu/TileMenu.jsx
var import_react123, import_react_use19, import_react_sdk59, import_react_icons61, TileMenu, TileMenu_default;
var init_TileMenu2 = __esm({
  "src/Prebuilt/components/TileMenu/TileMenu.jsx"() {
    "use strict";
    init_define_process_env();
    import_react123 = __toESM(require("react"));
    import_react_use19 = require("react-use");
    import_react_sdk59 = require("@100mslive/react-sdk");
    import_react_icons61 = require("@100mslive/react-icons");
    init_Layout();
    init_Sheet2();
    init_Text2();
    init_Theme();
    init_TileMenu();
    init_ChangeNameModal();
    init_TileMenuContent();
    init_useDropdownList();
    init_TileMenuContent();
    TileMenu = ({
      audioTrackID,
      videoTrackID,
      peerID,
      isScreenshare = false,
      canMinimise,
      enableSpotlightingPeer = true
    }) => {
      var _a7, _b7;
      const [open, setOpen] = (0, import_react123.useState)(false);
      const { theme: theme2 } = useTheme();
      const localPeerID = (0, import_react_sdk59.useHMSStore)(import_react_sdk59.selectLocalPeerID);
      const isLocal = localPeerID === peerID;
      const { removeOthers } = (0, import_react_sdk59.useHMSStore)(import_react_sdk59.selectPermissions);
      const { setVolume, toggleAudio, toggleVideo } = (0, import_react_sdk59.useRemoteAVToggle)(audioTrackID, videoTrackID);
      const showSpotlight = enableSpotlightingPeer;
      const isPrimaryVideoTrack = ((_a7 = (0, import_react_sdk59.useHMSStore)((0, import_react_sdk59.selectVideoTrackByPeerID)(peerID))) == null ? void 0 : _a7.id) === videoTrackID;
      const showPinAction = audioTrackID || videoTrackID && isPrimaryVideoTrack;
      const track = (0, import_react_sdk59.useHMSStore)((0, import_react_sdk59.selectTrackByID)(videoTrackID));
      const hideSimulcastLayers = !((_b7 = track == null ? void 0 : track.layerDefinitions) == null ? void 0 : _b7.length) || track.degraded || !track.enabled;
      const isMobile = (0, import_react_use19.useMedia)(config.media.md);
      const peer = (0, import_react_sdk59.useHMSStore)((0, import_react_sdk59.selectPeerByID)(peerID));
      const [showNameChangeModal, setShowNameChangeModal] = (0, import_react123.useState)(false);
      useDropdownList({ open, name: "TileMenu" });
      if (!(removeOthers || toggleAudio || toggleVideo || setVolume || showPinAction) && hideSimulcastLayers) {
        return null;
      }
      const openNameChangeModal = () => setShowNameChangeModal(true);
      const props = {
        isLocal,
        isScreenshare,
        audioTrackID,
        videoTrackID,
        peerID,
        isPrimaryVideoTrack,
        showSpotlight,
        showPinAction,
        canMinimise,
        openNameChangeModal
      };
      return /* @__PURE__ */ import_react123.default.createElement(import_react123.default.Fragment, null, /* @__PURE__ */ import_react123.default.createElement(StyledMenuTile.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react123.default.createElement(
        StyledMenuTile.Trigger,
        {
          "data-testid": "participant_menu_btn",
          css: { bg: `${theme2.colors.background_dim.value}A3`, p: "$2", w: "unset", h: "unset" },
          onClick: (e) => e.stopPropagation(),
          className: isMobile ? "__cancel-drag-event" : ""
        },
        /* @__PURE__ */ import_react123.default.createElement(import_react_icons61.VerticalMenuIcon, { width: 20, height: 20 })
      ), isMobile ? /* @__PURE__ */ import_react123.default.createElement(Sheet.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ import_react123.default.createElement(Sheet.Content, { css: { bg: "$surface_dim", pt: "$8" } }, /* @__PURE__ */ import_react123.default.createElement(
        Flex,
        {
          css: {
            color: "$on_surface_high",
            display: "flex",
            w: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            px: "$10",
            pb: "$8",
            borderBottom: "1px solid $border_default"
          }
        },
        /* @__PURE__ */ import_react123.default.createElement(Box, null, /* @__PURE__ */ import_react123.default.createElement(Text, { css: { color: "$on_surface_high", fontWeight: "$semiBold" } }, peer.name, isLocal ? ` (You)` : null), (peer == null ? void 0 : peer.roleName) ? /* @__PURE__ */ import_react123.default.createElement(Text, { variant: "xs", css: { color: "$on_surface_low", mt: "$2" } }, peer.roleName) : null),
        /* @__PURE__ */ import_react123.default.createElement(Sheet.Close, { css: { color: "inherit" } }, /* @__PURE__ */ import_react123.default.createElement(import_react_icons61.CrossIcon, null))
      ), /* @__PURE__ */ import_react123.default.createElement(Box, { css: { px: "$8", pb: "$8", maxHeight: "80vh", overflowY: "auto" } }, /* @__PURE__ */ import_react123.default.createElement(TileMenuContent, __spreadProps(__spreadValues({}, props), { closeSheetOnClick: () => setOpen(false) }))))) : /* @__PURE__ */ import_react123.default.createElement(StyledMenuTile.Content, { side: "top", align: "end", css: { maxHeight: "$80", overflowY: "auto" } }, /* @__PURE__ */ import_react123.default.createElement(TileMenuContent, __spreadValues({}, props)))), showNameChangeModal && /* @__PURE__ */ import_react123.default.createElement(ChangeNameModal, { onOpenChange: setShowNameChangeModal }));
    };
    TileMenu_default = TileMenu;
  }
});

// src/Prebuilt/components/peerTileUtils.jsx
var PEER_NAME_PLACEHOLDER, labelMap, getVideoTileLabel;
var init_peerTileUtils = __esm({
  "src/Prebuilt/components/peerTileUtils.jsx"() {
    "use strict";
    init_define_process_env();
    PEER_NAME_PLACEHOLDER = "peerName";
    labelMap = /* @__PURE__ */ new Map([
      [[true, "screen"].toString(), "Your Screen"],
      [[true, "regular"].toString(), `You (${PEER_NAME_PLACEHOLDER})`],
      [[false, "screen"].toString(), `${PEER_NAME_PLACEHOLDER}'s Screen`],
      [[false, "regular"].toString(), PEER_NAME_PLACEHOLDER],
      [[true, void 0].toString(), `You (${PEER_NAME_PLACEHOLDER})`],
      [[false, void 0].toString(), `${PEER_NAME_PLACEHOLDER}`]
    ]);
    getVideoTileLabel = ({ peerName, isLocal, track }) => {
      const isPeerPresent = peerName !== void 0;
      if (!isPeerPresent || !track) {
        return isPeerPresent ? labelMap.get([isLocal, void 0].toString()).replace(PEER_NAME_PLACEHOLDER, peerName) : "";
      }
      const isLocallyMuted = track.volume === 0;
      let label = labelMap.get([isLocal, track.source].toString());
      if (label) {
        label = label.replace(PEER_NAME_PLACEHOLDER, peerName);
      } else {
        label = `${peerName} ${track.source}`;
      }
      return `${label}${isLocallyMuted ? " (Muted for you)" : ""}`;
    };
  }
});

// src/Prebuilt/components/VideoTile.jsx
var import_react124, import_react_use20, import_react_sdk60, import_react_icons62, Tile, PeerMetadata, VideoTile, VideoTile_default;
var init_VideoTile2 = __esm({
  "src/Prebuilt/components/VideoTile.jsx"() {
    "use strict";
    init_define_process_env();
    import_react124 = __toESM(require("react"));
    import_react_use20 = require("react-use");
    import_react_sdk60 = require("@100mslive/react-sdk");
    import_react_icons62 = require("@100mslive/react-icons");
    init_TileConnection();
    init_TileMenu2();
    init_AudioLevel2();
    init_Avatar2();
    init_Stats2();
    init_Theme();
    init_Video2();
    init_VideoTile();
    init_peerTileUtils();
    init_useUISettings();
    init_utils2();
    init_constants();
    Tile = ({
      peerId,
      trackId,
      width,
      height,
      objectFit = "cover",
      canMinimise = false,
      isDragabble = false,
      rootCSS = {},
      containerCSS = {},
      enableSpotlightingPeer = true,
      hideParticipantNameOnTile = false,
      roundedVideoTile = true,
      hideAudioMuteOnTile = false,
      hideMetadataOnTile = false
    }) => {
      const trackSelector = trackId ? (0, import_react_sdk60.selectVideoTrackByID)(trackId) : (0, import_react_sdk60.selectVideoTrackByPeerID)(peerId);
      const track = (0, import_react_sdk60.useHMSStore)(trackSelector);
      const isMobile = (0, import_react_use20.useMedia)(config.media.md);
      const peerName = (0, import_react_sdk60.useHMSStore)((0, import_react_sdk60.selectPeerNameByID)(peerId));
      const audioTrack = (0, import_react_sdk60.useHMSStore)((0, import_react_sdk60.selectAudioTrackByPeerID)(peerId));
      const localPeerID = (0, import_react_sdk60.useHMSStore)(import_react_sdk60.selectLocalPeerID);
      const isAudioOnly = useUISettings(UI_SETTINGS.isAudioOnly);
      const mirrorLocalVideo = useUISettings(UI_SETTINGS.mirrorLocalVideo);
      const showStatsOnTiles = useUISettings(UI_SETTINGS.showStatsOnTiles);
      const isAudioMuted = !(0, import_react_sdk60.useHMSStore)((0, import_react_sdk60.selectIsPeerAudioEnabled)(peerId));
      const isVideoMuted = !(track == null ? void 0 : track.enabled);
      const [isMouseHovered, setIsMouseHovered] = (0, import_react124.useState)(false);
      const isVideoDegraded = track == null ? void 0 : track.degraded;
      const isLocal = localPeerID === peerId;
      const [pinnedTrackId] = useSetAppDataByKey(APP_DATA.pinnedTrackId);
      const pinned = isSameTile({
        trackId: pinnedTrackId,
        videoTrackID: track == null ? void 0 : track.id,
        audioTrackID: audioTrack == null ? void 0 : audioTrack.id
      });
      const spotlighted = (0, import_react_sdk60.useHMSStore)((0, import_react_sdk60.selectSessionStore)(SESSION_STORE_KEY.SPOTLIGHT)) === peerId;
      const label = getVideoTileLabel({
        peerName,
        track,
        isLocal
      });
      const onHoverHandler = (0, import_react124.useCallback)((event) => {
        setIsMouseHovered(event.type === "mouseenter");
      }, []);
      const [ref, { width: calculatedWidth, height: calculatedHeight }] = (0, import_react_use20.useMeasure)();
      const isTileBigEnoughToShowStats = calculatedHeight >= 180 && calculatedWidth >= 180;
      const [avatarSize, attribBoxSize] = (0, import_react124.useMemo)(
        () => calculateAvatarAndAttribBoxSize(calculatedWidth, calculatedHeight),
        [calculatedWidth, calculatedHeight]
      );
      return /* @__PURE__ */ import_react124.default.createElement(
        StyledVideoTile.Root,
        {
          ref,
          css: __spreadValues({
            width,
            height
          }, rootCSS),
          "data-testid": `participant_tile_${peerName}`
        },
        peerName !== void 0 ? /* @__PURE__ */ import_react124.default.createElement(
          StyledVideoTile.Container,
          {
            onMouseEnter: onHoverHandler,
            onMouseLeave: onHoverHandler,
            noRadius: !roundedVideoTile,
            css: containerCSS
          },
          showStatsOnTiles && isTileBigEnoughToShowStats ? /* @__PURE__ */ import_react124.default.createElement(VideoTileStats, { audioTrackID: audioTrack == null ? void 0 : audioTrack.id, videoTrackID: track == null ? void 0 : track.id, peerID: peerId, isLocal }) : null,
          /* @__PURE__ */ import_react124.default.createElement(
            Video,
            {
              trackId: track == null ? void 0 : track.id,
              attach: isLocal ? void 0 : !isAudioOnly,
              mirror: mirrorLocalVideo && peerId === localPeerID && (track == null ? void 0 : track.source) === "regular" && (track == null ? void 0 : track.facingMode) !== "environment",
              noRadius: !roundedVideoTile,
              "data-testid": "participant_video_tile",
              css: {
                objectFit,
                filter: isVideoDegraded ? "blur($space$2)" : void 0,
                bg: "transparent"
              }
            }
          ),
          calculatedWidth > 0 && calculatedHeight > 0 ? /* @__PURE__ */ import_react124.default.createElement(import_react124.default.Fragment, null, isVideoMuted || !isLocal && isAudioOnly ? /* @__PURE__ */ import_react124.default.createElement(StyledVideoTile.AvatarContainer, null, /* @__PURE__ */ import_react124.default.createElement(Avatar, { name: peerName || "", "data-testid": "participant_avatar_icon", size: avatarSize })) : null, !hideAudioMuteOnTile ? isAudioMuted ? /* @__PURE__ */ import_react124.default.createElement(StyledVideoTile.AudioIndicator, { "data-testid": "participant_audio_mute_icon", size: attribBoxSize }, /* @__PURE__ */ import_react124.default.createElement(import_react_icons62.MicOffIcon, null)) : /* @__PURE__ */ import_react124.default.createElement(StyledVideoTile.AudioIndicator, { size: attribBoxSize }, /* @__PURE__ */ import_react124.default.createElement(AudioLevel, { trackId: audioTrack == null ? void 0 : audioTrack.id, size: attribBoxSize })) : null, !hideMetadataOnTile && /* @__PURE__ */ import_react124.default.createElement(PeerMetadata, { peerId, size: attribBoxSize })) : null,
          isMouseHovered || isDragabble && isMobile ? /* @__PURE__ */ import_react124.default.createElement(
            TileMenu_default,
            {
              peerID: peerId,
              audioTrackID: audioTrack == null ? void 0 : audioTrack.id,
              videoTrackID: track == null ? void 0 : track.id,
              canMinimise,
              enableSpotlightingPeer
            }
          ) : null,
          /* @__PURE__ */ import_react124.default.createElement(
            TileConnection_default,
            {
              hideLabel: hideParticipantNameOnTile,
              name: label,
              isTile: true,
              peerId,
              width,
              pinned,
              spotlighted
            }
          )
        ) : null
      );
    };
    PeerMetadata = ({ peerId, size }) => {
      const metaData = (0, import_react_sdk60.useHMSStore)((0, import_react_sdk60.selectPeerMetadata)(peerId));
      const isBRB = (metaData == null ? void 0 : metaData.isBRBOn) || false;
      const isHandRaised = (0, import_react_sdk60.useHMSStore)((0, import_react_sdk60.selectHasPeerHandRaised)(peerId));
      return /* @__PURE__ */ import_react124.default.createElement(import_react124.Fragment, null, isHandRaised ? /* @__PURE__ */ import_react124.default.createElement(StyledVideoTile.AttributeBox, { size, "data-testid": "raiseHand_icon_onTile" }, /* @__PURE__ */ import_react124.default.createElement(import_react_icons62.HandIcon, { width: 24, height: 24 })) : null, isBRB ? /* @__PURE__ */ import_react124.default.createElement(StyledVideoTile.AttributeBox, { size, "data-testid": "brb_icon_onTile" }, /* @__PURE__ */ import_react124.default.createElement(import_react_icons62.BrbTileIcon, { width: 22, height: 22 })) : null);
    };
    VideoTile = import_react124.default.memo(Tile);
    VideoTile_default = VideoTile;
  }
});

// src/Prebuilt/components/VirtualBackground/VBOption.tsx
var import_react125, Root25, Title4, Icon2, VBOption;
var init_VBOption = __esm({
  "src/Prebuilt/components/VirtualBackground/VBOption.tsx"() {
    "use strict";
    init_define_process_env();
    import_react125 = __toESM(require("react"));
    init_Layout();
    init_Text2();
    Root25 = ({
      onClick,
      mediaURL,
      isActive,
      children
    }) => /* @__PURE__ */ import_react125.default.createElement(
      Flex,
      {
        direction: "column",
        align: "center",
        css: __spreadValues({
          p: "$5",
          borderRadius: "$1",
          bg: "$surface_bright",
          border: `4px solid ${isActive ? "$primary_default" : "$surface_dim"}`,
          cursor: "pointer",
          "&:hover": { border: "4px solid $primary_dim" }
        }, mediaURL ? { height: "$20", backgroundImage: `url(${mediaURL})`, backgroundSize: "cover" } : {}),
        onClick: () => __async(void 0, null, function* () {
          return yield onClick == null ? void 0 : onClick();
        })
      },
      children
    );
    Title4 = ({ children }) => {
      return children ? /* @__PURE__ */ import_react125.default.createElement(Text, { variant: "xs", css: { color: "$on_surface_medium" } }, children) : null;
    };
    Icon2 = ({ children }) => {
      return children ? /* @__PURE__ */ import_react125.default.createElement(Box, { css: { color: "$on_surface_high" } }, children) : null;
    };
    VBOption = {
      Root: Root25,
      Title: Title4,
      Icon: Icon2
    };
  }
});

// src/Prebuilt/components/VirtualBackground/VBCollection.tsx
var import_react126, VBCollection;
var init_VBCollection = __esm({
  "src/Prebuilt/components/VirtualBackground/VBCollection.tsx"() {
    "use strict";
    init_define_process_env();
    import_react126 = __toESM(require("react"));
    init_Layout();
    init_Text2();
    init_VBOption();
    init_constants2();
    VBCollection = ({
      options,
      title,
      activeBackgroundType = "",
      activeBackground = ""
    }) => {
      if (options.length === 0) {
        return null;
      }
      return /* @__PURE__ */ import_react126.default.createElement(Box, { css: { mt: "$10" } }, /* @__PURE__ */ import_react126.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_high", fontWeight: "$semiBold" } }, title), /* @__PURE__ */ import_react126.default.createElement(Box, { css: { py: "$4", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "$8" } }, options.map((option) => /* @__PURE__ */ import_react126.default.createElement(
        VBOption.Root,
        __spreadProps(__spreadValues({
          key: (option == null ? void 0 : option.mediaURL) || (option == null ? void 0 : option.title)
        }, option), {
          isActive: [VB_EFFECT.NONE, VB_EFFECT.BLUR].includes(activeBackgroundType) && option.type === activeBackgroundType || activeBackground === (option == null ? void 0 : option.mediaURL)
        }),
        /* @__PURE__ */ import_react126.default.createElement(VBOption.Icon, null, option == null ? void 0 : option.icon),
        /* @__PURE__ */ import_react126.default.createElement(VBOption.Title, null, option == null ? void 0 : option.title)
      ))));
    };
  }
});

// src/Prebuilt/components/VirtualBackground/VBPicker.jsx
var import_react127, import_react_sdk61, import_react_icons63, iconDims, MAX_RETRIES, VBPicker;
var init_VBPicker = __esm({
  "src/Prebuilt/components/VirtualBackground/VBPicker.jsx"() {
    "use strict";
    init_define_process_env();
    import_react127 = __toESM(require("react"));
    import_react_sdk61 = require("@100mslive/react-sdk");
    import_react_icons63 = require("@100mslive/react-icons");
    init_src();
    init_Text2();
    init_VBCollection();
    init_useSidepane();
    init_useUISettings();
    init_constants();
    init_constants2();
    iconDims = { height: "40px", width: "40px" };
    MAX_RETRIES = 2;
    VBPicker = () => {
      var _a7;
      const toggleVB = useSidepaneToggle(SIDE_PANE_OPTIONS.VB);
      const hmsActions = (0, import_react_sdk61.useHMSActions)();
      const role = (0, import_react_sdk61.useHMSStore)(import_react_sdk61.selectLocalPeerRole);
      const [isVBSupported, setIsVBSupported] = (0, import_react127.useState)(false);
      const localPeerVideoTrackID = (0, import_react_sdk61.useHMSStore)(import_react_sdk61.selectLocalVideoTrackID);
      const localPeer = (0, import_react_sdk61.useHMSStore)(import_react_sdk61.selectLocalPeer);
      const [background, setBackground] = (0, import_react127.useState)(vbPlugin.background);
      const [backgroundType, setBackgroundType] = (0, import_react127.useState)(vbPlugin.backgroundType);
      const isVideoOn = (0, import_react_sdk61.useHMSStore)(import_react_sdk61.selectIsLocalVideoEnabled);
      const mirrorLocalVideo = useUISettings(UI_SETTINGS.mirrorLocalVideo);
      const trackSelector = (0, import_react_sdk61.selectVideoTrackByID)(localPeer == null ? void 0 : localPeer.videoTrack);
      const track = (0, import_react_sdk61.useHMSStore)(trackSelector);
      const roomState = (0, import_react_sdk61.useHMSStore)(import_react_sdk61.selectRoomState);
      const isLargeRoom = (0, import_react_sdk61.useHMSStore)(import_react_sdk61.selectIsLargeRoom);
      const addedPluginToVideoTrack = (0, import_react127.useRef)(false);
      const showVideoTile = isVideoOn && isLargeRoom && roomState !== import_react_sdk61.HMSRoomState.Preview;
      const clearVBState = () => {
        setBackground(VB_EFFECT.NONE);
        setBackgroundType(VB_EFFECT.NONE);
      };
      (0, import_react127.useEffect)(() => {
        if (!localPeerVideoTrackID) {
          return;
        }
        if (vbPlugin) {
          const pluginSupport = hmsActions.validateVideoPluginSupport(vbPlugin);
          setIsVBSupported(pluginSupport.isSupported);
        }
      }, [hmsActions, localPeerVideoTrackID]);
      function disableEffects() {
        return __async(this, null, function* () {
          if (vbPlugin) {
            vbPlugin.setBackground(VB_EFFECT.NONE, VB_EFFECT.NONE);
            clearVBState();
          }
        });
      }
      function addPlugin(_0) {
        return __async(this, arguments, function* ({ mediaURL = "", blurPower = 0 }) {
          let retries = 0;
          try {
            if (mediaURL) {
              const img = document.createElement("img");
              img.alt = "VB";
              img.src = mediaURL;
              try {
                yield vbPlugin.setBackground(img, VB_EFFECT.MEDIA);
              } catch (e) {
                console.error(e);
                if (retries++ < MAX_RETRIES) {
                  yield vbPlugin.setBackground(img, VB_EFFECT.MEDIA);
                }
              }
            } else if (blurPower) {
              yield vbPlugin.setBackground(VB_EFFECT.BLUR, VB_EFFECT.BLUR);
            }
            setBackground(mediaURL || VB_EFFECT.BLUR);
            setBackgroundType(mediaURL ? VB_EFFECT.MEDIA : VB_EFFECT.BLUR);
            if (role && !addedPluginToVideoTrack.current) {
              yield hmsActions.addPluginToVideoTrack(vbPlugin, Math.floor(role.publishParams.video.frameRate / 2));
              addedPluginToVideoTrack.current = true;
            }
          } catch (err) {
            console.error("Failed to apply VB", err);
            disableEffects();
          }
        });
      }
      (0, import_react127.useEffect)(() => {
        if (!isVideoOn) {
          toggleVB();
        }
      }, [isVideoOn, toggleVB]);
      if (!isVBSupported) {
        return null;
      }
      return /* @__PURE__ */ import_react127.default.createElement(Box, { css: { maxHeight: "100%", overflowY: "auto", pr: "$6" } }, /* @__PURE__ */ import_react127.default.createElement(Flex, { align: "center", justify: "between", css: { w: "100%", position: "sticky", top: 0 } }, /* @__PURE__ */ import_react127.default.createElement(Text, { variant: "h6", css: { color: "$on_surface_high" } }, "Virtual Background"), /* @__PURE__ */ import_react127.default.createElement(
        Box,
        {
          css: { color: "$on_surface_high", "&:hover": { color: "$on_surface_medium" }, cursor: "pointer" },
          onClick: toggleVB
        },
        /* @__PURE__ */ import_react127.default.createElement(import_react_icons63.CloseIcon, null)
      )), showVideoTile ? /* @__PURE__ */ import_react127.default.createElement(
        Video,
        {
          mirror: (track == null ? void 0 : track.facingMode) !== "environment" && mirrorLocalVideo,
          trackId: localPeer == null ? void 0 : localPeer.videoTrack,
          "data-testid": "preview_tile",
          css: { width: "100%", height: "16rem", position: "sticky", top: "$17" }
        }
      ) : null, /* @__PURE__ */ import_react127.default.createElement(
        VBCollection,
        {
          title: "Effects",
          options: [
            {
              title: "No effect",
              icon: /* @__PURE__ */ import_react127.default.createElement(import_react_icons63.CrossCircleIcon, { style: iconDims }),
              type: VB_EFFECT.NONE,
              onClick: () => __async(void 0, null, function* () {
                return yield disableEffects();
              })
            },
            {
              title: "Blur",
              icon: /* @__PURE__ */ import_react127.default.createElement(import_react_icons63.BlurPersonHighIcon, { style: iconDims }),
              type: VB_EFFECT.BLUR,
              onClick: () => __async(void 0, null, function* () {
                return yield addPlugin({ blurPower: 0.5 });
              })
            }
          ],
          activeBackgroundType: backgroundType || VB_EFFECT.NONE,
          activeBackground: ((_a7 = vbPlugin.background) == null ? void 0 : _a7.src) || vbPlugin.background || VB_EFFECT.NONE
        }
      ), /* @__PURE__ */ import_react127.default.createElement(
        VBCollection,
        {
          title: "Backgrounds",
          options: defaultMedia2.map((mediaURL) => ({
            type: VB_EFFECT.MEDIA,
            mediaURL,
            onClick: () => __async(void 0, null, function* () {
              return yield addPlugin({ mediaURL });
            })
          })),
          activeBackgroundType: backgroundType || VB_EFFECT.NONE,
          activeBackground: (background == null ? void 0 : background.src) || background || VB_EFFECT.NONE
        }
      ));
    };
  }
});

// src/Prebuilt/layouts/SidePane.tsx
var import_react128, import_react_use21, import_react_sdk62, SidePane, SidePane_default;
var init_SidePane = __esm({
  "src/Prebuilt/layouts/SidePane.tsx"() {
    "use strict";
    init_define_process_env();
    import_react128 = __toESM(require("react"));
    import_react_use21 = require("react-use");
    import_react_sdk62 = require("@100mslive/react-sdk");
    init_Polls();
    init_SidePaneTabs();
    init_VideoTile2();
    init_VBPicker();
    init_Layout();
    init_Theme();
    init_useSidepane();
    init_useRoomLayoutScreen();
    init_utils();
    init_constants();
    SidePane = ({
      screenType,
      tileProps,
      hideControls = false
    }) => {
      var _a7, _b7;
      const isMobile = (0, import_react_use21.useMedia)(config.media.md);
      const sidepane = (0, import_react_sdk62.useHMSStore)((0, import_react_sdk62.selectAppData)(APP_DATA.sidePane));
      const activeScreensharePeerId = (0, import_react_sdk62.useHMSStore)((0, import_react_sdk62.selectAppData)(APP_DATA.activeScreensharePeerId));
      const trackId = (_a7 = (0, import_react_sdk62.useHMSStore)((0, import_react_sdk62.selectVideoTrackByPeerID)(activeScreensharePeerId))) == null ? void 0 : _a7.id;
      const { elements } = useRoomLayoutConferencingScreen();
      const resetSidePane = useSidepaneReset();
      let ViewComponent;
      if (sidepane === SIDE_PANE_OPTIONS.POLLS) {
        ViewComponent = /* @__PURE__ */ import_react128.default.createElement(Polls, null);
      }
      if (sidepane === SIDE_PANE_OPTIONS.PARTICIPANTS || sidepane === SIDE_PANE_OPTIONS.CHAT) {
        ViewComponent = /* @__PURE__ */ import_react128.default.createElement(SidePaneTabs, { screenType, hideControls, active: sidepane });
      }
      if (sidepane === SIDE_PANE_OPTIONS.VB) {
        ViewComponent = /* @__PURE__ */ import_react128.default.createElement(VBPicker, null);
      }
      (0, import_react128.useEffect)(() => {
        return () => {
          resetSidePane();
        };
      }, [resetSidePane]);
      if (!ViewComponent && !trackId) {
        return null;
      }
      const tileLayout = {
        hideParticipantNameOnTile: tileProps == null ? void 0 : tileProps.hide_participant_name_on_tile,
        roundedVideoTile: tileProps == null ? void 0 : tileProps.rounded_video_tile,
        hideAudioMuteOnTile: tileProps == null ? void 0 : tileProps.hide_audio_mute_on_tile,
        hideMetadataOnTile: tileProps == null ? void 0 : tileProps.hide_metadata_on_tile,
        objectFit: tileProps == null ? void 0 : tileProps.video_object_fit
      };
      const VB = sidepane === SIDE_PANE_OPTIONS.VB;
      const mwebStreamingChat = isMobile && sidepane === SIDE_PANE_OPTIONS.CHAT && ((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.is_overlay);
      return /* @__PURE__ */ import_react128.default.createElement(
        Flex,
        {
          direction: "column",
          justify: "center",
          css: {
            w: "$100",
            h: "100%",
            flexShrink: 0,
            gap: "$4",
            position: "relative",
            "@md": { position: mwebStreamingChat ? "absolute" : "", zIndex: 12 }
          }
        },
        trackId && /* @__PURE__ */ import_react128.default.createElement(
          VideoTile_default,
          __spreadValues({
            peerId: activeScreensharePeerId,
            trackId,
            width: "100%",
            height: 225,
            rootCSS: { p: 0, alignSelf: "start", flexShrink: 0 }
          }, tileLayout)
        ),
        !!ViewComponent && /* @__PURE__ */ import_react128.default.createElement(
          Box,
          {
            css: {
              w: "$100",
              h: mwebStreamingChat ? "0" : "100%",
              p: VB ? "$10 $6 $10 $10" : "$10",
              flex: "1 1 0",
              minHeight: 0,
              maxHeight: mwebStreamingChat ? "300px" : "unset",
              background: mwebStreamingChat ? "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 35.94%, rgba(0, 0, 0, 0.64) 100%)" : "$surface_dim",
              r: "$1",
              position: "relative",
              "@lg": {
                w: "100%",
                h: "100%",
                ml: 0,
                right: 0,
                position: "fixed",
                bottom: 0,
                borderRadius: 0,
                zIndex: 10
              },
              "@md": {
                p: "$6 $8",
                pb: mwebStreamingChat ? "$20" : "$12",
                borderTopLeftRadius: sidepane === SIDE_PANE_OPTIONS.POLLS ? "$2" : "0",
                borderTopRightRadius: sidepane === SIDE_PANE_OPTIONS.POLLS ? "$2" : "0",
                animation: `${translateAcross({ yFrom: "100%" })} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
              }
            }
          },
          ViewComponent
        )
      );
    };
    SidePane_default = SidePane;
  }
});

// src/Prebuilt/components/Chip.tsx
var import_react129, Chip, Chip_default;
var init_Chip = __esm({
  "src/Prebuilt/components/Chip.tsx"() {
    "use strict";
    init_define_process_env();
    import_react129 = __toESM(require("react"));
    init_Layout();
    init_Text2();
    Chip = ({
      icon = /* @__PURE__ */ import_react129.default.createElement(import_react129.default.Fragment, null),
      content = "",
      backgroundColor = "$surface_default",
      textColor = "$on_surface_high",
      hideIfNoContent = false,
      onClick,
      css: css2 = {}
    }) => {
      if (hideIfNoContent && !content) {
        return null;
      }
      return /* @__PURE__ */ import_react129.default.createElement(
        Flex,
        {
          align: "center",
          css: __spreadValues({ backgroundColor, p: "$4 $6", gap: "$2", borderRadius: "$4" }, css2),
          onClick: () => onClick == null ? void 0 : onClick()
        },
        icon,
        /* @__PURE__ */ import_react129.default.createElement(Text, { variant: "sm", css: { fontWeight: "$semiBold", color: textColor } }, content)
      );
    };
    Chip_default = Chip;
  }
});

// src/Prebuilt/components/FullPageProgress.jsx
var import_react130, FullPageProgress, FullPageProgress_default;
var init_FullPageProgress = __esm({
  "src/Prebuilt/components/FullPageProgress.jsx"() {
    "use strict";
    init_define_process_env();
    import_react130 = __toESM(require("react"));
    init_Layout();
    init_Loading2();
    init_Text2();
    FullPageProgress = ({ loaderColor = "$primary_default", text = "", css: css2 = {} }) => /* @__PURE__ */ import_react130.default.createElement(Flex, { direction: "column", justify: "center", align: "center", css: __spreadValues({ size: "100%", color: loaderColor }, css2) }, /* @__PURE__ */ import_react130.default.createElement(Loading, { color: "currentColor", size: 100 }), text ? /* @__PURE__ */ import_react130.default.createElement(Text, { css: { mt: "$10", color: "$on_surface_high" } }, text) : null);
    FullPageProgress_default = FullPageProgress;
  }
});

// src/Prebuilt/components/Header/HeaderComponents.jsx
var import_react131, import_react_sdk63, import_react_icons64, SpeakerTag, LogoImg, Logo;
var init_HeaderComponents = __esm({
  "src/Prebuilt/components/Header/HeaderComponents.jsx"() {
    "use strict";
    init_define_process_env();
    import_react131 = __toESM(require("react"));
    import_react_sdk63 = require("@100mslive/react-sdk");
    import_react_icons64 = require("@100mslive/react-icons");
    init_src();
    init_roomLayoutProvider();
    SpeakerTag = () => {
      const dominantSpeaker = (0, import_react_sdk63.useHMSStore)(import_react_sdk63.selectDominantSpeaker);
      return dominantSpeaker && dominantSpeaker.name && /* @__PURE__ */ import_react131.default.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: { flex: "1 1 0", color: "$on_primary_high", "@md": { display: "none" } }
        },
        /* @__PURE__ */ import_react131.default.createElement(VerticalDivider, { css: { ml: "$8" } }),
        /* @__PURE__ */ import_react131.default.createElement(import_react_icons64.VolumeOneIcon, null),
        /* @__PURE__ */ import_react131.default.createElement(Text, { variant: "md", css: __spreadProps(__spreadValues({}, textEllipsis(200)), { ml: "$2" }), title: dominantSpeaker.name }, dominantSpeaker.name)
      );
    };
    LogoImg = styled("img", {
      maxHeight: "$14",
      w: "auto",
      objectFit: "contain",
      "@md": {
        maxHeight: "$12"
      }
    });
    Logo = () => {
      var _a7;
      const roomLayout = useRoomLayout();
      const logo = (_a7 = roomLayout == null ? void 0 : roomLayout.logo) == null ? void 0 : _a7.url;
      const [hideImage, setHideImage] = (0, import_react131.useState)(false);
      (0, import_react131.useEffect)(() => {
        if (hideImage) {
          setHideImage(false);
        }
      }, [logo]);
      return logo && !hideImage ? /* @__PURE__ */ import_react131.default.createElement(
        LogoImg,
        {
          src: logo,
          alt: "Brand Logo",
          onError: (e) => {
            e.target.onerror = null;
            setHideImage(true);
          }
        }
      ) : null;
    };
  }
});

// src/Prebuilt/components/Preview/PreviewForm.tsx
var import_react132, import_react_use22, import_join_form3, import_react_sdk64, import_react_icons65, PreviewForm, Form, PreviewForm_default;
var init_PreviewForm = __esm({
  "src/Prebuilt/components/Preview/PreviewForm.tsx"() {
    "use strict";
    init_define_process_env();
    import_react132 = __toESM(require("react"));
    import_react_use22 = require("react-use");
    import_join_form3 = require("@100mslive/types-prebuilt/elements/join_form");
    import_react_sdk64 = require("@100mslive/react-sdk");
    import_react_icons65 = require("@100mslive/react-icons");
    init_src();
    init_roomLayoutProvider();
    init_PreviewJoin();
    PreviewForm = ({
      name,
      onChange,
      onJoin,
      enableJoin,
      cannotPublishVideo = false,
      cannotPublishAudio = false
    }) => {
      var _a7, _b7, _c;
      const formSubmit = (e) => {
        e.preventDefault();
      };
      const isMobile = (0, import_react_use22.useMedia)(config.media.md);
      const { isHLSRunning, isRTMPRunning, isRecordingOn } = (0, import_react_sdk64.useRecordingStreaming)();
      const layout = useRoomLayout();
      const { join_form: joinForm = {} } = ((_c = (_b7 = (_a7 = layout == null ? void 0 : layout.screens) == null ? void 0 : _a7.preview) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements) || {};
      const showGoLive = (joinForm == null ? void 0 : joinForm.join_btn_type) === import_join_form3.JoinForm_JoinBtnType.JOIN_BTN_TYPE_JOIN_AND_GO_LIVE && !isHLSRunning && !isRTMPRunning && !isRecordingOn;
      return /* @__PURE__ */ import_react132.default.createElement(
        Form,
        {
          css: { flexDirection: cannotPublishVideo ? "column" : "row", "@md": { flexDirection: "row" } },
          onSubmit: formSubmit
        },
        /* @__PURE__ */ import_react132.default.createElement(Flex, { align: "center", css: { gap: "$8", w: "100%" } }, /* @__PURE__ */ import_react132.default.createElement(
          Input,
          {
            required: true,
            id: "name",
            css: { w: "100%", boxSizing: "border-box" },
            value: name,
            onChange: (e) => onChange(e.target.value.trimStart()),
            placeholder: "Enter name",
            autoFocus: true,
            autoComplete: "name",
            onKeyDown: (e) => {
              if (e.key === "Enter" && name.trim().length > 0) {
                e.preventDefault();
                if (isMobile) {
                  return;
                }
                onJoin();
              }
            }
          }
        ), cannotPublishAudio && cannotPublishVideo && !isMobile ? /* @__PURE__ */ import_react132.default.createElement(PreviewSettings, null) : null),
        /* @__PURE__ */ import_react132.default.createElement(Button, { type: "submit", icon: true, disabled: !name || !enableJoin, onClick: onJoin }, showGoLive ? /* @__PURE__ */ import_react132.default.createElement(import_react_icons65.RadioIcon, { height: 18, width: 18 }) : null, showGoLive ? joinForm.go_live_btn_label : joinForm.join_btn_label)
      );
    };
    Form = styled("form", {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "$8",
      mt: "$10",
      mb: "$10",
      "@md": {
        gap: "$4"
      }
    });
    PreviewForm_default = PreviewForm;
  }
});

// src/Prebuilt/components/Preview/PreviewJoin.tsx
var import_react133, import_react_use23, import_react_sdk65, import_react_icons66, getParticipantChipContent, useLocalTileAspectRatio, PreviewJoin, Container4, PreviewTile, PreviewControls, PreviewSettings, PreviewJoin_default;
var init_PreviewJoin = __esm({
  "src/Prebuilt/components/Preview/PreviewJoin.tsx"() {
    "use strict";
    init_define_process_env();
    import_react133 = __toESM(require("react"));
    import_react_use23 = require("react-use");
    import_react_sdk65 = require("@100mslive/react-sdk");
    import_react_icons66 = require("@100mslive/react-icons");
    init_src();
    init_AudioLevel2();
    init_AppContext();
    init_IconButton3();
    init_SidePane();
    init_roomLayoutProvider();
    init_AudioVideoToggle();
    init_Chip();
    init_TileConnection();
    init_FullPageProgress();
    init_HeaderComponents();
    init_SettingsModal();
    init_VBToggle();
    init_PreviewForm();
    init_useUISettings();
    init_useUserPreferences();
    init_utils2();
    init_constants();
    getParticipantChipContent = (peerCount = 0) => {
      if (peerCount === 0) {
        return "You are the first to join";
      }
      const formattedNum = getFormattedCount(peerCount);
      return `${formattedNum} other${parseInt(formattedNum) === 1 ? "" : "s"} in the session`;
    };
    useLocalTileAspectRatio = () => {
      const localPeer = (0, import_react_sdk65.useHMSStore)(import_react_sdk65.selectLocalPeer);
      const videoTrack = (0, import_react_sdk65.useHMSStore)((0, import_react_sdk65.selectVideoTrackByID)(localPeer == null ? void 0 : localPeer.videoTrack));
      const isMobile = (0, import_react_use23.useMedia)(config.media.md);
      let aspectRatio = 0;
      if ((videoTrack == null ? void 0 : videoTrack.width) && (videoTrack == null ? void 0 : videoTrack.height)) {
        aspectRatio = videoTrack.width / videoTrack.height;
      } else {
        aspectRatio = isMobile ? 9 / 16 : 16 / 9;
      }
      return aspectRatio;
    };
    PreviewJoin = ({
      skipPreview,
      initialName,
      asRole
    }) => {
      var _a7, _b7, _c;
      const [previewPreference, setPreviewPreference] = useUserPreferences(
        UserPreferencesKeys.PREVIEW,
        defaultPreviewPreference
      );
      const { isStreamingOn } = (0, import_react_sdk65.useRecordingStreaming)();
      const authToken = useAuthToken();
      const [name, setName] = (0, import_react133.useState)(initialName || previewPreference.name);
      const { toggleAudio, toggleVideo } = (0, import_react_sdk65.useAVToggle)();
      const [previewError, setPreviewError] = (0, import_react133.useState)(false);
      const { endpoints } = useHMSPrebuiltContext();
      const { peerCount } = (0, import_react_sdk65.useParticipants)();
      const { enableJoin, preview, join } = (0, import_react_sdk65.usePreviewJoin)({
        name,
        token: authToken,
        initEndpoint: endpoints == null ? void 0 : endpoints.init,
        initialSettings: {
          isAudioMuted: skipPreview || previewPreference.isAudioMuted,
          isVideoMuted: skipPreview || previewPreference.isVideoMuted,
          speakerAutoSelectionBlacklist: ["Yeti Stereo Microphone"]
        },
        captureNetworkQualityInPreview: true,
        handleError: (_, method) => {
          if (method === "preview") {
            setPreviewError(true);
          }
        },
        asRole
      });
      const roomState = (0, import_react_sdk65.useHMSStore)(import_react_sdk65.selectRoomState);
      const savePreferenceAndJoin = (0, import_react133.useCallback)(() => {
        setPreviewPreference({
          name
        });
        join();
      }, [join, name, setPreviewPreference]);
      const roomLayout = useRoomLayout();
      const { preview_header: previewHeader = {} } = ((_c = (_b7 = (_a7 = roomLayout == null ? void 0 : roomLayout.screens) == null ? void 0 : _a7.preview) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements) || {};
      const aspectRatio = useLocalTileAspectRatio();
      (0, import_react133.useEffect)(() => {
        if (authToken) {
          if (skipPreview) {
            savePreferenceAndJoin();
          } else {
            preview();
          }
        }
      }, [authToken, skipPreview]);
      (0, import_react133.useEffect)(() => {
        if (initialName) {
          setName(initialName);
        }
      }, [initialName]);
      return roomState === import_react_sdk65.HMSRoomState.Preview ? /* @__PURE__ */ import_react133.default.createElement(Flex, { justify: "center", css: { size: "100%", position: "relative" } }, /* @__PURE__ */ import_react133.default.createElement(Container4, { css: { h: "100%", pt: "$10", "@md": { justifyContent: "space-between" } } }, toggleVideo ? null : /* @__PURE__ */ import_react133.default.createElement(Box, null), /* @__PURE__ */ import_react133.default.createElement(Flex, { direction: "column", justify: "center", css: { w: "100%", maxWidth: "640px" } }, /* @__PURE__ */ import_react133.default.createElement(Logo, null), /* @__PURE__ */ import_react133.default.createElement(
        Text,
        {
          variant: "h4",
          css: { wordBreak: "break-word", textAlign: "center", mt: "$14", mb: "$4", "@md": { mt: "$8", mb: "$2" } }
        },
        previewHeader.title
      ), /* @__PURE__ */ import_react133.default.createElement(
        Text,
        {
          css: { c: "$on_surface_medium", my: "0", textAlign: "center", maxWidth: "100%", wordWrap: "break-word" },
          variant: "sm"
        },
        previewHeader.sub_title
      ), /* @__PURE__ */ import_react133.default.createElement(Flex, { justify: "center", css: { mt: "$14", "@md": { mt: "$8", mb: "0" }, gap: "$4" } }, isStreamingOn ? /* @__PURE__ */ import_react133.default.createElement(
        Chip_default,
        {
          content: "LIVE",
          backgroundColor: "$alert_error_default",
          textColor: "#FFF",
          icon: /* @__PURE__ */ import_react133.default.createElement(Box, { css: { h: "$sm", w: "$sm", backgroundColor: "$on_primary_high", borderRadius: "$round" } })
        }
      ) : null, /* @__PURE__ */ import_react133.default.createElement(Chip_default, { content: getParticipantChipContent(peerCount), hideIfNoContent: true }))), toggleVideo ? /* @__PURE__ */ import_react133.default.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: {
            mt: "$14",
            "@md": { mt: 0 },
            "@sm": { width: "100%" },
            flexDirection: "column"
          }
        },
        /* @__PURE__ */ import_react133.default.createElement(PreviewTile, { name, error: previewError })
      ) : null, /* @__PURE__ */ import_react133.default.createElement(Box, { css: { w: "100%", maxWidth: `${Math.max(aspectRatio, 1) * 360}px` } }, /* @__PURE__ */ import_react133.default.createElement(PreviewControls, { hideSettings: !toggleVideo && !toggleAudio }), /* @__PURE__ */ import_react133.default.createElement(
        PreviewForm_default,
        {
          name,
          onChange: setName,
          enableJoin,
          onJoin: savePreferenceAndJoin,
          cannotPublishVideo: !toggleVideo,
          cannotPublishAudio: !toggleAudio
        }
      ))), /* @__PURE__ */ import_react133.default.createElement(Box, { css: { position: "absolute", right: "0", top: 0, height: "100%" } }, /* @__PURE__ */ import_react133.default.createElement(SidePane_default, { screenType: "default" }))) : /* @__PURE__ */ import_react133.default.createElement(FullPageProgress_default, null);
    };
    Container4 = styled("div", __spreadProps(__spreadValues({
      width: "100%"
    }, flexCenter), {
      flexDirection: "column",
      px: "$10"
    }));
    PreviewTile = ({ name, error }) => {
      const localPeer = (0, import_react_sdk65.useHMSStore)(import_react_sdk65.selectLocalPeer);
      const { isLocalAudioEnabled, toggleAudio } = (0, import_react_sdk65.useAVToggle)();
      const isVideoOn = (0, import_react_sdk65.useHMSStore)(import_react_sdk65.selectIsLocalVideoEnabled);
      const mirrorLocalVideo = useUISettings(UI_SETTINGS.mirrorLocalVideo);
      const trackSelector = (0, import_react_sdk65.selectVideoTrackByID)(localPeer == null ? void 0 : localPeer.videoTrack);
      const track = (0, import_react_sdk65.useHMSStore)(trackSelector);
      const showMuteIcon = !isLocalAudioEnabled || !toggleAudio;
      const aspectRatio = useLocalTileAspectRatio();
      const [ref, { width: calculatedWidth, height: calculatedHeight }] = (0, import_react_use23.useMeasure)();
      const [avatarSize, attribBoxSize] = (0, import_react133.useMemo)(
        () => calculateAvatarAndAttribBoxSize(calculatedWidth, calculatedHeight),
        [calculatedWidth, calculatedHeight]
      );
      return /* @__PURE__ */ import_react133.default.createElement(
        StyledVideoTile.Container,
        {
          ref,
          css: {
            bg: "$surface_default",
            aspectRatio,
            height: "min(360px, 70vh)",
            maxWidth: "640px",
            overflow: "clip",
            "@md": {
              width: "min(220px, 70vw)",
              maxWidth: "100%",
              my: "$4"
            }
          }
        },
        localPeer ? /* @__PURE__ */ import_react133.default.createElement(import_react133.default.Fragment, null, /* @__PURE__ */ import_react133.default.createElement(TileConnection_default, { name, peerId: localPeer.id, hideLabel: true }), /* @__PURE__ */ import_react133.default.createElement(
          Video,
          {
            mirror: (track == null ? void 0 : track.facingMode) !== "environment" && mirrorLocalVideo,
            trackId: localPeer.videoTrack,
            "data-testid": "preview_tile"
          }
        ), !isVideoOn ? /* @__PURE__ */ import_react133.default.createElement(StyledVideoTile.AvatarContainer, null, /* @__PURE__ */ import_react133.default.createElement(Avatar, { name, "data-testid": "preview_avatar_tile", size: avatarSize })) : null) : null,
        !localPeer && !error ? /* @__PURE__ */ import_react133.default.createElement(FullPageProgress_default, null) : null,
        showMuteIcon ? /* @__PURE__ */ import_react133.default.createElement(StyledVideoTile.AudioIndicator, { size: attribBoxSize }, /* @__PURE__ */ import_react133.default.createElement(import_react_icons66.MicOffIcon, null)) : /* @__PURE__ */ import_react133.default.createElement(StyledVideoTile.AudioIndicator, { size: attribBoxSize }, /* @__PURE__ */ import_react133.default.createElement(AudioLevel, { trackId: localPeer == null ? void 0 : localPeer.audioTrack }))
      );
    };
    PreviewControls = ({ hideSettings }) => {
      const isMobile = (0, import_react_use23.useMedia)(config.media.md);
      return /* @__PURE__ */ import_react133.default.createElement(
        Flex,
        {
          justify: hideSettings && isMobile ? "center" : "between",
          css: {
            width: "100%",
            mt: "$8"
          }
        },
        /* @__PURE__ */ import_react133.default.createElement(Flex, { css: { gap: "$4" } }, /* @__PURE__ */ import_react133.default.createElement(AudioVideoToggle, null), !isMobile ? /* @__PURE__ */ import_react133.default.createElement(VBToggle, null) : null),
        !hideSettings ? /* @__PURE__ */ import_react133.default.createElement(PreviewSettings, null) : null
      );
    };
    PreviewSettings = import_react133.default.memo(() => {
      const [open, setOpen] = (0, import_react133.useState)(false);
      return /* @__PURE__ */ import_react133.default.createElement(import_react133.Fragment, null, /* @__PURE__ */ import_react133.default.createElement(IconButton_default, { "data-testid": "preview_setting_btn", css: { flexShrink: 0 }, onClick: () => setOpen((value) => !value) }, /* @__PURE__ */ import_react133.default.createElement(import_react_icons66.SettingsIcon, null)), open && /* @__PURE__ */ import_react133.default.createElement(SettingsModal_default, { open, onOpenChange: setOpen }));
    });
    PreviewJoin_default = PreviewJoin;
  }
});

// src/Prebuilt/components/RoleChangeRequest/RequestPrompt.tsx
var import_react134, import_react_use24, RequestPrompt, RequestActions;
var init_RequestPrompt = __esm({
  "src/Prebuilt/components/RoleChangeRequest/RequestPrompt.tsx"() {
    "use strict";
    init_define_process_env();
    import_react134 = __toESM(require("react"));
    import_react_use24 = require("react-use");
    init_src();
    init_Sheet2();
    RequestPrompt = ({
      open = true,
      onOpenChange,
      title,
      body,
      actionText = "Accept",
      onAction
    }) => {
      const isMobile = (0, import_react_use24.useMedia)(config.media.md);
      if (isMobile) {
        return /* @__PURE__ */ import_react134.default.createElement(Sheet.Root, { open, onOpenChange }, /* @__PURE__ */ import_react134.default.createElement(Sheet.Content, { css: { py: "$8" } }, /* @__PURE__ */ import_react134.default.createElement(Text, { css: { fontWeight: "$semiBold", c: "$on_surface_high", "@md": { px: "$8" } } }, title), body, /* @__PURE__ */ import_react134.default.createElement(RequestActions, { actionText, onAction })));
      }
      return /* @__PURE__ */ import_react134.default.createElement(Dialog.Root, { open, modal: false, onOpenChange }, /* @__PURE__ */ import_react134.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react134.default.createElement(Dialog.Content, { css: { p: "$10" }, onInteractOutside: (e) => e.preventDefault() }, /* @__PURE__ */ import_react134.default.createElement(Dialog.Title, { css: { p: 0, display: "flex", flexDirection: "row", gap: "$md", justifyContent: "center" } }, /* @__PURE__ */ import_react134.default.createElement(Text, { variant: "h6" }, title)), /* @__PURE__ */ import_react134.default.createElement(Box, { css: { mt: "$4", mb: "$10" } }, body), /* @__PURE__ */ import_react134.default.createElement(RequestActions, { actionText, onAction }))));
    };
    RequestActions = ({ onAction, actionText }) => /* @__PURE__ */ import_react134.default.createElement(Flex, { justify: "center", align: "center", css: { width: "100%", gap: "$md", "@md": { mt: "$8", px: "$8" } } }, /* @__PURE__ */ import_react134.default.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ import_react134.default.createElement(Dialog.Close, { css: { width: "100%" } }, /* @__PURE__ */ import_react134.default.createElement(Button, { variant: "standard", outlined: true, css: { width: "100%" } }, "Decline"))), /* @__PURE__ */ import_react134.default.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ import_react134.default.createElement(Button, { variant: "primary", css: { width: "100%" }, onClick: onAction }, actionText)));
  }
});

// src/Prebuilt/components/RoleChangeRequest/RoleChangeRequestModal.tsx
var import_react135, import_react_sdk66, RoleChangeRequestModal;
var init_RoleChangeRequestModal = __esm({
  "src/Prebuilt/components/RoleChangeRequest/RoleChangeRequestModal.tsx"() {
    "use strict";
    init_define_process_env();
    import_react135 = __toESM(require("react"));
    import_react_sdk66 = require("@100mslive/react-sdk");
    init_src();
    init_PreviewJoin();
    init_RequestPrompt();
    init_useMetadata();
    init_constants();
    RoleChangeRequestModal = () => {
      const hmsActions = (0, import_react_sdk66.useHMSActions)();
      const { updateMetaData } = useMyMetadata();
      const currentRole = (0, import_react_sdk66.useHMSStore)(import_react_sdk66.selectLocalPeerRoleName);
      const roleChangeRequest = (0, import_react_sdk66.useHMSStore)(import_react_sdk66.selectRoleChangeRequest);
      const name = (0, import_react_sdk66.useHMSStore)(import_react_sdk66.selectLocalPeerName);
      const { sendEvent } = (0, import_react_sdk66.useCustomEvent)({ type: ROLE_CHANGE_DECLINED });
      (0, import_react135.useEffect)(() => {
        if (!(roleChangeRequest == null ? void 0 : roleChangeRequest.role)) {
          return;
        }
        (() => __async(void 0, null, function* () {
          yield hmsActions.preview({ asRole: roleChangeRequest.role.name });
        }))();
      }, [hmsActions, roleChangeRequest, currentRole, updateMetaData]);
      if (!(roleChangeRequest == null ? void 0 : roleChangeRequest.role)) {
        return null;
      }
      const body = /* @__PURE__ */ import_react135.default.createElement(import_react135.default.Fragment, null, /* @__PURE__ */ import_react135.default.createElement(
        Text,
        {
          variant: "xs",
          css: {
            c: "$on_surface_medium",
            textAlign: "center",
            "@md": { textAlign: "left", borderBottom: "1px solid $border_bright", pb: "$4", px: "$8" }
          }
        },
        "Setup your audio and video before joining"
      ), /* @__PURE__ */ import_react135.default.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: {
            "@sm": { width: "100%" },
            flexDirection: "column",
            mt: "$6",
            "@md": { px: "$8" }
          }
        },
        /* @__PURE__ */ import_react135.default.createElement(PreviewTile, { name: name || "" }),
        /* @__PURE__ */ import_react135.default.createElement(PreviewControls, { hideSettings: true })
      ));
      return /* @__PURE__ */ import_react135.default.createElement(
        RequestPrompt,
        {
          title: "You're invited to join the stage",
          onOpenChange: (value) => __async(void 0, null, function* () {
            var _a7;
            if (!value) {
              hmsActions.rejectChangeRole(roleChangeRequest);
              sendEvent(__spreadProps(__spreadValues({}, roleChangeRequest), { peerName: name }), { peerId: (_a7 = roleChangeRequest.requestedBy) == null ? void 0 : _a7.id });
              yield hmsActions.cancelMidCallPreview();
              yield hmsActions.lowerLocalPeerHand();
            }
          }),
          body,
          onAction: () => __async(void 0, null, function* () {
            yield hmsActions.acceptChangeRole(roleChangeRequest);
            yield updateMetaData({ prevRole: currentRole });
            yield hmsActions.lowerLocalPeerHand();
          }),
          actionText: "Accept"
        }
      );
    };
  }
});

// src/Prebuilt/components/hooks/useVideoTileLayout.ts
var import_react136, VideoTileContext, useVideoTileContext;
var init_useVideoTileLayout = __esm({
  "src/Prebuilt/components/hooks/useVideoTileLayout.ts"() {
    "use strict";
    init_define_process_env();
    import_react136 = __toESM(require("react"));
    VideoTileContext = import_react136.default.createContext({
      enableSpotlightingPeer: true,
      hideParticipantNameOnTile: false,
      roundedVideoTile: true,
      hideAudioMuteOnTile: false,
      hideAudioLevelOnTile: false,
      objectFit: "contain",
      hideMetadataOnTile: false
    });
    useVideoTileContext = () => {
      const context = (0, import_react136.useContext)(VideoTileContext);
      return context;
    };
  }
});

// src/Prebuilt/components/InsetTile.tsx
var import_react137, import_react_draggable, import_react_use25, import_react_sdk67, import_react_icons67, MinimisedTile, insetHeightPx, insetMaxWidthPx, defaultMobileAspectRatio, desktopAspectRatio, InsetTile;
var init_InsetTile = __esm({
  "src/Prebuilt/components/InsetTile.tsx"() {
    "use strict";
    init_define_process_env();
    import_react137 = __toESM(require("react"));
    import_react_draggable = __toESM(require("react-draggable"));
    import_react_use25 = require("react-use");
    import_react_sdk67 = require("@100mslive/react-sdk");
    import_react_icons67 = require("@100mslive/react-icons");
    init_Layout();
    init_Text2();
    init_Theme();
    init_IconButton3();
    init_AudioVideoToggle();
    init_VideoTile2();
    init_useUISettings();
    init_useVideoTileLayout();
    init_constants();
    MinimisedTile = ({ setMinimised }) => {
      return /* @__PURE__ */ import_react137.default.createElement(Flex, { align: "center", css: { gap: "$6", r: "$1", bg: "$surface_default", p: "$4", color: "$on_surface_high" } }, /* @__PURE__ */ import_react137.default.createElement(AudioVideoToggle, { hideOptions: true }), /* @__PURE__ */ import_react137.default.createElement(Text, null, "You"), /* @__PURE__ */ import_react137.default.createElement(
        IconButton_default,
        {
          className: "__cancel-drag-event",
          onClick: () => setMinimised(false),
          css: { bg: "transparent", border: "transparent" }
        },
        /* @__PURE__ */ import_react137.default.createElement(import_react_icons67.ExpandIcon, null)
      ));
    };
    insetHeightPx = 180;
    insetMaxWidthPx = 240;
    defaultMobileAspectRatio = 9 / 16;
    desktopAspectRatio = 1 / defaultMobileAspectRatio;
    InsetTile = () => {
      const isMobile = (0, import_react_use25.useMedia)(config.media.md);
      const isLandscape = (0, import_react_use25.useMedia)(config.media.ls);
      const localPeer = (0, import_react_sdk67.useHMSStore)(import_react_sdk67.selectLocalPeer);
      const [minimised, setMinimised] = useSetAppDataByKey(APP_DATA.minimiseInset);
      const videoTrack = (0, import_react_sdk67.useHMSStore)((0, import_react_sdk67.selectVideoTrackByID)(localPeer == null ? void 0 : localPeer.videoTrack));
      const isAllowedToPublish = (0, import_react_sdk67.useHMSStore)(import_react_sdk67.selectIsAllowedToPublish);
      const videoTileProps = useVideoTileContext();
      let aspectRatio = isMobile ? defaultMobileAspectRatio : desktopAspectRatio;
      if ((videoTrack == null ? void 0 : videoTrack.width) && (videoTrack == null ? void 0 : videoTrack.height) && !isMobile) {
        aspectRatio = videoTrack.width / videoTrack.height;
      }
      let height = insetHeightPx;
      let width = height * aspectRatio;
      if (isLandscape && width > insetMaxWidthPx) {
        width = 240;
        height = width / aspectRatio;
      }
      const nodeRef = (0, import_react137.useRef)(null);
      (0, import_react137.useEffect)(() => {
        const node = nodeRef.current;
        if (!node || !window.ResizeObserver) {
          return;
        }
        const resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.target === node.parentElement) {
              node.style.transform = `translate(0,0)`;
            }
          });
        });
        node.parentElement && resizeObserver.observe(node.parentElement);
        return () => {
          (node == null ? void 0 : node.parentElement) && (resizeObserver == null ? void 0 : resizeObserver.unobserve(node.parentElement));
          resizeObserver == null ? void 0 : resizeObserver.disconnect();
        };
      }, []);
      if (!isAllowedToPublish.video && !isAllowedToPublish.audio) {
        return null;
      }
      return /* @__PURE__ */ import_react137.default.createElement(import_react_draggable.default, { bounds: "parent", nodeRef, cancel: ".__cancel-drag-event" }, /* @__PURE__ */ import_react137.default.createElement(
        Box,
        {
          ref: nodeRef,
          css: __spreadValues({
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 11,
            boxShadow: "0 0 8px 0 rgba(0,0,0,0.3)",
            r: "$2"
          }, !minimised ? {
            aspectRatio,
            h: height
          } : {})
        },
        minimised ? /* @__PURE__ */ import_react137.default.createElement(MinimisedTile, { setMinimised }) : /* @__PURE__ */ import_react137.default.createElement(
          VideoTile_default,
          __spreadProps(__spreadValues({
            peerId: localPeer == null ? void 0 : localPeer.id,
            trackid: localPeer == null ? void 0 : localPeer.videoTrack,
            rootCSS: {
              size: "100%",
              padding: 0
            },
            width,
            height,
            containerCSS: { background: "$surface_default" },
            canMinimise: true,
            isDragabble: true
          }, videoTileProps), {
            hideParticipantNameOnTile: true
          })
        )
      ));
    };
  }
});

// src/Prebuilt/components/Pagination.tsx
var import_react138, import_react_icons68, Pagination;
var init_Pagination2 = __esm({
  "src/Prebuilt/components/Pagination.tsx"() {
    "use strict";
    init_define_process_env();
    import_react138 = __toESM(require("react"));
    import_react_icons68 = require("@100mslive/react-icons");
    init_Pagination();
    Pagination = ({
      page,
      onPageChange,
      numPages
    }) => {
      const disableLeft = page === 0;
      const disableRight = page === numPages - 1;
      const nextPage = (e) => {
        e.stopPropagation();
        onPageChange(Math.min(page + 1, numPages - 1));
      };
      const prevPage = (e) => {
        e.stopPropagation();
        onPageChange(Math.max(page - 1, 0));
      };
      (0, import_react138.useEffect)(() => {
        if (page >= numPages) {
          onPageChange(Math.max(0, numPages - 1));
        }
      }, [numPages, onPageChange, page]);
      if (numPages <= 1) {
        return null;
      }
      return /* @__PURE__ */ import_react138.default.createElement(StyledPagination.Root, { css: { flexShrink: 0 } }, /* @__PURE__ */ import_react138.default.createElement(StyledPagination.Chevron, { disabled: disableLeft, onClick: prevPage }, /* @__PURE__ */ import_react138.default.createElement(import_react_icons68.ChevronLeftIcon, { width: 16, height: 16, style: { cursor: disableLeft ? "not-allowed" : "pointer" } })), numPages <= 5 ? /* @__PURE__ */ import_react138.default.createElement(StyledPagination.Dots, null, [...Array(numPages)].map((_, i) => /* @__PURE__ */ import_react138.default.createElement(
        StyledPagination.Dot,
        {
          key: i,
          active: page === i,
          onClick: (e) => {
            e.stopPropagation();
            onPageChange(i);
          }
        }
      ))) : null, /* @__PURE__ */ import_react138.default.createElement(StyledPagination.Chevron, { disabled: disableRight, onClick: nextPage }, /* @__PURE__ */ import_react138.default.createElement(import_react_icons68.ChevronRightIcon, { width: 16, height: 16, style: { cursor: disableRight ? "not-allowed" : "pointer" } })));
    };
  }
});

// src/Prebuilt/components/VideoLayouts/Grid.tsx
var import_react139, Grid;
var init_Grid = __esm({
  "src/Prebuilt/components/VideoLayouts/Grid.tsx"() {
    "use strict";
    init_define_process_env();
    import_react139 = __toESM(require("react"));
    init_Layout();
    init_VideoTile2();
    init_useVideoTileLayout();
    Grid = import_react139.default.forwardRef(
      ({ tiles, edgeToEdge }, ref) => {
        const videoTileProps = useVideoTileContext();
        return /* @__PURE__ */ import_react139.default.createElement(
          Box,
          {
            ref,
            css: {
              flex: "1 1 0",
              gap: "$4",
              display: "flex",
              placeContent: "center",
              alignItems: "center",
              justifyContent: "center",
              flexFlow: "row wrap",
              minHeight: 0,
              "@md": { gap: edgeToEdge ? 0 : "$4" }
            }
          },
          tiles == null ? void 0 : tiles.map((tile) => {
            var _a7, _b7, _c, _d;
            return /* @__PURE__ */ import_react139.default.createElement(
              VideoTile_default,
              __spreadValues({
                key: ((_a7 = tile.track) == null ? void 0 : _a7.id) || ((_b7 = tile.peer) == null ? void 0 : _b7.id),
                width: tile.width,
                height: tile.height,
                peerId: (_c = tile.peer) == null ? void 0 : _c.id,
                trackId: (_d = tile.track) == null ? void 0 : _d.id,
                rootCSS: { padding: 0 },
                objectFit: "contain"
              }, videoTileProps)
            );
          })
        );
      }
    );
  }
});

// src/Prebuilt/components/hooks/useTileLayout.tsx
var import_react140, import_react_use26, import_react_sdk68, aspectRatioConfig, usePagesWithTiles, useTileLayout;
var init_useTileLayout = __esm({
  "src/Prebuilt/components/hooks/useTileLayout.tsx"() {
    "use strict";
    init_define_process_env();
    import_react140 = require("react");
    import_react_use26 = require("react-use");
    import_react_sdk68 = require("@100mslive/react-sdk");
    init_Theme();
    aspectRatioConfig = { default: [1 / 1, 4 / 3, 16 / 9], mobile: [1 / 1, 3 / 4, 9 / 16] };
    usePagesWithTiles = ({ peers, maxTileCount }) => {
      const vanillaStore = (0, import_react_sdk68.useHMSVanillaStore)();
      const tracksMap = vanillaStore.getState(import_react_sdk68.selectTracksMap);
      const peersWithTiles = (0, import_react140.useMemo)(
        () => (0, import_react_sdk68.getPeersWithTiles)(peers, tracksMap, () => false),
        [peers, tracksMap]
      );
      const noOfPages = Math.ceil(peersWithTiles.length / maxTileCount);
      const pagesList = (0, import_react140.useMemo)(() => {
        let sliceStart = 0;
        let remaining = peersWithTiles.length;
        const list = [];
        for (let i = 0; i < noOfPages; i++) {
          const count = Math.min(remaining, maxTileCount);
          list.push(peersWithTiles.slice(sliceStart, sliceStart + count));
          remaining = remaining - count;
          sliceStart += count;
        }
        return list;
      }, [peersWithTiles, noOfPages, maxTileCount]);
      return pagesList;
    };
    useTileLayout = ({
      pageList,
      maxTileCount,
      edgeToEdge = false
    }) => {
      const vanillaStore = (0, import_react_sdk68.useHMSVanillaStore)();
      const [ref, { width, height }] = (0, import_react_use26.useMeasure)();
      const isMobile = (0, import_react_use26.useMedia)(config.media.lg);
      const [pagesWithTiles, setPagesWithTiles] = (0, import_react140.useState)([]);
      (0, import_react140.useEffect)(() => {
        if (width === 0 || height === 0) {
          return;
        }
        for (const page of pageList) {
          const noOfTilesInPage = page.length;
          let maxCols = noOfTilesInPage > 2 && noOfTilesInPage < 9 ? Math.ceil(noOfTilesInPage / 2) : Math.ceil(Math.sqrt(noOfTilesInPage));
          if (isMobile) {
            maxCols = noOfTilesInPage < 4 ? 1 : Math.min(maxCols, 2);
          }
          const maxRows = Math.ceil(noOfTilesInPage / maxCols);
          let index = 0;
          const matrix = new Array(maxRows).fill(null).map((_, i) => {
            const numCols = Math.min(maxCols, noOfTilesInPage - i * maxCols);
            const rowElements = [];
            for (let j = 0; j < numCols; j++) {
              if (index < page.length) {
                rowElements.push(page[index++]);
              }
            }
            return rowElements;
          });
          const gap = edgeToEdge && isMobile ? 0 : 8;
          const maxHeight = height - (maxRows - 1) * gap;
          const maxRowHeight = maxHeight / matrix.length;
          const aspectRatios = isMobile && (noOfTilesInPage === 1 || noOfTilesInPage > 3) ? aspectRatioConfig.mobile : aspectRatioConfig.default;
          for (const row of matrix) {
            let tileWidth = (width - (row.length - 1) * gap) / row.length;
            let tileHeight = 0;
            if (edgeToEdge) {
              tileHeight = maxRowHeight;
            } else {
              const calcHeights = aspectRatios.map((aR) => tileWidth / aR);
              for (const h of calcHeights) {
                if (h < maxRowHeight) {
                  if (tileHeight < h) {
                    tileHeight = h;
                  }
                }
              }
              if (tileHeight === 0) {
                tileHeight = maxRowHeight;
                const calcWidths = aspectRatios.map((aR) => tileHeight * aR);
                tileWidth = 0;
                for (const w of calcWidths) {
                  if (w < width) {
                    if (tileWidth < w) {
                      tileWidth = w;
                    }
                  }
                }
              }
            }
            for (let i = 0; i < row.length; i++) {
              row[i].width = tileWidth;
              row[i].height = tileHeight;
            }
          }
        }
        setPagesWithTiles([...pageList]);
      }, [width, height, maxTileCount, pageList, vanillaStore, isMobile, edgeToEdge]);
      return { pagesWithTiles, ref };
    };
  }
});

// src/Prebuilt/components/VideoLayouts/EqualProminence.tsx
function EqualProminence({ isInsetEnabled = false, peers, onPageChange, onPageSize, edgeToEdge }) {
  var _a7;
  const localPeer = (0, import_react_sdk69.useHMSStore)(import_react_sdk69.selectLocalPeer);
  const isMobile = (0, import_react_use27.useMedia)(config.media.md);
  let maxTileCount = useUISettings(UI_SETTINGS.maxTileCount);
  maxTileCount = isMobile ? Math.min(maxTileCount, 6) : maxTileCount;
  let pageList = usePagesWithTiles({
    peers,
    maxTileCount
  });
  const inputPeers = (0, import_react141.useMemo)(
    () => pageList.length === 0 ? localPeer ? [localPeer] : [] : peers,
    [pageList.length, peers, localPeer]
  );
  pageList = usePagesWithTiles({
    peers: inputPeers,
    maxTileCount
  });
  const { ref, pagesWithTiles } = useTileLayout({
    pageList,
    maxTileCount,
    edgeToEdge
  });
  const [page, setPage] = (0, import_react141.useState)(0);
  const pageSize = ((_a7 = pagesWithTiles[0]) == null ? void 0 : _a7.length) || 0;
  (0, import_react141.useEffect)(() => {
    if (pageSize > 0) {
      onPageSize == null ? void 0 : onPageSize(pageSize);
    }
  }, [pageSize, onPageSize]);
  return /* @__PURE__ */ import_react141.default.createElement(Flex, { direction: "column", css: { flex: "1 1 0", h: "100%", position: "relative", minWidth: 0 } }, /* @__PURE__ */ import_react141.default.createElement(Grid, { tiles: pagesWithTiles[page], ref, edgeToEdge }), !edgeToEdge && /* @__PURE__ */ import_react141.default.createElement(
    Pagination,
    {
      page,
      onPageChange: (page2) => {
        setPage(page2);
        onPageChange == null ? void 0 : onPageChange(page2);
      },
      numPages: pagesWithTiles.length
    }
  ), isInsetEnabled && pageList.length > 0 && pageList[0][0].peer.id !== (localPeer == null ? void 0 : localPeer.id) && /* @__PURE__ */ import_react141.default.createElement(InsetTile, null));
}
var import_react141, import_react_use27, import_react_sdk69;
var init_EqualProminence = __esm({
  "src/Prebuilt/components/VideoLayouts/EqualProminence.tsx"() {
    "use strict";
    init_define_process_env();
    import_react141 = __toESM(require("react"));
    import_react_use27 = require("react-use");
    import_react_sdk69 = require("@100mslive/react-sdk");
    init_Layout();
    init_Theme();
    init_InsetTile();
    init_Pagination2();
    init_Grid();
    init_useUISettings();
    init_useTileLayout();
    init_constants();
  }
});

// src/Prebuilt/components/VideoLayouts/ProminenceLayout.tsx
var import_react142, Root26, ProminentSection, SecondarySection, ProminenceLayout;
var init_ProminenceLayout = __esm({
  "src/Prebuilt/components/VideoLayouts/ProminenceLayout.tsx"() {
    "use strict";
    init_define_process_env();
    import_react142 = __toESM(require("react"));
    init_Layout();
    init_VideoTile2();
    init_useVideoTileLayout();
    Root26 = ({ children, edgeToEdge }) => /* @__PURE__ */ import_react142.default.createElement(
      Flex,
      {
        direction: "column",
        css: { h: "100%", flex: "1 1 0", minWidth: 0, gap: "$6", "@md": { gap: edgeToEdge ? 0 : "$6" } }
      },
      children
    );
    ProminentSection = ({ children, css: css2 = {} }) => {
      return /* @__PURE__ */ import_react142.default.createElement(Flex, { direction: "column", css: __spreadValues({ flex: "1 1 0", gap: "$2", minHeight: 0 }, css2) }, children);
    };
    SecondarySection = ({
      tiles,
      children,
      edgeToEdge
    }) => {
      const tileLayoutProps = useVideoTileContext();
      if (!(tiles == null ? void 0 : tiles.length)) {
        return null;
      }
      return /* @__PURE__ */ import_react142.default.createElement(
        Box,
        {
          css: {
            display: "grid",
            gridTemplateRows: import_react142.default.Children.count(children) > 0 ? "136px auto" : "154px",
            gridTemplateColumns: `repeat(${tiles.length}, minmax(0, 1fr))`,
            margin: "0 auto",
            gap: "$2 $4",
            placeItems: "center",
            "@md": { gap: edgeToEdge ? 0 : "$4" }
          }
        },
        tiles.map((tile) => {
          var _a7, _b7, _c, _d;
          return /* @__PURE__ */ import_react142.default.createElement(
            VideoTile_default,
            __spreadValues({
              key: ((_a7 = tile.track) == null ? void 0 : _a7.id) || ((_b7 = tile.peer) == null ? void 0 : _b7.id),
              peerId: (_c = tile.peer) == null ? void 0 : _c.id,
              trackId: (_d = tile.track) == null ? void 0 : _d.id,
              rootCSS: {
                padding: 0,
                maxWidth: 240,
                maxHeight: "100%",
                aspectRatio: 16 / 9,
                "@md": { aspectRatio: 1 }
              },
              objectFit: "contain"
            }, tileLayoutProps)
          );
        }),
        /* @__PURE__ */ import_react142.default.createElement(Box, { css: { gridColumn: `1/span ${tiles.length}` } }, children)
      );
    };
    ProminenceLayout = {
      Root: Root26,
      ProminentSection,
      SecondarySection
    };
  }
});

// src/Prebuilt/components/SecondaryTiles.tsx
var import_react143, import_react_use28, SecondaryTiles;
var init_SecondaryTiles = __esm({
  "src/Prebuilt/components/SecondaryTiles.tsx"() {
    "use strict";
    init_define_process_env();
    import_react143 = __toESM(require("react"));
    import_react_use28 = require("react-use");
    init_ProminenceLayout();
    init_Theme();
    init_Pagination2();
    init_useTileLayout();
    SecondaryTiles = ({ peers, onPageChange, onPageSize, edgeToEdge }) => {
      var _a7;
      const isMobile = (0, import_react_use28.useMedia)(config.media.md);
      const maxTileCount = isMobile ? 2 : 4;
      const pagesWithTiles = usePagesWithTiles({ peers, maxTileCount });
      const [page, setPage] = (0, import_react143.useState)(0);
      const pageSize = ((_a7 = pagesWithTiles[0]) == null ? void 0 : _a7.length) || 0;
      (0, import_react143.useEffect)(() => {
        if (pageSize > 0) {
          onPageSize == null ? void 0 : onPageSize(pageSize);
        }
      }, [pageSize, onPageSize]);
      return /* @__PURE__ */ import_react143.default.createElement(ProminenceLayout.SecondarySection, { tiles: pagesWithTiles[page], edgeToEdge }, !edgeToEdge && /* @__PURE__ */ import_react143.default.createElement(
        Pagination,
        {
          page,
          onPageChange: (page2) => {
            setPage(page2);
            onPageChange == null ? void 0 : onPageChange(page2);
          },
          numPages: pagesWithTiles.length
        }
      ));
    };
  }
});

// src/Prebuilt/components/hooks/useRoleProminencePeers.tsx
var import_react144, useRoleProminencePeers;
var init_useRoleProminencePeers = __esm({
  "src/Prebuilt/components/hooks/useRoleProminencePeers.tsx"() {
    "use strict";
    init_define_process_env();
    import_react144 = require("react");
    init_useUISettings();
    useRoleProminencePeers = (prominentRoles, peers, isInsetEnabled) => {
      const pinnedTrack = usePinnedTrack();
      const [prominentPeers, secondaryPeers] = (0, import_react144.useMemo)(() => {
        return peers.reduce(
          (acc, peer) => {
            if (pinnedTrack) {
              if (pinnedTrack.peerId === peer.id) {
                acc[0].push(peer);
              } else if (!(isInsetEnabled && peer.isLocal)) {
                acc[1].push(peer);
              }
              return acc;
            }
            if (peer.isLocal && isInsetEnabled) {
              return acc;
            }
            if (prominentRoles == null ? void 0 : prominentRoles.includes(peer.roleName || "")) {
              acc[0].push(peer);
            } else {
              acc[1].push(peer);
            }
            return acc;
          },
          [[], []]
        );
      }, [peers, isInsetEnabled, prominentRoles, pinnedTrack]);
      return {
        prominentPeers,
        secondaryPeers
      };
    };
  }
});

// src/Prebuilt/components/VideoLayouts/RoleProminence.tsx
function RoleProminence({
  isInsetEnabled = false,
  prominentRoles = [],
  peers,
  onPageChange,
  onPageSize,
  edgeToEdge
}) {
  var _a7;
  const { prominentPeers, secondaryPeers } = useRoleProminencePeers(prominentRoles, peers, isInsetEnabled);
  const localPeer = (0, import_react_sdk70.useHMSStore)(import_react_sdk70.selectLocalPeer);
  const maxTileCount = 4;
  const pageList = usePagesWithTiles({
    peers: prominentPeers,
    maxTileCount
  });
  const { ref, pagesWithTiles } = useTileLayout({
    pageList,
    maxTileCount
  });
  const [page, setPage] = (0, import_react145.useState)(0);
  const pageSize = ((_a7 = pagesWithTiles[0]) == null ? void 0 : _a7.length) || 0;
  (0, import_react145.useEffect)(() => {
    if (pageSize > 0) {
      onPageSize == null ? void 0 : onPageSize(pageSize);
    }
  }, [pageSize, onPageSize]);
  return /* @__PURE__ */ import_react145.default.createElement(ProminenceLayout.Root, null, /* @__PURE__ */ import_react145.default.createElement(ProminenceLayout.ProminentSection, null, /* @__PURE__ */ import_react145.default.createElement(Grid, { ref, tiles: pagesWithTiles[page] })), !edgeToEdge && /* @__PURE__ */ import_react145.default.createElement(
    Pagination,
    {
      page,
      onPageChange: (page2) => {
        setPage(page2);
        onPageChange == null ? void 0 : onPageChange(page2);
      },
      numPages: pagesWithTiles.length
    }
  ), /* @__PURE__ */ import_react145.default.createElement(SecondaryTiles, { peers: secondaryPeers, isInsetEnabled, edgeToEdge }), isInsetEnabled && localPeer && !prominentPeers.includes(localPeer) && /* @__PURE__ */ import_react145.default.createElement(InsetTile, null));
}
var import_react145, import_react_sdk70;
var init_RoleProminence = __esm({
  "src/Prebuilt/components/VideoLayouts/RoleProminence.tsx"() {
    "use strict";
    init_define_process_env();
    import_react145 = __toESM(require("react"));
    import_react_sdk70 = require("@100mslive/react-sdk");
    init_InsetTile();
    init_Pagination2();
    init_SecondaryTiles();
    init_Grid();
    init_ProminenceLayout();
    init_useRoleProminencePeers();
    init_useTileLayout();
  }
});

// src/Prebuilt/components/ScreenshareDisplay.jsx
var import_react146, import_react_sdk71, import_react_icons69, ScreenshareDisplay;
var init_ScreenshareDisplay = __esm({
  "src/Prebuilt/components/ScreenshareDisplay.jsx"() {
    "use strict";
    init_define_process_env();
    import_react146 = __toESM(require("react"));
    import_react_sdk71 = require("@100mslive/react-sdk");
    import_react_icons69 = require("@100mslive/react-icons");
    init_Button2();
    init_Layout();
    init_Text2();
    ScreenshareDisplay = () => {
      const hmsActions = (0, import_react_sdk71.useHMSActions)();
      return /* @__PURE__ */ import_react146.default.createElement(
        Flex,
        {
          direction: "column",
          align: "center",
          justify: "center",
          css: {
            size: "100%",
            bg: "$background_default",
            color: "$on_surface_high"
          }
        },
        /* @__PURE__ */ import_react146.default.createElement(import_react_icons69.ShareScreenIcon, { width: 48, height: 48 }),
        /* @__PURE__ */ import_react146.default.createElement(Text, { variant: "h5", css: { m: "$8 0" } }, "You are sharing your screen"),
        /* @__PURE__ */ import_react146.default.createElement(
          Button,
          {
            variant: "danger",
            css: { fontWeight: "$semiBold" },
            onClick: () => __async(void 0, null, function* () {
              yield hmsActions.setScreenShareEnabled(false);
            }),
            "data-testid": "stop_screen_share_btn"
          },
          /* @__PURE__ */ import_react146.default.createElement(import_react_icons69.CrossIcon, { width: 18, height: 18 }),
          "\xA0 Stop screen share"
        )
      );
    };
  }
});

// src/Prebuilt/components/ScreenshareTile.jsx
var import_react147, import_react_use29, import_screenfull2, import_react_sdk72, import_react_icons70, labelStyles, Tile2, ScreenshareTile, ScreenshareTile_default;
var init_ScreenshareTile = __esm({
  "src/Prebuilt/components/ScreenshareTile.jsx"() {
    "use strict";
    init_define_process_env();
    import_react147 = __toESM(require("react"));
    import_react_use29 = require("react-use");
    import_screenfull2 = __toESM(require("screenfull"));
    import_react_sdk72 = require("@100mslive/react-sdk");
    import_react_icons70 = require("@100mslive/react-icons");
    init_TileMenu2();
    init_Stats2();
    init_Video2();
    init_VideoTile();
    init_peerTileUtils();
    init_ScreenshareDisplay();
    init_useUISettings();
    init_constants();
    labelStyles = {
      position: "unset",
      width: "100%",
      textAlign: "center",
      c: "$on_surface_high",
      transform: "none",
      flexShrink: 0
    };
    Tile2 = ({ peerId, width = "100%", height = "100%" }) => {
      const isLocal = (0, import_react_sdk72.useHMSStore)(import_react_sdk72.selectLocalPeerID) === peerId;
      const track = (0, import_react_sdk72.useHMSStore)((0, import_react_sdk72.selectScreenShareByPeerID)(peerId));
      const peer = (0, import_react_sdk72.useHMSStore)((0, import_react_sdk72.selectPeerByID)(peerId));
      const isAudioOnly = useUISettings(UI_SETTINGS.isAudioOnly);
      const [isMouseHovered, setIsMouseHovered] = (0, import_react147.useState)(false);
      const showStatsOnTiles = useUISettings(UI_SETTINGS.showStatsOnTiles);
      const fullscreenRef = (0, import_react147.useRef)(null);
      const [fullscreen, setFullscreen] = (0, import_react147.useState)(false);
      const isFullscreen = (0, import_react_use29.useFullscreen)(fullscreenRef, fullscreen, {
        onClose: () => setFullscreen(false)
      });
      const isFullScreenSupported = import_screenfull2.default.isEnabled;
      const audioTrack = (0, import_react_sdk72.useHMSStore)((0, import_react_sdk72.selectScreenShareAudioByPeerID)(peer == null ? void 0 : peer.id));
      if (isLocal && !["browser", "window", "application"].includes(track == null ? void 0 : track.displaySurface)) {
        return /* @__PURE__ */ import_react147.default.createElement(ScreenshareDisplay, null);
      }
      if (!peer) {
        return null;
      }
      const label = getVideoTileLabel({
        peerName: peer == null ? void 0 : peer.name,
        isLocal: false,
        track
      });
      return /* @__PURE__ */ import_react147.default.createElement(StyledVideoTile.Root, { css: { width, height, p: 0, minHeight: 0 }, "data-testid": "screenshare_tile" }, /* @__PURE__ */ import_react147.default.createElement(
        StyledVideoTile.Container,
        {
          transparentBg: true,
          ref: fullscreenRef,
          css: { flexDirection: "column", gap: "$2" },
          onMouseEnter: () => setIsMouseHovered(true),
          onMouseLeave: () => {
            setIsMouseHovered(false);
          }
        },
        showStatsOnTiles ? /* @__PURE__ */ import_react147.default.createElement(VideoTileStats, { audioTrackID: audioTrack == null ? void 0 : audioTrack.id, videoTrackID: track == null ? void 0 : track.id, peerID: peerId, isLocal }) : null,
        isFullScreenSupported && isMouseHovered ? /* @__PURE__ */ import_react147.default.createElement(StyledVideoTile.FullScreenButton, { onClick: () => setFullscreen(!fullscreen) }, isFullscreen ? /* @__PURE__ */ import_react147.default.createElement(import_react_icons70.ShrinkIcon, null) : /* @__PURE__ */ import_react147.default.createElement(import_react_icons70.ExpandIcon, null)) : null,
        track ? /* @__PURE__ */ import_react147.default.createElement(
          Video,
          {
            screenShare: true,
            mirror: peer.isLocal && (track == null ? void 0 : track.source) === "regular",
            attach: !isAudioOnly,
            trackId: track.id,
            css: { minHeight: 0 }
          }
        ) : null,
        /* @__PURE__ */ import_react147.default.createElement(StyledVideoTile.Info, { css: labelStyles }, label),
        isMouseHovered && !peer.isLocal ? /* @__PURE__ */ import_react147.default.createElement(
          TileMenu_default,
          {
            isScreenshare: true,
            peerID: peer.id,
            audioTrackID: audioTrack == null ? void 0 : audioTrack.id,
            videoTrackID: track == null ? void 0 : track.id,
            enableSpotlightingPeer: false
          }
        ) : null
      ));
    };
    ScreenshareTile = import_react147.default.memo(Tile2);
    ScreenshareTile_default = ScreenshareTile;
  }
});

// src/Prebuilt/components/VideoLayouts/ScreenshareLayout.tsx
var import_react148, import_react_use30, import_react_sdk73, ScreenshareLayout;
var init_ScreenshareLayout = __esm({
  "src/Prebuilt/components/VideoLayouts/ScreenshareLayout.tsx"() {
    "use strict";
    init_define_process_env();
    import_react148 = __toESM(require("react"));
    import_react_use30 = require("react-use");
    import_react_sdk73 = require("@100mslive/react-sdk");
    init_Theme();
    init_Pagination2();
    init_ScreenshareTile();
    init_SecondaryTiles();
    init_ProminenceLayout();
    init_useUISettings();
    init_constants();
    ScreenshareLayout = ({ peers, onPageChange, onPageSize, edgeToEdge }) => {
      var _a7;
      const peersSharing = (0, import_react_sdk73.useHMSStore)(import_react_sdk73.selectPeersScreenSharing);
      const [, setActiveScreenSharePeer] = useSetAppDataByKey(APP_DATA.activeScreensharePeerId);
      const [page, setPage] = (0, import_react148.useState)(0);
      const activeSharePeer = peersSharing[page];
      const isMobile = (0, import_react_use30.useMedia)(config.media.md);
      const secondaryPeers = (0, import_react148.useMemo)(() => {
        if (isMobile) {
          return activeSharePeer ? [activeSharePeer, ...peers.filter((p) => p.id !== (activeSharePeer == null ? void 0 : activeSharePeer.id))] : peers;
        }
        return peers.filter((p) => p.id !== (activeSharePeer == null ? void 0 : activeSharePeer.id));
      }, [activeSharePeer, peers, isMobile]);
      (0, import_react148.useEffect)(() => {
        setActiveScreenSharePeer(isMobile ? "" : activeSharePeer == null ? void 0 : activeSharePeer.id);
        return () => {
          setActiveScreenSharePeer("");
        };
      }, [activeSharePeer == null ? void 0 : activeSharePeer.id, isMobile, setActiveScreenSharePeer]);
      return /* @__PURE__ */ import_react148.default.createElement(ProminenceLayout.Root, { edgeToEdge }, /* @__PURE__ */ import_react148.default.createElement(ProminenceLayout.ProminentSection, null, /* @__PURE__ */ import_react148.default.createElement(ScreenshareTile_default, { peerId: (_a7 = peersSharing[page]) == null ? void 0 : _a7.id }), !edgeToEdge && /* @__PURE__ */ import_react148.default.createElement(Pagination, { page, onPageChange: setPage, numPages: peersSharing.length })), /* @__PURE__ */ import_react148.default.createElement(
        SecondaryTiles,
        {
          peers: secondaryPeers,
          onPageChange,
          onPageSize,
          edgeToEdge
        }
      ));
    };
  }
});

// src/Prebuilt/common/PeersSorter.ts
var import_react_sdk74, PeersSorter, PeersSorter_default;
var init_PeersSorter = __esm({
  "src/Prebuilt/common/PeersSorter.ts"() {
    "use strict";
    init_define_process_env();
    import_react_sdk74 = require("@100mslive/react-sdk");
    PeersSorter = class {
      constructor(store) {
        this.storeUnsubscribe = void 0;
        this.listeners = /* @__PURE__ */ new Set();
        this.setPeersAndTilesPerPage = ({ peers, tilesPerPage }) => {
          this.tilesPerPage = tilesPerPage;
          const peerIds = new Set(peers.map((peer) => peer.id));
          this.peers.forEach((_, key) => {
            if (!peerIds.has(key)) {
              this.peers.delete(key);
            }
          });
          this.lruPeers = new Set([...this.lruPeers].filter((peerId) => peerIds.has(peerId)));
          peers.forEach((peer) => {
            this.peers.set(peer.id, peer);
            if (this.lruPeers.size < tilesPerPage) {
              this.lruPeers.add(peer.id);
            }
          });
          if (!this.storeUnsubscribe) {
            this.storeUnsubscribe = this.store.subscribe(this.onDominantSpeakerChange, import_react_sdk74.selectDominantSpeaker);
          }
          this.moveSpeakerToFront(this.speaker);
        };
        this.onUpdate = (cb) => {
          this.listeners.add(cb);
        };
        this.stop = () => {
          var _a7;
          this.updateListeners();
          this.listeners.clear();
          (_a7 = this.storeUnsubscribe) == null ? void 0 : _a7.call(this);
        };
        this.moveSpeakerToFront = (speaker) => {
          if (!speaker) {
            this.updateListeners();
            return;
          }
          if (this.lruPeers.has(speaker.id) && this.lruPeers.size <= this.tilesPerPage) {
            this.updateListeners();
            return;
          }
          this.lruPeers.delete(speaker.id);
          const lruPeerArray = Array.from(this.lruPeers);
          while (lruPeerArray.length >= this.tilesPerPage && lruPeerArray.length) {
            lruPeerArray.pop();
          }
          this.lruPeers = /* @__PURE__ */ new Set([speaker.id, ...lruPeerArray]);
          this.updateListeners();
        };
        this.onDominantSpeakerChange = (speaker) => {
          var _a7;
          if (speaker && speaker.id !== ((_a7 = this == null ? void 0 : this.speaker) == null ? void 0 : _a7.id)) {
            this.speaker = speaker;
            this.moveSpeakerToFront(speaker);
          }
        };
        this.updateListeners = () => {
          const orderedPeers = [];
          this.lruPeers.forEach((key) => {
            const peer = this.peers.get(key);
            if (peer) {
              orderedPeers.push(peer);
            }
          });
          this.peers.forEach((peer) => {
            if (!this.lruPeers.has(peer.id) && peer) {
              orderedPeers.push(peer);
            }
          });
          this.listeners.forEach((listener) => listener == null ? void 0 : listener(orderedPeers));
        };
        this.store = store;
        this.peers = /* @__PURE__ */ new Map();
        this.lruPeers = /* @__PURE__ */ new Set();
        this.speaker = void 0;
      }
    };
    PeersSorter_default = PeersSorter;
  }
});

// src/Prebuilt/components/VideoLayouts/GridLayout.tsx
var import_react149, import_react_sdk75, GridLayout;
var init_GridLayout = __esm({
  "src/Prebuilt/components/VideoLayouts/GridLayout.tsx"() {
    "use strict";
    init_define_process_env();
    import_react149 = __toESM(require("react"));
    import_react_sdk75 = require("@100mslive/react-sdk");
    init_EqualProminence();
    init_RoleProminence();
    init_ScreenshareLayout();
    init_useUISettings();
    init_useVideoTileLayout();
    init_PeersSorter();
    GridLayout = ({
      enable_local_tile_inset: isInsetEnabled = false,
      prominent_roles: prominentRoles = [],
      enable_spotlighting_peer = false,
      hide_participant_name_on_tile = false,
      rounded_video_tile = true,
      hide_audio_mute_on_tile = false,
      video_object_fit = "contain",
      edge_to_edge = false,
      hide_metadata_on_tile = false
    }) => {
      const peerSharing = (0, import_react_sdk75.useHMSStore)(import_react_sdk75.selectPeerScreenSharing);
      const pinnedTrack = usePinnedTrack();
      const peers = (0, import_react_sdk75.useHMSStore)(import_react_sdk75.selectPeers);
      const isRoleProminence = prominentRoles.length && peers.some(
        (peer) => peer.roleName && prominentRoles.includes(peer.roleName) && (peer.videoTrack || peer.audioTrack)
      ) || pinnedTrack;
      const updatedPeers = (0, import_react149.useMemo)(() => {
        if (isInsetEnabled && !isRoleProminence && !peerSharing) {
          return peers.filter((peer) => !peer.isLocal);
        }
        return peers;
      }, [isInsetEnabled, isRoleProminence, peerSharing, peers]);
      const vanillaStore = (0, import_react_sdk75.useHMSVanillaStore)();
      const [sortedPeers, setSortedPeers] = (0, import_react149.useState)(updatedPeers);
      const peersSorter = (0, import_react149.useMemo)(() => new PeersSorter_default(vanillaStore), [vanillaStore]);
      const [pageSize, setPageSize] = (0, import_react149.useState)(0);
      const [mainPage, setMainPage] = (0, import_react149.useState)(0);
      const tileLayout = {
        enableSpotlightingPeer: enable_spotlighting_peer,
        hideParticipantNameOnTile: hide_participant_name_on_tile,
        roundedVideoTile: rounded_video_tile,
        hideAudioMuteOnTile: hide_audio_mute_on_tile,
        hideMetadataOnTile: hide_metadata_on_tile,
        objectFit: video_object_fit
      };
      (0, import_react149.useEffect)(() => {
        if (mainPage !== 0) {
          return;
        }
        peersSorter.setPeersAndTilesPerPage({
          peers: updatedPeers,
          tilesPerPage: pageSize
        });
        peersSorter.onUpdate(setSortedPeers);
      }, [mainPage, peersSorter, updatedPeers, pageSize]);
      if (peerSharing) {
        return /* @__PURE__ */ import_react149.default.createElement(VideoTileContext.Provider, { value: tileLayout }, /* @__PURE__ */ import_react149.default.createElement(
          ScreenshareLayout,
          {
            peers: sortedPeers,
            onPageSize: setPageSize,
            onPageChange: setMainPage,
            edgeToEdge: edge_to_edge
          }
        ));
      } else if (isRoleProminence) {
        return /* @__PURE__ */ import_react149.default.createElement(VideoTileContext.Provider, { value: tileLayout }, /* @__PURE__ */ import_react149.default.createElement(
          RoleProminence,
          {
            peers: sortedPeers,
            onPageSize: setPageSize,
            onPageChange: setMainPage,
            prominentRoles,
            isInsetEnabled,
            edgeToEdge: edge_to_edge
          }
        ));
      }
      return /* @__PURE__ */ import_react149.default.createElement(VideoTileContext.Provider, { value: tileLayout }, /* @__PURE__ */ import_react149.default.createElement(
        EqualProminence,
        {
          peers: sortedPeers,
          onPageSize: setPageSize,
          onPageChange: setMainPage,
          isInsetEnabled,
          edgeToEdge: edge_to_edge
        }
      ));
    };
  }
});

// src/Prebuilt/layouts/EmbedView.jsx
var import_react150, import_react_sdk76, EmbedView, EmbedScreenShareView, EmbedComponent;
var init_EmbedView = __esm({
  "src/Prebuilt/layouts/EmbedView.jsx"() {
    "use strict";
    init_define_process_env();
    import_react150 = __toESM(require("react"));
    import_react_sdk76 = require("@100mslive/react-sdk");
    init_SecondaryTiles();
    init_ToastManager();
    init_ProminenceLayout();
    init_Layout();
    init_useUISettings();
    init_constants();
    EmbedView = () => {
      return /* @__PURE__ */ import_react150.default.createElement(EmbedScreenShareView, null, /* @__PURE__ */ import_react150.default.createElement(EmbedComponent, null));
    };
    EmbedScreenShareView = ({ children }) => {
      const peers = (0, import_react_sdk76.useHMSStore)(import_react_sdk76.selectPeers);
      const peerPresenting = (0, import_react_sdk76.useHMSStore)(import_react_sdk76.selectPeerScreenSharing);
      const [, setActiveScreenSharePeer] = useSetAppDataByKey(APP_DATA.activeScreensharePeerId);
      const smallTilePeers = (0, import_react150.useMemo)(() => {
        const smallTilePeers2 = peers.filter((peer) => peer.id !== (peerPresenting == null ? void 0 : peerPresenting.id));
        return smallTilePeers2;
      }, [peers, peerPresenting]);
      (0, import_react150.useEffect)(() => {
        setActiveScreenSharePeer(peerPresenting == null ? void 0 : peerPresenting.id);
        return () => {
          setActiveScreenSharePeer("");
        };
      }, [peerPresenting == null ? void 0 : peerPresenting.id, setActiveScreenSharePeer]);
      return /* @__PURE__ */ import_react150.default.createElement(ProminenceLayout.Root, null, /* @__PURE__ */ import_react150.default.createElement(ProminenceLayout.ProminentSection, null, children), /* @__PURE__ */ import_react150.default.createElement(SecondaryTiles, { peers: smallTilePeers }));
    };
    EmbedComponent = () => {
      const embedConfig = (0, import_react_sdk76.useHMSStore)((0, import_react_sdk76.selectAppData)(APP_DATA.embedConfig));
      const resetConfig = useResetEmbedConfig();
      const { iframeRef, startEmbedShare, isEmbedShareInProgress } = (0, import_react_sdk76.useEmbedShare)(resetConfig);
      (0, import_react150.useEffect)(() => {
        (() => __async(void 0, null, function* () {
          if (embedConfig && !isEmbedShareInProgress) {
            try {
              yield startEmbedShare(embedConfig);
            } catch (err) {
              resetConfig();
              ToastManager.addToast({
                title: `Error while sharing embed url ${err.message || ""}`,
                variant: "error"
              });
            }
          }
        }))();
      }, [isEmbedShareInProgress, embedConfig, startEmbedShare, resetConfig]);
      return /* @__PURE__ */ import_react150.default.createElement(
        Box,
        {
          css: {
            mx: "$8",
            flex: "3 1 0",
            "@lg": {
              flex: "2 1 0",
              display: "flex",
              alignItems: "center"
            }
          }
        },
        /* @__PURE__ */ import_react150.default.createElement(
          "iframe",
          {
            title: "Embed View",
            ref: iframeRef,
            style: {
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: "0.75rem"
            },
            allow: "autoplay; clipboard-write;",
            referrerPolicy: "no-referrer"
          }
        )
      );
    };
  }
});

// src/Prebuilt/layouts/PDFView.jsx
var import_react151, import_react_sdk77, PDFView;
var init_PDFView = __esm({
  "src/Prebuilt/layouts/PDFView.jsx"() {
    "use strict";
    init_define_process_env();
    import_react151 = __toESM(require("react"));
    import_react_sdk77 = require("@100mslive/react-sdk");
    init_ToastManager();
    init_Layout();
    init_EmbedView();
    init_useUISettings();
    PDFView = () => {
      const pdfConfig = usePDFConfig();
      const resetConfig = useResetPDFConfig();
      const { iframeRef, startPDFShare, isPDFShareInProgress } = (0, import_react_sdk77.usePDFShare)(resetConfig);
      (0, import_react151.useEffect)(() => {
        (() => __async(void 0, null, function* () {
          try {
            if (!isPDFShareInProgress && pdfConfig) {
              yield startPDFShare(pdfConfig);
            }
          } catch (err) {
            resetConfig();
            ToastManager.addToast({
              title: `Error while sharing annotator ${err.message || ""}`,
              variant: "error"
            });
          }
        }))();
      }, [isPDFShareInProgress, pdfConfig, resetConfig, startPDFShare]);
      return /* @__PURE__ */ import_react151.default.createElement(EmbedScreenShareView, null, /* @__PURE__ */ import_react151.default.createElement(
        Box,
        {
          css: {
            mx: "$8",
            flex: "3 1 0",
            "@lg": {
              flex: "2 1 0",
              display: "flex",
              alignItems: "center"
            }
          }
        },
        /* @__PURE__ */ import_react151.default.createElement(
          "iframe",
          {
            title: "Embed View",
            ref: iframeRef,
            style: {
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: "0.75rem"
            },
            allow: "autoplay; clipboard-write;",
            referrerPolicy: "no-referrer"
          }
        )
      ));
    };
  }
});

// src/Prebuilt/layouts/WaitingView.jsx
var import_react152, import_react_icons71, WaitingView;
var init_WaitingView = __esm({
  "src/Prebuilt/layouts/WaitingView.jsx"() {
    "use strict";
    init_define_process_env();
    import_react152 = __toESM(require("react"));
    import_react_icons71 = require("@100mslive/react-icons");
    init_Layout();
    init_Text2();
    WaitingView = import_react152.default.memo(() => {
      return /* @__PURE__ */ import_react152.default.createElement(
        Box,
        {
          css: {
            overflow: "hidden",
            w: "96%",
            maxWidth: "96%",
            h: "100%",
            m: "auto",
            background: "$surface_default",
            borderRadius: "$3"
          },
          "data-testid": "waiting_view"
        },
        /* @__PURE__ */ import_react152.default.createElement(
          Flex,
          {
            align: "center",
            direction: "column",
            css: {
              w: "$96",
              textAlign: "center",
              margin: "auto",
              h: "100%",
              justifyContent: "center",
              gap: "$8"
            }
          },
          /* @__PURE__ */ import_react152.default.createElement(import_react_icons71.ColoredTimeIcon, { width: "80px", height: "80px" }),
          /* @__PURE__ */ import_react152.default.createElement(
            Flex,
            {
              direction: "column",
              css: {
                w: "$80",
                p: "$1",
                gap: "$4"
              }
            },
            /* @__PURE__ */ import_react152.default.createElement(Text, { color: "white", variant: "h6", css: { "@md": { fontSize: "$md" } } }, "Please wait"),
            /* @__PURE__ */ import_react152.default.createElement(Text, { color: "$on_surface_medium", css: { mt: "$4", "@md": { fontSize: "$sm" } } }, "Sit back and relax till others let you join.")
          )
        )
      );
    });
  }
});

// src/Prebuilt/components/HlsStatsOverlay.jsx
function HlsStatsOverlay({ hlsStatsState, onClose }) {
  var _a7, _b7, _c;
  return /* @__PURE__ */ import_react153.default.createElement(
    Flex,
    {
      css: {
        position: "absolute",
        width: "$80",
        marginLeft: "$8",
        padding: "$8 $8 $10",
        zIndex: 10,
        backgroundColor: "$surface_brighter",
        borderRadius: "$1"
      },
      direction: "column"
    },
    /* @__PURE__ */ import_react153.default.createElement(IconButton_default, { css: { position: "absolute", top: "$2", right: "$2" }, onClick: onClose }, /* @__PURE__ */ import_react153.default.createElement(import_react_icons72.CloseIcon, null)),
    /* @__PURE__ */ import_react153.default.createElement(HlsStatsRow, { label: "URL" }, /* @__PURE__ */ import_react153.default.createElement(Flex, { align: "center" }, /* @__PURE__ */ import_react153.default.createElement(
      "a",
      {
        style: { cursor: "pointer", textDecoration: "underline" },
        href: hlsStatsState == null ? void 0 : hlsStatsState.url,
        target: "_blank",
        rel: "noreferrer"
      },
      "Stream url"
    ))),
    /* @__PURE__ */ import_react153.default.createElement(HlsStatsRow, { label: "Video size" }, ` ${(_a7 = hlsStatsState == null ? void 0 : hlsStatsState.videoSize) == null ? void 0 : _a7.width}x${(_b7 = hlsStatsState == null ? void 0 : hlsStatsState.videoSize) == null ? void 0 : _b7.height}`),
    /* @__PURE__ */ import_react153.default.createElement(HlsStatsRow, { label: "Buffer duration" }, (_c = hlsStatsState == null ? void 0 : hlsStatsState.bufferedDuration) == null ? void 0 : _c.toFixed(2), " "),
    /* @__PURE__ */ import_react153.default.createElement(HlsStatsRow, { label: "Connection speed" }, `${((hlsStatsState == null ? void 0 : hlsStatsState.bandwidthEstimate) / (1e3 * 1e3)).toFixed(2)} Mbps`),
    /* @__PURE__ */ import_react153.default.createElement(HlsStatsRow, { label: "Bitrate" }, `${((hlsStatsState == null ? void 0 : hlsStatsState.bitrate) / (1e3 * 1e3)).toFixed(2)} Mbps`),
    /* @__PURE__ */ import_react153.default.createElement(HlsStatsRow, { label: "distance from live" }, getDurationFromSeconds(hlsStatsState.distanceFromLive / 1e3)),
    /* @__PURE__ */ import_react153.default.createElement(HlsStatsRow, { label: "Dropped frames" }, hlsStatsState == null ? void 0 : hlsStatsState.droppedFrames)
  );
}
function getDurationFromSeconds(timeInSeconds) {
  let time = Math.floor(timeInSeconds);
  const hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  const prefixedMinutes = `${minutes < 10 ? "0" + minutes : minutes}`;
  const prefixedSeconds = `${seconds < 10 ? "0" + seconds : seconds}`;
  let videoTimeStr = `${prefixedMinutes}:${prefixedSeconds}`;
  if (hours) {
    const prefixedHours = `${hours < 10 ? "0" + hours : hours}`;
    videoTimeStr = `${prefixedHours}:${prefixedMinutes}:${prefixedSeconds}`;
  }
  return videoTimeStr;
}
var import_react153, import_react_icons72, HlsStatsRow;
var init_HlsStatsOverlay = __esm({
  "src/Prebuilt/components/HlsStatsOverlay.jsx"() {
    "use strict";
    init_define_process_env();
    import_react153 = __toESM(require("react"));
    import_react_icons72 = require("@100mslive/react-icons");
    init_Layout();
    init_Text2();
    init_IconButton3();
    HlsStatsRow = (0, import_react153.memo)(({ label, children }) => {
      return /* @__PURE__ */ import_react153.default.createElement(Flex, { gap: 4, justify: "center", css: { width: "100%" } }, /* @__PURE__ */ import_react153.default.createElement(
        Text,
        {
          css: {
            width: "50%",
            "@md": { fontSize: "$md" },
            "@sm": { fontSize: "$sm" }
            // textAlign: "right",
          }
        },
        label
      ), /* @__PURE__ */ import_react153.default.createElement(
        Text,
        {
          css: {
            "@md": { fontSize: "$md" },
            "@sm": { fontSize: "$sm" },
            width: "50%",
            overflowWrap: "break-word"
            // textAlign: "left",
          }
        },
        children
      ));
    });
  }
});

// src/Prebuilt/components/HMSVideo/Controls.jsx
var VideoControls, LeftControls, RightControls;
var init_Controls = __esm({
  "src/Prebuilt/components/HMSVideo/Controls.jsx"() {
    "use strict";
    init_define_process_env();
    init_src();
    VideoControls = styled(Flex, {
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "stretch",
      width: "100%",
      gap: "$2"
    });
    LeftControls = styled(Flex, {
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      gap: "$4"
    });
    RightControls = styled(Flex, {
      justifyContent: "flex-end",
      alignItems: "center",
      width: "100%",
      gap: "$4"
    });
  }
});

// src/Prebuilt/components/HMSVideo/HMSVideo.jsx
var import_react154, HMSVideo;
var init_HMSVideo = __esm({
  "src/Prebuilt/components/HMSVideo/HMSVideo.jsx"() {
    "use strict";
    init_define_process_env();
    import_react154 = __toESM(require("react"));
    init_src();
    HMSVideo = (0, import_react154.forwardRef)((_a7, videoRef) => {
      var _b7 = _a7, { children } = _b7, props = __objRest(_b7, ["children"]);
      return /* @__PURE__ */ import_react154.default.createElement(Flex, __spreadValues({ "data-testid": "hms-video", css: { size: "100%", position: "relative" }, direction: "column" }, props), /* @__PURE__ */ import_react154.default.createElement("video", { style: { flex: "1 1 0", margin: "0 auto", minHeight: "0" }, ref: videoRef, playsInline: true }), children);
    });
  }
});

// src/Prebuilt/components/HMSVideo/PlayButton.jsx
var import_react155, import_react_icons73, PlayButton;
var init_PlayButton = __esm({
  "src/Prebuilt/components/HMSVideo/PlayButton.jsx"() {
    "use strict";
    init_define_process_env();
    import_react155 = __toESM(require("react"));
    import_react_icons73 = require("@100mslive/react-icons");
    init_src();
    PlayButton = ({ onClick, isPaused }) => {
      return /* @__PURE__ */ import_react155.default.createElement(Tooltip, { title: isPaused ? "Play" : "Pause", side: "top" }, /* @__PURE__ */ import_react155.default.createElement(IconButton, { onClick, "data-testid": "play_pause_btn" }, isPaused ? /* @__PURE__ */ import_react155.default.createElement(import_react_icons73.PlayIcon, { width: 20, height: 20 }) : /* @__PURE__ */ import_react155.default.createElement(import_react_icons73.PauseIcon, { width: 20, height: 20 })));
    };
  }
});

// src/Prebuilt/components/HMSVideo/HMSVIdeoUtils.js
function getPercentage(a, b) {
  return a / b * 100;
}
function getDurationFromSeconds2(timeInSeconds) {
  let time = Math.floor(timeInSeconds);
  const hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  const prefixedMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const prefixedSeconds = `${seconds < 10 ? `0${seconds}` : seconds}`;
  let videoTimeStr = `${prefixedMinutes}:${prefixedSeconds}`;
  if (hours) {
    const prefixedHours = `${hours < 10 ? `0${hours}` : hours}`;
    videoTimeStr = `${prefixedHours}:${prefixedMinutes}:${prefixedSeconds}`;
  }
  return videoTimeStr;
}
var init_HMSVIdeoUtils = __esm({
  "src/Prebuilt/components/HMSVideo/HMSVIdeoUtils.js"() {
    "use strict";
    init_define_process_env();
  }
});

// src/Prebuilt/components/HMSVideo/VideoProgress.jsx
var import_react156, VideoProgress;
var init_VideoProgress = __esm({
  "src/Prebuilt/components/HMSVideo/VideoProgress.jsx"() {
    "use strict";
    init_define_process_env();
    import_react156 = __toESM(require("react"));
    init_src();
    init_HMSVIdeoUtils();
    VideoProgress = ({ onValueChange, hlsPlayer: hlsPlayer2 }) => {
      const [videoProgress, setVideoProgress] = (0, import_react156.useState)(0);
      const [bufferProgress, setBufferProgress] = (0, import_react156.useState)(0);
      const progressRootRef = (0, import_react156.useRef)();
      (0, import_react156.useEffect)(() => {
        const videoEl = hlsPlayer2.getVideoElement();
        const timeupdateHandler = () => {
          var _a7;
          const videoProgress2 = Math.floor(getPercentage(videoEl.currentTime, videoEl.duration));
          let bufferProgress2 = 0;
          if (videoEl.buffered.length > 0) {
            bufferProgress2 = Math.floor(getPercentage((_a7 = videoEl.buffered) == null ? void 0 : _a7.end(0), videoEl.duration));
          }
          setVideoProgress(isNaN(videoProgress2) ? 0 : videoProgress2);
          setBufferProgress(isNaN(bufferProgress2) ? 0 : bufferProgress2);
        };
        if (videoEl) {
          videoEl.addEventListener("timeupdate", timeupdateHandler);
        }
        return function cleanup() {
          if (videoEl) {
            videoEl.removeEventListener("timeupdate", timeupdateHandler);
          }
        };
      }, [hlsPlayer2]);
      const onProgressChangeHandler = (e) => {
        const userClickedX = e.clientX - progressRootRef.current.offsetLeft;
        const progressBarWidth = progressRootRef.current.offsetWidth;
        const progress = Math.floor(getPercentage(userClickedX, progressBarWidth));
        const videoEl = hlsPlayer2.getVideoElement();
        const currentTime = progress * videoEl.duration / 100;
        if (onValueChange) {
          onValueChange(currentTime);
        }
      };
      return hlsPlayer2.getVideoElement() ? /* @__PURE__ */ import_react156.default.createElement(
        Flex,
        {
          ref: progressRootRef,
          css: { cursor: "pointer", h: "$4", alignSelf: "stretch" },
          onClick: onProgressChangeHandler
        },
        /* @__PURE__ */ import_react156.default.createElement(
          Box,
          {
            id: "video-actual",
            css: {
              display: "inline",
              width: `${videoProgress}%`,
              background: "$primary_default"
            }
          }
        ),
        /* @__PURE__ */ import_react156.default.createElement(
          Box,
          {
            id: "video-buffer",
            css: {
              width: `${bufferProgress - videoProgress}%`,
              background: "$on_surface_high",
              opacity: "25%"
            }
          }
        ),
        /* @__PURE__ */ import_react156.default.createElement(
          Box,
          {
            id: "video-rest",
            css: {
              width: `${100 - bufferProgress}%`,
              background: "$on_surface_high",
              opacity: "10%"
            }
          }
        )
      ) : null;
    };
  }
});

// src/Prebuilt/components/HMSVideo/VideoTime.jsx
var import_react157, import_hls_player2, VideoTime;
var init_VideoTime = __esm({
  "src/Prebuilt/components/HMSVideo/VideoTime.jsx"() {
    "use strict";
    init_define_process_env();
    import_react157 = __toESM(require("react"));
    import_hls_player2 = require("@100mslive/hls-player");
    init_src();
    init_HMSVIdeoUtils();
    VideoTime = ({ hlsPlayer: hlsPlayer2 }) => {
      const [videoTime, setVideoTime] = (0, import_react157.useState)("");
      (0, import_react157.useEffect)(() => {
        const timeupdateHandler = (currentTime) => setVideoTime(getDurationFromSeconds2(currentTime));
        if (hlsPlayer2) {
          hlsPlayer2.on(import_hls_player2.HMSHLSPlayerEvents.CURRENT_TIME, timeupdateHandler);
        }
        return function cleanup() {
          if (hlsPlayer2) {
            hlsPlayer2.off(import_hls_player2.HMSHLSPlayerEvents.CURRENT_TIME, timeupdateHandler);
          }
        };
      }, [hlsPlayer2]);
      return hlsPlayer2 ? /* @__PURE__ */ import_react157.default.createElement(
        Text,
        {
          css: {
            minWidth: "$16",
            c: "$on_surface_medium",
            display: "flex",
            justifyContent: "center"
          }
        },
        videoTime
      ) : null;
    };
  }
});

// src/Prebuilt/components/HMSVideo/VolumeControl.jsx
var import_react158, import_react_icons74, VolumeControl, VolumeIcon;
var init_VolumeControl = __esm({
  "src/Prebuilt/components/HMSVideo/VolumeControl.jsx"() {
    "use strict";
    init_define_process_env();
    import_react158 = __toESM(require("react"));
    import_react_icons74 = require("@100mslive/react-icons");
    init_src();
    VolumeControl = ({ hlsPlayer: hlsPlayer2 }) => {
      var _a7;
      const [volume, setVolume] = (0, import_react158.useState)((_a7 = hlsPlayer2 == null ? void 0 : hlsPlayer2.volume) != null ? _a7 : 100);
      const [showSlider, setShowSlider] = (0, import_react158.useState)(false);
      return /* @__PURE__ */ import_react158.default.createElement(
        Flex,
        {
          align: "center",
          css: { color: "$on_surface_high" },
          onMouseOver: (event) => {
            event.stopPropagation();
            setShowSlider(true);
          },
          onMouseLeave: (event) => {
            event.stopPropagation();
            setShowSlider(false);
          }
        },
        /* @__PURE__ */ import_react158.default.createElement(
          VolumeIcon,
          {
            volume,
            onClick: () => {
              if (volume > 0) {
                setVolume(0);
                hlsPlayer2 == null ? void 0 : hlsPlayer2.setVolume(0);
              } else {
                setVolume(100);
                hlsPlayer2 == null ? void 0 : hlsPlayer2.setVolume(100);
              }
            }
          }
        ),
        /* @__PURE__ */ import_react158.default.createElement(
          Slider,
          {
            css: {
              mx: "$4",
              w: "$20",
              cursor: "pointer",
              "@sm": { w: "$14" },
              "@xs": { w: "$14" },
              opacity: showSlider ? "1" : "0",
              display: showSlider ? "" : "none",
              transition: `all .2s ease .5s`
            },
            min: 0,
            max: 100,
            step: 1,
            value: [volume],
            onValueChange: (volume2) => {
              hlsPlayer2.setVolume(volume2[0]);
              setVolume(volume2[0]);
            },
            thumbStyles: { w: "$6", h: "$6" }
          }
        )
      );
    };
    VolumeIcon = ({ volume, onClick }) => {
      if (volume === 0) {
        return /* @__PURE__ */ import_react158.default.createElement(import_react_icons74.VolumeZeroIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick });
      }
      return volume < 50 ? /* @__PURE__ */ import_react158.default.createElement(import_react_icons74.VolumeOneIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick }) : /* @__PURE__ */ import_react158.default.createElement(import_react_icons74.VolumeTwoIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick });
    };
  }
});

// src/Prebuilt/components/HMSVideo/index.js
var HMSVideoPlayer;
var init_HMSVideo2 = __esm({
  "src/Prebuilt/components/HMSVideo/index.js"() {
    "use strict";
    init_define_process_env();
    init_Controls();
    init_HMSVideo();
    init_PlayButton();
    init_VideoProgress();
    init_VideoTime();
    init_VolumeControl();
    HMSVideoPlayer = {
      Root: HMSVideo,
      PlayButton,
      Progress: VideoProgress,
      Duration: VideoTime,
      Volume: VolumeControl,
      Controls: {
        Root: VideoControls,
        Left: LeftControls,
        Right: RightControls
      }
    };
  }
});

// src/Prebuilt/components/HMSVideo/FullscreenButton.jsx
var import_react159, FullScreenButton2;
var init_FullscreenButton = __esm({
  "src/Prebuilt/components/HMSVideo/FullscreenButton.jsx"() {
    "use strict";
    init_define_process_env();
    import_react159 = __toESM(require("react"));
    init_src();
    FullScreenButton2 = ({ isFullScreen, icon, onToggle }) => {
      return /* @__PURE__ */ import_react159.default.createElement(Tooltip, { title: `${isFullScreen ? "Exit" : "Go"} fullscreen`, side: "top" }, /* @__PURE__ */ import_react159.default.createElement(
        IconButton,
        {
          variant: "standard",
          css: { margin: "0px" },
          onClick: onToggle,
          key: "fullscreen_btn",
          "data-testid": "fullscreen_btn"
        },
        /* @__PURE__ */ import_react159.default.createElement(Flex, null, icon)
      ));
    };
  }
});

// src/Prebuilt/components/HMSVideo/HLSAutoplayBlockedPrompt.jsx
function HLSAutoplayBlockedPrompt({ open, unblockAutoPlay }) {
  return /* @__PURE__ */ import_react160.default.createElement(
    Dialog.Root,
    {
      open,
      onOpenChange: (value) => {
        if (!value) {
          unblockAutoPlay();
        }
      }
    },
    /* @__PURE__ */ import_react160.default.createElement(DialogContent, { title: "Attention", closeable: false }, /* @__PURE__ */ import_react160.default.createElement(DialogRow, null, /* @__PURE__ */ import_react160.default.createElement(Text, { variant: "md" }, 'The browser wants us to get a confirmation for playing the HLS Stream. Please click "play stream" to proceed.')), /* @__PURE__ */ import_react160.default.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ import_react160.default.createElement(
      Button,
      {
        variant: "primary",
        onClick: () => {
          unblockAutoPlay();
        }
      },
      "Play stream"
    )))
  );
}
var import_react160;
var init_HLSAutoplayBlockedPrompt = __esm({
  "src/Prebuilt/components/HMSVideo/HLSAutoplayBlockedPrompt.jsx"() {
    "use strict";
    init_define_process_env();
    import_react160 = __toESM(require("react"));
    init_src();
    init_DialogContent2();
  }
});

// src/Prebuilt/components/HMSVideo/HLSQualitySelector.jsx
function HLSQualitySelector({ open, onOpen, layers, onQualityChange, selection, isAuto }) {
  return /* @__PURE__ */ import_react161.default.createElement(Dropdown.Root, { open, onOpenChange: (value) => onOpen(value) }, /* @__PURE__ */ import_react161.default.createElement(Dropdown.Trigger, { asChild: true, "data-testid": "quality_selector" }, /* @__PURE__ */ import_react161.default.createElement(
    Flex,
    {
      css: {
        color: "$on_primary_high",
        r: "$1",
        cursor: "pointer",
        p: "$2"
      }
    },
    /* @__PURE__ */ import_react161.default.createElement(Tooltip, { title: "Select Quality", side: "top" }, /* @__PURE__ */ import_react161.default.createElement(Flex, { align: "center" }, /* @__PURE__ */ import_react161.default.createElement(
      Box,
      {
        css: {
          w: "$9",
          h: "$9",
          display: "inline-flex",
          alignItems: "center",
          c: "$on_surface_high"
        }
      },
      /* @__PURE__ */ import_react161.default.createElement(import_react_icons75.SettingsIcon, null)
    ), /* @__PURE__ */ import_react161.default.createElement(
      Text,
      {
        variant: {
          "@md": "sm",
          "@sm": "xs",
          "@xs": "tiny"
        },
        css: { display: "flex", alignItems: "center", ml: "$2", c: "$on_surface_medium" }
      },
      isAuto && /* @__PURE__ */ import_react161.default.createElement(import_react161.default.Fragment, null, "Auto", /* @__PURE__ */ import_react161.default.createElement(
        Box,
        {
          css: {
            mx: "$2",
            w: "$2",
            h: "$2",
            background: "$on_surface_medium",
            r: "$1"
          }
        }
      )),
      selection && Math.min(selection.width, selection.height),
      "p"
    )))
  )), layers.length > 0 && /* @__PURE__ */ import_react161.default.createElement(
    Dropdown.Content,
    {
      sideOffset: 5,
      align: "end",
      css: {
        height: "auto",
        maxHeight: "$52",
        w: "$40",
        bg: "$surface_bright",
        py: "$4",
        gap: "$4",
        display: "grid"
      }
    },
    layers.map((layer) => {
      return /* @__PURE__ */ import_react161.default.createElement(
        Dropdown.Item,
        {
          onClick: () => onQualityChange(layer),
          key: layer.width,
          css: {
            bg: !isAuto && layer.width === (selection == null ? void 0 : selection.width) && layer.height === (selection == null ? void 0 : selection.height) ? "$surface_default" : "$surface_bright",
            "&:hover": {
              bg: "$surface_brighter"
            },
            p: "$2 $4 $2 $8",
            h: "$12",
            gap: "$2"
          }
        },
        /* @__PURE__ */ import_react161.default.createElement(Text, { variant: "caption", css: { fontWeight: "$semiBold" } }, getQualityText(layer)),
        /* @__PURE__ */ import_react161.default.createElement(Text, { variant: "caption", css: { flex: "1 1 0", c: "$on_surface_low", pl: "$2" } }, getBitrateText(layer)),
        !isAuto && layer.width === (selection == null ? void 0 : selection.width) && layer.height === (selection == null ? void 0 : selection.height) && /* @__PURE__ */ import_react161.default.createElement(import_react_icons75.CheckIcon, { width: "16px", height: "16px" })
      );
    }),
    /* @__PURE__ */ import_react161.default.createElement(
      Dropdown.Item,
      {
        onClick: () => onQualityChange({ height: "auto" }),
        key: "auto",
        css: {
          bg: !isAuto ? "$surface_bright" : "$surface_default",
          "&:hover": {
            bg: "$surface_brighter"
          },
          p: "$2 $4 $2 $8",
          h: "$12",
          gap: "$2"
        }
      },
      /* @__PURE__ */ import_react161.default.createElement(Text, { variant: "caption", css: { fontWeight: "$semiBold", flex: "1 1 0" } }, "Auto"),
      isAuto && /* @__PURE__ */ import_react161.default.createElement(import_react_icons75.CheckIcon, { width: "16px", height: "16px" })
    )
  ));
}
var import_react161, import_react_icons75, getQualityText, getBitrateText;
var init_HLSQualitySelector = __esm({
  "src/Prebuilt/components/HMSVideo/HLSQualitySelector.jsx"() {
    "use strict";
    init_define_process_env();
    import_react161 = __toESM(require("react"));
    import_react_icons75 = require("@100mslive/react-icons");
    init_src();
    getQualityText = (layer) => `${Math.min(layer.height, layer.width)}p `;
    getBitrateText = (layer) => `(${(Number(layer.bitrate / 1e3) / 1e3).toFixed(2)} Mbps)`;
  }
});

// src/Prebuilt/layouts/HLSView.jsx
var HLSView_exports = {};
__export(HLSView_exports, {
  default: () => HLSView_default
});
var import_react162, import_react_use31, import_hls_player3, import_screenfull3, import_react_sdk78, import_react_icons76, hlsPlayer, HLSView, HLSView_default;
var init_HLSView = __esm({
  "src/Prebuilt/layouts/HLSView.jsx"() {
    "use strict";
    init_define_process_env();
    import_react162 = __toESM(require("react"));
    import_react_use31 = require("react-use");
    import_hls_player3 = require("@100mslive/hls-player");
    import_screenfull3 = __toESM(require("screenfull"));
    import_react_sdk78 = require("@100mslive/react-sdk");
    import_react_icons76 = require("@100mslive/react-icons");
    init_HlsStatsOverlay();
    init_HMSVideo2();
    init_FullscreenButton();
    init_HLSAutoplayBlockedPrompt();
    init_HLSQualitySelector();
    init_ToastManager();
    init_IconButton2();
    init_Layout();
    init_Loading2();
    init_Text2();
    init_Theme();
    init_Tooltip2();
    init_constants();
    HLSView = () => {
      var _a7;
      const videoRef = (0, import_react162.useRef)(null);
      const hlsViewRef = (0, import_react162.useRef)(null);
      const hlsState = (0, import_react_sdk78.useHMSStore)(import_react_sdk78.selectHLSState);
      const enablHlsStats = (0, import_react_sdk78.useHMSStore)((0, import_react_sdk78.selectAppData)(APP_DATA.hlsStats));
      const hmsActions = (0, import_react_sdk78.useHMSActions)();
      const { themeType, theme: theme2 } = useTheme();
      const [streamEnded, setStreamEnded] = (0, import_react162.useState)(false);
      let [hlsStatsState, setHlsStatsState] = (0, import_react162.useState)(null);
      const hlsUrl = (_a7 = hlsState.variants[0]) == null ? void 0 : _a7.url;
      const [availableLayers, setAvailableLayers] = (0, import_react162.useState)([]);
      const [isVideoLive, setIsVideoLive] = (0, import_react162.useState)(true);
      const [isUserSelectedAuto, setIsUserSelectedAuto] = (0, import_react162.useState)(true);
      const [currentSelectedQuality, setCurrentSelectedQuality] = (0, import_react162.useState)(null);
      const [isHlsAutoplayBlocked, setIsHlsAutoplayBlocked] = (0, import_react162.useState)(false);
      const [isPaused, setIsPaused] = (0, import_react162.useState)(false);
      const isFullScreenSupported = import_screenfull3.default.isEnabled;
      const [show, toggle] = (0, import_react_use31.useToggle)(false);
      const [controlsVisible, setControlsVisible] = (0, import_react162.useState)(true);
      const controlsRef = (0, import_react162.useRef)();
      const controlsTimerRef = (0, import_react162.useRef)();
      const [qualityDropDownOpen, setQualityDropDownOpen] = (0, import_react162.useState)(false);
      const lastHlsUrl = (0, import_react_use31.usePrevious)(hlsUrl);
      const isMobile = (0, import_react_use31.useMedia)(config.media.md);
      const isFullScreen = (0, import_react_use31.useFullscreen)(hlsViewRef, show, {
        onClose: () => toggle(false)
      });
      const [showLoader, setShowLoader] = (0, import_react162.useState)(false);
      (0, import_react162.useEffect)(() => {
        const videoEl = videoRef.current;
        const showLoader2 = () => setShowLoader(true);
        const hideLoader = () => setShowLoader(false);
        videoEl == null ? void 0 : videoEl.addEventListener("playing", hideLoader);
        videoEl == null ? void 0 : videoEl.addEventListener("waiting", showLoader2);
        return () => {
          videoEl == null ? void 0 : videoEl.removeEventListener("playing", hideLoader);
          videoEl == null ? void 0 : videoEl.removeEventListener("waiting", showLoader2);
        };
      }, []);
      (0, import_react162.useEffect)(() => {
        if (streamEnded && lastHlsUrl !== hlsUrl) {
          setStreamEnded(false);
        }
      }, [hlsUrl, streamEnded, lastHlsUrl]);
      (0, import_react162.useEffect)(() => {
        const videoElem = videoRef.current;
        const setStreamEndedCallback = () => {
          setStreamEnded(true);
          videoElem == null ? void 0 : videoElem.removeEventListener("ended", setStreamEndedCallback);
        };
        videoElem == null ? void 0 : videoElem.addEventListener("ended", setStreamEndedCallback);
        return () => {
          videoElem == null ? void 0 : videoElem.removeEventListener("ended", setStreamEndedCallback);
        };
      }, [hlsUrl]);
      (0, import_react162.useEffect)(() => {
        let videoEl = videoRef.current;
        const manifestLoadedHandler = ({ layers }) => {
          setAvailableLayers(layers);
        };
        const layerUpdatedHandler = ({ layer }) => {
          setCurrentSelectedQuality(layer);
        };
        const metadataLoadedHandler = (_a8) => {
          var _b7 = _a8, { payload } = _b7, rest = __objRest(_b7, ["payload"]);
          var _a9;
          const parsePayload = (str) => {
            try {
              return JSON.parse(str);
            } catch (e) {
              return str;
            }
          };
          const duration = rest.duration;
          const parsedPayload = parsePayload(payload);
          switch (parsedPayload.type) {
            case EMOJI_REACTION_TYPE:
              (_a9 = window.showFlyingEmoji) == null ? void 0 : _a9.call(window, { emojiId: parsedPayload == null ? void 0 : parsedPayload.emojiId, senderId: parsedPayload == null ? void 0 : parsedPayload.senderId });
              break;
            default: {
              const toast = {
                title: `Payload from timed Metadata ${parsedPayload}`,
                duration: duration || 3e3
              };
              console.debug("Added toast ", JSON.stringify(toast));
              ToastManager.addToast(toast);
              break;
            }
          }
        };
        const handleError = (data3) => {
          console.error("[HLSView] error in hls", `${data3}`);
        };
        const handleNoLongerLive = ({ isLive }) => {
          setIsVideoLive(isLive);
        };
        const playbackEventHandler = (data3) => setIsPaused(data3.state === import_hls_player3.HLSPlaybackState.paused);
        const handleAutoplayBlock = (data3) => setIsHlsAutoplayBlocked(!!data3);
        if (videoEl && hlsUrl) {
          hlsPlayer = new import_hls_player3.HMSHLSPlayer(hlsUrl, videoEl);
          hlsPlayer.on(import_hls_player3.HMSHLSPlayerEvents.SEEK_POS_BEHIND_LIVE_EDGE, handleNoLongerLive);
          hlsPlayer.on(import_hls_player3.HMSHLSPlayerEvents.TIMED_METADATA_LOADED, metadataLoadedHandler);
          hlsPlayer.on(import_hls_player3.HMSHLSPlayerEvents.ERROR, handleError);
          hlsPlayer.on(import_hls_player3.HMSHLSPlayerEvents.PLAYBACK_STATE, playbackEventHandler);
          hlsPlayer.on(import_hls_player3.HMSHLSPlayerEvents.AUTOPLAY_BLOCKED, handleAutoplayBlock);
          hlsPlayer.on(import_hls_player3.HMSHLSPlayerEvents.MANIFEST_LOADED, manifestLoadedHandler);
          hlsPlayer.on(import_hls_player3.HMSHLSPlayerEvents.LAYER_UPDATED, layerUpdatedHandler);
          return () => {
            hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.SEEK_POS_BEHIND_LIVE_EDGE, handleNoLongerLive);
            hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.ERROR, handleError);
            hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.TIMED_METADATA_LOADED, metadataLoadedHandler);
            hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.PLAYBACK_STATE, playbackEventHandler);
            hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.AUTOPLAY_BLOCKED, handleAutoplayBlock);
            hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.MANIFEST_LOADED, manifestLoadedHandler);
            hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.LAYER_UPDATED, layerUpdatedHandler);
            hlsPlayer.reset();
            hlsPlayer = null;
          };
        }
      }, [hlsUrl]);
      (0, import_react162.useEffect)(() => {
        const onHLSStats = (state) => setHlsStatsState(state);
        if (enablHlsStats) {
          hlsPlayer == null ? void 0 : hlsPlayer.on(import_hls_player3.HMSHLSPlayerEvents.STATS, onHLSStats);
        } else {
          hlsPlayer == null ? void 0 : hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.STATS, onHLSStats);
        }
        return () => {
          hlsPlayer == null ? void 0 : hlsPlayer.off(import_hls_player3.HMSHLSPlayerEvents.STATS, onHLSStats);
        };
      }, [enablHlsStats]);
      const unblockAutoPlay = () => __async(void 0, null, function* () {
        try {
          yield hlsPlayer.play();
          setIsHlsAutoplayBlocked(false);
        } catch (error) {
          console.error("Tried to unblock Autoplay failed with", error.message);
        }
      });
      const handleQuality = (0, import_react162.useCallback)(
        (quality) => {
          if (hlsPlayer) {
            setIsUserSelectedAuto(quality.height.toString().toLowerCase() === "auto");
            hlsPlayer.setLayer(quality);
          }
        },
        [availableLayers]
        //eslint-disable-line
      );
      const sfnOverlayClose = () => {
        hmsActions.setAppData(APP_DATA.hlsStats, !enablHlsStats);
      };
      (0, import_react162.useEffect)(() => {
        if (controlsVisible && isFullScreen && !qualityDropDownOpen) {
          if (controlsTimerRef.current) {
            clearTimeout(controlsTimerRef.current);
          }
          controlsTimerRef.current = setTimeout(() => {
            setControlsVisible(false);
          }, 5e3);
        }
        if (!isFullScreen && controlsTimerRef.current) {
          clearTimeout(controlsTimerRef.current);
        }
        return () => {
          if (controlsTimerRef.current) {
            clearTimeout(controlsTimerRef.current);
          }
        };
      }, [controlsVisible, isFullScreen, qualityDropDownOpen]);
      const onHoverHandler = (0, import_react162.useCallback)(
        (event) => {
          if (event.type === "mouseenter" || qualityDropDownOpen) {
            setControlsVisible(true);
            return;
          }
          if (event.type === "mouseleave") {
            setControlsVisible(false);
          } else if (isFullScreen && !controlsVisible && event.type === "mousemove") {
            setControlsVisible(true);
            if (controlsTimerRef.current) {
              clearTimeout(controlsTimerRef.current);
            }
          }
        },
        [controlsVisible, isFullScreen, qualityDropDownOpen]
      );
      return /* @__PURE__ */ import_react162.default.createElement(
        Flex,
        {
          key: "hls-viewer",
          id: `hls-viewer-${themeType}`,
          ref: hlsViewRef,
          css: {
            size: "100%"
          }
        },
        (hlsStatsState == null ? void 0 : hlsStatsState.url) && enablHlsStats ? /* @__PURE__ */ import_react162.default.createElement(HlsStatsOverlay, { hlsStatsState, onClose: sfnOverlayClose }) : null,
        hlsUrl && !streamEnded ? /* @__PURE__ */ import_react162.default.createElement(
          Flex,
          {
            id: "hls-player-container",
            align: "center",
            justify: "center",
            css: {
              width: "100%",
              margin: "0 auto",
              height: "100%"
            }
          },
          /* @__PURE__ */ import_react162.default.createElement(HLSAutoplayBlockedPrompt, { open: isHlsAutoplayBlocked, unblockAutoPlay }),
          showLoader && /* @__PURE__ */ import_react162.default.createElement(
            Flex,
            {
              align: "center",
              justify: "center",
              css: {
                position: "absolute"
              }
            },
            /* @__PURE__ */ import_react162.default.createElement(Loading, { width: 72, height: 72 })
          ),
          /* @__PURE__ */ import_react162.default.createElement(
            HMSVideoPlayer.Root,
            {
              ref: videoRef,
              onMouseEnter: onHoverHandler,
              onMouseMove: onHoverHandler,
              onMouseLeave: onHoverHandler
            },
            isMobile && isPaused && /* @__PURE__ */ import_react162.default.createElement(
              Box,
              {
                css: {
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translateY(-40%) translateX(-50%)",
                  padding: "$8 14px $8 18px",
                  display: "inline-flex",
                  r: "50%",
                  gap: "$1",
                  bg: "$primary_default",
                  zIndex: 21
                }
              },
              /* @__PURE__ */ import_react162.default.createElement(IconButton, {
                onClick: () => __async(void 0, null, function* () {
                  return yield hlsPlayer == null ? void 0 : hlsPlayer.play();
                }), "data-testid": "play_btn"
              }, /* @__PURE__ */ import_react162.default.createElement(import_react_icons76.PlayIcon, { width: "60px", height: "60px" }))
            ),
            /* @__PURE__ */ import_react162.default.createElement(
              Flex,
              {
                ref: controlsRef,
                direction: "column",
                justify: "flex-end",
                align: "flex-start",
                css: {
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  background: `linear-gradient(180deg, ${theme2.colors.background_dim.value}00 29.46%, ${theme2.colors.background_dim.value}A3 100%);`,
                  width: "100%",
                  pt: "$8",
                  flexShrink: 0,
                  transition: "visibility 0s 0.5s, opacity 0.5s linear",
                  visibility: controlsVisible ? `` : `hidden`,
                  opacity: controlsVisible ? `1` : "0"
                }
              },
              !isMobile && /* @__PURE__ */ import_react162.default.createElement(
                HMSVideoPlayer.Controls.Root,
                {
                  css: {
                    p: "$4 $8"
                  }
                },
                /* @__PURE__ */ import_react162.default.createElement(HMSVideoPlayer.Controls.Left, null, /* @__PURE__ */ import_react162.default.createElement(
                  HMSVideoPlayer.PlayButton,
                  {
                    onClick: () => __async(void 0, null, function* () {
                      isPaused ? yield hlsPlayer == null ? void 0 : hlsPlayer.play() : hlsPlayer == null ? void 0 : hlsPlayer.pause();
                    }),
                    isPaused
                  }
                ), /* @__PURE__ */ import_react162.default.createElement(HMSVideoPlayer.Duration, { hlsPlayer }), /* @__PURE__ */ import_react162.default.createElement(HMSVideoPlayer.Volume, { hlsPlayer }), /* @__PURE__ */ import_react162.default.createElement(
                  IconButton,
                  {
                    variant: "standard",
                    css: { px: "$2" },
                    onClick: () => __async(void 0, null, function* () {
                      yield hlsPlayer.seekToLivePosition();
                      setIsVideoLive(true);
                    }),
                    key: "jump-to-live_btn",
                    "data-testid": "jump-to-live_btn"
                  },
                  /* @__PURE__ */ import_react162.default.createElement(Tooltip, { title: "Go to Live", side: "top" }, /* @__PURE__ */ import_react162.default.createElement(Flex, { justify: "center", gap: 2, align: "center" }, /* @__PURE__ */ import_react162.default.createElement(
                    Box,
                    {
                      css: {
                        height: "$4",
                        width: "$4",
                        background: isVideoLive ? "$alert_error_default" : "$on_primary_medium",
                        r: "$1"
                      }
                    }
                  ), /* @__PURE__ */ import_react162.default.createElement(
                    Text,
                    {
                      variant: {
                        "@sm": "xs"
                      },
                      css: {
                        c: isVideoLive ? "$on_surface_high" : "$on_surface_medium"
                      }
                    },
                    isVideoLive ? "LIVE" : "GO LIVE"
                  )))
                )),
                /* @__PURE__ */ import_react162.default.createElement(HMSVideoPlayer.Controls.Right, null, availableLayers.length > 0 ? /* @__PURE__ */ import_react162.default.createElement(
                  HLSQualitySelector,
                  {
                    layers: availableLayers,
                    onOpen: setQualityDropDownOpen,
                    open: qualityDropDownOpen,
                    selection: currentSelectedQuality,
                    onQualityChange: handleQuality,
                    isAuto: isUserSelectedAuto
                  }
                ) : null, isFullScreenSupported ? /* @__PURE__ */ import_react162.default.createElement(
                  FullScreenButton2,
                  {
                    isFullScreen,
                    onToggle: toggle,
                    icon: isFullScreen ? /* @__PURE__ */ import_react162.default.createElement(import_react_icons76.ShrinkIcon, null) : /* @__PURE__ */ import_react162.default.createElement(import_react_icons76.ExpandIcon, null)
                  }
                ) : null)
              )
            )
          )
        ) : /* @__PURE__ */ import_react162.default.createElement(Flex, { align: "center", justify: "center", direction: "column", css: { size: "100%", px: "$10" } }, /* @__PURE__ */ import_react162.default.createElement(Flex, { css: { c: "$on_surface_high", r: "$round", bg: "$surface_default", p: "$2" } }, streamEnded ? /* @__PURE__ */ import_react162.default.createElement(import_react_icons76.ColoredHandIcon, { height: 56, width: 56 }) : /* @__PURE__ */ import_react162.default.createElement(import_react_icons76.RadioIcon, { height: 56, width: 56 })), /* @__PURE__ */ import_react162.default.createElement(Text, { variant: "h5", css: { c: "$on_surface_high", mt: "$10", mb: 0, textAlign: "center" } }, streamEnded ? "Stream has ended" : "Stream yet to start"), /* @__PURE__ */ import_react162.default.createElement(Text, { variant: "md", css: { textAlign: "center", mt: "$4", c: "$on_surface_medium" } }, streamEnded ? "Have a nice day!" : "Sit back and relax"))
      );
    };
    HLSView_default = HLSView;
  }
});

// src/Prebuilt/layouts/VideoStreamingSection.tsx
var import_react163, import_react_sdk79, HLSView2, VideoStreamingSection;
var init_VideoStreamingSection = __esm({
  "src/Prebuilt/layouts/VideoStreamingSection.tsx"() {
    "use strict";
    init_define_process_env();
    import_react163 = __toESM(require("react"));
    import_react_sdk79 = require("@100mslive/react-sdk");
    init_FullPageProgress();
    init_GridLayout();
    init_Layout();
    init_EmbedView();
    init_PDFView();
    init_SidePane();
    init_WaitingView();
    init_useUISettings();
    init_constants();
    HLSView2 = import_react163.default.lazy(() => Promise.resolve().then(() => (init_HLSView(), HLSView_exports)));
    VideoStreamingSection = ({
      screenType,
      elements,
      hideControls = false
    }) => {
      var _a7, _b7;
      const localPeerRole = (0, import_react_sdk79.useHMSStore)(import_react_sdk79.selectLocalPeerRoleName);
      const isConnected = (0, import_react_sdk79.useHMSStore)(import_react_sdk79.selectIsConnectedToRoom);
      const hmsActions = (0, import_react_sdk79.useHMSActions)();
      const waitingViewerRole = useWaitingViewerRole();
      const urlToIframe = useUrlToEmbed();
      const pdfAnnotatorActive = usePDFConfig();
      (0, import_react163.useEffect)(() => {
        if (!isConnected) {
          return;
        }
        hmsActions.sessionStore.observe([SESSION_STORE_KEY.PINNED_MESSAGE, SESSION_STORE_KEY.SPOTLIGHT]);
      }, [isConnected, hmsActions]);
      if (!localPeerRole) {
        return null;
      }
      let ViewComponent;
      if (screenType === "hls_live_streaming") {
        ViewComponent = /* @__PURE__ */ import_react163.default.createElement(HLSView2, null);
      } else if (localPeerRole === waitingViewerRole) {
        ViewComponent = /* @__PURE__ */ import_react163.default.createElement(WaitingView, null);
      } else if (pdfAnnotatorActive) {
        ViewComponent = /* @__PURE__ */ import_react163.default.createElement(PDFView, null);
      } else if (urlToIframe) {
        ViewComponent = /* @__PURE__ */ import_react163.default.createElement(EmbedView, null);
      } else {
        ViewComponent = /* @__PURE__ */ import_react163.default.createElement(GridLayout, __spreadValues({}, (_a7 = elements == null ? void 0 : elements.video_tile_layout) == null ? void 0 : _a7.grid));
      }
      return /* @__PURE__ */ import_react163.default.createElement(import_react163.Suspense, { fallback: /* @__PURE__ */ import_react163.default.createElement(FullPageProgress_default, null) }, /* @__PURE__ */ import_react163.default.createElement(
        Flex,
        {
          css: {
            size: "100%",
            position: "relative",
            gap: "$4"
          }
        },
        ViewComponent,
        /* @__PURE__ */ import_react163.default.createElement(
          SidePane_default,
          {
            screenType,
            tileProps: (_b7 = elements == null ? void 0 : elements.video_tile_layout) == null ? void 0 : _b7.grid,
            hideControls
          }
        )
      ));
    };
  }
});

// src/Prebuilt/components/Header/common.jsx
var import_react164, import_react_sdk80, import_react_icons77, CamaraFlipActions, AudioActions, AudioSelectionSheet, SelectWithLabel;
var init_common2 = __esm({
  "src/Prebuilt/components/Header/common.jsx"() {
    "use strict";
    init_define_process_env();
    import_react164 = __toESM(require("react"));
    import_react_sdk80 = require("@100mslive/react-sdk");
    import_react_icons77 = require("@100mslive/react-icons");
    init_Divider2();
    init_Label2();
    init_Layout();
    init_Sheet2();
    init_Text2();
    init_IconButton3();
    init_ToastManager();
    CamaraFlipActions = () => {
      const actions = (0, import_react_sdk80.useHMSActions)();
      const { allDevices } = (0, import_react_sdk80.useDevices)();
      const { videoInput } = allDevices;
      const isVideoOn = (0, import_react_sdk80.useHMSStore)(import_react_sdk80.selectIsLocalVideoEnabled);
      const videoTrackId = (0, import_react_sdk80.useHMSStore)(import_react_sdk80.selectLocalVideoTrackID);
      const localVideoTrack = (0, import_react_sdk80.useHMSStore)((0, import_react_sdk80.selectVideoTrackByID)(videoTrackId));
      if (!videoInput || !(videoInput == null ? void 0 : videoInput.length) || !(localVideoTrack == null ? void 0 : localVideoTrack.facingMode)) {
        return null;
      }
      return /* @__PURE__ */ import_react164.default.createElement(Box, null, /* @__PURE__ */ import_react164.default.createElement(
        IconButton_default,
        {
          disabled: !isVideoOn,
          onClick: () => __async(void 0, null, function* () {
            try {
              yield actions.switchCamera();
            } catch (e) {
              ToastManager.addToast({
                title: `Error while flipping camera ${e.message || ""}`,
                variant: "error"
              });
            }
          })
        },
        /* @__PURE__ */ import_react164.default.createElement(import_react_icons77.CameraFlipIcon, null)
      ));
    };
    AudioActions = () => {
      const { allDevices, selectedDeviceIDs, updateDevice } = (0, import_react_sdk80.useDevices)();
      const shouldShowAudioOutput = "setSinkId" in HTMLMediaElement.prototype;
      const { audioInput, audioOutput } = allDevices;
      let availableAudioDevices = audioInput;
      let selectedAudio = selectedDeviceIDs.audioInput;
      if (shouldShowAudioOutput) {
        availableAudioDevices = audioOutput;
        selectedAudio = selectedDeviceIDs.audioOutput;
      }
      const hmsActions = (0, import_react_sdk80.useHMSActions)();
      const audioFiltered = availableAudioDevices == null ? void 0 : availableAudioDevices.find((item) => !!item.label);
      const currentSelection = availableAudioDevices == null ? void 0 : availableAudioDevices.find((item) => item.deviceId === selectedAudio);
      if (!audioFiltered) {
        return null;
      }
      let AudioIcon = /* @__PURE__ */ import_react164.default.createElement(import_react_icons77.SpeakerIcon, null);
      if (currentSelection && currentSelection.label.toLowerCase().includes("bluetooth")) {
        AudioIcon = /* @__PURE__ */ import_react164.default.createElement(import_react_icons77.BluetoothIcon, null);
      } else if (currentSelection && currentSelection.label.toLowerCase().includes("wired")) {
        AudioIcon = /* @__PURE__ */ import_react164.default.createElement(import_react_icons77.HeadphonesIcon, null);
      }
      return /* @__PURE__ */ import_react164.default.createElement(
        AudioSelectionSheet,
        {
          audioDevices: availableAudioDevices,
          audioSelected: selectedAudio,
          onChange: (deviceId) => __async(void 0, null, function* () {
            try {
              yield updateDevice({
                deviceId,
                deviceType: shouldShowAudioOutput ? import_react_sdk80.DeviceType.audioOutput : import_react_sdk80.DeviceType.audioInput
              });
            } catch (e) {
              ToastManager.addToast({
                title: `Error while changing audio device ${e.message || ""}`,
                variant: "error"
              });
            }
          })
        },
        /* @__PURE__ */ import_react164.default.createElement(
          Box,
          {
            onClick: () => __async(void 0, null, function* () {
              yield hmsActions.refreshDevices();
            })
          },
          /* @__PURE__ */ import_react164.default.createElement(IconButton_default, null, AudioIcon, " ")
        )
      );
    };
    AudioSelectionSheet = ({ audioDevices, audioSelected, onChange, children }) => {
      return /* @__PURE__ */ import_react164.default.createElement(Sheet.Root, null, /* @__PURE__ */ import_react164.default.createElement(Sheet.Trigger, { asChild: true }, children), /* @__PURE__ */ import_react164.default.createElement(Sheet.Content, null, /* @__PURE__ */ import_react164.default.createElement(Sheet.Title, { css: { py: "$10", px: "$8", alignItems: "center" } }, /* @__PURE__ */ import_react164.default.createElement(Flex, { direction: "row", justify: "between", css: { w: "100%" } }, /* @__PURE__ */ import_react164.default.createElement(Text, { variant: "h6", css: { display: "flex" } }, "Audio"), /* @__PURE__ */ import_react164.default.createElement(Sheet.Close, null, /* @__PURE__ */ import_react164.default.createElement(IconButton_default, { as: "div", "data-testid": "dialog_cross_icon" }, /* @__PURE__ */ import_react164.default.createElement(import_react_icons77.CrossIcon, null))))), /* @__PURE__ */ import_react164.default.createElement(HorizontalDivider, null), /* @__PURE__ */ import_react164.default.createElement(
        Flex,
        {
          direction: "column",
          css: {
            px: "$8",
            maxHeight: "80vh",
            overflowY: "auto"
          }
        },
        audioDevices.map((audioDevice) => {
          return /* @__PURE__ */ import_react164.default.createElement(
            SelectWithLabel,
            {
              key: audioDevice.deviceId,
              label: audioDevice.label,
              id: audioDevice.deviceId,
              checked: audioDevice.deviceId === audioSelected,
              onChange: () => onChange(audioDevice.deviceId)
            }
          );
        })
      )));
    };
    SelectWithLabel = ({ label, icon = /* @__PURE__ */ import_react164.default.createElement(import_react164.default.Fragment, null), checked, id, onChange }) => {
      return /* @__PURE__ */ import_react164.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            my: "$2",
            py: "$8",
            w: "100%",
            borderBottom: "1px solid $border_default"
          },
          onClick: onChange
        },
        /* @__PURE__ */ import_react164.default.createElement(
          Label3,
          {
            htmlFor: id,
            css: {
              fontSize: "$md",
              fontWeight: "$semiBold",
              color: checked ? "$on_surface_high" : "$on_surface_low",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "$8",
              flex: "1 1 0"
            }
          },
          icon,
          label
        ),
        checked && /* @__PURE__ */ import_react164.default.createElement(import_react_icons77.CheckIcon, { width: 24, height: 24 })
      );
    };
  }
});

// src/Prebuilt/components/Header/Header.tsx
var import_react165, import_react_use32, import_react_sdk81, Header2;
var init_Header = __esm({
  "src/Prebuilt/components/Header/Header.tsx"() {
    "use strict";
    init_define_process_env();
    import_react165 = __toESM(require("react"));
    import_react_use32 = require("react-use");
    import_react_sdk81 = require("@100mslive/react-sdk");
    init_src();
    init_HeaderComponents();
    init_StreamActions();
    init_common2();
    Header2 = () => {
      const roomState = (0, import_react_sdk81.useHMSStore)(import_react_sdk81.selectRoomState);
      const isMobile = (0, import_react_use32.useMedia)(config.media.md);
      if (roomState !== import_react_sdk81.HMSRoomState.Connected) {
        return /* @__PURE__ */ import_react165.default.createElement(import_react165.default.Fragment, null);
      }
      return /* @__PURE__ */ import_react165.default.createElement(Flex, { justify: "between", align: "center", css: { position: "relative", height: "100%" } }, /* @__PURE__ */ import_react165.default.createElement(Flex, { align: "center", gap: "2", css: { position: "absolute", left: "$10" } }, /* @__PURE__ */ import_react165.default.createElement(Logo, null), /* @__PURE__ */ import_react165.default.createElement(SpeakerTag, null), isMobile && /* @__PURE__ */ import_react165.default.createElement(Flex, { align: "center", css: { gap: "$4" } }, /* @__PURE__ */ import_react165.default.createElement(LiveStatus, null), /* @__PURE__ */ import_react165.default.createElement(RecordingStatus, null))), /* @__PURE__ */ import_react165.default.createElement(
        Flex,
        {
          align: "center",
          css: {
            position: "absolute",
            right: "$10",
            gap: "$4"
          }
        },
        /* @__PURE__ */ import_react165.default.createElement(StreamActions, null),
        isMobile ? /* @__PURE__ */ import_react165.default.createElement(import_react165.default.Fragment, null, /* @__PURE__ */ import_react165.default.createElement(CamaraFlipActions, null), /* @__PURE__ */ import_react165.default.createElement(AudioActions, null)) : null
      ));
    };
  }
});

// src/Prebuilt/components/Header/index.tsx
var init_Header2 = __esm({
  "src/Prebuilt/components/Header/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Header();
  }
});

// src/Prebuilt/components/ConferenceScreen.tsx
var import_react166, import_react_sdk82, ConferenceScreen;
var init_ConferenceScreen = __esm({
  "src/Prebuilt/components/ConferenceScreen.tsx"() {
    "use strict";
    init_define_process_env();
    import_react166 = __toESM(require("react"));
    import_react_sdk82 = require("@100mslive/react-sdk");
    init_Footer3();
    init_HLSFailureModal();
    init_PIPComponent();
    init_PIPManager();
    init_RoleChangeRequestModal();
    init_Layout();
    init_AppContext();
    init_VideoStreamingSection();
    init_FullPageProgress();
    init_Header2();
    init_useRoomLayoutScreen();
    init_useUISettings();
    init_constants();
    ConferenceScreen = () => {
      var _a7, _b7, _c, _d, _e;
      const { userName, endpoints, onJoin: onJoinFunc } = useHMSPrebuiltContext();
      const screenProps = useRoomLayoutConferencingScreen();
      const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
      const roomState = (0, import_react_sdk82.useHMSStore)(import_react_sdk82.selectRoomState);
      const isConnectedToRoom = (0, import_react_sdk82.useHMSStore)(import_react_sdk82.selectIsConnectedToRoom);
      const hmsActions = (0, import_react_sdk82.useHMSActions)();
      const [hideControls, setHideControls] = (0, import_react166.useState)(false);
      const dropdownList = (0, import_react_sdk82.useHMSStore)((0, import_react_sdk82.selectAppData)(APP_DATA.dropdownList));
      const authTokenInAppData = useAuthToken();
      const headerRef = (0, import_react166.useRef)(null);
      const footerRef = (0, import_react166.useRef)(null);
      const isMobileDevice = isAndroid || isIOS || isIPadOS;
      const dropdownListRef = (0, import_react166.useRef)();
      const [isHLSStarted] = useSetAppDataByKey(APP_DATA.hlsStarted);
      const toggleControls = () => {
        var _a8;
        if (((_a8 = dropdownListRef.current) == null ? void 0 : _a8.length) === 0 && isMobileDevice) {
          setHideControls((value) => !value);
        }
      };
      const autoRoomJoined = (0, import_react166.useRef)(isPreviewScreenEnabled);
      (0, import_react166.useEffect)(() => {
        let timeout;
        dropdownListRef.current = dropdownList || [];
        if (dropdownListRef.current && dropdownListRef.current.length === 0) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            if (dropdownListRef.current && dropdownListRef.current.length === 0) {
              setHideControls(isMobileDevice);
            }
          }, 5e3);
        }
        return () => {
          clearTimeout(timeout);
        };
      }, [dropdownList, hideControls, isMobileDevice]);
      (0, import_react166.useEffect)(() => {
        if (authTokenInAppData && !isConnectedToRoom && !isPreviewScreenEnabled && roomState !== import_react_sdk82.HMSRoomState.Connecting && !autoRoomJoined.current) {
          hmsActions.join({
            userName: userName || "",
            authToken: authTokenInAppData,
            initEndpoint: endpoints == null ? void 0 : endpoints.init,
            settings: {
              isAudioMuted: !isPreviewScreenEnabled,
              isVideoMuted: !isPreviewScreenEnabled,
              speakerAutoSelectionBlacklist: ["Yeti Stereo Microphone"]
            }
          }).catch(console.error);
          autoRoomJoined.current = true;
        }
      }, [authTokenInAppData, endpoints == null ? void 0 : endpoints.init, hmsActions, isConnectedToRoom, isPreviewScreenEnabled, roomState, userName]);
      (0, import_react166.useEffect)(() => {
        onJoinFunc == null ? void 0 : onJoinFunc();
        return () => {
          PictureInPicture.stop().catch((error) => console.error("stopping pip", error.message));
        };
      }, [onJoinFunc]);
      if (!isConnectedToRoom && ![import_react_sdk82.HMSRoomState.Reconnecting, import_react_sdk82.HMSRoomState.Disconnected].includes(roomState)) {
        return /* @__PURE__ */ import_react166.default.createElement(FullPageProgress_default, { text: roomState === import_react_sdk82.HMSRoomState.Connecting ? "Joining..." : "" });
      }
      return /* @__PURE__ */ import_react166.default.createElement(import_react166.default.Fragment, null, isHLSStarted ? /* @__PURE__ */ import_react166.default.createElement(Box, { css: { position: "fixed", zIndex: 100, w: "100%", h: "100%", left: 0, top: 0 } }, /* @__PURE__ */ import_react166.default.createElement(FullPageProgress_default, { text: "Starting live stream...", css: { opacity: 0.8, bg: "$background_dim" } })) : null, /* @__PURE__ */ import_react166.default.createElement(Flex, { css: { size: "100%", overflow: "hidden" }, direction: "column" }, !screenProps.hideSections.includes("header") && /* @__PURE__ */ import_react166.default.createElement(
        Box,
        {
          ref: headerRef,
          css: {
            h: "$18",
            transition: "margin 0.3s ease-in-out",
            marginTop: hideControls ? `-${(_a7 = headerRef.current) == null ? void 0 : _a7.clientHeight}px` : "none",
            "@md": {
              h: "$17"
            }
          },
          "data-testid": "header"
        },
        /* @__PURE__ */ import_react166.default.createElement(Header2, null)
      ), /* @__PURE__ */ import_react166.default.createElement(
        Box,
        {
          css: {
            w: "100%",
            flex: "1 1 0",
            minHeight: 0,
            // @ts-ignore
            px: ((_d = (_c = (_b7 = screenProps == null ? void 0 : screenProps.elements) == null ? void 0 : _b7.video_tile_layout) == null ? void 0 : _c.grid) == null ? void 0 : _d.edge_to_edge) ? 0 : "$10",
            // TODO: padding to be controlled by section/element
            paddingBottom: "env(safe-area-inset-bottom)",
            "@lg": {
              px: 0
            }
          },
          id: "conferencing",
          "data-testid": "conferencing",
          onClick: toggleControls
        },
        screenProps.elements ? /* @__PURE__ */ import_react166.default.createElement(
          VideoStreamingSection,
          {
            screenType: screenProps.screenType,
            elements: screenProps.elements,
            hideControls
          }
        ) : null
      ), !screenProps.hideSections.includes("footer") && screenProps.elements && /* @__PURE__ */ import_react166.default.createElement(
        Box,
        {
          ref: footerRef,
          css: {
            flexShrink: 0,
            maxHeight: "$24",
            transition: "margin 0.3s ease-in-out",
            bg: "$background_dim",
            marginBottom: hideControls ? `-${(_e = footerRef.current) == null ? void 0 : _e.clientHeight}px` : void 0,
            "@md": {
              maxHeight: "unset",
              bg: screenProps.screenType === "hls_live_streaming" ? "transparent" : "$background_dim"
            }
          },
          "data-testid": "footer"
        },
        /* @__PURE__ */ import_react166.default.createElement(Footer2, { elements: screenProps.elements, screenType: screenProps.screenType })
      ), /* @__PURE__ */ import_react166.default.createElement(RoleChangeRequestModal, null), /* @__PURE__ */ import_react166.default.createElement(HLSFailureModal, null), /* @__PURE__ */ import_react166.default.createElement(ActivatedPIP, null)));
    };
  }
});

// src/Prebuilt/components/ErrorBoundary.jsx
var import_react167, import_react_icons78, ErrorBoundary;
var init_ErrorBoundary = __esm({
  "src/Prebuilt/components/ErrorBoundary.jsx"() {
    "use strict";
    init_define_process_env();
    import_react167 = __toESM(require("react"));
    import_react_icons78 = require("@100mslive/react-icons");
    init_Button2();
    init_Layout();
    init_Text2();
    init_Tooltip2();
    init_AuthToken();
    ErrorBoundary = class extends import_react167.Component {
      constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null, isErrorCopied: false };
      }
      componentDidCatch(error, errorInfo) {
        console.error(`react error boundary - ${error.message}`, error, errorInfo);
        this.setState({
          error: error == null ? void 0 : error.message,
          errorInfo
        });
      }
      render() {
        if (this.state.errorInfo) {
          return /* @__PURE__ */ import_react167.default.createElement(
            Flex,
            {
              align: "center",
              justify: "center",
              css: {
                size: "100%",
                height: "100vh",
                width: "100%",
                color: "$on_primary_high",
                backgroundColor: "$background_default"
              }
            },
            /* @__PURE__ */ import_react167.default.createElement(Box, { css: { position: "relative", overflow: "hidden", r: "$3", height: "100%", width: "100%" } }, /* @__PURE__ */ import_react167.default.createElement(
              Flex,
              {
                direction: "column",
                css: {
                  position: "absolute",
                  size: "100%",
                  top: "33.33%",
                  left: 0
                }
              },
              /* @__PURE__ */ import_react167.default.createElement("div", { style: { margin: "1.5rem", width: "100%" } }, /* @__PURE__ */ import_react167.default.createElement(Text, null, "Something went wrong"), /* @__PURE__ */ import_react167.default.createElement(Text, null, "Message: $", this.state.error), /* @__PURE__ */ import_react167.default.createElement("br", null), ErrorWithSupportLink(`Please reload to see if it works.`)),
              /* @__PURE__ */ import_react167.default.createElement(Flex, null, /* @__PURE__ */ import_react167.default.createElement(Tooltip, { title: "Reload page" }, /* @__PURE__ */ import_react167.default.createElement(
                Button,
                {
                  onClick: () => {
                    window.location.reload();
                  },
                  css: { mx: "$8" },
                  "data-testid": "join_again_btn"
                },
                "Reload"
              )), /* @__PURE__ */ import_react167.default.createElement(Tooltip, { title: "Copy error details to clipboard" }, /* @__PURE__ */ import_react167.default.createElement(
                Button,
                {
                  onClick: () => {
                    const { error, errorInfo } = this.state;
                    navigator.clipboard.writeText(
                      JSON.stringify({
                        error,
                        errorInfo
                      })
                    );
                    this.setState({ isErrorCopied: true });
                  },
                  css: { mx: "$8" },
                  "data-testid": "join_again_btn"
                },
                /* @__PURE__ */ import_react167.default.createElement(import_react_icons78.CopyIcon, null),
                " ",
                this.state.isErrorCopied ? "Copied" : "Copy Details"
              ))),
              /* @__PURE__ */ import_react167.default.createElement("details", { style: { whiteSpace: "pre-wrap", margin: "1.5rem" } }, /* @__PURE__ */ import_react167.default.createElement(Text, null, this.state.error && this.state.error.toString()), /* @__PURE__ */ import_react167.default.createElement("br", null), /* @__PURE__ */ import_react167.default.createElement(Text, null, JSON.stringify(this.state.errorInfo)))
            ))
          );
        }
        return this.props.children;
      }
    };
  }
});

// src/Prebuilt/components/init/Init.jsx
var import_react168, Init;
var init_Init = __esm({
  "src/Prebuilt/components/init/Init.jsx"() {
    "use strict";
    init_define_process_env();
    import_react168 = __toESM(require("react"));
    init_src();
    init_FeatureFlags();
    Init = () => {
      const { toggleTheme } = useTheme();
      (0, import_react168.useEffect)(() => {
        window.toggleUiTheme = toggleTheme;
      }, [toggleTheme]);
      (0, import_react168.useEffect)(() => {
        function resetHeight() {
          var _a7;
          document.body.style.height = `${((_a7 = window.visualViewport) == null ? void 0 : _a7.height) || window.innerHeight}px`;
        }
        window.addEventListener("resize", resetHeight);
        resetHeight();
        return () => {
          window.removeEventListener("resize", resetHeight);
        };
      }, []);
      return /* @__PURE__ */ import_react168.default.createElement(FeatureFlagsInit, null);
    };
  }
});

// src/Prebuilt/components/Input/KeyboardInputManager.js
var import_react169, import_react_sdk83, isEvenListenersAttached, _actions, _store, _toggleAudio, _toggleVideo, _hideSidepane, _toggleStatsForNerds, _toggleHlsStats, _keyDownHandler, _bind, _unbind, KeyboardInputManager, KeyboardHandler;
var init_KeyboardInputManager = __esm({
  "src/Prebuilt/components/Input/KeyboardInputManager.js"() {
    "use strict";
    init_define_process_env();
    import_react169 = require("react");
    import_react_sdk83 = require("@100mslive/react-sdk");
    init_constants();
    isEvenListenersAttached = false;
    KeyboardInputManager = class {
      constructor(store, actions) {
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _store, void 0);
        __privateAdd(this, _toggleAudio, () => __async(this, null, function* () {
          const enabled = __privateGet(this, _store).getState(import_react_sdk83.selectIsLocalAudioEnabled);
          yield __privateGet(this, _actions).setLocalAudioEnabled(!enabled);
        }));
        __privateAdd(this, _toggleVideo, () => __async(this, null, function* () {
          const enabled = __privateGet(this, _store).getState(import_react_sdk83.selectIsLocalVideoEnabled);
          yield __privateGet(this, _actions).setLocalVideoEnabled(!enabled);
        }));
        __privateAdd(this, _hideSidepane, () => {
          if (__privateGet(this, _store).getState((0, import_react_sdk83.selectAppData)(APP_DATA.sidePane))) {
            __privateGet(this, _actions).setAppData(APP_DATA.sidePane, "");
          }
        });
        __privateAdd(this, _toggleStatsForNerds, () => {
          const uiSettings = __privateGet(this, _store).getState((0, import_react_sdk83.selectAppData)(APP_DATA.uiSettings));
          const statsEnabled = uiSettings.showStatsOnTiles;
          __privateGet(this, _actions).setAppData(APP_DATA.uiSettings, __spreadProps(__spreadValues({}, uiSettings), {
            showStatsOnTiles: !statsEnabled
          }));
        });
        __privateAdd(this, _toggleHlsStats, () => {
          __privateGet(this, _actions).setAppData(APP_DATA.hlsStats, !__privateGet(this, _store).getState((0, import_react_sdk83.selectAppData)(APP_DATA.hlsStats)));
        });
        // eslint-disable-next-line complexity
        __privateAdd(this, _keyDownHandler, (e) => __async(this, null, function* () {
          const CONTROL_KEY = isMacOS ? e.metaKey : e.ctrlKey;
          const D_KEY = e.key === "d" || e.key === "D";
          const E_KEY = e.key === "e" || e.key === "E";
          const SNF_KEY = e.key === "]" || e.key === "}";
          const SHORTCUT_TOGGLE_AUDIO = CONTROL_KEY && D_KEY;
          const SHORTCUT_TOGGLE_VIDEO = CONTROL_KEY && E_KEY;
          const SHORTCUT_SIDEPANE_CLOSE = e.key === "Escape";
          const SHORTCUT_STATS_FOR_NERDS = CONTROL_KEY && SNF_KEY;
          if (SHORTCUT_TOGGLE_AUDIO) {
            e.preventDefault();
            yield __privateGet(this, _toggleAudio).call(this);
          } else if (SHORTCUT_TOGGLE_VIDEO) {
            e.preventDefault();
            yield __privateGet(this, _toggleVideo).call(this);
          } else if (SHORTCUT_SIDEPANE_CLOSE) {
            __privateGet(this, _hideSidepane).call(this);
          } else if (SHORTCUT_STATS_FOR_NERDS) {
            __privateGet(this, _toggleHlsStats).call(this);
            __privateGet(this, _toggleStatsForNerds).call(this);
          }
        }));
        __privateAdd(this, _bind, () => {
          document.addEventListener("keydown", __privateGet(this, _keyDownHandler), false);
        });
        __privateAdd(this, _unbind, () => {
          document.removeEventListener("keydown", __privateGet(this, _keyDownHandler), false);
        });
        __publicField(this, "bindAllShortcuts", () => {
          if (!isEvenListenersAttached) {
            __privateGet(this, _bind).call(this);
            isEvenListenersAttached = true;
          }
        });
        __publicField(this, "unbindAllShortcuts", () => {
          if (isEvenListenersAttached) {
            __privateGet(this, _unbind).call(this);
            isEvenListenersAttached = false;
          }
        });
        __privateSet(this, _actions, actions);
        __privateSet(this, _store, store);
      }
    };
    _actions = new WeakMap();
    _store = new WeakMap();
    _toggleAudio = new WeakMap();
    _toggleVideo = new WeakMap();
    _hideSidepane = new WeakMap();
    _toggleStatsForNerds = new WeakMap();
    _toggleHlsStats = new WeakMap();
    _keyDownHandler = new WeakMap();
    _bind = new WeakMap();
    _unbind = new WeakMap();
    KeyboardHandler = () => {
      const store = (0, import_react_sdk83.useHMSVanillaStore)();
      const actions = (0, import_react_sdk83.useHMSActions)();
      (0, import_react169.useEffect)(() => {
        const keyboardManager = new KeyboardInputManager(store, actions);
        keyboardManager.bindAllShortcuts();
        return keyboardManager.unbindAllShortcuts;
      }, [actions, store]);
      return null;
    };
  }
});

// src/Prebuilt/components/hooks/useRedirectToLeave.tsx
var import_react170, useRedirectToLeave;
var init_useRedirectToLeave = __esm({
  "src/Prebuilt/components/hooks/useRedirectToLeave.tsx"() {
    "use strict";
    init_define_process_env();
    import_react170 = require("react");
    init_AppContext();
    init_PIPManager();
    init_ToastManager();
    useRedirectToLeave = () => {
      const { onLeave } = useHMSPrebuiltContext();
      const redirect = (0, import_react170.useCallback)(
        (timeout = 0) => {
          setTimeout(() => {
            PictureInPicture.stop().catch(() => console.error("stopping pip"));
            ToastManager.clearAllToast();
            onLeave == null ? void 0 : onLeave();
          }, timeout);
        },
        [onLeave]
      );
      return { redirectToLeave: redirect };
    };
  }
});

// src/Prebuilt/AppStateContext.tsx
var import_react171, import_react_use33, import_react_sdk84, AppStateContext, useHMSAppStateContext, useAppStateManager;
var init_AppStateContext = __esm({
  "src/Prebuilt/AppStateContext.tsx"() {
    "use strict";
    init_define_process_env();
    import_react171 = __toESM(require("react"));
    import_react_use33 = require("react-use");
    import_react_sdk84 = require("@100mslive/react-sdk");
    init_roomLayoutProvider();
    init_useRedirectToLeave();
    init_useRoomLayoutScreen();
    AppStateContext = import_react171.default.createContext({
      rejoin: () => {
        console.log("Rejoin");
      }
    });
    AppStateContext.displayName = "AppStateContext";
    useHMSAppStateContext = () => {
      const context = (0, import_react171.useContext)(AppStateContext);
      if (!context) {
        throw Error("Make sure AppStateContext.Provider is present at the top level of your application");
      }
      return context;
    };
    useAppStateManager = () => {
      const roomLayout = useRoomLayout();
      const [activeState, setActiveState] = import_react171.default.useState();
      const roomState = (0, import_react_sdk84.useHMSStore)(import_react_sdk84.selectRoomState);
      const prevRoomState = (0, import_react_use33.usePreviousDistinct)(roomState);
      const { isLeaveScreenEnabled } = useRoomLayoutLeaveScreen();
      const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
      const { redirectToLeave } = useRedirectToLeave();
      const rejoin = () => {
        setActiveState(isPreviewScreenEnabled ? "preview" /* PREVIEW */ : "meeting" /* MEETING */);
      };
      (0, import_react171.useEffect)(() => {
        if (!roomLayout) {
          return;
        }
        if (roomState === import_react_sdk84.HMSRoomState.Connected) {
          setActiveState("meeting" /* MEETING */);
        } else if (prevRoomState && [import_react_sdk84.HMSRoomState.Reconnecting, import_react_sdk84.HMSRoomState.Connected].includes(prevRoomState) && [import_react_sdk84.HMSRoomState.Disconnecting, import_react_sdk84.HMSRoomState.Disconnected].includes(roomState)) {
          const goTo = isPreviewScreenEnabled ? "preview" /* PREVIEW */ : "meeting" /* MEETING */;
          setActiveState(isLeaveScreenEnabled ? "leave" /* LEAVE */ : goTo);
          redirectToLeave(1e3);
        } else if (!prevRoomState && roomState === import_react_sdk84.HMSRoomState.Disconnected) {
          setActiveState(isPreviewScreenEnabled ? "preview" /* PREVIEW */ : "meeting" /* MEETING */);
        }
      }, [roomLayout, roomState, isLeaveScreenEnabled, isPreviewScreenEnabled, prevRoomState, redirectToLeave]);
      return { activeState, rejoin };
    };
  }
});

// src/Prebuilt/components/LeaveScreen.tsx
var import_react172, import_react_icons79, LeaveScreen;
var init_LeaveScreen = __esm({
  "src/Prebuilt/components/LeaveScreen.tsx"() {
    "use strict";
    init_define_process_env();
    import_react172 = __toESM(require("react"));
    import_react_icons79 = require("@100mslive/react-icons");
    init_ToastManager();
    init_Button2();
    init_Layout();
    init_Text2();
    init_AppStateContext();
    init_Header2();
    init_useUserPreferences();
    init_utils();
    LeaveScreen = () => {
      const { rejoin } = useHMSAppStateContext();
      const [previewPreference] = useUserPreferences(UserPreferencesKeys.PREVIEW, defaultPreviewPreference);
      return /* @__PURE__ */ import_react172.default.createElement(Flex, { direction: "column", css: { size: "100%" } }, /* @__PURE__ */ import_react172.default.createElement(Box, { css: { h: "$18", "@md": { h: "$17" } }, "data-testid": "header" }, /* @__PURE__ */ import_react172.default.createElement(Header2, null)), /* @__PURE__ */ import_react172.default.createElement(
        Flex,
        {
          justify: "center",
          direction: "column",
          align: "center",
          css: { bg: "$background_dim", flex: "1 1 0", position: "relative" }
        },
        /* @__PURE__ */ import_react172.default.createElement(Text, { variant: "h2", css: { fontWeight: "$semiBold" } }, "\u{1F44B}"),
        /* @__PURE__ */ import_react172.default.createElement(Text, { variant: "h4", css: { color: "$on_surface_high", fontWeight: "$semiBold", mt: "$12" } }, "You left the room"),
        /* @__PURE__ */ import_react172.default.createElement(
          Text,
          {
            variant: "body1",
            css: {
              color: "$on_surface_medium",
              mt: "$8",
              fontWeight: "$regular",
              textAlign: "center"
            }
          },
          "Have a nice day",
          previewPreference.name && /* @__PURE__ */ import_react172.default.createElement(Box, { as: "span", css: __spreadValues({}, textEllipsis(100)) }, ", ", previewPreference.name),
          "!"
        ),
        /* @__PURE__ */ import_react172.default.createElement(Flex, { css: { mt: "$14", gap: "$10", alignItems: "center" } }, /* @__PURE__ */ import_react172.default.createElement(Text, { variant: "body1", css: { color: "$on_surface_medium", fontWeight: "$regular" } }, "Left by mistake?"), /* @__PURE__ */ import_react172.default.createElement(
          Button,
          {
            onClick: () => {
              rejoin();
              ToastManager.clearAllToast();
            },
            "data-testid": "join_again_btn"
          },
          /* @__PURE__ */ import_react172.default.createElement(import_react_icons79.ExitIcon, null),
          /* @__PURE__ */ import_react172.default.createElement(Text, { css: { ml: "$3", fontWeight: "$semiBold", color: "inherit" } }, "Rejoin")
        ))
      ));
    };
  }
});

// src/Prebuilt/components/MwebLandscapePrompt.tsx
var import_react173, import_react_use34, import_react_icons80, MwebLandscapePrompt;
var init_MwebLandscapePrompt = __esm({
  "src/Prebuilt/components/MwebLandscapePrompt.tsx"() {
    "use strict";
    init_define_process_env();
    import_react173 = __toESM(require("react"));
    import_react_use34 = require("react-use");
    import_react_icons80 = require("@100mslive/react-icons");
    init_Button2();
    init_Layout();
    init_Modal();
    init_Text2();
    init_Theme();
    MwebLandscapePrompt = () => {
      const [showMwebLandscapePrompt, setShowMwebLandscapePrompt] = (0, import_react173.useState)(false);
      const isLandscape = (0, import_react_use34.useMedia)(config.media.ls);
      (0, import_react173.useEffect)(() => {
        var _a7;
        if (!((_a7 = window.screen) == null ? void 0 : _a7.orientation)) {
          setShowMwebLandscapePrompt(isLandscape);
          return;
        }
        const handleRotation = () => {
          const angle = window.screen.orientation.angle;
          const type = window.screen.orientation.type || "";
          setShowMwebLandscapePrompt(angle ? angle >= 90 && type.includes("landscape") : isLandscape);
        };
        handleRotation();
        window.screen.orientation.addEventListener("change", handleRotation);
        return () => {
          window.screen.orientation.removeEventListener("change", handleRotation);
        };
      }, [isLandscape]);
      return /* @__PURE__ */ import_react173.default.createElement(Dialog.Root, { open: showMwebLandscapePrompt, onOpenChange: setShowMwebLandscapePrompt }, /* @__PURE__ */ import_react173.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react173.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react173.default.createElement(Dialog.Content, { css: { w: "min(420px, 90%)", p: "$8", bg: "$surface_dim" } }, /* @__PURE__ */ import_react173.default.createElement(Box, null, /* @__PURE__ */ import_react173.default.createElement(
        Flex,
        {
          css: {
            color: "$primary_default",
            display: "flex",
            alignItems: "center"
          }
        },
        /* @__PURE__ */ import_react173.default.createElement(import_react_icons80.RefreshIcon, { style: { marginRight: "0.5rem" } }),
        /* @__PURE__ */ import_react173.default.createElement(Text, { variant: "lg", css: { color: "$on_surface_high", fontWeight: "$semiBold" } }, "Please rotate your device")
      ), /* @__PURE__ */ import_react173.default.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium", mb: "$8", mt: "$4" } }, "We do not support landscape mode as of now, please use the app in portrait mode for the best experience."), /* @__PURE__ */ import_react173.default.createElement(Flex, { align: "center", justify: "between", css: { w: "100%", gap: "$8" } }, /* @__PURE__ */ import_react173.default.createElement(Button, { outlined: true, variant: "standard", css: { w: "100%" }, onClick: () => setShowMwebLandscapePrompt(false) }, "Continue anyway"))))));
    };
  }
});

// src/Prebuilt/components/Toast/ToastConfig.jsx
var import_react174, import_react_sdk85, import_react_icons81, ChatAction, HandRaiseAction, ToastConfig;
var init_ToastConfig = __esm({
  "src/Prebuilt/components/Toast/ToastConfig.jsx"() {
    "use strict";
    init_define_process_env();
    import_react174 = __toESM(require("react"));
    import_react_sdk85 = require("@100mslive/react-sdk");
    import_react_icons81 = require("@100mslive/react-icons");
    init_Button2();
    init_roomLayoutProvider();
    init_useSidepane();
    init_constants();
    ChatAction = import_react174.default.forwardRef((_, ref) => {
      const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
      const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
      if (isChatOpen) {
        return null;
      }
      return /* @__PURE__ */ import_react174.default.createElement(Button, { outlined: true, as: "div", variant: "standard", css: { w: "max-content" }, onClick: toggleChat, ref }, "Open Chat");
    });
    HandRaiseAction = import_react174.default.forwardRef(({ id = "", isSingleHandRaise = true }, ref) => {
      var _a7, _b7, _c;
      const hmsActions = (0, import_react_sdk85.useHMSActions)();
      const toggleSidepane = useSidepaneToggle(SIDE_PANE_OPTIONS.PARTICIPANTS);
      const isParticipantsOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.PARTICIPANTS);
      const peer = (0, import_react_sdk85.useHMSStore)((0, import_react_sdk85.selectPeerByID)(id));
      const layout = useRoomLayout();
      const {
        bring_to_stage_label,
        on_stage_role,
        off_stage_roles = []
      } = ((_c = (_b7 = (_a7 = layout == null ? void 0 : layout.screens) == null ? void 0 : _a7.conferencing) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements.on_stage_exp) || {};
      const onClickHandler = (0, import_react174.useCallback)(() => {
        if (isSingleHandRaise) {
          hmsActions.changeRoleOfPeer(id, on_stage_role);
        } else {
          !isParticipantsOpen && toggleSidepane();
        }
      }, [hmsActions, id, isParticipantsOpen, isSingleHandRaise, on_stage_role, toggleSidepane]);
      if (isSingleHandRaise && (!peer || !off_stage_roles.includes(peer.roleName))) {
        return null;
      }
      return /* @__PURE__ */ import_react174.default.createElement(Button, { outlined: true, as: "div", variant: "standard", css: { w: "max-content" }, onClick: onClickHandler, ref }, isSingleHandRaise ? bring_to_stage_label : "View");
    });
    ToastConfig = {
      PEER_LIST: {
        single: function (notification) {
          var _a7, _b7;
          if (notification.data.length === 1) {
            return {
              title: `${(_a7 = notification.data[0]) == null ? void 0 : _a7.name} joined`,
              icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.PeopleAddIcon, null)
            };
          }
          return {
            title: `${(_b7 = notification.data[notification.data.length - 1]) == null ? void 0 : _b7.name} and ${notification.data.length - 1} others joined`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.PeopleAddIcon, null)
          };
        },
        multiple: (notifications) => {
          return {
            title: `${notifications[0].data.name} and ${notifications.length - 1} others joined`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.PeopleAddIcon, null)
          };
        }
      },
      PEER_JOINED: {
        single: function (notification) {
          var _a7;
          return {
            title: `${(_a7 = notification.data) == null ? void 0 : _a7.name} joined`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.PeopleAddIcon, null)
          };
        },
        multiple: function (notifications) {
          return {
            title: `${notifications[notifications.length - 1].data.name} and ${notifications.length - 1} others joined`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.PeopleAddIcon, null)
          };
        }
      },
      PEER_LEFT: {
        single: function (notification) {
          var _a7;
          return {
            title: `${(_a7 = notification.data) == null ? void 0 : _a7.name} left`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.PeopleRemoveIcon, null)
          };
        },
        multiple: function (notifications) {
          return {
            title: `${notifications[notifications.length - 1].data.name} and ${notifications.length - 1} others left`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.PeopleRemoveIcon, null)
          };
        }
      },
      RAISE_HAND: {
        single: (notification) => {
          var _a7, _b7;
          return {
            title: `${(_a7 = notification.data) == null ? void 0 : _a7.name} raised hand`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.HandIcon, null),
            action: /* @__PURE__ */ import_react174.default.createElement(HandRaiseAction, { id: (_b7 = notification.data) == null ? void 0 : _b7.id })
          };
        },
        multiple: (notifications) => {
          var _a7;
          const count = new Set(notifications.map((notification) => {
            var _a8;
            return (_a8 = notification.data) == null ? void 0 : _a8.id;
          })).size;
          return {
            title: `${(_a7 = notifications[notifications.length - 1].data) == null ? void 0 : _a7.name} ${count > 1 ? `${count} and others` : ""} raised hand`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.HandIcon, null),
            action: /* @__PURE__ */ import_react174.default.createElement(HandRaiseAction, { isSingleHandRaise: false })
          };
        }
      },
      NEW_MESSAGE: {
        single: (notification) => {
          var _a7;
          return {
            title: `New message from ${(_a7 = notification.data) == null ? void 0 : _a7.senderName}`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.ChatUnreadIcon, null),
            action: /* @__PURE__ */ import_react174.default.createElement(ChatAction, null)
          };
        },
        multiple: (notifications) => {
          return {
            title: `${notifications.length} new messages`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.ChatUnreadIcon, null),
            action: /* @__PURE__ */ import_react174.default.createElement(ChatAction, null)
          };
        }
      },
      RECONNECTED: {
        single: () => {
          return {
            title: `You are now connected`,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.ConnectivityIcon, null),
            variant: "success",
            duration: 3e3
          };
        }
      },
      RECONNECTING: {
        single: (message) => {
          return {
            title: `You are offline for now. while we try to reconnect, please check
        your internet connection. ${message}.
      `,
            icon: /* @__PURE__ */ import_react174.default.createElement(import_react_icons81.PoorConnectivityIcon, null),
            variant: "warning",
            duration: 3e4
          };
        }
      }
    };
  }
});

// src/Prebuilt/components/Toast/ToastBatcher.js
var ToastBatcher;
var init_ToastBatcher = __esm({
  "src/Prebuilt/components/Toast/ToastBatcher.js"() {
    "use strict";
    init_define_process_env();
    init_ToastConfig();
    init_ToastManager();
    ToastBatcher = {
      toastsType: /* @__PURE__ */ new Map(),
      showToastInternal({ notification, duration, type }) {
        let notificationType = type;
        if (!type) {
          notificationType = notification.type;
        }
        const toastType = this.toastsType.has(notificationType);
        if (toastType) {
          let { notifications } = this.toastsType.get(notificationType);
          const { id } = this.toastsType.get(notificationType);
          notifications.push(notification);
          const toastObject = ToastConfig[notificationType].multiple(notifications);
          const toastId = ToastManager.replaceToast(id, __spreadProps(__spreadValues({}, toastObject), {
            duration
          }));
          this.toastsType.set(notificationType, {
            id: toastId,
            notifications,
            duration
          });
        } else {
          const toastObject = ToastConfig[notificationType].single(notification);
          const toastId = ToastManager.addToast(__spreadProps(__spreadValues({}, toastObject), {
            duration
          }));
          let notifications = [];
          notifications.push(notification);
          this.toastsType.set(notificationType, {
            id: toastId,
            notifications: [...notifications],
            duration
          });
        }
      },
      showToast({ notification, duration = 3e3, type }) {
        try {
          this.showToastInternal({ notification, duration, type });
        } catch (err) {
          console.debug("Notifications", err);
        }
      },
      syncUItoast(toastsDisplaying) {
        for (const [toastType, toastInfo] of this.toastsType.entries()) {
          if (!toastsDisplaying.find((toast) => toast.id === toastInfo.id)) {
            this.toastsType.delete(toastType);
          }
        }
      }
    };
    ToastManager.addListener(ToastBatcher.syncUItoast.bind(ToastBatcher));
  }
});

// src/Prebuilt/components/Notifications/AutoplayBlockedModal.tsx
function AutoplayBlockedModal() {
  const { error, resetError, unblockAudio } = (0, import_react_sdk86.useAutoplayError)();
  return /* @__PURE__ */ import_react175.default.createElement(
    Dialog.Root,
    {
      open: !!error,
      onOpenChange: (value) => {
        if (!value) {
          unblockAudio();
        }
        resetError();
      }
    },
    /* @__PURE__ */ import_react175.default.createElement(DialogContent, { title: "Permission Error", closeable: false }, /* @__PURE__ */ import_react175.default.createElement(DialogRow, null, /* @__PURE__ */ import_react175.default.createElement(Text, { variant: "md" }, "The browser wants us to get a confirmation for playing the Audio. Please allow audio to proceed.")), /* @__PURE__ */ import_react175.default.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ import_react175.default.createElement(
      Button,
      {
        variant: "primary",
        onClick: () => {
          unblockAudio();
          resetError();
        }
      },
      "Allow Audio"
    )))
  );
}
var import_react175, import_react_sdk86;
var init_AutoplayBlockedModal = __esm({
  "src/Prebuilt/components/Notifications/AutoplayBlockedModal.tsx"() {
    "use strict";
    init_define_process_env();
    import_react175 = __toESM(require("react"));
    import_react_sdk86 = require("@100mslive/react-sdk");
    init_src();
    init_DialogContent2();
  }
});

// src/Prebuilt/components/Notifications/InitErrorModal.tsx
var import_react176, import_react_sdk87, InitErrorModal;
var init_InitErrorModal = __esm({
  "src/Prebuilt/components/Notifications/InitErrorModal.tsx"() {
    "use strict";
    init_define_process_env();
    import_react176 = __toESM(require("react"));
    import_react_sdk87 = require("@100mslive/react-sdk");
    init_src();
    init_DialogContent2();
    InitErrorModal = () => {
      const notification = (0, import_react_sdk87.useHMSNotifications)(import_react_sdk87.HMSNotificationTypes.ERROR);
      const [showModal, setShowModal] = (0, import_react176.useState)(false);
      const [info, setInfo] = (0, import_react176.useState)({ title: "Init Error", description: "" });
      (0, import_react176.useEffect)(() => {
        const data3 = notification == null ? void 0 : notification.data;
        if (!data3 || data3.action !== "INIT") {
          return;
        }
        let description;
        let title;
        if (data3.description.includes("role is invalid")) {
          description = "This role does not exist for the given room. Try again with a valid role.";
          title = "Invalid Role";
        } else if (data3.description.includes("room is not active")) {
          title = "Room is disabled";
          description = "This room is disabled and cannot be joined. To enable the room, use the 100ms dashboard or the API.";
        } else {
          description = data3.description;
          title = "Init Error";
        }
        setInfo({ title, description });
        setShowModal(true);
      }, [notification]);
      return /* @__PURE__ */ import_react176.default.createElement(ErrorDialog, { open: showModal, onOpenChange: setShowModal, title: info.title }, /* @__PURE__ */ import_react176.default.createElement(Text, { variant: "sm", css: { wordBreak: "break-word" } }, info.description, " ", /* @__PURE__ */ import_react176.default.createElement("br", null), "Current URL - ", window.location.href));
    };
  }
});

// src/Prebuilt/components/Notifications/PeerNotifications.tsx
var import_react177, import_react_sdk88, notificationTypes, PeerNotifications;
var init_PeerNotifications = __esm({
  "src/Prebuilt/components/Notifications/PeerNotifications.tsx"() {
    "use strict";
    init_define_process_env();
    import_react177 = require("react");
    import_react_sdk88 = require("@100mslive/react-sdk");
    init_ToastBatcher();
    init_useUISettings();
    init_constants();
    notificationTypes = [
      import_react_sdk88.HMSNotificationTypes.PEER_LIST,
      import_react_sdk88.HMSNotificationTypes.PEER_JOINED,
      import_react_sdk88.HMSNotificationTypes.PEER_LEFT
    ];
    PeerNotifications = () => {
      const notification = (0, import_react_sdk88.useHMSNotifications)(notificationTypes);
      const isPeerJoinSubscribed = useSubscribedNotifications(SUBSCRIBED_NOTIFICATIONS.PEER_JOINED);
      const isPeerLeftSubscribed = useSubscribedNotifications(SUBSCRIBED_NOTIFICATIONS.PEER_LEFT);
      (0, import_react177.useEffect)(() => {
        if (!(notification == null ? void 0 : notification.data)) {
          return;
        }
        console.debug(`[${notification.type}]`, notification);
        switch (notification.type) {
          case import_react_sdk88.HMSNotificationTypes.PEER_LIST:
            if (!isPeerJoinSubscribed || notification.data.length === 0) {
              return;
            }
            break;
          case import_react_sdk88.HMSNotificationTypes.PEER_JOINED:
            if (!isPeerJoinSubscribed) {
              return;
            }
            break;
          case import_react_sdk88.HMSNotificationTypes.PEER_LEFT:
            if (!isPeerLeftSubscribed) {
              return;
            }
            break;
          default:
            return;
        }
        ToastBatcher.showToast({ notification });
      }, [notification, isPeerJoinSubscribed, isPeerLeftSubscribed]);
      return null;
    };
  }
});

// src/Prebuilt/images/android-perm-1.png
var android_perm_1_default;
var init_android_perm_1 = __esm({
  "src/Prebuilt/images/android-perm-1.png"() {
    android_perm_1_default = "data:image/png;base64,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";
  }
});

// src/Prebuilt/images/ios-perm-0.png
var ios_perm_0_default;
var init_ios_perm_0 = __esm({
  "src/Prebuilt/images/ios-perm-0.png"() {
    ios_perm_0_default = "data:image/png;base64,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";
  }
});

// src/Prebuilt/components/Notifications/PermissionErrorModal.tsx
function PermissionErrorModal() {
  const notification = (0, import_react_sdk89.useHMSNotifications)(import_react_sdk89.HMSNotificationTypes.ERROR);
  const [deviceType, setDeviceType] = (0, import_react178.useState)("");
  const [isSystemError, setIsSystemError] = (0, import_react178.useState)(false);
  const isMobile = (0, import_react_use35.useMedia)(config.media.md);
  (0, import_react178.useEffect)(() => {
    var _a7, _b7, _c, _d, _e;
    if (!notification || ((_a7 = notification.data) == null ? void 0 : _a7.code) !== 3001 && ((_b7 = notification.data) == null ? void 0 : _b7.code) !== 3011 || ((_c = notification.data) == null ? void 0 : _c.code) === 3001 && ((_d = notification.data) == null ? void 0 : _d.message.includes("screen"))) {
      return;
    }
    console.error(`[${notification.type}]`, notification);
    const errorMessage = (_e = notification.data) == null ? void 0 : _e.message;
    const hasAudio = errorMessage.includes("audio");
    const hasVideo = errorMessage.includes("video");
    const hasScreen = errorMessage.includes("screen");
    if (hasAudio && hasVideo) {
      setDeviceType("camera and microphone");
    } else if (hasAudio) {
      setDeviceType("microphone");
    } else if (hasVideo) {
      setDeviceType("camera");
    } else if (hasScreen) {
      setDeviceType("screen");
    }
    setIsSystemError(notification.data.code === 3011);
  }, [notification]);
  return deviceType ? /* @__PURE__ */ import_react178.default.createElement(Dialog.Root, { open: !!deviceType }, /* @__PURE__ */ import_react178.default.createElement(Dialog.Portal, null, /* @__PURE__ */ import_react178.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react178.default.createElement(Dialog.Content, { css: { w: "min(380px, 90%)", p: "$8" } }, /* @__PURE__ */ import_react178.default.createElement(
    Dialog.Title,
    {
      css: {
        borderBottom: "1px solid $border_default"
      }
    },
    isMobile && isIOS ? /* @__PURE__ */ import_react178.default.createElement("img", { style: { maxWidth: "100%", maxHeight: "100%" }, src: ios_perm_0_default, alt: "iOS Permission flow" }) : null,
    isMobile && isAndroid ? /* @__PURE__ */ import_react178.default.createElement(
      "img",
      {
        src: android_perm_1_default,
        style: { maxWidth: "100%", maxHeight: "100%" },
        alt: "Android Permission flow "
      }
    ) : null,
    /* @__PURE__ */ import_react178.default.createElement(Text, { variant: "h6" }, "We can't access your ", deviceType)
  ), /* @__PURE__ */ import_react178.default.createElement(Text, { variant: "sm", css: { pt: "$4", pb: "$10", color: "$on_surface_medium" } }, isMobile && isIOS ? 'Enable permissions by reloading this page and clicking "Allow" on the pop-up, or change settings from the address bar.' : null, isMobile && isAndroid ? `To allow other users to see and hear you, click the blocked camera icon in your browser's address bar.` : null, !isMobile ? `Access to ${deviceType} is required. ` : null, isSystemError && !isMobile ? `Enable permissions for ${deviceType}${deviceType === "screen" ? "share" : ""} from sytem settings` : null, !isSystemError && !isMobile ? `Enable permissions for ${deviceType}${deviceType === "screen" ? "share" : ""} from address bar or browser settings.` : null), isMobile && isIOS ? /* @__PURE__ */ import_react178.default.createElement(import_react178.default.Fragment, null, /* @__PURE__ */ import_react178.default.createElement(Button, { onClick: () => window.location.reload(), css: { w: "100%", mb: "$6" } }, "Reload"), /* @__PURE__ */ import_react178.default.createElement(Button, { outlined: true, variant: "standard", onClick: () => setDeviceType(""), css: { w: "100%" } }, "Continue anyway")) : null, isMobile && isAndroid ? /* @__PURE__ */ import_react178.default.createElement(import_react178.default.Fragment, null, /* @__PURE__ */ import_react178.default.createElement(Button, { onClick: () => setDeviceType(""), css: { w: "100%", mb: "$6" } }, "I've allowed access"), /* @__PURE__ */ import_react178.default.createElement(Button, { outlined: true, variant: "standard", onClick: () => setDeviceType(""), css: { w: "100%" } }, "Continue anyway")) : null, !isMobile ? /* @__PURE__ */ import_react178.default.createElement(Flex, { justify: "end", css: { w: "100%" } }, /* @__PURE__ */ import_react178.default.createElement(Button, { outlined: true, variant: "standard", onClick: () => setDeviceType("") }, "Dismiss")) : null))) : null;
}
var import_react178, import_react_use35, import_react_sdk89;
var init_PermissionErrorModal = __esm({
  "src/Prebuilt/components/Notifications/PermissionErrorModal.tsx"() {
    "use strict";
    init_define_process_env();
    import_react178 = __toESM(require("react"));
    import_react_use35 = require("react-use");
    import_react_sdk89 = require("@100mslive/react-sdk");
    init_src();
    init_android_perm_1();
    init_ios_perm_0();
    init_constants();
  }
});

// src/Prebuilt/components/Notifications/ReconnectNotifications.tsx
var import_react179, import_react_sdk90, notificationTypes2, notificationId, ReconnectNotifications;
var init_ReconnectNotifications = __esm({
  "src/Prebuilt/components/Notifications/ReconnectNotifications.tsx"() {
    "use strict";
    init_define_process_env();
    import_react179 = __toESM(require("react"));
    import_react_sdk90 = require("@100mslive/react-sdk");
    init_src();
    init_ToastConfig();
    init_ToastManager();
    notificationTypes2 = [
      import_react_sdk90.HMSNotificationTypes.RECONNECTED,
      import_react_sdk90.HMSNotificationTypes.RECONNECTING,
      import_react_sdk90.HMSNotificationTypes.ERROR
    ];
    notificationId = null;
    ReconnectNotifications = () => {
      const notification = (0, import_react_sdk90.useHMSNotifications)(notificationTypes2);
      const [open, setOpen] = (0, import_react179.useState)(false);
      (0, import_react179.useEffect)(() => {
        var _a7, _b7;
        if (!notification) {
          return;
        }
        if (notification.type === import_react_sdk90.HMSNotificationTypes.ERROR && ((_a7 = notification.data) == null ? void 0 : _a7.isTerminal)) {
          setOpen(false);
        } else if (notification.type === import_react_sdk90.HMSNotificationTypes.RECONNECTED) {
          notificationId = ToastManager.replaceToast(notificationId, ToastConfig.RECONNECTED.single());
          setOpen(false);
        } else if (notification.type === import_react_sdk90.HMSNotificationTypes.RECONNECTING) {
          notificationId = ToastManager.replaceToast(
            notificationId,
            ToastConfig.RECONNECTING.single((_b7 = notification.data) == null ? void 0 : _b7.message)
          );
        }
      }, [notification]);
      if (!open)
        return null;
      return /* @__PURE__ */ import_react179.default.createElement(Dialog.Root, { open, modal: true }, /* @__PURE__ */ import_react179.default.createElement(Dialog.Portal, { container: document.getElementById("conferencing") }, /* @__PURE__ */ import_react179.default.createElement(Dialog.Overlay, null), /* @__PURE__ */ import_react179.default.createElement(
        Dialog.Content,
        {
          css: {
            width: "fit-content",
            maxWidth: "80%",
            p: "$4 $8",
            position: "relative",
            top: "unset",
            bottom: "$9",
            transform: "translate(-50%, -100%)",
            animation: "none !important"
          }
        },
        /* @__PURE__ */ import_react179.default.createElement(Flex, { align: "center" }, /* @__PURE__ */ import_react179.default.createElement("div", { style: { display: "inline", margin: "0.25rem" } }, /* @__PURE__ */ import_react179.default.createElement(Loading, { size: 16 })), /* @__PURE__ */ import_react179.default.createElement(Text, { css: { fontSize: "$space$8", color: "$on_surface_high" } }, "You lost your network connection. Trying to reconnect."))
      )));
    };
  }
});

// src/Prebuilt/components/Notifications/TrackBulkUnmuteModal.tsx
var import_react180, import_react_sdk91, import_react_icons82, TrackBulkUnmuteModal;
var init_TrackBulkUnmuteModal = __esm({
  "src/Prebuilt/components/Notifications/TrackBulkUnmuteModal.tsx"() {
    "use strict";
    init_define_process_env();
    import_react180 = __toESM(require("react"));
    import_react_sdk91 = require("@100mslive/react-sdk");
    import_react_icons82 = require("@100mslive/react-icons");
    init_DialogContent2();
    TrackBulkUnmuteModal = () => {
      const hmsActions = (0, import_react_sdk91.useHMSActions)();
      const [muteNotification, setMuteNotification] = (0, import_react180.useState)(null);
      const notification = (0, import_react_sdk91.useHMSNotifications)([
        import_react_sdk91.HMSNotificationTypes.CHANGE_MULTI_TRACK_STATE_REQUEST,
        import_react_sdk91.HMSNotificationTypes.ROOM_ENDED,
        import_react_sdk91.HMSNotificationTypes.REMOVED_FROM_ROOM
      ]);
      (0, import_react180.useEffect)(() => {
        switch (notification == null ? void 0 : notification.type) {
          case import_react_sdk91.HMSNotificationTypes.REMOVED_FROM_ROOM:
          case import_react_sdk91.HMSNotificationTypes.ROOM_ENDED:
            setMuteNotification(null);
            break;
          case import_react_sdk91.HMSNotificationTypes.CHANGE_MULTI_TRACK_STATE_REQUEST:
            if (notification == null ? void 0 : notification.data.enabled) {
              setMuteNotification(notification.data);
            }
            break;
          default:
            return;
        }
      }, [notification]);
      if (!muteNotification) {
        return null;
      }
      const { requestedBy: peer, tracks, enabled } = muteNotification;
      return /* @__PURE__ */ import_react180.default.createElement(
        RequestDialog,
        {
          title: "Track Unmute Request",
          body: `${peer == null ? void 0 : peer.name} has requested you to unmute your tracks.`,
          onOpenChange: (value) => !value && setMuteNotification(null),
          onAction: () => {
            tracks.forEach((track) => {
              hmsActions.setEnabledTrack(track.id, enabled);
            });
            setMuteNotification(null);
          },
          Icon: import_react_icons82.MicOnIcon
        }
      );
    };
  }
});

// src/Prebuilt/components/Notifications/TrackNotifications.tsx
var import_react181, import_react_sdk92, notificationTypes3, TrackNotifications;
var init_TrackNotifications = __esm({
  "src/Prebuilt/components/Notifications/TrackNotifications.tsx"() {
    "use strict";
    init_define_process_env();
    import_react181 = require("react");
    import_react_sdk92 = require("@100mslive/react-sdk");
    notificationTypes3 = [
      import_react_sdk92.HMSNotificationTypes.TRACK_ADDED,
      import_react_sdk92.HMSNotificationTypes.TRACK_REMOVED,
      import_react_sdk92.HMSNotificationTypes.TRACK_MUTED,
      import_react_sdk92.HMSNotificationTypes.TRACK_UNMUTED
    ];
    TrackNotifications = () => {
      const notification = (0, import_react_sdk92.useHMSNotifications)(notificationTypes3);
      (0, import_react181.useEffect)(() => {
        if (notification) {
          console.debug(`[${notification.type}]`, notification);
        }
      }, [notification]);
      return null;
    };
  }
});

// src/Prebuilt/components/Notifications/TrackUnmuteModal.tsx
var import_react182, import_react_sdk93, import_react_icons83, TrackUnmuteModal;
var init_TrackUnmuteModal = __esm({
  "src/Prebuilt/components/Notifications/TrackUnmuteModal.tsx"() {
    "use strict";
    init_define_process_env();
    import_react182 = __toESM(require("react"));
    import_react_sdk93 = require("@100mslive/react-sdk");
    import_react_icons83 = require("@100mslive/react-icons");
    init_DialogContent2();
    TrackUnmuteModal = () => {
      const hmsActions = (0, import_react_sdk93.useHMSActions)();
      const notification = (0, import_react_sdk93.useHMSNotifications)([
        import_react_sdk93.HMSNotificationTypes.CHANGE_TRACK_STATE_REQUEST,
        import_react_sdk93.HMSNotificationTypes.ROOM_ENDED,
        import_react_sdk93.HMSNotificationTypes.REMOVED_FROM_ROOM
      ]);
      const [muteNotification, setMuteNotification] = (0, import_react182.useState)(null);
      (0, import_react182.useEffect)(() => {
        switch (notification == null ? void 0 : notification.type) {
          case import_react_sdk93.HMSNotificationTypes.REMOVED_FROM_ROOM:
          case import_react_sdk93.HMSNotificationTypes.ROOM_ENDED:
            setMuteNotification(null);
            break;
          case import_react_sdk93.HMSNotificationTypes.CHANGE_TRACK_STATE_REQUEST:
            if (notification == null ? void 0 : notification.data.enabled) {
              setMuteNotification(notification.data);
            }
            break;
          default:
            return;
        }
      }, [notification]);
      if (!muteNotification) {
        return null;
      }
      const { requestedBy: peer, track, enabled } = muteNotification;
      return /* @__PURE__ */ import_react182.default.createElement(
        RequestDialog,
        {
          title: "Track Unmute Request",
          onOpenChange: (value) => !value && setMuteNotification(null),
          body: `${peer == null ? void 0 : peer.name} has requested you to unmute your ${track == null ? void 0 : track.source} ${track == null ? void 0 : track.type}.`,
          onAction: () => {
            hmsActions.setEnabledTrack(track.id, enabled);
            setMuteNotification(null);
          },
          Icon: import_react_icons83.MicOnIcon
        }
      );
    };
  }
});

// src/Prebuilt/components/Notifications/Notifications.tsx
function Notifications() {
  const localPeerID = (0, import_react_sdk94.useHMSStore)(import_react_sdk94.selectLocalPeerID);
  const notification = (0, import_react_sdk94.useHMSNotifications)();
  const subscribedNotifications = useSubscribedNotifications() || {};
  const roomState = (0, import_react_sdk94.useHMSStore)(import_react_sdk94.selectRoomState);
  const updateRoomLayoutForRole = useUpdateRoomLayout();
  const isNotificationDisabled = useIsNotificationDisabled();
  const vanillaStore = (0, import_react_sdk94.useHMSVanillaStore)();
  const togglePollView = usePollViewToggle();
  const handleRoleChangeDenied = (0, import_react183.useCallback)((request) => {
    ToastManager.addToast({
      title: `${request.peerName} denied your request to join the ${request.role.name} role`,
      variant: "error"
    });
  }, []);
  (0, import_react_sdk94.useCustomEvent)({ type: ROLE_CHANGE_DECLINED, onEvent: handleRoleChangeDenied });
  (0, import_react183.useEffect)(() => {
    var _a7, _b7, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    if (!notification || isNotificationDisabled) {
      return;
    }
    switch (notification.type) {
      case import_react_sdk94.HMSNotificationTypes.HAND_RAISE_CHANGED: {
        if (roomState !== import_react_sdk94.HMSRoomState.Connected || notification.data.isLocal) {
          return;
        }
        const hasPeerHandRaised = vanillaStore.getState((0, import_react_sdk94.selectHasPeerHandRaised)(notification.data.id));
        if (hasPeerHandRaised) {
          ToastBatcher.showToast({ notification, type: "RAISE_HAND" });
        }
        break;
      }
      case import_react_sdk94.HMSNotificationTypes.METADATA_UPDATED:
        if (roomState !== import_react_sdk94.HMSRoomState.Connected) {
          return;
        }
        const metadata = getMetadata((_a7 = notification.data) == null ? void 0 : _a7.metadata);
        if (!(metadata == null ? void 0 : metadata.isHandRaised) || notification.data.isLocal)
          return;
        console.debug("Metadata updated", notification.data);
        if (!subscribedNotifications.METADATA_UPDATED)
          return;
        ToastBatcher.showToast({ notification, type: "RAISE_HAND" });
        break;
      case import_react_sdk94.HMSNotificationTypes.NAME_UPDATED:
        console.log(notification.data.id + " changed their name to " + notification.data.name);
        break;
      case import_react_sdk94.HMSNotificationTypes.ERROR:
        if (((_b7 = notification.data) == null ? void 0 : _b7.isTerminal) && ((_c = notification.data) == null ? void 0 : _c.action) !== "INIT") {
          if ([500, 6008].includes((_d = notification.data) == null ? void 0 : _d.code)) {
            ToastManager.addToast({
              title: `Error: ${(_e = notification.data) == null ? void 0 : _e.message}`
            });
          } else {
            ToastManager.addToast({
              title: ((_f = notification.data) == null ? void 0 : _f.message) || "We couldn\u2019t reconnect you. When you\u2019re back online, try joining the room.",
              close: false
            });
          }
          return;
        }
        if (((_g = notification.data) == null ? void 0 : _g.code) === 3008 || ((_h = notification.data) == null ? void 0 : _h.code) === 3001 || ((_i = notification.data) == null ? void 0 : _i.code) === 3011) {
          return;
        }
        if (((_j = notification.data) == null ? void 0 : _j.action) === "INIT") {
          return;
        }
        if (!subscribedNotifications.ERROR)
          return;
        ToastManager.addToast({
          title: `Error: ${(_k = notification.data) == null ? void 0 : _k.message} - ${(_l = notification.data) == null ? void 0 : _l.description}`
        });
        break;
      case import_react_sdk94.HMSNotificationTypes.ROLE_UPDATED: {
        if (((_m = notification.data) == null ? void 0 : _m.isLocal) && ((_n = notification.data) == null ? void 0 : _n.roleName)) {
          ToastManager.addToast({
            title: `You are now a ${notification.data.roleName}`
          });
          updateRoomLayoutForRole == null ? void 0 : updateRoomLayoutForRole(notification.data.roleName);
        }
        break;
      }
      case import_react_sdk94.HMSNotificationTypes.CHANGE_TRACK_STATE_REQUEST:
        const track = (_o = notification.data) == null ? void 0 : _o.track;
        if (!notification.data.enabled) {
          ToastManager.addToast({
            title: `Your ${track.source} ${track.type} was muted by
                ${(_p = notification.data.requestedBy) == null ? void 0 : _p.name}.`
          });
        }
        break;
      case import_react_sdk94.HMSNotificationTypes.REMOVED_FROM_ROOM:
      case import_react_sdk94.HMSNotificationTypes.ROOM_ENDED:
        ToastManager.addToast({
          title: `${notification.message}. 
              ${notification.data.reason && `Reason: ${notification.data.reason}`}`
        });
        break;
      case import_react_sdk94.HMSNotificationTypes.DEVICE_CHANGE_UPDATE:
        ToastManager.addToast({
          title: notification.message
        });
        break;
      case import_react_sdk94.HMSNotificationTypes.POLL_STARTED:
        if (notification.data.startedBy !== localPeerID) {
          const pollStartedBy = vanillaStore.getState((0, import_react_sdk94.selectPeerNameByID)(notification.data.startedBy)) || "Participant";
          ToastManager.addToast({
            title: `${pollStartedBy} started a ${notification.data.type}: ${notification.data.title}`,
            action: /* @__PURE__ */ import_react183.default.createElement(
              Button,
              {
                onClick: () => togglePollView(notification.data.id),
                variant: "standard",
                css: {
                  backgroundColor: "$surface_bright",
                  fontWeight: "$semiBold",
                  color: "$on_surface_high",
                  p: "$xs $md"
                }
              },
              "Vote"
            )
          });
        }
        break;
      default:
        break;
    }
  }, [notification, subscribedNotifications.ERROR, subscribedNotifications.METADATA_UPDATED]);
  if (isNotificationDisabled) {
    return null;
  }
  return /* @__PURE__ */ import_react183.default.createElement(import_react183.default.Fragment, null, /* @__PURE__ */ import_react183.default.createElement(TrackUnmuteModal, null), /* @__PURE__ */ import_react183.default.createElement(TrackBulkUnmuteModal, null), /* @__PURE__ */ import_react183.default.createElement(TrackNotifications, null), roomState === import_react_sdk94.HMSRoomState.Connected ? /* @__PURE__ */ import_react183.default.createElement(PeerNotifications, null) : null, /* @__PURE__ */ import_react183.default.createElement(ReconnectNotifications, null), /* @__PURE__ */ import_react183.default.createElement(AutoplayBlockedModal, null), /* @__PURE__ */ import_react183.default.createElement(PermissionErrorModal, null), /* @__PURE__ */ import_react183.default.createElement(InitErrorModal, null));
}
var import_react183, import_react_sdk94;
var init_Notifications = __esm({
  "src/Prebuilt/components/Notifications/Notifications.tsx"() {
    "use strict";
    init_define_process_env();
    import_react183 = __toESM(require("react"));
    import_react_sdk94 = require("@100mslive/react-sdk");
    init_src();
    init_roomLayoutProvider();
    init_ToastBatcher();
    init_ToastManager();
    init_AutoplayBlockedModal();
    init_InitErrorModal();
    init_PeerNotifications();
    init_PermissionErrorModal();
    init_ReconnectNotifications();
    init_TrackBulkUnmuteModal();
    init_TrackNotifications();
    init_TrackUnmuteModal();
    init_useSidepane();
    init_useUISettings();
    init_utils2();
    init_constants();
  }
});

// src/Prebuilt/components/Notifications/index.tsx
var init_Notifications2 = __esm({
  "src/Prebuilt/components/Notifications/index.tsx"() {
    "use strict";
    init_define_process_env();
    init_Notifications();
  }
});

// src/Prebuilt/components/Preview/PreviewScreen.tsx
var import_react184, import_react_use36, PreviewScreen;
var init_PreviewScreen = __esm({
  "src/Prebuilt/components/Preview/PreviewScreen.tsx"() {
    "use strict";
    init_define_process_env();
    import_react184 = __toESM(require("react"));
    import_react_use36 = require("react-use");
    init_src();
    init_AppContext();
    init_roomLayoutProvider();
    init_FullPageProgress();
    init_PreviewJoin();
    init_useRoomLayoutScreen();
    init_useUISettings();
    init_constants();
    PreviewScreen = () => {
      var _a7, _b7, _c;
      const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
      const skipPreview = !isPreviewScreenEnabled;
      const previewAsRole = (0, import_react_use36.useSearchParam)(QUERY_PARAM_PREVIEW_AS_ROLE);
      const { userName } = useHMSPrebuiltContext();
      const initialName = userName || (skipPreview ? "Beam" : "");
      const authToken = useAuthToken();
      const roomLayout = useRoomLayout();
      const { preview_header: previewHeader = {} } = ((_c = (_b7 = (_a7 = roomLayout == null ? void 0 : roomLayout.screens) == null ? void 0 : _a7.preview) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements) || {};
      return /* @__PURE__ */ import_react184.default.createElement(Flex, { direction: "column", css: { size: "100%" } }, /* @__PURE__ */ import_react184.default.createElement(
        Flex,
        {
          css: { flex: "1 1 0", position: "relative", overflowY: "auto", color: "$primary_default" },
          justify: "center",
          align: "center"
        },
        authToken && Object.keys(previewHeader).length > 0 ? /* @__PURE__ */ import_react184.default.createElement(PreviewJoin_default, { initialName, skipPreview, asRole: previewAsRole != null ? previewAsRole : void 0 }) : /* @__PURE__ */ import_react184.default.createElement(FullPageProgress_default, null)
      ));
    };
  }
});

// src/Prebuilt/components/Toast/Toast.jsx
var import_react185, Toast2;
var init_Toast3 = __esm({
  "src/Prebuilt/components/Toast/Toast.jsx"() {
    "use strict";
    init_define_process_env();
    import_react185 = __toESM(require("react"));
    init_Toast2();
    Toast2 = (_a7) => {
      var _b7 = _a7, { title, description, close = true, open, duration, onOpenChange, icon } = _b7, props = __objRest(_b7, ["title", "description", "close", "open", "duration", "onOpenChange", "icon"]);
      return /* @__PURE__ */ import_react185.default.createElement(
        Toast.HMSToast,
        __spreadValues({
          title,
          description,
          open,
          isClosable: close,
          onOpenChange,
          duration: !close ? 6e5 : duration,
          icon
        }, props)
      );
    };
  }
});

// src/Prebuilt/components/Toast/ToastContainer.jsx
var import_react186, import_react_sdk95, ToastContainer;
var init_ToastContainer = __esm({
  "src/Prebuilt/components/Toast/ToastContainer.jsx"() {
    "use strict";
    init_define_process_env();
    import_react186 = __toESM(require("react"));
    import_react_sdk95 = require("@100mslive/react-sdk");
    init_Toast2();
    init_Toast3();
    init_ToastManager();
    init_constants();
    ToastContainer = () => {
      const isConnected = (0, import_react_sdk95.useHMSStore)(import_react_sdk95.selectIsConnectedToRoom);
      const [toasts, setToast] = (0, import_react186.useState)([]);
      (0, import_react186.useEffect)(() => {
        ToastManager.addListener(setToast);
        return () => {
          ToastManager.removeListener(setToast);
        };
      }, []);
      return /* @__PURE__ */ import_react186.default.createElement(Toast.Provider, { swipeDirection: "left", duration: 3e3 }, toasts.slice(0, MAX_TOASTS).map((toast) => {
        return /* @__PURE__ */ import_react186.default.createElement(Toast2, __spreadProps(__spreadValues({ key: toast.id }, toast), { onOpenChange: (value) => !value && ToastManager.removeToast(toast.id) }));
      }), /* @__PURE__ */ import_react186.default.createElement(
        Toast.Viewport,
        {
          css: __spreadValues({
            position: "absolute"
          }, !isConnected ? {} : { bottom: "$24" })
        }
      ));
    };
  }
});

// src/Prebuilt/plugins/FlyingEmoji.jsx
function FlyingEmoji() {
  const localPeerId = (0, import_react_sdk96.useHMSStore)(import_react_sdk96.selectLocalPeerID);
  const vanillaStore = (0, import_react_sdk96.useHMSVanillaStore)();
  const [emojis, setEmojis] = (0, import_react187.useState)([]);
  const isMobile = (0, import_react_use37.useMedia)(config.media.md);
  const startingPoints = (0, import_react187.useMemo)(() => getStartingPoints(isMobile), [isMobile]);
  const showFlyingEmoji = (0, import_react187.useCallback)(
    ({ emojiId, senderId }) => {
      if (!emojiId || !senderId || document.hidden) {
        return;
      }
      const senderPeerName = vanillaStore.getState((0, import_react_sdk96.selectPeerNameByID)(senderId));
      const nameToShow = localPeerId === senderId ? "You" : senderPeerName;
      const startingPoint = startingPoints[emojiCount % startingPoints.length];
      const id = emojiCount++;
      setEmojis((emojis2) => {
        return [
          ...emojis2,
          {
            id,
            emojiId,
            senderName: nameToShow,
            startingPoint: `${startingPoint}%`,
            wiggleType: Math.random() < 0.5 ? 0 : 1
          }
        ];
      });
    },
    [localPeerId, vanillaStore, startingPoints]
  );
  (0, import_react_sdk96.useCustomEvent)({
    type: EMOJI_REACTION_TYPE,
    onEvent: showFlyingEmoji
  });
  (0, import_react187.useEffect)(() => {
    window.showFlyingEmoji = showFlyingEmoji;
  }, [showFlyingEmoji]);
  return /* @__PURE__ */ import_react187.default.createElement(
    Box,
    {
      css: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 999
      }
    },
    emojis.map((emoji) => {
      return /* @__PURE__ */ import_react187.default.createElement(
        Flex,
        {
          key: emoji.id,
          css: {
            left: emoji.startingPoint,
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            animation: `${flyAndFade()} 5s forwards, ${emoji.wiggleType === 0 ? wiggleLeftRight() : wiggleRightLeft()} 1s ease-in-out infinite alternate`
          },
          onAnimationEnd: () => {
            setEmojis(emojis.filter((item) => item.id !== emoji.id));
          }
        },
        /* @__PURE__ */ import_react187.default.createElement(Box, null, /* @__PURE__ */ import_react187.default.createElement("em-emoji", { id: emoji.emojiId, size: "48px", set: "apple" })),
        /* @__PURE__ */ import_react187.default.createElement(
          Box,
          {
            css: {
              width: "fit-content",
              padding: "$2 $4",
              background: "$surface_bright",
              borderRadius: "$1"
            }
          },
          /* @__PURE__ */ import_react187.default.createElement(
            Text,
            {
              css: {
                fontSize: "$space$6",
                lineHeight: "$xs",
                color: "$on_surface_high"
              }
            },
            emoji.senderName
          )
        )
      );
    })
  );
}
var import_react187, import_react_use37, import_react_sdk96, emojiCount, flyAndFade, wiggleLeftRight, wiggleRightLeft, getStartingPoints;
var init_FlyingEmoji = __esm({
  "src/Prebuilt/plugins/FlyingEmoji.jsx"() {
    "use strict";
    init_define_process_env();
    import_react187 = __toESM(require("react"));
    import_react_use37 = require("react-use");
    import_react_sdk96 = require("@100mslive/react-sdk");
    init_Layout();
    init_Text2();
    init_Theme();
    init_constants();
    emojiCount = 1;
    flyAndFade = keyframes({
      "20%": { opacity: 1 },
      "100%": { bottom: "60%", opacity: 0 }
    });
    wiggleLeftRight = keyframes({
      "0%": { marginLeft: "-50px" },
      "100%": { marginLeft: "50px" }
    });
    wiggleRightLeft = keyframes({
      "0%": { marginLeft: "50px" },
      "100%": { marginLeft: "-50px" }
    });
    getStartingPoints = (isMobile) => {
      let arr = [];
      const min = 5;
      const max = isMobile ? 30 : 20;
      const inc = isMobile ? 8 : 5;
      for (let i = min; i <= max; i += inc) {
        arr.push(i);
      }
      return arr;
    };
  }
});

// src/Prebuilt/plugins/RemoteStopScreenshare.jsx
function RemoteStopScreenshare() {
  const actions = (0, import_react_sdk97.useHMSActions)();
  const onRemoteStopScreenshare = (0, import_react188.useCallback)(() => __async(this, null, function* () {
    yield actions.setScreenShareEnabled(false);
  }), [actions]);
  (0, import_react_sdk97.useCustomEvent)({
    type: REMOTE_STOP_SCREENSHARE_TYPE,
    onEvent: onRemoteStopScreenshare
  });
  return /* @__PURE__ */ import_react188.default.createElement(import_react188.default.Fragment, null);
}
var import_react188, import_react_sdk97;
var init_RemoteStopScreenshare = __esm({
  "src/Prebuilt/plugins/RemoteStopScreenshare.jsx"() {
    "use strict";
    init_define_process_env();
    import_react188 = __toESM(require("react"));
    import_react_sdk97 = require("@100mslive/react-sdk");
    init_constants();
  }
});

// src/Prebuilt/components/hooks/useAutoStartStreaming.tsx
var import_react189, import_react_sdk98, useAutoStartStreaming;
var init_useAutoStartStreaming = __esm({
  "src/Prebuilt/components/hooks/useAutoStartStreaming.tsx"() {
    "use strict";
    init_define_process_env();
    import_react189 = require("react");
    import_react_sdk98 = require("@100mslive/react-sdk");
    init_useUISettings();
    init_hooks();
    init_constants();
    useAutoStartStreaming = () => {
      const [isHLSStarted, setHLSStarted] = useSetAppDataByKey(APP_DATA.hlsStarted);
      const permissions = (0, import_react_sdk98.useHMSStore)(import_react_sdk98.selectPermissions);
      const showStreamingUI = useShowStreamingUI();
      const hmsActions = (0, import_react_sdk98.useHMSActions)();
      const isConnected = (0, import_react_sdk98.useHMSStore)(import_react_sdk98.selectIsConnectedToRoom);
      const { isHLSRunning, isRTMPRunning, isRecordingOn } = (0, import_react_sdk98.useRecordingStreaming)();
      const streamStartedRef = (0, import_react189.useRef)(false);
      const startHLS = (0, import_react189.useCallback)(() => __async(void 0, null, function* () {
        try {
          if (isHLSStarted || !showStreamingUI || isHLSRunning || isRTMPRunning) {
            return;
          }
          setHLSStarted(true);
          streamStartedRef.current = true;
          yield hmsActions.startHLSStreaming();
        } catch (error) {
          console.error(error);
          streamStartedRef.current = false;
          setHLSStarted(false);
        }
      }), [hmsActions, isHLSRunning, isHLSStarted, setHLSStarted, showStreamingUI, isRTMPRunning]);
      (0, import_react189.useEffect)(() => {
        if (!isHLSStarted && !isHLSRunning) {
          streamStartedRef.current = false;
        }
      }, [isHLSStarted, isHLSRunning]);
      (0, import_react189.useEffect)(() => {
        if (!isConnected || streamStartedRef.current || !(permissions == null ? void 0 : permissions.hlsStreaming) || isRecordingOn) {
          return;
        }
        startHLS();
      }, [isConnected]);
    };
  }
});

// src/Prebuilt/App.tsx
function AppRoutes({
  authTokenByRoomCodeEndpoint,
  defaultAuthToken
}) {
  const roomLayout = useRoomLayout();
  const isNotificationsDisabled = useIsNotificationDisabled();
  const { activeState, rejoin } = useAppStateManager();
  return /* @__PURE__ */ import_react190.default.createElement(AppStateContext.Provider, { value: { rejoin } }, /* @__PURE__ */ import_react190.default.createElement(import_react190.default.Fragment, null, /* @__PURE__ */ import_react190.default.createElement(ToastContainer, null), /* @__PURE__ */ import_react190.default.createElement(Notifications, null), /* @__PURE__ */ import_react190.default.createElement(MwebLandscapePrompt, null), /* @__PURE__ */ import_react190.default.createElement(BackSwipe, null), !isNotificationsDisabled && /* @__PURE__ */ import_react190.default.createElement(FlyingEmoji, null), /* @__PURE__ */ import_react190.default.createElement(RemoteStopScreenshare, null), /* @__PURE__ */ import_react190.default.createElement(KeyboardHandler, null), /* @__PURE__ */ import_react190.default.createElement(AuthToken_default, { authTokenByRoomCodeEndpoint, defaultAuthToken }), roomLayout && activeState && /* @__PURE__ */ import_react190.default.createElement(AppStates, { activeState })));
}
var import_react190, import_react_sdk99, HMSPrebuilt, AppStates, BackSwipe;
var init_App = __esm({
  "src/Prebuilt/App.tsx"() {
    "use strict";
    init_define_process_env();
    import_react190 = __toESM(require("react"));
    import_react_sdk99 = require("@100mslive/react-sdk");
    init_AppData();
    init_AuthToken();
    init_ConferenceScreen();
    init_ErrorBoundary();
    init_Init();
    init_KeyboardInputManager();
    init_LeaveScreen();
    init_MwebLandscapePrompt();
    init_Notifications2();
    init_PreviewScreen();
    init_ToastContainer();
    init_roomLayoutProvider();
    init_DialogContext();
    init_Layout();
    init_Theme();
    init_AppContext();
    init_AppStateContext();
    init_FlyingEmoji();
    init_RemoteStopScreenshare();
    init_useUISettings();
    init_useAutoStartStreaming();
    init_useRoomLayoutScreen();
    init_FeatureFlags();
    init_constants();
    HMSPrebuilt = import_react190.default.forwardRef(
      ({
        roomCode = "",
        authToken = "",
        roomId = "",
        role = "",
        containerSelector = DEFAULT_PORTAL_CONTAINER,
        logo,
        typography,
        themes,
        options: { userName = "", userId = "", endpoints } = {},
        screens,
        onLeave,
        onJoin
      }, ref) => {
        var _a7, _b7, _c, _d;
        const metadata = "";
        const reactiveStore = (0, import_react190.useRef)();
        const [hydrated, setHydrated] = import_react190.default.useState(false);
        (0, import_react190.useEffect)(() => {
          setHydrated(true);
          const hms = new import_react_sdk99.HMSReactiveStore();
          const hmsStore = hms.getStore();
          const hmsActions = hms.getActions();
          const hmsNotifications = hms.getNotifications();
          const hmsStats = hms.getStats();
          hms.triggerOnSubscribe();
          reactiveStore.current = {
            hmsActions,
            hmsStats,
            hmsStore,
            hmsNotifications
          };
        }, []);
        (0, import_react190.useEffect)(() => {
          if (!ref || !reactiveStore.current) {
            return;
          }
          ref.current = __spreadValues({}, reactiveStore.current);
        }, [ref]);
        (0, import_react190.useEffect)(
          () => () => {
            var _a8;
            (_a8 = reactiveStore == null ? void 0 : reactiveStore.current) == null ? void 0 : _a8.hmsActions.leave();
          },
          []
        );
        const endpointsObj = endpoints;
        const tokenByRoomCodeEndpoint = (endpointsObj == null ? void 0 : endpointsObj.tokenByRoomCode) || "";
        const initEndpoint = (endpointsObj == null ? void 0 : endpointsObj.init) || "";
        const roomLayoutEndpoint = (endpointsObj == null ? void 0 : endpointsObj.roomLayout) || "";
        const tokenByRoomIdRoleEndpoint = (endpointsObj == null ? void 0 : endpointsObj.tokenByRoomIdRole) || "";
        const overrideLayout = {
          logo,
          themes,
          typography,
          screens
        };
        if (!roomCode && !(authToken && roomId && role)) {
          console.error(`
          HMSPrebuilt can be initialised by providing: 
          either just "roomCode" or "authToken" and "roomId" and "role".
          Please check if you are providing the above values for initialising prebuilt.
        `);
          throw Error("Incorrect initializing params for HMSPrebuilt component");
        }
        if (!hydrated) {
          return null;
        }
        globalStyles();
        return /* @__PURE__ */ import_react190.default.createElement(ErrorBoundary, null, /* @__PURE__ */ import_react190.default.createElement(
          HMSPrebuiltContext.Provider,
          {
            value: {
              roomCode,
              roomId,
              role,
              containerSelector,
              onLeave,
              onJoin,
              userName,
              userId,
              endpoints: {
                tokenByRoomCode: tokenByRoomCodeEndpoint,
                init: initEndpoint,
                tokenByRoomIdRole: tokenByRoomIdRoleEndpoint,
                roomLayout: roomLayoutEndpoint
              }
            }
          },
          /* @__PURE__ */ import_react190.default.createElement(
            import_react_sdk99.HMSRoomProvider,
            {
              isHMSStatsOn: FeatureFlags.enableStatsForNerds,
              actions: (_a7 = reactiveStore.current) == null ? void 0 : _a7.hmsActions,
              store: (_b7 = reactiveStore.current) == null ? void 0 : _b7.hmsStore,
              notifications: (_c = reactiveStore.current) == null ? void 0 : _c.hmsNotifications,
              stats: (_d = reactiveStore.current) == null ? void 0 : _d.hmsStats
            },
            /* @__PURE__ */ import_react190.default.createElement(RoomLayoutProvider, { roomLayoutEndpoint, overrideLayout }, /* @__PURE__ */ import_react190.default.createElement(RoomLayoutContext.Consumer, null, (data3) => {
              var _a8;
              const layout = data3 == null ? void 0 : data3.layout;
              const theme2 = ((_a8 = layout == null ? void 0 : layout.themes) == null ? void 0 : _a8[0]) || {};
              const { typography: typography2 } = layout || {};
              let fontFamily = ["sans-serif"];
              if (typography2 == null ? void 0 : typography2.font_family) {
                fontFamily = [`${typography2 == null ? void 0 : typography2.font_family}`, ...fontFamily];
              }
              return /* @__PURE__ */ import_react190.default.createElement(
                HMSThemeProvider,
                {
                  themeType: `${theme2.name}-${Date.now()}`,
                  theme: {
                    //@ts-ignore: Prebuilt theme to match stiches theme
                    colors: theme2.palette,
                    fonts: {
                      //@ts-ignore: font list to match token types of stiches
                      sans: fontFamily
                    }
                  }
                },
                /* @__PURE__ */ import_react190.default.createElement(AppData, { appDetails: metadata, tokenEndpoint: tokenByRoomIdRoleEndpoint }),
                /* @__PURE__ */ import_react190.default.createElement(Init, null),
                /* @__PURE__ */ import_react190.default.createElement(DialogContainerProvider, { dialogContainerSelector: containerSelector }, /* @__PURE__ */ import_react190.default.createElement(
                  Box,
                  {
                    id: DEFAULT_PORTAL_CONTAINER.slice(1),
                    css: {
                      bg: "$background_dim",
                      size: "100%",
                      lineHeight: "1.5",
                      "-webkit-text-size-adjust": "100%",
                      position: "relative"
                    }
                  },
                  /* @__PURE__ */ import_react190.default.createElement(
                    AppRoutes,
                    {
                      authTokenByRoomCodeEndpoint: tokenByRoomCodeEndpoint,
                      defaultAuthToken: authToken
                    }
                  )
                ))
              );
            }))
          )
        ));
      }
    );
    HMSPrebuilt.displayName = "HMSPrebuilt";
    AppStates = ({ activeState }) => {
      const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
      const { isLeaveScreenEnabled } = useRoomLayoutLeaveScreen();
      useAutoStartStreaming();
      if (activeState === "preview" /* PREVIEW */ && isPreviewScreenEnabled) {
        return /* @__PURE__ */ import_react190.default.createElement(PreviewScreen, null);
      } else if (activeState === "leave" /* LEAVE */ && isLeaveScreenEnabled) {
        return /* @__PURE__ */ import_react190.default.createElement(LeaveScreen, null);
      }
      return /* @__PURE__ */ import_react190.default.createElement(ConferenceScreen, null);
    };
    BackSwipe = () => {
      const isConnectedToRoom = (0, import_react_sdk99.useHMSStore)(import_react_sdk99.selectIsConnectedToRoom);
      const hmsActions = (0, import_react_sdk99.useHMSActions)();
      (0, import_react190.useEffect)(() => {
        const onRouteLeave = () => __async(void 0, null, function* () {
          if (isConnectedToRoom) {
            yield hmsActions.leave();
          }
        });
        window.addEventListener("popstate", onRouteLeave);
        return () => {
          window.removeEventListener("popstate", onRouteLeave);
        };
      }, [hmsActions, isConnectedToRoom]);
      return null;
    };
  }
});

// src/Prebuilt/index.ts
var init_Prebuilt = __esm({
  "src/Prebuilt/index.ts"() {
    "use strict";
    init_define_process_env();
    init_App();
  }
});

// src/Progress/index.tsx
var import_react_progress, StyledIndicator, StyledRoot2, Progress;
var init_Progress = __esm({
  "src/Progress/index.tsx"() {
    "use strict";
    init_define_process_env();
    import_react_progress = require("@radix-ui/react-progress");
    init_Theme();
    StyledIndicator = styled(import_react_progress.Indicator, { h: "$4", backgroundColor: "$primary_default" });
    StyledRoot2 = styled(import_react_progress.Root, {
      w: "100%",
      h: "$4",
      borderRadius: "$round",
      backgroundColor: "$secondary_dim",
      overflow: "hidden"
    });
    Progress = {
      Root: StyledRoot2,
      Content: StyledIndicator
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Accordion: () => Accordion,
  AudioLevel: () => AudioLevel,
  Avatar: () => Avatar,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox,
  Collapsible: () => Collapsible,
  Dialog: () => Dialog,
  DialogContainerContext: () => DialogContainerContext,
  DialogContainerProvider: () => DialogContainerProvider,
  Dropdown: () => Dropdown,
  Fieldset: () => Fieldset,
  Flex: () => Flex,
  Footer: () => Footer,
  HMSPrebuilt: () => HMSPrebuilt,
  HMSSelect: () => ReactSelect_exports,
  HMSThemeProvider: () => HMSThemeProvider,
  HorizontalDivider: () => HorizontalDivider,
  IconButton: () => IconButton,
  Input: () => Input,
  Label: () => Label3,
  Link: () => Link,
  Loading: () => Loading,
  PasswordInput: () => PasswordInput,
  Popover: () => Popover2,
  Progress: () => Progress,
  QRCode: () => QRCode,
  RadioGroup: () => RadioGroup,
  Select: () => Select,
  Slider: () => Slider,
  StyledAvatar: () => StyledAvatar,
  StyledMenuTile: () => StyledMenuTile,
  StyledPagination: () => StyledPagination,
  StyledVideo: () => StyledVideo,
  StyledVideoList: () => StyledVideoList,
  StyledVideoTile: () => StyledVideoTile,
  Switch: () => Switch,
  Tabs: () => Tabs,
  Text: () => Text,
  ThemeContext: () => ThemeContext,
  ThemeTypes: () => ThemeTypes,
  Toast: () => Toast,
  Tooltip: () => Tooltip,
  VerticalDivider: () => VerticalDivider,
  Video: () => Video,
  VideoTileStats: () => VideoTileStats,
  config: () => config,
  createTheme: () => createTheme,
  createThemeBase: () => createThemeBase,
  css: () => css,
  flexCenter: () => flexCenter,
  getCssText: () => getCssText,
  getLeft: () => getLeft,
  globalCss: () => globalCss,
  globalStyles: () => globalStyles,
  keyframes: () => keyframes,
  slideLeftAndFade: () => slideLeftAndFade,
  styled: () => styled,
  textEllipsis: () => textEllipsis,
  theme: () => theme,
  useBorderAudioLevel: () => useBorderAudioLevel,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(src_exports);
var init_src = __esm({
  "src/index.ts"() {
    init_define_process_env();
    init_Button2();
    init_Text2();
    init_IconButton2();
    init_Layout();
    init_Avatar2();
    init_Divider2();
    init_Switch2();
    init_Tooltip2();
    init_Select2();
    init_Slider2();
    init_Modal();
    init_Loading2();
    init_Input2();
    init_VideoTile();
    init_VideoList();
    init_Pagination();
    init_Dropdown2();
    init_utils();
    init_Video2();
    init_TileMenu();
    init_AudioLevel2();
    init_Popover();
    init_Stats2();
    init_Theme();
    init_Checkbox2();
    init_Label2();
    init_RadioGroup2();
    init_Toast2();
    init_Accordion2();
    init_Fieldset2();
    init_Footer2();
    init_ReactSelect2();
    init_Tabs2();
    init_QRCode2();
    init_Link2();
    init_Collapsible2();
    init_Prebuilt();
    init_Progress();
    init_DialogContext();
  }
});
init_src();
//# sourceMappingURL=index.cjs.js.map
