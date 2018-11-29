import sys, json
from pprint import pprint as pp


def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])


def main():
    data = read_in()

    pp("Recieved data:")
    pp(data)


if __name__ == '__main__':
    main()