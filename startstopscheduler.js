//fmc savehook to start or stop the Scheduler

var logger = com.polarion.core.util.logging.Logger.getLogger("testlogger");
logger.info("======================================================");
logger.info("========== script start/stop Scheduler start =========");
logger.info("======================================================");

//stop Scheduler
if (workItem.getId() == "TEST-525") {
	var PlatformContext = com.polarion.platform.core.PlatformContext;
	var IJobSchedulerService = com.polarion.platform.jobs.scheduler.IJobSchedulerService;

	var jobSchedulerService = PlatformContext.getPlatform().lookupService(IJobSchedulerService.class);

	try {
		jobSchedulerService.stopScheduler();
		logger.info("Polarion Scheduler erfolgreich gestoppt.");
	} catch (e) {
		logger.error("Fehler beim Stoppen des Schedulers: " + e.message, e);
	}
}

//start Scheduler
else if (workItem.getId() == "TEST-526") {
	var PlatformContext = com.polarion.platform.core.PlatformContext;
	var IJobSchedulerService = com.polarion.platform.jobs.scheduler.IJobSchedulerService;

	var jobSchedulerService = PlatformContext.getPlatform().lookupService(IJobSchedulerService.class);

	try {
		jobSchedulerService.startScheduler();
		logger.info("Polarion Scheduler erfolgreich gestartet.");
	} catch (e) {
		logger.error("Fehler beim Starten des Schedulers: " + e.message, e);
	}
}


else if (workItem.getId() == "TEST-527") {
	var PlatformContext = com.polarion.platform.core.PlatformContext;
	var IJobSchedulerService = com.polarion.platform.jobs.scheduler.IJobSchedulerService;

	var jobSchedulerService = PlatformContext.getPlatform().lookupService(IJobSchedulerService.class);

	try {
		var isRunning = jobSchedulerService.isSchedulerRunning();
		logger.info(isRunning);
		if (isRunning ==true){
			jobSchedulerService.stopScheduler();
			logger.info("Der Scheduler wurde gestoppt");
		}
		else if (isRunning == false){
			jobSchedulerService.startScheduler();
			logger.info("Der Scheduler wurde gestartet");
		}
		
	} catch (e) {
		logger.error("Fehler beim Starten des Schedulers: " + e.message, e);
	}
}

logger.info("======================================================");
logger.info("=========== script start/stop Scheduler end ==========");
logger.info("======================================================");
