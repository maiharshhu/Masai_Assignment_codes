// Example: Updating Redis after a bulk task
const updateBulkStatus = async (userId, successCount, failCount) => {
    const statusData = {
        success: successCount,
        failed: failCount,
        userId: userId,
        timestamp: new Date().toISOString()
    };
    await redisClient.set(`bulk_status:${userId}`, JSON.stringify(statusData));
};