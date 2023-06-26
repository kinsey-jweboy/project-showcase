const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const SN = 'R22TAS14347200';
const MODEL_ID = 'UxwAyDrEFCOqU3V2r9jr-A';

// 云函数入口函数
exports.main = async () => {
  try {
    const result = await cloud.openapi.device.getSnTicket({
      sn: SN,
      model_id: MODEL_ID,
    });
    return { snTicket: result.snTicket, sn: SN, modelId: MODEL_ID };
  } catch (err) {
    return err;
  }
};
