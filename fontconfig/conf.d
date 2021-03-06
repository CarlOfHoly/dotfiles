<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>

  <!-- replace Arial, Courier New, Georgia, Times New Roman, Trebuchet MS, Verdana with something else -->

  <match target="pattern">
    <test qual="any" name="family"><string>Arial</string></test>
    <edit name="family" mode="assign" binding="same"><string>Liberation Sans</string></edit>
  </match>
  <match target="pattern">
    <test qual="any" name="family"><string>Helvetica</string></test>
    <edit name="family" mode="assign" binding="same"><string>Liberation Sans</string></edit>
  </match>

  <match target="pattern">
    <test qual="any" name="family"><string>Arial Narrow</string></test>
    <edit name="family" mode="assign" binding="same"><string>Liberation Sans Narrow</string></edit>
  </match>

  <match target="pattern">
    <test qual="any" name="family"><string>Courier New</string></test>
    <edit name="family" mode="assign" binding="same"><string>Liberation Mono</string></edit>
  </match>
  <match target="pattern">
    <test qual="any" name="family"><string>Courier</string></test>
    <edit name="family" mode="assign" binding="same"><string>Liberation Mono</string></edit>
  </match>

  <match target="pattern">
    <test qual="any" name="family"><string>Georgia</string></test>
    <edit name="family" mode="assign" binding="same"><string>Gelasio</string></edit>
  </match>

  <match target="pattern">
    <test qual="any" name="family"><string>Times New Roman</string></test>
    <edit name="family" mode="assign" binding="same"><string>Liberation Serif</string></edit>
  </match>
  <match target="pattern">
    <test qual="any" name="family"><string>Times</string></test>
    <edit name="family" mode="assign" binding="same"><string>Liberation Serif</string></edit>
  </match>

  <match target="pattern">
    <test qual="any" name="family"><string>Trebuchet MS</string></test>
    <edit name="family" mode="assign" binding="same"><string>Noto Sans</string></edit>
  </match>

  <match target="pattern">
    <test qual="any" name="family"><string>Verdana</string></test>
    <edit name="family" mode="assign" binding="same"><string>DejaVu Sans</string></edit>
  </match>
  
</fontconfig> 
