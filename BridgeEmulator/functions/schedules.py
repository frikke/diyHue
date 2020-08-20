from time import sleep
from threading import Thread
from datetime import datetime, timedelta
from functions.request import sendRequest
from functions.daylightSensor import daylightSensor
from functions.config import saveConfig
import Globals

def schedulerProcessor():
    while True:
        for schedule in Globals.bridge_config["schedules"].keys():
            try:
                delay = 0
                if Globals.bridge_config["schedules"][schedule]["status"] == "enabled":
                    if Globals.bridge_config["schedules"][schedule]["localtime"][-9:-8] == "A":
                        delay = random.randrange(0, int(Globals.bridge_config["schedules"][schedule]["localtime"][-8:-6]) * 3600 + int(Globals.bridge_config["schedules"][schedule]["localtime"][-5:-3]) * 60 + int(Globals.bridge_config["schedules"][schedule]["localtime"][-2:]))
                        schedule_time = Globals.bridge_config["schedules"][schedule]["localtime"][:-9]
                    else:
                        schedule_time = Globals.bridge_config["schedules"][schedule]["localtime"]
                    if schedule_time.startswith("W"):
                        pices = schedule_time.split('/T')
                        if int(pices[0][1:]) & (1 << 6 - datetime.today().weekday()):
                            if pices[1] == datetime.now().strftime("%H:%M:%S"):
                                logging.info("execute schedule: " + schedule + " withe delay " + str(delay))
                                sendRequest(Globals.bridge_config["schedules"][schedule]["command"]["address"], Globals.bridge_config["schedules"][schedule]["command"]["method"], json.dumps(Globals.bridge_config["schedules"][schedule]["command"]["body"]), 1, delay)
                    elif schedule_time.startswith("PT"):
                        timmer = schedule_time[2:]
                        (h, m, s) = timmer.split(':')
                        d = timedelta(hours=int(h), minutes=int(m), seconds=int(s))
                        if Globals.bridge_config["schedules"][schedule]["starttime"] == (datetime.utcnow() - d).replace(microsecond=0).isoformat():
                            logging.info("execute timmer: " + schedule + " withe delay " + str(delay))
                            sendRequest(Globals.bridge_config["schedules"][schedule]["command"]["address"], Globals.bridge_config["schedules"][schedule]["command"]["method"], json.dumps(Globals.bridge_config["schedules"][schedule]["command"]["body"]), 1, delay)
                            Globals.bridge_config["schedules"][schedule]["status"] = "disabled"
                    elif schedule_time.startswith("R/PT"):
                        timmer = schedule_time[4:]
                        (h, m, s) = timmer.split(':')
                        d = timedelta(hours=int(h), minutes=int(m), seconds=int(s))
                        if Globals.bridge_config["schedules"][schedule]["starttime"] == (datetime.utcnow() - d).replace(microsecond=0).isoformat():
                            logging.info("execute timmer: " + schedule + " withe delay " + str(delay))
                            Globals.bridge_config["schedules"][schedule]["starttime"] = datetime.utcnow().replace(microsecond=0).isoformat()
                            sendRequest(Globals.bridge_config["schedules"][schedule]["command"]["address"], Globals.bridge_config["schedules"][schedule]["command"]["method"], json.dumps(Globals.bridge_config["schedules"][schedule]["command"]["body"]), 1, delay)
                    else:
                        if schedule_time == datetime.now().strftime("%Y-%m-%dT%H:%M:%S"):
                            logging.info("execute schedule: " + schedule + " withe delay " + str(delay))
                            sendRequest(Globals.bridge_config["schedules"][schedule]["command"]["address"], Globals.bridge_config["schedules"][schedule]["command"]["method"], json.dumps(Globals.bridge_config["schedules"][schedule]["command"]["body"]), 1, delay)
                            if Globals.bridge_config["schedules"][schedule]["autodelete"]:
                                del Globals.bridge_config["schedules"][schedule]
            except Exception as e:
                logging.info("Exception while processing the schedule " + schedule + " | " + str(e))

        if (datetime.now().strftime("%M:%S") == "00:10"): #auto save configuration every hour
            saveConfig()
            Thread(target=daylightSensor).start()
            if (datetime.now().strftime("%H") == "23" and datetime.now().strftime("%A") == "Sunday"): #backup config every Sunday at 23:00:10
                saveConfig("config-backup-" + datetime.now().strftime("%Y-%m-%d") + ".json")
        sleep(1)
