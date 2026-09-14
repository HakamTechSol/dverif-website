Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("E:\Office Projects\dverif-website\public\assets\logo-light.png")
Write-Host "Width: $($img.Width) Height: $($img.Height)"
$bmp = New-Object System.Drawing.Bitmap($img)
$firstNonTransparent = -1
for ($x = 0; $x -lt $img.Width; $x++) {
    for ($y = 0; $y -lt $img.Height; $y++) {
        if ($bmp.GetPixel($x, $y).A -gt 10) {
            $firstNonTransparent = $x
            break
        }
    }
    if ($firstNonTransparent -ge 0) { break }
}
$lastNonTransparent = -1
for ($x = $img.Width - 1; $x -ge 0; $x--) {
    for ($y = 0; $y -lt $img.Height; $y++) {
        if ($bmp.GetPixel($x, $y).A -gt 10) {
            $lastNonTransparent = $x
            break
        }
    }
    if ($lastNonTransparent -ge 0) { break }
}
Write-Host "First non-transparent pixel X: $firstNonTransparent"
Write-Host "Last non-transparent pixel X: $lastNonTransparent"
Write-Host "Visible width: $($lastNonTransparent - $firstNonTransparent + 1)"
Write-Host "Left transparent padding: $firstNonTransparent px out of $($img.Width) px"
