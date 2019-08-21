rm /home/medialab/zwl/result.txt

rm /home/medialab/zwl/new.mp4

rm -rf /home/medialab/miniconda3/bin/Lifting-from-the-Deep-release-master-1/data/walking

mkdir /home/medialab/miniconda3/bin/Lifting-from-the-Deep-release-master-1/data/walking

find /home/medialab/zwl/ -name '*.mp4' -exec mv {} /home/medialab/zwl/video.mp4 \;

mv /home/medialab/zwl/video.mp4 /home/medialab/miniconda3/bin/Lifting-from-the-Deep-release-master-1/data/walking/video.mp4

mplayer -ao null "/home/medialab/miniconda3/bin/Lifting-from-the-Deep-release-master-1/data/walking/video.mp4" -vo jpeg:outdir=/home/medialab/miniconda3/bin/Lifting-from-the-Deep-release-master-1/data/walking/tabs

 
source  activate /home/medialab/anaconda2

cd /home/medialab/miniconda3/bin/Lifting-from-the-Deep-release-master-1/applications
 
rm result.txt
 
python demo.py

mv /home/medialab/miniconda3/bin/Lifting-from-the-Deep-release-master-1/applications/result.txt /home/medialab/miniconda3/bin/unity3d_4/result.txt

./unity3d_4.x86_64

cd /home/medialab/miniconda3/bin/unity3d_4/SaveJPGs

ffmpeg -y -r 20 -i %d.jpg -vcodec libx264 new.mp4

mv ./new.mp4 /home/medialab/zwl/new.mp4

cd /home/medialab/zwl/
