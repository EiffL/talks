---
title: "Off the beaten path: Gaia reveals GD-1 stars outside of the main stream"
subtitle: An executable edition of Price-Whelan & Bonaca (2018), rebuilt as a Lightcone project
---

% This page is the text of arXiv:1805.00425v2 (Price-Whelan & Bonaca 2018,
% ApJL 863, L20), lightly edited so that every figure and every quoted
% measurement is pulled live from the outputs materialised by `lc` rather than
% typed in. Sentences that state a methodological choice point at the ASTRA
% decision that encodes it; where the Letter's prose and its figure-generating
% code disagree, a reproduction note says which one the baseline follows.

## Abstract

Tidally-disrupted globular clusters are transformed into thin, dynamically-cold
streams of stars that are extremely valuable tracers of the large- and
small-scale distribution of mass in the Galaxy.
Using data from the *Gaia* second data release combined with *Pan-STARRS*
photometry, we present a sample of highly-probable members of the longest cold
stream in the Milky Way, GD-1.
The resulting map of GD-1: (1) extends the apparent length of the stream by
$20^\circ$, (2) reveals plausible locations for the progenitor, (3) detects
high-contrast gaps along the stream, and (4) indicates the existence of stream
members perturbed off the main stream track.
These discoveries are only possible because of the exquisite astrometry from
*Gaia*, which permits a clean separation of the stream from Milky Way stars.
The additional length and a proper treatment of the progenitor will aid in
dynamical modeling of GD-1 for mapping the large-scale dark matter
distribution.
The complex morphology of the stream points to a turbulent history; detailed
phase-space properties of the perturbed stream members could potentially
constrain dark matter substructure in the Milky Way.

:::{note} About this edition
This page keeps the text of the Letter, but the five figures and every quoted
measurement are regenerated from the {astra}`inputs.gd1_catalogue` by the
analysis declared in `astra.yaml` and materialised with `lc`. The choices the
Letter makes are recorded as decisions in `astra.yaml`; hovering a reference
shows its provenance. The baseline universe follows the authors' figure-generating code
wherever the code and the prose disagree, and each such place carries a
reproduction note.
:::

## 1. Introduction

Stellar streams are formed during the tidal disruption of stellar systems by
the gravitational field of their host galaxy.
The phase-space density and mean track of stars in streams therefore {astra}`encode information about the underlying distribution mass on galactic scales <prior_insights.bh18_kinematics_essential_for_potential>` (see also {cite:alp}`Johnston:1999`).
Dynamically-cold stellar streams formed from disrupted globular clusters can
also {astra}`retain imprints on their phase-space density from encounters with a massive perturber for long times <prior_insights.yoon2011_subhalo_gaps_persist>`.
In this sense, streams represent one of the most promising directions for
testing the existence of small-scale dark matter sub-halos, predicted by
standard $\Lambda$ Cold Dark Matter ($\Lambda$CDM) theory
{cite:p}`Erkal:2015,Sanders:2016,Bovy:2017`.

