# Black-frame and one-frame-pop scan of a render. Usage (from the project folder): python3 ../../tools/qa/scan.py <section>/<name>   (reads renders/<section>/<name>.mp4)
import os, subprocess, numpy as np, sys, json
def frames(path, w=240, h=135):
    raw = subprocess.run(['ffmpeg','-v','error','-i',path,'-vf',f'scale={w}:{h},format=gray','-f','rawvideo','-'],capture_output=True).stdout
    if not raw:
        return np.zeros((0, h, w), dtype=np.float32)
    return np.frombuffer(raw,np.uint8).reshape(-1,h,w).astype(np.float32)

for arg in sys.argv[1:]:
    target = arg
    if not os.path.exists(target):
        if os.path.exists(f'{arg}.mp4'):
            target = f'{arg}.mp4'
        elif os.path.exists(f'renders/{arg}.mp4'):
            target = f'renders/{arg}.mp4'
    f = frames(target); n = len(f)
    if n == 0:
        print(json.dumps({'file':arg, 'error':'Video not found or could not decode frames'}))
        continue
    d = np.abs(np.diff(f,axis=0)).mean(axis=(1,2)); mean = f.mean(axis=(1,2))
    f0 = f[0]; blank = f0.std() < 6
    jumps = [(i+1, round(float(v),1)) for i,v in enumerate(d) if v > 18]
    black = [i for i,m in enumerate(mean) if m < 8]
    pops = [i for i in range(1,n-1) if np.abs(f[i]-f[i-1]).mean()>12 and np.abs(f[i]-f[i+1]).mean()>12 and np.abs(f[i-1]-f[i+1]).mean()<6]
    print(json.dumps({'file':target,'frames':n,'frame0_blank':bool(blank),'frame0_std':round(float(f0.std()),2),'hard_jumps(>18)':len(jumps),'black_frames':black[:10],'one_frame_pops':pops}))

