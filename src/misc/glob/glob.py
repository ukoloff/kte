from pathlib import Path

me = Path(__file__) / ".."
root = me / "../../.."
root = root.resolve()

files = ['src/**/*.js', 'src/**/*.ls'] #, 'tooling/*.prg']
files = [f.relative_to(root) for mask in files for f in root.glob(mask)]

out = (me / "dump.txt").open("w")

for f in files:
  print(f"[{f}]{'-' * (80 -len(str(f)))}", file=out)
  print((root / f).read_text(encoding='utf-8'), file=out)
  print(file=out)