Over 30 candidate stellar streams have been discovered in the Milky Way
{cite:p}`Grillmair:2016,Newberg:2016,Malhan:2018`.
The GD-1 stream is the most prominent among the thin streams, discovered as an
overdensity of faint blue stars in the SDSS photometry {cite:p}`Grillmair:2006`.
Initially detected to span $\sim 60^\circ$ on the sky, the physical length of
GD-1 at a distance of $\sim 7$–$10~\textrm{kpc}$ is at least
$\sim 15~\textrm{kpc}$.
No remnant progenitor for the stream has been found, but its width
($\sigma \approx 12'$), metallicity ($[\textrm{Fe}/\textrm{H}] \approx -1.4$),
and estimated stellar mass ($M \approx 2 \times 10^4~\textrm{M}_\odot$) imply
that {astra}`GD-1 is a disrupted globular cluster <prior_insights.koposov2010_globular_cluster_origin>`.

Its length and location in the Galactic halo (pericentric distance
$r_\textrm{peri} \sim 13~\textrm{kpc}$) make GD-1 an ideal object for
constraining dark matter properties in the inner Milky Way.
Both from fitting orbits to binned phase-space measurements along the GD-1
stream {cite:p}`Koposov:2010` and from modeling the stream track in phase-space
coordinates {cite:p}`Bowden:2015,Bovy:2016`, it appears that {astra}`the dark matter distribution within <prior_insights.koposov2010_spherical_halo>` $\approx 20\,\textrm{kpc}$ is close to spherical, consistent
with findings from simulated Milky Way-like galaxies {cite:p}`Zhu:2016`.

Its implied old dynamical age, combined with its orbital properties, makes GD-1
a prime stream to also study the small scale structure of dark matter.
While density variations in streams can be induced from interactions with
giant molecular clouds {cite:p}`Amorisco:2016` or resonant encounters with the
bar {cite:p}`Pearson:2017`, these baryonic effects are unlikely to affect GD-1
because of its large pericentric distance and retrograde orbit with respect to
the Galactic bar.
Therefore, observed density variations in the GD-1 stream could instead be an
indication of past interactions with dark matter subhalos (e.g.,
{cite:alp}`Ngan:2014`).
{astra}`Erkal et al. (2016) <prior_insights.erkal2016_gd1_gap_count>` predict that {astra}`a 4 Gyr old GD-1-like stream in a Milky Way-like galaxy could have up to one significant, wide <prior_insights.erkal2016_gd1_gap_count>`
($\approx 5$–$7^\circ$) gap caused by an interaction with a
$10^6$–$10^7~\textrm{M}_\odot$ subhalo.
A definitive ruling on the presence of dark matter subhalos in this mass regime
would directly inform the nature of dark matter (e.g., {cite:alp}`Bullock:2017`).

Photometric studies of GD-1 revealed the presence of {astra}`density variations and gaps along the stream <prior_insights.gd1_gap_count_carlberg_grillmair_2013>`, as well as {astra}`wiggles in the main stream track <prior_insights.deboer2018_gd1_wiggles_around_stream_track>`.
However, purely photometric studies of streams suffer from contamination of
the Milky Way foreground, which, on small scales, could partially account for
density inhomogeneities reported along cold streams (e.g.,
{cite:alp}`Ibata:2016`).
In this *Letter*, we improve upon the selection of likely GD-1 members by using
astrometric data from the *Gaia* mission, combined with precise photometry from
the *Pan-STARRS* survey ([Section 2](#sec-data)).
These data enable us to measure density variations along GD-1 to an
unprecedented precision ([Section 3.1](#sec-res-global)), and detect clear
signatures of stream stars beyond the main track
([Section 3.2](#sec-res-gap)).
Implications of this revolutionary remapping of GD-1 are discussed in
[Section 4](#sec-discussion).

(sec-data)=
## 2. Data

We use astrometric data from the *Gaia* mission {cite:p}`Prusti:2016`, data
release 2 {cite:p}`Gaia-Collaboration:2018,Lindegren:2018`, and photometry from
the *Pan-STARRS* survey, data release 1 {cite:p}`Chambers:2016` to select
high-confidence members of the GD-1 stream.

We retrieve data along the previously-identified track of the GD-1 stream from
the *Gaia* science archive[^gaia-archive] by selecting sources with small
parallax, $\varpi < 1~\textrm{mas}$ in fields along the GD-1 stream.
We convert the equatorial sky coordinates and proper motions to the {astra}`GD-1 coordinate system <prior_insights.koposov2010_coordinate_system>` ($\phi_1, \phi_2$), and correct
the proper motions for solar reflex motion by assuming that stars at a given
stream longitude, $\phi_1$, have a distance given by
$d(\phi_1) = (0.05 \, \phi_1 + 10)~\textrm{kpc}$; we assume a solar velocity
$\boldsymbol{v}_\odot = (11.1, 232.24, 7.25)~\textrm{km}~\textrm{s}^{-1}$
— the {astra}`decisions.solar_motion` decision, which adds the {astra}`Schönrich et al. peculiar motion <prior_insights.solar_motion_schonrich_values>` to the {astra}`220 km/s circular speed of the galpy convention <prior_insights.galpy_solar_motion_convention>`.
In detail, we project the solar velocity vector onto the tangent space at each
star's sky position, convert to angular motion using the assumed distance, and
subtract the solar component from each star's proper motion (this is done
using the *astropy* {cite:p}`astropy` and *gala* {cite:p}`gala` packages).
{ref}`fig-selection` (top right) shows stars with $|\phi_2| < 1^\circ$ in
solar-reflex-corrected proper motion components in the GD-1 system,
$\mu_{\phi_1, \odot}$ and $\mu_{\phi_2, \odot}$.
GD-1 members are visible as the overdensity around
$(\mu_{\phi_1, \odot}, \mu_{\phi_2, \odot}) \approx (-8, 0)~\textrm{mas}~\textrm{yr}^{-1}$.

[^gaia-archive]: <https://gea.esac.esa.int/>. The released catalogue used here,
    {astra}`inputs.gd1_catalogue`, already carries the parallax selection, the
    GD-1 coordinates, the reflex-corrected proper motions and the de-reddened
    *Pan-STARRS* photometry; the selection masks it also ships are not used.

As a first selection of GD-1 member stars, we choose stars that lie in a
polygon in proper motions (orange shaded polygon in top right panel of
{ref}`fig-selection`; approximately bounded by the rectangle
$-9 < \mu_{\phi_1, \odot} < -4.5~\textrm{mas}~\textrm{yr}^{-1}$ and
$-1.7 < \mu_{\phi_2, \odot} < 1~\textrm{mas}~\textrm{yr}^{-1}$) — the
{astra}`decisions.proper_motion_selection` decision.
{ref}`fig-selection` (top left) shows all stars that pass the selection,
plotted in the GD-1 coordinate system.
The stream is already identifiable as the overdensity of stars around
$\phi_2 = 0$ between longitudes $-60^\circ \lesssim \phi_1 \lesssim 0^\circ$.

:::{astra} outputs.figure1_selection
:label: fig-selection
:caption: On-sky positions of likely GD-1 members in the GD-1 coordinate system. GD-1 is apparent as an overdensity in negative proper motions (top right panel, orange box), so selecting on proper motion already reveals the stream in positions of individual stars (top left). The stream also stands out in the color-magnitude diagram (bottom right) as older and more metal poor than the background. Selecting the main sequence of GD-1 (orange, shaded region in bottom right) along with proper motion cuts unveils the stream in unprecedented detail (bottom left).
:::

To improve the contrast of the stream over the background, we cross-match the
sample to the *Pan-STARRS* photometric catalog.
{ref}`fig-selection` (bottom right) shows the proper-motion-selected
candidate stream stars within $\left|\phi_2\right| < 1^\circ$ in a
*Pan-STARRS* color-magnitude diagram (CMD) {astra}`de-reddened <prior_insights.ps1_g_i_extinction_coefficients>`.
The GD-1 stellar population stands out from the Milky Way foreground, and is
well matched by a 12 Gyr, $[\textrm{Fe}/\textrm{H}] = -1.35$ {astra}`MIST isochrone <prior_insights.mist_bcs_from_atlas12_synthe_atmospheres>` at
a distance of $7.8\,\textrm{kpc}$ (red line in {ref}`fig-selection`; see also
{cite:alp}`Dotter:2016`; {cite:alp}`Paxton:2011`).
We use this isochrone to generate a polygonal selection in de-reddened $g-i$
color and apparent $g$-band magnitude (shaded region in the bottom right panel
of {ref}`fig-selection`).

:::{admonition} Reproduction note — the isochrone
:class: tip dropdown
The isochrone is the independently regenerated {astra}`inputs.mist_isochrone`.
The Letter used MIST v1.1; the interpolator now serves v1.2, whose
*Pan-STARRS* colors differ by a small zero point, so the
{astra}`decisions.mist_color_calibration` decision records whether the
period-correct offset is applied before the polygon is built.
:::

{ref}`fig-selection` (bottom left) shows the final sample of candidate stream
members after selecting on both proper motion and photometry — 
{astra:value col=value where="quantity=selection.pm_and_cmd_selected" sig=4}`outputs.results_summary`
stars out of the
{astra:value col=value where="quantity=selection.catalogue_rows" sig=7}`outputs.results_summary`
in the parallax-selected region.
The GD-1 stream is clearly visible as an overdensity of *individual* stars
(the positions are not binned); this is the most pure view of the stream to
date.
This increased contrast shows that the stream extends at least another
$20^\circ$ to negative longitudes.
Furthermore, the stream reaches its highest surface density where it is the
narrowest ($\phi_1 \sim -13^\circ$), which may be the location of its elusive
and fully-disrupted progenitor.
At this location, between $\phi_1 \in (-18, -10)^\circ$, we find that the mean
equatorial sky position of the stream stars is $(\alpha, \delta) = ($
{astra:value col=value where="quantity=selection.progenitor_region.mean_ra_deg" sig=5}`outputs.results_summary`,
{astra:value col=value where="quantity=selection.progenitor_region.mean_dec_deg" sig=4}`outputs.results_summary`$)^\circ$
and the mean proper motion is $(\mu_\alpha \, \cos\delta, \mu_\delta) = ($
{astra:value col=value where="quantity=selection.progenitor_region.mean_pmra_masyr" sig=3}`outputs.results_summary`,
{astra:value col=value where="quantity=selection.progenitor_region.mean_pmdec_masyr" sig=3}`outputs.results_summary`$)
\pm$ {astra:value col=value where="quantity=selection.progenitor_region.mean_pmra_error_masyr" sig=1}`outputs.results_summary`
$\textrm{mas}~\textrm{yr}^{-1}$, taking into account the covariance matrix for
proper motions provided with the *Gaia* data ({astra}`findings.progenitor_region_kinematics_reproduced`).
The full data for the GD-1 region along with selection masks are available
through Zenodo ([10.5281/zenodo.1295543](https://doi.org/10.5281/zenodo.1295543))[^github].

[^github]: See also <https://github.com/adrn/gd1-dr2>.

Several of the under-densities and gaps hinted at from photometric selection
{cite:p}`Carlberg:2013,DeBoer:2018` appear as striking features in this
significantly cleaner map of the GD-1 stream.
Finally, at least two new features are visible near the stream: (1) "the
spur," stars above the main stream track (in $\phi_2$), and (2) "the blob,"
stars below the main stream track, both highlighted in {ref}`fig-selection`.

(sec-results)=
## 3. Results

(sec-res-global)=
### 3.1. Properties of the main GD-1 track

To study the global properties of the stream as a function of stream
longitude, we extract stream stars around a fourth-order polynomial model
({astra}`decisions.track_polynomial`) for the stream latitude, $\phi_2$, as a
function of stream longitude, $\phi_1$.
We find the stream midpoints by computing the median $\phi_2$ in $4^\circ$
windows shifted by $2^\circ$ along $\phi_1$
({astra}`decisions.track_fit_width`), then fit a parabola to the median
positions to find $\phi_{2, \textrm{track}}(\phi_1)$.
We define the stream region as
$\left| \phi_2 - \phi_{2, \textrm{track}}(\phi_1) \right| < 0.75^\circ$
({astra}`decisions.stream_boundary`).
{ref}`fig-track-and-model`, panel (a), shows the high-confidence stream stars
(same as {ref}`fig-selection`), and the two curved lines (blue) show the
upper and lower boundary of the stream region.

:::{admonition} Reproduction note — the stream region and the windows
:class: tip dropdown
The Letter's text quotes a $0.75^\circ$ half-width and $3^\circ$ measurement
windows, but the notebooks that produced its figures measure within
$1.5^\circ$ of the track, plot the $+1.8^\circ/-1.5^\circ$ band, and use
$4^\circ$ windows stepped by $2^\circ$. Both readings are options of
{astra}`decisions.stream_boundary` and {astra}`decisions.track_binning`; the
baseline follows the figure code, which is what reproduces the published
panels. The sparse endpoint bins of the track fit follow the notebook's
documented adjustments ({astra}`decisions.track_source`).
:::

We extract properties of the stream from the region defined above as a
function of $\phi_1$ by computing median stream properties in (overlapping)
$3^\circ$ windows ({astra}`decisions.track_binning`).
Panels (c)–(e) in {ref}`fig-track-and-model` show the background-subtracted
stream surface density and median proper motion components extracted in this
way (dark lines), with the associated empirical scatters (shaded regions).
We estimate the local background surface density as an average of areas north
and south of the bounded stream region ({astra}`decisions.background_regions`).
The median proper motion profiles along the stream (panels (d)–(e)) are
consistent with {astra}`previous mean proper motion measurements <prior_insights.koposov2010_proper_motions>`, but here the proper motion gradient is resolved for
individual stars (see, e.g., elongated overdensity in upper right panel of
{ref}`fig-selection`).
The measurements themselves are tabulated in {astra}`outputs.stream_track_table`.

:::{astra} outputs.figure2_track_observables
:label: fig-track-and-model
:caption: Median stream properties computed from the proper motion and CMD filtered GD-1 stars, and the same for a toy model for the stream track. *Panel (a)*: Sky positions of candidate GD-1 stars. Lines show a 4th-order polynomial fit to the median stream track offset by the adopted half-width; the enclosed region is adopted as the nominal stream region. *Panels (b) and (c)*: Sky positions of simulated star particles from mock stream models of the GD-1 stream in which the progenitor is currently disrupting (toy model 1, panel b) or the progenitor fully disrupted 500 Myr ago and results in the observed under-density at $\phi_1 \sim -20^\circ$ (toy model 2, panel c). *Panel (d)*: Background-subtracted surface-density estimates computed in successive, overlapping windows for both GD-1 data and the model stream. *Panel (e)*: Median proper motion along the stream computed in the same bins as previous panel (not solar reflex corrected). The two toy models have consistent median proper motions (overlapping dashed lines). *Panel (f)*: Same as Panel (d), but for proper motion in stream latitude.
:::

Clear density variations, also apparent in the 2D positions of the sources,
manifest as sharp features in the surface density estimates along the stream.
We have verified that these do not correspond to features in dust extinction
nor are they caused by completeness variations in the *Gaia* scanning pattern:
the visible portions of the GD-1 stream are located at high Galactic latitudes
($b > 20^\circ$), and a fraction
{astra:value col=value where="quantity=selection.visibility_periods_ge_8_fraction" sig=2}`outputs.results_summary`
of our sample has {astra}`at least 8 <prior_insights.gaia_dr2_visibility_periods_recommendation>` *Gaia* visibility periods and satisfy a selection
on the {astra}`unit weight error <prior_insights.gaia_dr2_unit_weight_error_cut_eq_c1>` (their Equation C.1),
promising a robust astrometric solution.
In detail, we have compared the fraction of good solutions in the region near
the spur, in the region between the stream and the spur, and in the stream at
the same range of longitudes.
We consider the longitude range $-35^\circ < \phi_1 < -30^\circ$, and 3 ranges
in $\phi_2$: $(-0.4, 0.4)^\circ$, $(0.4, 0.9)^\circ$, $(0.9, 1.7)^\circ$ for
the stream, region between stream and spur, and spur, respectively.
In these 3 regions, we find fractions
{astra:value col=value where="quantity=selection.unit_weight_good_fractions.stream" sig=2}`outputs.results_summary`,
{astra:value col=value where="quantity=selection.unit_weight_good_fractions.between" sig=2}`outputs.results_summary`,
{astra:value col=value where="quantity=selection.unit_weight_good_fractions.spur" sig=2}`outputs.results_summary`
of the stars with 5-parameter solutions pass the unit weight error criteria
(recomputed from the {astra}`inputs.gaia_unit_weight_query`; {astra}`findings.unit_weight_completeness_uniform`).
Small-scale density variations, however, especially apparent between
$-80^\circ < \phi_1 < -50^\circ$, are a consequence of the *Gaia* scanning
pattern.

The observed density variations are therefore likely real morphological
changes along the GD-1 stream.
The deep under-densities we see from the kinematically-cleaned sample
correspond to {astra}`previously reported gaps in the stream <prior_insights.deboer2018_gd1_underdensities_at_phi1_minus40_and_minus20>`
({cite:alp}`Carlberg:2013`).
There is also a well-defined, sharp overdensity in the surface density profile
close to $\phi_1 \approx$
{astra:value col=value where="quantity=stream.density_peak_phi1_deg" sig=3}`outputs.results_summary`$^\circ$
with roughly symmetric under-densities on either side: this is suggestive of a
{astra}`progenitor system in the final stages of dissolution <prior_insights.escaper_mass_rises_near_dissolution>`
({astra}`findings.density_peak_where_stream_is_narrowest`).
This region is also the thinnest part of the stream, as would be expected for
recently stripped material; we defer a robust analysis of variations in the
stream width to future work.
With present data, however, we cannot rule out a scenario in which the
progenitor system disrupted longer ago and resulted in a gap at
$\phi_1 \approx -20^\circ$ (see {ref}`fig-track-and-model` and, e.g.,
{cite:alp}`DeBoer:2018`).

We compare the measured stream properties to a simple model for the
phase-space density of the stream, generated by simulating the orbital
evolution of globular cluster stars once they are tidally stripped from the
progenitor.
We use the {astra}`"particle-spray" stream generation method <prior_insights.spray_release_near_lagrange_points>` and
assume a {astra}`uniform mass-loss history <prior_insights.continuous_evaporation_supports_uniform_mass_loss>` to generate the model stream.

:::{astra} outputs.figure3_orbit
:label: fig-orbitfit
:caption: Best-fit orbit in a simple model for the gravitational potential of the Milky Way using *Gaia* proper motions and the filtered stream track. Left panel shows the orbit in Galactocentric cylindrical radius, $R$, and position above the Galactic midplane, $z$; gray line at $z=0$ shows the approximate radius of the disk. Right panel shows the orbit projected onto the midplane in Galactocentric cartesian coordinates, ($x$, $y$). Darker orbit section highlights the stream longitudes over which we clearly see GD-1 stream stars. Note that GD-1 is retrograde with respect to the disk (location and direction of motion of the sun are indicated in the right panel, $\odot$).
:::

To compute initial conditions for the stream model, we fit an orbit to the
observed properties of the stream in a {astra}`fixed Milky Way model similar to galpy's <prior_insights.mwpotential2014_composition>` ({astra}`decisions.galactic_potential`).
We maximize the likelihood of the orbit given sky track and proper motions
from this work, with {astra}`mean distance <prior_insights.koposov2010_distance_gradient>` and {astra}`radial velocities <prior_insights.koposov2010_radial_velocities>` ({astra}`inputs.koposov_distances`,
{astra}`inputs.koposov_velocities`; the integration and optimizer settings are
the {astra}`decisions.orbit_numerics` decision).
The maximum-likelihood solution, at the reference longitude
$\phi_1 = 10^\circ$, places the orbit at a distance of
{astra:value col=value where="quantity=orbit.fit.distance_kpc" sig=3}`outputs.results_summary` kpc
with a radial velocity of
{astra:value col=value where="quantity=orbit.fit.radial_velocity_kms" sig=3}`outputs.results_summary`
$\textrm{km}~\textrm{s}^{-1}$ ({astra}`outputs.orbit_fit`).

{ref}`fig-orbitfit` shows a $1\,\textrm{Gyr}$ segment of the best-fitting
orbit from the procedure outlined above.
The GD-1 stream crosses the midplane at large radius, far from the bulk of the
stellar density: the grey line in the left panel shows the radius that contains
$\approx 90\%$ of the mass, assuming a {astra}`model of the stellar disk <prior_insights.bovy2012_broad_sample_scale_lengths>`.

We present two progenitor configurations which reproduce certain aspects of
the observed GD-1 density variations: the progenitor system is either at
$\phi_1 = -13.5^\circ$, the peak of the observed surface density profile
({astra}`toy model 1 <outputs.toy_stream_1>`), or was fully-disrupted 500 Myr
in the past and the under-density at $\phi_1 = -20^\circ$ represents the
fully-disrupted progenitor ({astra}`toy model 2 <outputs.toy_stream_2>`).
We numerically integrate backwards from these locations for $4~\textrm{Gyr}$,
then forward-generate the model streams, releasing stream particles at each
timestep ({astra}`decisions.stream_cadence`).
We assume an initial progenitor mass of $M = 10^5~\textrm{M}_\odot$, and
linearly decrease the mass of the progenitor until its full disruption at the
present (toy model 1), or at $t = -500~\textrm{Myr}$ (toy model 2)
({astra}`decisions.toy_stream_setup`).
Stream properties computed from the resulting model streams are plotted in
{ref}`fig-track-and-model` as dashed (orange and purple) lines.
The model streams qualitatively match the stream track in all phase-space
dimensions, but have much smoother surface density profiles along the extent
of the stream: the coefficient of variation of the binned density is
{astra:value col=value where="quantity=stream.observed_density_coefficient_of_variation" sig=2}`outputs.results_summary`
for the data against
{astra:value col=value where="quantity=stream.toy_model_density_coefficients_of_variation.0" sig=2}`outputs.results_summary`
and
{astra:value col=value where="quantity=stream.toy_model_density_coefficients_of_variation.1" sig=2}`outputs.results_summary`
for the two models ({astra}`findings.toy_models_smoother_than_data`).
The broadening in the observed stream at negative longitudes is also seen in
the model stream and is expected for older parts of the stream that have
phase-mixed for longer times.
We therefore don't expect that the observed surface density variations can be
fully explained by, e.g., {astra}`epicyclic overdensities <prior_insights.epicyclic_overdensities_in_tidal_tails>`.

:::{admonition} Reproduction note — the toy streams
:class: tip dropdown
The particle-spray realisations depend on a random state the authors did not
record ({astra}`decisions.random_seed`), so the two model streams reproduce the
Letter's in their track and smoothness rather than particle by particle. The
release cut-offs come from the repository history behind the published arrays
(50 and 550 Myr rather than the rounded "present" and 500 Myr of the prose),
and the plotted profile bins the raw particle counts exactly as the figure
notebook does ({astra}`decisions.toy_density_profile`).
:::

(sec-res-gap)=
### 3.2. Off-track features

:::{astra} outputs.figure4_features
:label: fig-features
:caption: Color-magnitude and proper-motion diagrams of fields associated with a spur above GD-1 (top), and fields related to the blob below GD-1 (bottom). Panels on the left show properties in stream fields (darkest rectangles in middle panel), middle panels present spur and blob (medium rectangles), and the right-most panels are control fields on the opposite sides from spur and blob (lightest rectangles). Selection boxes are shown in all CMD and proper-motion panels as shaded regions. Both the spur and the blob fields have more stars in the CMD selection box than the corresponding control fields. Proper motions of these stars follow the distribution of stars in adjacent stream fields, thus confirming the association of these off-track features with GD-1.
:::

Here we test whether the overdensities apparent beyond the main stream track
({ref}`fig-selection`) are truly associated with the GD-1 stream by comparing
color-magnitude diagrams and proper motions of the spur and blob fields to the
stream and background fields.

The central panel of {ref}`fig-features` shows the map of GD-1, with fields of
interest marked in shades of purple for spur-related fields, and shades of
blue for blob-related fields.
In both cases, we analyze the stream region (darkest shade), overdensity off
from the stream (medium shade) and use a field on the opposite side of the
stream from the overdensity as a control (lightest shade).
The $\phi_1$ range is the same for all three fields for a given feature, and
the control and feature fields have the same area (the stream field is smaller
to avoid cross-contamination).

For each of the examined fields, we present the color-magnitude diagram of
stars selected on proper motions (left subpanels) and proper motions of
photometrically selected stars (right subpanels), with spur fields on the top
and blob fields on the bottom of {ref}`fig-features`.
Stars selected from the stream fields show a clear overdensity in the CMD
selection box and are clustered in proper motions.
The two stream fields have a clear relative offset in proper motions, as
expected from the velocity gradients shown in {ref}`fig-track-and-model`.
Furthermore, the main-sequence turn-off of the $\phi_1 \sim -15^\circ$ field
appears to be fainter than the $\phi_1 \sim -35^\circ$, consistent with the
{astra}`distance gradient across the stream <prior_insights.koposov2010_distance_gradient>` measured previously.

The control fields have some stars in both the CMD and proper-motion selection
boxes, but without any significant overdensities in either.
CMDs of the spur and blob fields have more stars in the selection box than
their respective control fields, and the distribution within the box is
qualitatively similar to that of the corresponding stream field, suggesting a
similar distance.
In proper motions, the spur and blob fields also display properties similar to
the adjacent stream fields, with clear overdensities of stars in the selection
box.

To quantify the significance of these features, we construct a statistical
model of the linear density of the filtered sky positions as a function of
$\phi_2$ around each of the features and at a control region.
We select three equal ranges of $\phi_1$ centered on the spur,
$\phi_1 \in (-36, -30)^\circ$, the blob, $\phi_1 \in (-18, -12)^\circ$, and in
between (as a control field), $\phi_1 \in (-51, -45)^\circ$
({astra}`decisions.feature_windows`), and model the one-dimensional density in
$\phi_2$ in each of these regions.
We use a four-component mixture model to represent the density consisting of
a uniform background over the range $\phi_2 \in (-10, 5)^\circ$
({astra}`decisions.mixture_domain`), a two-component Gaussian mixture to
represent the main stream with mean $\mu_{\textrm{s}}$ and variances
$\sigma_{\textrm{s}, 1}^2$ and $\sigma_{\textrm{s}, 2}^2$, and a single
Gaussian for each feature with mean and variance
$(\mu_{\textrm{f}}, \sigma_{\textrm{f}}^2)$.
The full density model given all parameters
$\boldsymbol{\theta} = (\alpha_{\textrm{bg}}, \alpha_{\textrm{s}}, \mu_{\textrm{s}}, \sigma_{\textrm{s}, 1}, \sigma_{\textrm{s}, 2}, \mu_{\textrm{f}}, \sigma_{\textrm{f}})$
is

$$
\begin{split}
p(\phi_2 \,|\, \boldsymbol{\theta}) &=
        \alpha_{\textrm{bg}} \, \mathcal{U}(-10, 5) \\ & \quad +
        \alpha_{\textrm{s}, 1} \, \mathcal{N}(\phi_2 \,|\, \mu_{\textrm{s}}, \sigma_{\textrm{s}, 1}) +
        \alpha_{\textrm{s}, 2} \, \mathcal{N}(\phi_2 \,|\, \mu_{\textrm{s}}, \sigma_{\textrm{s}, 2}) \\ & \quad +
        \alpha_{\textrm{f}} \,
            \mathcal{N}(\phi_2 \,|\, \mu_{\textrm{f}}, \sigma_{\textrm{f}})
\end{split}
$$ (eq-mixture)

where $\alpha_{\textrm{bg}}$ is the fraction of background stars in the field,
$\alpha_{\textrm{s}} = \alpha_{\textrm{s}, 1} + \alpha_{\textrm{s}, 2}$ is the
fraction of stars associated with the mean stream track, and
$\alpha_{\textrm{f}} = (1 - \alpha_{\textrm{bg}} - \alpha_{\textrm{s}})$ is the
fraction of stars associated with either the spur, the blob, or at the
location of the spur/blob in the control field.

:::{admonition} Reproduction note — the background domain
:class: tip dropdown
The uniform background of [](#eq-mixture) spans $(-10, 5)^\circ$ in the
Letter's text, but the likelihood code and the histograms of
{ref}`fig-density-model` use $(-5, 5)^\circ$. Both are options of
{astra}`decisions.mixture_domain`; the baseline follows the code.
:::

We generate posterior samples in the parameters of this model in each
$\phi_1$ range by specifying uniform priors over all parameters except the
variances, for which we use priors that are uniform in the logarithm of the
variance ({astra}`decisions.mixture_prior`).
We use an {astra}`ensemble Markov Chain Monte Carlo (MCMC) sampler <prior_insights.emcee_affine_invariance_few_tuning_parameters>`
to generate posterior samples and run the sampler
with {astra}`64 walkers <prior_insights.emcee_walker_number_recommendation>` for a total of {astra}`4096 steps, discarding the first 2048 samples as "burn-in" <prior_insights.emcee_run_length_autocorrelation_time>` ({astra}`decisions.posterior_sampling`; the chains are the
{astra}`outputs.feature_posteriors`, drawn from the
{astra}`decisions.mcmc_random_seed`).
{ref}`fig-density-model` summarizes the results of this inference: top row
shows histograms of the $\phi_2$ positions of stars in each $\phi_1$ range
(left to right) with maximum a posteriori inferred density over-plotted (black
curve; {astra}`decisions.density_curve_summary`) and bottom row shows marginal
posterior probability distributions for $\alpha_{\textrm{bg}}$,
$\alpha_{\textrm{s}}$, and $\alpha_{\textrm{f}}$ estimated from the posterior
samples for each $\phi_1$ range.
The 15th and 85th percentile values of the feature amplitude in different
fields are
({astra:value col=alpha_f_p15 where="field=spur" sig=2}`outputs.feature_amplitudes_table`,
{astra:value col=alpha_f_p85 where="field=spur" sig=2}`outputs.feature_amplitudes_table`)
(spur),
({astra:value col=alpha_f_p15 where="field=blob" sig=2}`outputs.feature_amplitudes_table`,
{astra:value col=alpha_f_p85 where="field=blob" sig=2}`outputs.feature_amplitudes_table`)
(blob), and
({astra:value col=alpha_f_p15 where="field=control" sig=2}`outputs.feature_amplitudes_table`,
{astra:value col=alpha_f_p85 where="field=control" sig=2}`outputs.feature_amplitudes_table`)
(control); the full set of percentiles is {astra}`outputs.feature_amplitudes_table`.
The posterior samples for the amplitude of each feature mixture component are
consistent with zero in the control field, marginally significant in the blob
field, and significantly inconsistent with the background in the spur field
({astra}`findings.off_track_significance`).

:::{astra} outputs.figure5_density_model
:label: fig-density-model
:caption: *Top row*: Density of stars in $\phi_2$ (grey) and inferred density (black curve) for regions around the spur, blob, and a control field. The model for the density includes components for the stream, background, and a feature overdensity (the spur or the blob), but with amplitudes that are allowed to go to zero (see [Section 3.2](#sec-res-gap) for more details.) *Bottom row*: Inferred posterior probability distributions over the amplitude ($\alpha$) of each component in each field: $\alpha_{\textrm{s}}$ for the stream, $\alpha_{\textrm{bg}}$ for the background, and $\alpha_{\textrm{f}}$ for the feature. In both feature fields, the model prefers an additional component to describe the feature, whereas in the control field the density is consistent with stream + background.
:::

Stars from the spur and the blob are similar to those along the main stream
track in the color-magnitude diagram and in proper motions, which confirms
their likely association to GD-1.
Both the spur and the blob are close to large gaps in the stream, so a
mechanism that displaces stars from their original orbits along the stream to
orbits beyond the stream would explain both sets of features.
Future observations of the full 3-D kinematics combined with detailed
dynamical modeling of the GD-1 system will be able to test this scenario.

(sec-discussion)=
## 4. Discussion

In this work, we map a cold stellar stream in individual stars by combining
precise *Pan-STARRS* photometry with the revolutionary *Gaia* astrometry.
The *Gaia* proper motions were critical for selecting members of the
retrograde GD-1 stream, and this success signals a novel way to find members
of other structures in the Galactic halo.
In what follows, we discuss how this first view of GD-1 in the *Gaia* era is
already transforming what we expect to learn about the Galaxy from streams in
general, and GD-1 in particular.

First, the absence of a clear progenitor has been a long-standing hurdle in
dynamical modeling of GD-1, mostly due to the unknown true extent of the
stream.
Confirming the progenitor location suggested here,
$(\phi_1, \phi_2) = (-13.5^\circ, -0.5^\circ)$, would motivate further searches
for stream members along the trailing arm (positive $\phi_1$) to symmetrically
match the extent of the leading arm.
The stream length is {astra}`directly proportional to the information it provides on the underlying gravitational potential <prior_insights.bh18_stream_length_drives_information>`, making {astra}`GD-1 a top modeling priority <prior_insights.bh18_gd1_among_most_informative_streams>` to map the inner 30 kpc of the Galaxy, even at the length of
$\sim$
{astra:value col=value where="quantity=stream.track_span_p01_p99_deg" sig=2}`outputs.results_summary`$^\circ$
inferred in this work ({astra}`findings.extended_complex_stream`).
Properly accounting for the progenitor would also allow for studying detailed
density structure within the tails, as advocated by {cite:t}`Kupper:2015`.

Next, GD-1 is {astra}`no longer a simple, one-dimensional structure <prior_insights.deboer2018_gd1_not_one_dimensional_width_variations_and_fanning>`.
Not only are the density variations (gaps) confirmed as highly significant,
but for the first time we have mapped tidal debris from a globular cluster
beyond the thin stellar track: stars from the GD-1 stream have been found up
to $\sim 1^\circ$ away from the main stream track.
One explanation for this separated debris could be from velocity substructure
within the cluster, but would likely require a fine-tuned orientation to
simultaneously explain the sharpness of the neighboring gaps.
These features are also likely too localized to be explained by chaotic
dispersal from either triaxialilty {cite:p}`Price-Whelan:2016` or the
time-dependent influence of the rotating bar {cite:p}`Pearson:2017`.

Encounters between a massive perturber and a thin stream are expected to open
gaps in the observed density, and can {astra}`expel debris into unusual locations and morphologies <prior_insights.yoon2011_encounters_expel_debris_off_stream>` (see especially their Figure 9).
The encounter origin would be especially exciting: since GD-1 resides in the
halo, the only objects massive enough to cross its path are the
long-sought-after dark-matter subhalos.

Confirming the origin of gaps and the off-track features in GD-1 will require
both detailed modeling of the stream formation in the presence of massive
perturbers and follow-up radial velocity measurements of candidate GD-1
members.
Radial velocities will help remove the remaining contamination, further
improving the contrast of the stream, and will enable measurements of
differential energy and angular momentum along the stream and off-track
features.
While constraints on subhalo interactions from individual gaps leave serious
degeneracies between, e.g., the time of the encounter and the mass of the
perturber, energy offsets are time-independent and are a promising avenue
towards placing stronger constraints on the nature of the stream and, if
confirmed, the particular perturber.

## Acknowledgements

It is a pleasure to thank Marla Geha, David W. Hogg, Kathryn V. Johnston;
Lauren Anderson, Vasily Belokurov, Andrew R. Casey, Benjamin D. Johnson, Sergey
Koposov, Mariangela Lisanti, Edward Schlafly, and David N. Spergel.

This work has made use of data from the European Space Agency (ESA) mission
*Gaia* (<https://www.cosmos.esa.int/gaia>), processed by the *Gaia* Data
Processing and Analysis Consortium (DPAC,
<https://www.cosmos.esa.int/web/gaia/dpac/consortium>). Funding for the DPAC
has been provided by national institutions, in particular the institutions
participating in the *Gaia* Multilateral Agreement. This research was started
at the NYC Gaia DR2 Workshop at the Center for Computational Astrophysics of
the Flatiron Institute in 2018 April.

AB acknowledges generous support from the Institute for Theory and Computation
at Harvard University.

*Software:* *Astropy* {cite:p}`astropy,astropy:2018`,
*dustmaps* (<https://github.com/gregreen/dustmaps>), *gala* {cite:p}`gala`,
*IPython* {cite:p}`ipython`, *matplotlib* {cite:p}`mpl`, *numpy* {cite:p}`numpy`,
*scipy* {cite:p}`scipy`; and, for this edition, *emcee*
{cite:p}`Foreman-Mackey:2013` and the Lightcone tooling.
