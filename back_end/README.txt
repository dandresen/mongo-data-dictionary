Download MongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
Download an Anaconda distro (I use miniconda): https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html
Conda cheatsheet: https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf
README for general setup for the Python Environment and MongoDB database for the 
data dictionary demo.

The script is written using Jupyter.

-- created a .bat file with the command below to start the mongo database
START C:\"Program Files\MongoDB\Server\4.4\bin\mongod.exe"

# Setup Python Environment:
-- Create a new environmet: $conda create --name data-dict python=3.8.10
-- Python version and conda version (used miniconda in the example)
(data-dict) C:\Users\DANDR1-C>python --version
Python 3.8.10

(data-dict) C:\Users\DANDR1-C>conda --version
conda 4.9.2


-- Python packages - did these three installs 
-- As of 2/28/22, the versions do not matter. Can get version from list below
	- $conda install -c esri arcgis
	- $conda install -c anaconda urllib3
	- $conda install -c anaconda pymongo
	
(data-dict) C:\Users\DANDR1-C>conda list
# packages in environment at C:\Users\DANDR1-C\Miniconda3\envs\data-dict:
#
# Name                    Version                   Build  Channel
anyio                     2.2.0            py38haa95532_2
arcgis                    1.8.5                 py38_1783    esri
argon2-cffi               20.1.0           py38h2bbff1b_1
attrs                     21.2.0             pyhd3eb1b0_0
babel                     2.9.1              pyhd3eb1b0_0
backcall                  0.2.0              pyhd3eb1b0_0
blas                      1.0                         mkl
bleach                    3.3.0              pyhd3eb1b0_0
blinker                   1.4              py38haa95532_0
brotlipy                  0.7.0           py38h2bbff1b_1003
ca-certificates           2021.5.25            haa95532_1
certifi                   2021.5.30        py38haa95532_0
cffi                      1.14.5           py38hcd4344a_0
chardet                   4.0.0           py38haa95532_1003
colorama                  0.4.4              pyhd3eb1b0_0
cryptography              2.8                      py38_0    esri
cycler                    0.10.0                   py38_0
decorator                 5.0.9              pyhd3eb1b0_0
defusedxml                0.7.1              pyhd3eb1b0_0
dnspython                 2.0.0                    pypi_0    pypi
entrypoints               0.3                      py38_0
freetype                  2.10.1                   vc14_0  [vc14]  esri
icu                       58.2                 ha925a31_3
idna                      2.10               pyhd3eb1b0_0
importlib-metadata        3.10.0           py38haa95532_0
importlib_metadata        3.10.0               hd3eb1b0_0
intel-openmp              2021.2.0           haa95532_616
ipykernel                 5.1.1                    py38_0    esri
ipython                   7.21.0                   py38_0    esri
ipython_genutils          0.2.0              pyhd3eb1b0_1
ipywidgets                7.6.3              pyhd3eb1b0_1
jedi                      0.18.0                   py38_0    esri
jinja2                    3.0.1              pyhd3eb1b0_0
jpeg                      9d                            0    esri
json5                     0.9.6              pyhd3eb1b0_0
jsonschema                3.2.0                      py_2
jupyter-packaging         0.7.12             pyhd3eb1b0_0
jupyter_client            6.1.7                      py_0    esri
jupyter_core              4.6.3                    py38_2    esri
jupyter_server            1.4.1            py38haa95532_0
jupyterlab                3.0.14             pyhd3eb1b0_1
jupyterlab_server         2.4.0              pyhd3eb1b0_0
jupyterlab_widgets        1.0.0              pyhd3eb1b0_1
keyring                   21.4.0                   py38_0    esri
kiwisolver                1.3.1            py38hd77b12b_0
lerc                      2.2                        py_0    esri
libpng                    1.6.37               h2a8f88b_0
libsodium                 1.0.18                        1    esri
markupsafe                2.0.1            py38h2bbff1b_0
matplotlib                3.2.2                         0
matplotlib-base           3.2.2            py38h64f37c6_0
mistune                   0.8.4           py38he774522_1000
mkl                       2020.2                      256
mkl-service               2.3.0            py38h196d8e1_0
mkl_fft                   1.3.0            py38h46781fe_0
mkl_random                1.2.0                    py38_0    esri
nbclassic                 0.2.6              pyhd3eb1b0_0
nbconvert                 5.6.1                    py38_0    esri
nbformat                  5.0.7                      py_1    esri
notebook                  6.1.4                    py38_1    esri
ntlm-auth                 1.4.0                      py_0    esri
numpy                     1.19.2           py38hadc3359_0
numpy-base                1.19.2           py38ha3acd2a_0
oauthlib                  3.1.0                      py_0
openssl                   1.1.1k               h2bbff1b_0
packaging                 20.9               pyhd3eb1b0_0
pandas                    1.2.4            py38hd77b12b_0
pandocfilters             1.4.3            py38haa95532_1
parso                     0.8.2              pyhd3eb1b0_0
pickleshare               0.7.5           pyhd3eb1b0_1003
pip                       21.1.2           py38haa95532_0
prometheus_client         0.8.0                      py_0    esri
prompt_toolkit            3.0.5                      py_0    esri
pycparser                 2.20                       py_2
pygments                  2.7.0                      py_0    esri
pyjwt                     2.1.0            py38haa95532_0
pymongo                   3.11.4           py38hd77b12b_0
pyopenssl                 20.0.1             pyhd3eb1b0_1
pyparsing                 2.4.7              pyhd3eb1b0_0
pyqt                      5.9.2            py38ha925a31_4
pyrsistent                0.17.3           py38he774522_0
pyshp                     2.1.3              pyhd3eb1b0_0
pysocks                   1.7.1            py38haa95532_0
python                    3.8.10               hdbf39b2_7
python-certifi-win32      1.2                      py38_0    esri
python-dateutil           2.8.1              pyhd3eb1b0_0
pytz                      2020.1                   py38_0    esri
pywin32                   227              py38he774522_1
pywin32-ctypes            0.2.0                    py38_0    esri
pywin32-security          228                      py38_3    esri
pywinpty                  0.5.7                    py38_0    esri
pyzmq                     19.0.2                   py38_1    esri
qt                        5.9.7            vc14h73c81de_0
requests                  2.25.1             pyhd3eb1b0_0
requests-kerberos         0.12.0                        0    esri
requests-negotiate-sspi   0.5.2                    py38_1    esri
requests-oauthlib         1.3.0                      py_0
requests-toolbelt         0.9.1                      py_0
requests_ntlm             1.1.0                      py_0    esri
send2trash                1.5.0              pyhd3eb1b0_1
setuptools                52.0.0           py38haa95532_0
sip                       4.19.13          py38ha925a31_0
six                       1.15.0                     py_0    esri
sniffio                   1.2.0            py38haa95532_1
sqlite                    3.36.0               h2bbff1b_0
terminado                 0.9.4            py38haa95532_0
testpath                  0.5.0              pyhd3eb1b0_0
tornado                   6.1              py38h2bbff1b_0
traitlets                 5.0.5              pyhd3eb1b0_0
ujson                     4.0.2            py38hd77b12b_0
urllib3                   1.26.4             pyhd3eb1b0_0
vc                        14.2                 h21ff451_1
vs2015_runtime            14.27.29016          h5e58377_2
wcwidth                   0.2.5                      py_0
webencodings              0.5.1                    py38_1
wheel                     0.36.2             pyhd3eb1b0_0
widgetsnbextension        3.5.1                    py38_0
win_inet_pton             1.1.0            py38haa95532_0
wincertstore              0.2                      py38_0
winkerberos               0.7.0                    py38_0    esri
winpty                    0.4.3                         4
wrapt                     1.12.1           py38he774522_1
zeromq                    4.3.2                         2    esri
zipp                      3.4.1              pyhd3eb1b0_0
zlib                      1.2.11               h62dcd97_4