/**
 * Icon shim for embedded builds: re-exports lucide-react, replacing icons that have a Blender equivalent with
 * Blender's icon (drawn as a CSS mask in the current text color). vite.embed.config.ts resolves every
 * `lucide-react` import in the app to this module, so components stay unchanged.
 *
 * Blender's icons are GPL and are not part of this repository: the host serves them and passes their base URL to
 * setIconBase(). Without a base, every icon renders as Lucide.
 */
import { forwardRef, type ComponentType, type CSSProperties } from 'react';
import * as Lucide from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export * from 'lucide-react';

let iconBase: string | null = null;
/** Directory URL holding Blender's icons as `<name>.svg` (Blender's icons_svg file names). */
export function setIconBase(url: string | null): void {
  iconBase = url ? url.replace(/\/+$/, '') : null;
}

type IconProps = LucideProps;

function blender(name: string, Fallback: ComponentType<IconProps & { ref?: unknown }>) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(function BlenderIcon(props, ref) {
    if (!iconBase) return <Fallback {...props} ref={ref} />;
    const { className, size, style, color, strokeWidth: _strokeWidth, absoluteStrokeWidth: _absolute, ...rest } = props;
    const url = `url("${iconBase}/${name}.svg")`;
    const css: CSSProperties = { maskImage: url, WebkitMaskImage: url };
    if (size != null) { css.width = size; css.height = size; }
    if (color) css.color = color;
    return (
      <span
        {...(rest as Record<string, unknown>)}
        ref={ref as never}
        aria-hidden="true"
        data-blender-icon={name}
        className={className ? `kc-bl-icon ${className}` : 'kc-bl-icon'}
        style={{ ...css, ...style }}
      />
    );
  });
  Icon.displayName = `BlenderIcon(${name})`;
  return Icon;
}

// Lucide name -> Blender icon. Only clear equivalents; everything else (shapes, AI, scopes Blender lacks) stays Lucide.
export const Trash2 = blender('trash', Lucide.Trash2);
export const Eye = blender('hide_off', Lucide.Eye);
export const EyeOff = blender('hide_on', Lucide.EyeOff);
export const X = blender('x', Lucide.X);
export const Plus = blender('add', Lucide.Plus);
export const Minus = blender('remove', Lucide.Minus);
export const Copy = blender('duplicate', Lucide.Copy);
export const ClipboardPaste = blender('pastedown', Lucide.ClipboardPaste);
export const Play = blender('play', Lucide.Play);
export const Pause = blender('pause', Lucide.Pause);
export const SkipForward = blender('ff', Lucide.SkipForward);
export const SkipBack = blender('rew', Lucide.SkipBack);
export const Lock = blender('locked', Lucide.Lock);
export const Unlock = blender('unlocked', Lucide.Unlock);
export const Link2 = blender('linked', Lucide.Link2);
export const Link2Off = blender('unlinked', Lucide.Link2Off);
export const Info = blender('info', Lucide.Info);
export const Settings = blender('preferences', Lucide.Settings);
export const Settings2 = blender('preferences', Lucide.Settings2);
export const Film = blender('file_movie', Lucide.Film);
export const Video = blender('file_movie', Lucide.Video);
export const Image = blender('image_data', Lucide.Image);
export const FileAudio = blender('file_sound', Lucide.FileAudio);
export const Music = blender('sound', Lucide.Music);
export const Volume2 = blender('outliner_data_speaker', Lucide.Volume2);
export const VolumeX = blender('mute_ipo_on', Lucide.VolumeX);
export const Type = blender('font_data', Lucide.Type);
export const FileType = blender('file_font', Lucide.FileType);
export const ZoomIn = blender('zoom_in', Lucide.ZoomIn);
export const ZoomOut = blender('zoom_out', Lucide.ZoomOut);
export const Maximize2 = blender('fullscreen_enter', Lucide.Maximize2);
export const Minimize2 = blender('fullscreen_exit', Lucide.Minimize2);
export const MousePointer2 = blender('restrict_select_off', Lucide.MousePointer2);
export const Search = blender('viewzoom', Lucide.Search);
export const Filter = blender('filter', Lucide.Filter);
export const SortAsc = blender('sortalpha', Lucide.SortAsc);
export const Folder = blender('file_folder', Lucide.Folder);
export const FolderOpen = blender('file_folder', Lucide.FolderOpen);
export const Upload = blender('import', Lucide.Upload);
export const Download = blender('export', Lucide.Download);
export const HardDrive = blender('disk_drive', Lucide.HardDrive);
export const Flag = blender('marker_hlt', Lucide.Flag);
export const MapPin = blender('marker', Lucide.MapPin);
export const Clock = blender('time', Lucide.Clock);
export const Timer = blender('time', Lucide.Timer);
export const Repeat = blender('loop_forwards', Lucide.Repeat);
export const RotateCcw = blender('loop_back', Lucide.RotateCcw);
export const RefreshCw = blender('file_refresh', Lucide.RefreshCw);
export const AlertTriangle = blender('error', Lucide.AlertTriangle);
export const XCircle = blender('cancel', Lucide.XCircle);
export const Check = blender('checkmark', Lucide.Check);
export const Diamond = blender('keyframe', Lucide.Diamond);
export const Magnet = blender('snap_on', Lucide.Magnet);
export const Snowflake = blender('freeze', Lucide.Snowflake);
export const Gauge = blender('mod_time', Lucide.Gauge);
export const Activity = blender('seq_luma_waveform', Lucide.Activity);
export const Layers = blender('renderlayers', Lucide.Layers);
export const Grid3x3 = blender('grid', Lucide.Grid3x3);
export const LineChart = blender('graph', Lucide.LineChart);
export const Camera = blender('camera_data', Lucide.Camera);
export const Save = blender('file_tick', Lucide.Save);
export const ChevronDown = blender('tria_down', Lucide.ChevronDown);
export const ChevronUp = blender('tria_up', Lucide.ChevronUp);
export const ChevronLeft = blender('tria_left', Lucide.ChevronLeft);
export const ChevronRight = blender('tria_right', Lucide.ChevronRight);
