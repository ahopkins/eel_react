import eel
from subprocess import call
from time import sleep


def start_web():
    call(['./start.sh'])


def start_eel(should_sleep=True, develop=True):
    if should_sleep:
        sleep(4)
    if develop:
        page = {
            'port': 3000
        }
    else:
        page = 'sample.html'

    eel.start(page, options={
        'port': 8888,
        'host': 'localhost',
    })


if __name__ == '__main__':
    eel.init('web')
    start_eel(should_sleep=True, develop=True)
