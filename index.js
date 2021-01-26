var Matomo = require("react-native").NativeModules.Matomo;
module.exports = {
  initTracker: Matomo.initTracker,
  setUserId: function (userId) {
    if (userId !== null && (userId !== userId) !== undefined) {
      Matomo.setUserId(userId + "");
    }
  },
  setCustomDimension: function (id, value) {
    Matomo.setCustomDimension(id, value ? value + "" : null);
  },
  trackAppDownload: Matomo.trackAppDownload,
  trackScreen: function (path, title) {
    try {
      Matomo.trackScreen(path, title);
    } catch (error) {
      // do nothing
    }
  },
  trackGoal: function (goalId, revenue) {
    try {
      Matomo.trackGoal(goalId, { revenue });
    } catch (error) {
      // do nothing
    }
  },
  trackEvent: function (category, action, name, value, url) {
    try {
      Matomo.trackEvent(category, action, { name, value, url });
    } catch (error) {
      // do nothing
    }
  },
  trackCampaign: function (name, keyword) {
    try {
      Matomo.trackCampaign(name, keyword);
    } catch (error) {
      // do nothing
    }
  },
  trackContentImpression: function (name, piece, target) {
    try {
      Matomo.trackContentImpression(name, { piece, target });
    } catch (error) {
      // do nothing
    }
  },
  trackContentInteraction: function (name, interaction, piece, target) {
    try {
      Matomo.trackContentInteraction(name, { interaction, piece, target });
    } catch (error) {
      // do nothing
    }
  },
  trackSearch: function (query, category, resultCount, url) {
    try {
      Matomo.trackSearch(query, { category, resultCount, url });
    } catch (error) {
      // do nothing
    }
  },
  enableLog: function () {
    try {
      Matomo.enableLog();
    } catch (error) {
      // do nothing
    }
  },
};
