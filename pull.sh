for d in $(dir); do
        cd $d;
        echo "diretorio $d";
#       git config --local http.sslVerify false;
#       git config --global credential.helper 'cache --timeout=3600';
        git pull;
        cd ..;
done

