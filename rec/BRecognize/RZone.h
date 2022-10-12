#pragma once
#include "RGlobParams.h"
#include "RContour.h"

class RZone : public RContour
{
	friend class BTurnRec;
public:
    enum class RZType
    {
        OPENED,
        CLOSED,
        SEMIOPENED,
        UNDEF
    };
    enum class RZSide
    {
        LEFT,
        RIGHT,
        UNDEF
    };
    enum class RZPos
    {
        TOP,
        BOTTOM,
        END,
        UNDEF
    };
    enum class RZSubType
    {
        NOTCH_X,
        NOTCH_Z,
        ST1,
        ST2,
        THREAD,
        UNDERCUT_X,
        UNDERCUT_Z,
        UNDEF
    };
public:
    RZone();
    ~RZone();
    auto GetType() const noexcept { return type_; }
    auto GetSubType() const noexcept { return sub_type_; }
    auto GetSide() const noexcept { return side_; }
    auto GetPos() const noexcept { return pos_; }
    void SetType(RZType val) noexcept { type_ = val; }
    void SetSubType(RZSubType val) noexcept { sub_type_ = val; }
    void SetSide(RZSide val) noexcept { side_ = val; }
    void SetPos(RZPos val) noexcept { pos_ = val; }
    void SetAttrs(RZType type, RZSide side, RZPos pos) noexcept;
    void InitIndV();
    bool IsEmpty() const;
    void CreateSemiOpen(RZone& base_cont);
    void Make1Pass(RZone& base_cont, bool backward);
    void FlipXY();
    auto GetItByMultiInd(const RindMulti& ind) const;
    bool DivideGeom(const std::vector<NCadrGeom>::const_iterator& base_cont_it, const BPoint& int_point);
    bool DivideGeomMultiInd(const RindMulti& multi_ind, const BPoint& int_point);
    bool DivideGeomInd(int ind, const BPoint& int_point);
    void reverse() noexcept override;
    void DefineSubtype(double max_plunge_angle);
    void ProcClosed(double max_plunge_angle);
    bool IsSubtypeST1(double max_angle) const;
    bool IsSubtypeST2() const;
    bool IsUndercutX() const;
    bool IsUndercutZ() const;
    bool IsUndercut1dirX() const;
    bool IsUndercut1dirZ() const;
    bool IsNotchX() const;
    int HaveNotchX(int start_ind) const;
    bool IsNotchZ() const;
    void InitClosed(const RZone& parent);
    void Transform(const BMatr& matr) override;
    int WriteKTE(class TiXmlElement* e_parent, int parent_id, const RGlobParams& params) const;
    int Write1KTE(class TiXmlElement* e_parent, int parent_id, const RGlobParams& params) const;
    void WriteToStrStCRec(CString& text) const;
    double GetBaseY() const;
    double GetBaseX() const;
    double GetMinY() const;
    double GetRintMin() const;
    double GetMaxY() const;
    double GetMaxX() const;
    double GetMinX() const;
    double GetWidth() const;
    double GetH1(const RGlobParams& params) const;
    int CreateClosed(const RZone& base_cont, std::vector<bool> thread, double max_plunge_angle);
    bool IsSubTypeTerminal() const;
    static double Round(double val);
protected:
    void AlignNotchEnds(int& start_ind, int& end_ind);

protected:
    std::vector<RindMulti> ind_v_;// мульти индексы вершин исходного контура
    std::vector<RZone> children_;// дочерние зоны
    RZType type_;
    RZSubType sub_type_;
    RZSide side_;
    RZPos pos_;

};

